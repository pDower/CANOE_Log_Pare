 /**
 * CANOE日志解析器
 * 作者: luotongde
 * 时间: 2025-05-14
 */

class CANOELogParser {
    constructor() {
        this.logData = [];
        this.filteredData = [];
        this.fileInfo = {};
    }

    /**
     * 解析ASC日志文件
     * @param {string} content - 文件内容
     * @returns {Array} 解析后的日志数据
     */
    parseASCFile(content) {
        const lines = content.split('\n');
        const parsedData = [];
        let lineNumber = 0;

        // 解析文件头信息
        this.parseFileHeader(lines);

        for (let line of lines) {
            lineNumber++;
            line = line.trim();

            // 跳过注释行和空行
            if (line.startsWith('//') || line.startsWith('date') || 
                line.startsWith('base') || line.startsWith('internal') ||
                line.startsWith('version') || line.startsWith('Measurement') ||
                line.startsWith('Begin') || line.startsWith('End') ||
                line === '') {
                continue;
            }

            // 解析CAN/CANFD报文行
            const parsedLine = this.parseCANLine(line, lineNumber);
            if (parsedLine) {
                parsedData.push(parsedLine);
            }

            // 解析状态信息行
            const statusLine = this.parseStatusLine(line, lineNumber);
            if (statusLine) {
                parsedData.push(statusLine);
            }

            // 解析其他系统信息行
            const systemLine = this.parseSystemLine(line, lineNumber);
            if (systemLine) {
                parsedData.push(systemLine);
            }
        }

        this.logData = parsedData;
        this.filteredData = [...parsedData];
        return parsedData;
    }

    /**
     * 解析文件头信息
     * @param {Array} lines - 文件行数组
     */
    parseFileHeader(lines) {
        for (let line of lines) {
            if (line.startsWith('date')) {
                this.fileInfo.date = line.replace('date ', '');
            } else if (line.startsWith('base')) {
                this.fileInfo.base = line.replace('base ', '');
            } else if (line.startsWith('// version')) {
                this.fileInfo.version = line.replace('// version ', '');
            } else if (line.startsWith('// Measurement UUID:')) {
                this.fileInfo.uuid = line.replace('// Measurement UUID: ', '');
            }
        }
    }

    /**
     * 解析CAN/CANFD报文行
     * @param {string} line - 日志行
     * @param {number} lineNumber - 行号
     * @returns {Object|null} 解析结果
     */
    parseCANLine(line, lineNumber) {
        // CANFD格式: 时间戳 协议 通道 方向 报文ID FDF BRS ESI DLC 数据段 总线负载 错误计数 时间同步 CRC校验 其他信息
        // 使用更精确的解析方法，处理多个空格间隔的情况
        const canfdParts = line.trim().split(/\s+/);
        
        if (canfdParts.length >= 15 && (canfdParts[1] === 'CANFD' || canfdParts[1] === 'CAN')) {
            // 检查是否为CANFD格式
            const timestamp = parseFloat(canfdParts[0]);
            const protocol = canfdParts[1];
            const channel = parseInt(canfdParts[2]);
            const direction = canfdParts[3];
            const messageId = canfdParts[4];
            
            if (protocol === 'CANFD') {
                // CANFD格式解析 - 确保FDF、BRS、ESI、DLC字段正确解析
                const fdf = parseInt(canfdParts[5], 16);
                const brs = parseInt(canfdParts[6], 16);
                const esi = parseInt(canfdParts[7], 16);
                const dlc = parseInt(canfdParts[8], 16);
                
                // CANFD DLC到数据长度的映射
                const getDataLengthFromDLC = (dlc) => {
                    if (dlc <= 8) return dlc;
                    if (dlc <= 12) return 12;
                    if (dlc <= 16) return 16;
                    if (dlc <= 20) return 20;
                    if (dlc <= 24) return 24;
                    if (dlc <= 32) return 32;
                    if (dlc <= 48) return 48;
                    if (dlc <= 64) return 64;
                    return 64; // 最大64字节
                };
                
                const dataLength = getDataLengthFromDLC(dlc);
                
                // 数据段从第9个位置开始，长度由实际数据长度决定
                const dataStartIndex = 9;
                const dataEndIndex = dataStartIndex + dataLength - 1;
                
                let dataPayload = '';
                let busLoad, errorCounter, timing, crc;
                let additionalInfo = '';
                
                // 确保不超出数组边界
                if (dataEndIndex < canfdParts.length) {
                    dataPayload = canfdParts.slice(dataStartIndex, dataEndIndex + 1).join(' ');
                    
                    // 剩余部分按顺序解析（从数据段之后开始）
                    const remainingParts = canfdParts.slice(dataEndIndex + 1);
                    if (remainingParts.length >= 4) {
                        busLoad = parseInt(remainingParts[0]);
                        errorCounter = parseInt(remainingParts[1]);
                        timing = parseInt(remainingParts[2]);
                        crc = remainingParts[3];
                        additionalInfo = remainingParts.slice(4).join(' ');
                    }
                } else {
                    // 如果数据段超出数组边界，取到数组末尾
                    dataPayload = canfdParts.slice(dataStartIndex).join(' ');
                }
                
                // 将十六进制数据转换为ASCII
                const hexToAscii = (hexString) => {
                    try {
                        const hexArray = hexString.split(' ').filter(h => h.length === 2);
                        return hexArray.map(hex => {
                            const charCode = parseInt(hex, 16);
                            // 只转换可打印的ASCII字符
                            return (charCode >= 32 && charCode <= 126) ? String.fromCharCode(charCode) : '.';
                        }).join('');
                    } catch (e) {
                        return '';
                    }
                };

                const asciiData = hexToAscii(dataPayload.trim());

                return {
                    type: 'can_message',
                    lineNumber: lineNumber,
                    timestamp: timestamp,
                    protocol: protocol,
                    channel: channel,
                    direction: direction,
                    messageId: messageId,
                    fdf: fdf,
                    brs: brs,
                    esi: esi,
                    dlc: dlc,
                    dataPayload: dataPayload.trim(),
                    asciiData: asciiData,
                    busLoad: busLoad,
                    errorCounter: errorCounter,
                    timing: timing,
                    crc: crc,
                    additionalInfo: additionalInfo,
                    isErrorFrame: line.includes('ErrorFrame'),
                    rawLine: line
                };
            } else if (protocol === 'CAN') {
                // CAN格式解析
                const dlc = parseInt(canfdParts[5], 16);
                
                // 经典CAN的DLC直接对应数据长度（最大8字节）
                const dataLength = Math.min(dlc, 8);
                
                // 数据段从第6个位置开始，长度由DLC决定
                const dataStartIndex = 6;
                const dataEndIndex = dataStartIndex + dataLength - 1;
                
                // 确保不超出数组边界
                let dataPayload = '';
                let additionalInfo = '';
                
                if (dataEndIndex < canfdParts.length) {
                    dataPayload = canfdParts.slice(dataStartIndex, dataEndIndex + 1).join(' ');
                    additionalInfo = canfdParts.slice(dataEndIndex + 1).join(' ');
                } else {
                    // 如果数据段超出数组边界，取到数组末尾
                    dataPayload = canfdParts.slice(dataStartIndex).join(' ');
                }

                // 将十六进制数据转换为ASCII
                const hexToAscii = (hexString) => {
                    try {
                        const hexArray = hexString.split(' ').filter(h => h.length === 2);
                        return hexArray.map(hex => {
                            const charCode = parseInt(hex, 16);
                            // 只转换可打印的ASCII字符
                            return (charCode >= 32 && charCode <= 126) ? String.fromCharCode(charCode) : '.';
                        }).join('');
                    } catch (e) {
                        return '';
                    }
                };

                const asciiData = hexToAscii(dataPayload.trim());
                
                return {
                    type: 'can_message',
                    lineNumber: lineNumber,
                    timestamp: timestamp,
                    protocol: protocol,
                    channel: channel,
                    direction: direction,
                    messageId: messageId,
                    fdf: 0, // 经典CAN没有FDF位
                    brs: 0, // 经典CAN没有BRS位
                    esi: 0, // 经典CAN没有ESI位
                    dlc: dlc,
                    dataPayload: dataPayload.trim(),
                    asciiData: asciiData,
                    busLoad: 0,
                    errorCounter: 0,
                    timing: 0,
                    crc: '',
                    additionalInfo: additionalInfo,
                    isErrorFrame: line.includes('ErrorFrame'),
                    rawLine: line
                };
            }
        }

        return null;
    }

    /**
     * 解析状态信息行
     * @param {string} line - 日志行
     * @param {number} lineNumber - 行号
     * @returns {Object|null} 解析结果
     */
    parseStatusLine(line, lineNumber) {
        // 状态格式: 时间戳 CAN 通道 Status:chip status 状态 - TxErr: 发送错误 RxErr: 接收错误
        const statusRegex = /^(\d+\.\d+)\s+(CAN)\s+(\d+)\s+Status:chip status (.+?)\s+-\s+TxErr:\s+(\d+)\s+RxErr:\s+(\d+)$/;
        
        const match = line.match(statusRegex);
        if (match) {
            return {
                type: 'status',
                lineNumber: lineNumber,
                timestamp: parseFloat(match[1]),
                protocol: match[2],
                channel: parseInt(match[3]),
                status: match[4],
                txErrors: parseInt(match[5]),
                rxErrors: parseInt(match[6]),
                rawLine: line
            };
        }

        return null;
    }

    /**
     * 解析系统信息行
     * @param {string} line - 日志行
     * @param {number} lineNumber - 行号
     * @returns {Object|null} 解析结果
     */
    parseSystemLine(line, lineNumber) {
        // 系统变量格式: 时间戳 SV: 通道 0 1 ::路径::变量名 = 值
        const svRegex = /^(\d+\.\d+)\s+SV:\s+(\d+)\s+(\d+)\s+(\d+)\s+::(.+)::(.+)\s+=\s+(.+)$/;
        
        // 测试框架格式: 时间戳 TFS: [ID,ID] 消息
        const tfsRegex = /^(\d+\.\d+)\s+TFS:\s+\[([\d,]+)\]\s+(.+)$/;
        
        // 触发事件格式: 时间戳 TriggerEvent: 事件描述
        const triggerRegex = /^(\d+\.\d+)\s+TriggerEvent:\s+(.+)$/;

        let match = line.match(svRegex);
        if (match) {
            return {
                type: 'system_variable',
                lineNumber: lineNumber,
                timestamp: parseFloat(match[1]),
                channel: parseInt(match[2]),
                variablePath: match[5],
                variableName: match[6],
                value: match[7],
                rawLine: line
            };
        }

        match = line.match(tfsRegex);
        if (match) {
            return {
                type: 'test_framework',
                lineNumber: lineNumber,
                timestamp: parseFloat(match[1]),
                ids: match[2].split(',').map(id => parseInt(id)),
                message: match[3],
                rawLine: line
            };
        }

        match = line.match(triggerRegex);
        if (match) {
            return {
                type: 'trigger_event',
                lineNumber: lineNumber,
                timestamp: parseFloat(match[1]),
                event: match[2],
                rawLine: line
            };
        }

        return null;
    }

    /**
     * 应用过滤条件
     * @param {Object} filters - 过滤条件
     * @returns {Array} 过滤后的数据
     */
    applyFilters(filters) {
        this.filteredData = this.logData.filter(item => {
            // 只对CAN报文应用过滤
            if (item.type !== 'can_message') {
                return true;
            }

            // 协议类型过滤
            if (filters.protocol && item.protocol !== filters.protocol) {
                return false;
            }

            // 通道号过滤
            if (filters.channel && item.channel !== parseInt(filters.channel)) {
                return false;
            }

            // 传输方向过滤
            if (filters.direction && item.direction !== filters.direction) {
                return false;
            }

            // 报文ID过滤
            if (filters.messageId) {
                const ids = filters.messageId.split(',').map(id => id.trim().toLowerCase());
                if (!ids.includes(item.messageId.toLowerCase())) {
                    return false;
                }
            }

            // 时间范围过滤
            if (filters.timeStart && item.timestamp < parseFloat(filters.timeStart)) {
                return false;
            }
            if (filters.timeEnd && item.timestamp > parseFloat(filters.timeEnd)) {
                return false;
            }

            // 数据内容过滤
            if (filters.data && !item.dataPayload.toLowerCase().includes(filters.data.toLowerCase())) {
                return false;
            }

            // 错误类型过滤
            if (filters.errorType) {
                if (filters.errorType === 'error' && !item.isErrorFrame) {
                    return false;
                }
                if (filters.errorType === 'normal' && item.isErrorFrame) {
                    return false;
                }
            }

            return true;
        });

        return this.filteredData;
    }

    /**
     * 获取统计信息
     * @returns {Object} 统计信息
     */
    getStatistics() {
        const canMessages = this.logData.filter(item => item.type === 'can_message');
        const statusMessages = this.logData.filter(item => item.type === 'status');
        const systemMessages = this.logData.filter(item => item.type !== 'can_message' && item.type !== 'status');

        const protocols = {};
        const channels = {};
        const directions = {};
        const messageIds = {};
        const errorFrames = 0;

        canMessages.forEach(msg => {
            // 协议统计
            protocols[msg.protocol] = (protocols[msg.protocol] || 0) + 1;
            
            // 通道统计
            channels[msg.channel] = (channels[msg.channel] || 0) + 1;
            
            // 方向统计
            directions[msg.direction] = (directions[msg.direction] || 0) + 1;
            
            // 报文ID统计
            messageIds[msg.messageId] = (messageIds[msg.messageId] || 0) + 1;
        });

        return {
            totalLines: this.logData.length,
            canMessages: canMessages.length,
            statusMessages: statusMessages.length,
            systemMessages: systemMessages.length,
            protocols: protocols,
            channels: channels,
            directions: directions,
            messageIds: messageIds,
            errorFrames: canMessages.filter(msg => msg.isErrorFrame).length,
            timeRange: {
                start: Math.min(...canMessages.map(msg => msg.timestamp)),
                end: Math.max(...canMessages.map(msg => msg.timestamp))
            }
        };
    }

    /**
     * 导出为CSV格式
     * @param {Array} data - 要导出的数据
     * @returns {string} CSV内容
     */
    exportToCSV(data = this.filteredData) {
        const headers = [
            '时间戳', '协议类型', '通道号', '传输方向', '报文ID', 
            'FDF', 'BRS', 'ESI', 'DLC', '数据段', '总线负载', 
            '错误计数', '时间同步', 'CRC校验', '其他信息'
        ];

        const csvContent = [
            headers.join(','),
            ...data.filter(item => item.type === 'can_message').map(item => [
                item.timestamp,
                item.protocol,
                item.channel,
                item.direction,
                item.messageId,
                item.fdf,
                item.brs,
                item.esi,
                item.dlc,
                `"${item.dataPayload}"`,
                item.busLoad,
                item.errorCounter,
                item.timing,
                item.crc,
                `"${item.additionalInfo}"`
            ].join(','))
        ].join('\n');

        return csvContent;
    }

    /**
     * 导出为JSON格式
     * @param {Array} data - 要导出的数据
     * @returns {string} JSON内容
     */
    exportToJSON(data = this.filteredData) {
        return JSON.stringify({
            fileInfo: this.fileInfo,
            statistics: this.getStatistics(),
            data: data,
            exportTime: new Date().toISOString(),
            author: 'luotongde',
            timestamp: '2025-05-14'
        }, null, 2);
    }

    /**
     * 获取解析后的数据
     * @returns {Array} 解析后的日志数据
     */
    getParsedData() {
        return this.logData;
    }

    /**
     * 获取过滤后的数据
     * @returns {Array} 过滤后的日志数据
     */
    getFilteredData() {
        return this.filteredData;
    }

    /**
     * 清除所有数据
     */
    clear() {
        this.logData = [];
        this.filteredData = [];
        this.fileInfo = {};
    }
}

// 创建全局解析器实例
window.canoeParser = new CANOELogParser();