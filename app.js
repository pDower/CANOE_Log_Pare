/**
 * CANOE日志解析工具增强版应用程序
 * 作者: luotongde
 * 时间: 2025-05-14
 */

/**
 * 多语言支持
 */
const translations = {
    'zh-CN': {
        // 标题和描述
        'title': 'CANOE日志解析工具 - 增强版',
        'subtitle': '专业的CANOE ASC日志解析工具，提供强大的过滤、分析和导出功能',
        'author': '作者: luotongde | 时间: 2025-05-14',
        'version': '版本: v1.0 增强版',
        
        // 模块标题
        'operation_module': '操作模块',
        'file_module': '文件模块',
        'export_module': '导出模块',
        'log_data': '日志数据',
        
        // 按钮文本
        'toggle_time_mode': '切换时间模式',
        'fold_data': '折叠数据',
        'refresh_data': '刷新数据',
        'select_file': '选择文件',
        'clear_file': '清除文件',
        'export_csv': '导出CSV',
        'export_json': '导出JSON',
        'export_filtered': '导出过滤',
        'export_statistics': '导出统计',
        'show_statistics': '显示统计图表',
        
        // 过滤条件
        'filter_conditions': '过滤条件',
        'protocol_type': '协议类型',
        'channel_number': '通道号',
        'transmission_direction': '传输方向',
        'message_id': '报文ID',
        'start_time': '开始时间',
        'end_time': '结束时间',
        'data_content': '数据内容',
        'error_type': '错误类型',
        'system_message_type': '系统消息类型',
        'all': '全部',
        'send': '发送(Tx)',
        'receive': '接收(Rx)',
        'error_frame': '错误帧',
        'normal_frame': '正常帧',
        'vt_error': 'VT信息错误',
        'crc_error': 'CRC校验错误',
        'timeout_error': '超时错误',
        'bus_error': '总线错误',
        'status_info': '状态信息',
        'error_info': '错误信息',
        'warning_info': '警告信息',
        'general_info': '一般信息',
        
        // 统计信息
        'total_messages': '总报文',
        'can': 'CAN',
        'canfd': 'CANFD',
        'error_frames': '错误帧',
        'total_records': '总记录数',
        'displayed_records': '显示记录数',
        
        // 通知消息
        'trace_fold_enabled': '已启用CANOE Trace折叠 - 只显示每个CAN ID的最新数据',
        'trace_fold_disabled': '已展开所有报文',
        'file_parsed_success': '文件解析成功！',
        'file_parse_failed': '文件解析失败: ',
        'current_file': '当前文件: ',
        
        // 表格列标题
        'sequence': '序号',
        'timestamp': '时间戳',
        'protocol_type': '协议类型',
        'channel': '通道号',
        'direction': '传输方向',
        'message_id': '报文ID',
        'fdf': 'FDF',
        'brs': 'BRS',
        'esi': 'ESI',
        'dlc': 'DLC',
        'data_segment': '数据段',
        'ascii_data': 'ASCII数据',
        'bus_load': '总线负载',
        'error_count': '错误计数',
        'timing': '时间同步',
        'crc': 'CRC校验',
        'other_info': '其他信息',
        
        // 过滤条件标签
        'filter_conditions': '过滤条件',
        'add_filter': '添加过滤条件',
        'clear_all_filters': '清除所有过滤条件',
        'multiple_filters': '多条件过滤',
        'filter_preset': '过滤预设',
        'apply_preset': '应用预设',
        'clear_filters': '清除过滤',
        'start_time': '开始时间',
        'end_time': '结束时间',
        'data_content': '数据内容',
        'error_type': '错误类型',
        'system_message_type': '系统消息类型',
        'all': '全部',
        'send': '发送(Tx)',
        'receive': '接收(Rx)',
        'error_frame': '错误帧',
        'normal_frame': '正常帧',
        'vt_error': 'VT信息错误',
        'crc_error': 'CRC校验错误',
        'timeout_error': '超时错误',
        'bus_error': '总线错误',
        'status_info': '状态信息',
        'error_info': '错误信息',
        'warning_info': '警告信息',
        'general_info': '一般信息'
    },
    'zh-TW': {
        'title': 'CANOE日誌解析工具 - 增強版',
        'subtitle': '專業的CANOE ASC日誌解析工具，提供強大的過濾、分析和匯出功能',
        'author': '作者: luotongde | 時間: 2025-05-14',
        'version': '版本: v1.0 增強版',
        
        'operation_module': '操作模組',
        'file_module': '檔案模組',
        'export_module': '匯出模組',
        'log_data': '日誌資料',
        
        'toggle_time_mode': '切換時間模式',
        'fold_data': '摺疊資料',
        'refresh_data': '重新整理資料',
        'select_file': '選擇檔案',
        'clear_file': '清除檔案',
        'export_csv': '匯出CSV',
        'export_json': '匯出JSON',
        'export_filtered': '匯出過濾',
        'export_statistics': '匯出統計',
        'show_statistics': '顯示統計圖表',
        
        'filter_conditions': '過濾條件',
        'protocol_type': '協定類型',
        'channel_number': '通道號',
        'transmission_direction': '傳輸方向',
        'message_id': '訊息ID',
        'start_time': '開始時間',
        'end_time': '結束時間',
        'data_content': '資料內容',
        'error_type': '錯誤類型',
        'system_message_type': '系統訊息類型',
        'all': '全部',
        'send': '發送(Tx)',
        'receive': '接收(Rx)',
        'error_frame': '錯誤幀',
        'normal_frame': '正常幀',
        'vt_error': 'VT資訊錯誤',
        'crc_error': 'CRC校驗錯誤',
        'timeout_error': '逾時錯誤',
        'bus_error': '匯流排錯誤',
        'status_info': '狀態資訊',
        'error_info': '錯誤資訊',
        'warning_info': '警告資訊',
        'general_info': '一般資訊',
        
        'total_messages': '總訊息',
        'can': 'CAN',
        'canfd': 'CANFD',
        'error_frames': '錯誤幀',
        'total_records': '總記錄數',
        'displayed_records': '顯示記錄數',
        
        // 通知消息
        'trace_fold_enabled': '已啟用CANOE Trace摺疊 - 只顯示每個CAN ID的最新資料',
        'trace_fold_disabled': '已展開所有訊息',
        'file_parsed_success': '檔案解析成功！',
        'file_parse_failed': '檔案解析失敗: ',
        'current_file': '當前檔案: ',
        
        'sequence': '序號',
        'timestamp': '時間戳',
        'protocol_type': '協定類型',
        'channel': '通道號',
        'direction': '傳輸方向',
        'message_id': '訊息ID',
        'fdf': 'FDF',
        'brs': 'BRS',
        'esi': 'ESI',
        'dlc': 'DLC',
        'data_segment': '資料段',
        'ascii_data': 'ASCII資料',
        'bus_load': '匯流排負載',
        'error_count': '錯誤計數',
        'timing': '時間同步',
        'crc': 'CRC校驗',
        'other_info': '其他資訊',
        
        // 過濾條件標籤
        'add_filter': '新增過濾條件',
        'clear_all_filters': '清除所有過濾條件',
        'multiple_filters': '多條件過濾',
        'filter_preset': '過濾預設',
        'apply_preset': '套用預設',
        'clear_filters': '清除過濾'
    },
    'en': {
        'title': 'CANOE Log Parser - Enhanced Version',
        'subtitle': 'Professional CANOE ASC log parsing tool with powerful filtering, analysis and export capabilities',
        'author': 'Author: luotongde | Date: 2025-05-14',
        'version': 'Version: v1.0 Enhanced',
        
        'operation_module': 'Operation Module',
        'file_module': 'File Module',
        'export_module': 'Export Module',
        'log_data': 'Log Data',
        
        'toggle_time_mode': 'Toggle Time Mode',
        'fold_data': 'Fold Data',
        'refresh_data': 'Refresh Data',
        'select_file': 'Select File',
        'clear_file': 'Clear File',
        'export_csv': 'Export CSV',
        'export_json': 'Export JSON',
        'export_filtered': 'Export Filtered',
        'export_statistics': 'Export Statistics',
        'show_statistics': 'Show Statistics',
        
        'filter_conditions': 'Filter Conditions',
        'protocol_type': 'Protocol Type',
        'channel_number': 'Channel Number',
        'transmission_direction': 'Transmission Direction',
        'message_id': 'Message ID',
        'start_time': 'Start Time',
        'end_time': 'End Time',
        'data_content': 'Data Content',
        'error_type': 'Error Type',
        'system_message_type': 'System Message Type',
        'all': 'All',
        'send': 'Send(Tx)',
        'receive': 'Receive(Rx)',
        'error_frame': 'Error Frame',
        'normal_frame': 'Normal Frame',
        'vt_error': 'VT Info Error',
        'crc_error': 'CRC Check Error',
        'timeout_error': 'Timeout Error',
        'bus_error': 'Bus Error',
        'status_info': 'Status Info',
        'error_info': 'Error Info',
        'warning_info': 'Warning Info',
        'general_info': 'General Info',
        
        'total_messages': 'Total Messages',
        'can': 'CAN',
        'canfd': 'CANFD',
        'error_frames': 'Error Frames',
        'total_records': 'Total Records',
        'displayed_records': 'Displayed Records',
        
        // 通知消息
        'trace_fold_enabled': 'CANOE Trace folding enabled - showing only latest data for each CAN ID',
        'trace_fold_disabled': 'All messages expanded',
        'file_parsed_success': 'File parsed successfully!',
        'file_parse_failed': 'File parsing failed: ',
        'current_file': 'Current file: ',
        
        'sequence': 'Sequence',
        'timestamp': 'Timestamp',
        'protocol_type': 'Protocol Type',
        'channel': 'Channel',
        'direction': 'Direction',
        'message_id': 'Message ID',
        'fdf': 'FDF',
        'brs': 'BRS',
        'esi': 'ESI',
        'dlc': 'DLC',
        'data_segment': 'Data Segment',
        'ascii_data': 'ASCII Data',
        'bus_load': 'Bus Load',
        'error_count': 'Error Count',
        'timing': 'Timing',
        'crc': 'CRC Check',
        'other_info': 'Other Info',
        
        // Filter condition labels
        'add_filter': 'Add Filter Condition',
        'clear_all_filters': 'Clear All Filters',
        'multiple_filters': 'Multiple Filters',
        'filter_preset': 'Filter Preset',
        'apply_preset': 'Apply Preset',
        'clear_filters': 'Clear Filters'
    },
    'de': {
        'title': 'CANOE Log Parser - Erweiterte Version',
        'subtitle': 'Professionelles CANOE ASC Log-Parsing-Tool mit leistungsstarken Filter-, Analyse- und Exportfunktionen',
        'author': 'Autor: luotongde | Datum: 2025-05-14',
        'version': 'Version: v1.0 Erweitert',
        
        'operation_module': 'Betriebsmodul',
        'file_module': 'Dateimodul',
        'export_module': 'Exportmodul',
        'log_data': 'Protokoll-Daten',
        
        'toggle_time_mode': 'Zeitmodus umschalten',
        'fold_data': 'Daten falten',
        'refresh_data': 'Daten aktualisieren',
        'select_file': 'Datei auswählen',
        'clear_file': 'Datei löschen',
        'export_csv': 'CSV exportieren',
        'export_json': 'JSON exportieren',
        'export_filtered': 'Gefiltert exportieren',
        'export_statistics': 'Statistiken exportieren',
        'show_statistics': 'Statistiken anzeigen',
        
        'filter_conditions': 'Filterbedingungen',
        'protocol_type': 'Protokolltyp',
        'channel_number': 'Kanalnummer',
        'transmission_direction': 'Übertragungsrichtung',
        'message_id': 'Nachrichten-ID',
        'start_time': 'Startzeit',
        'end_time': 'Endzeit',
        'data_content': 'Dateninhalt',
        'error_type': 'Fehlertyp',
        'system_message_type': 'Systemnachrichtentyp',
        'all': 'Alle',
        'send': 'Senden(Tx)',
        'receive': 'Empfangen(Rx)',
        'error_frame': 'Fehlerrahmen',
        'normal_frame': 'Normaler Rahmen',
        'vt_error': 'VT-Info-Fehler',
        'crc_error': 'CRC-Prüfungsfehler',
        'timeout_error': 'Timeout-Fehler',
        'bus_error': 'Bus-Fehler',
        'status_info': 'Status-Info',
        'error_info': 'Fehler-Info',
        'warning_info': 'Warnungs-Info',
        'general_info': 'Allgemeine Info',
        
        'total_messages': 'Gesamtnachrichten',
        'can': 'CAN',
        'canfd': 'CANFD',
        'error_frames': 'Fehlerrahmen',
        'total_records': 'Gesamtaufzeichnungen',
        'displayed_records': 'Angezeigte Aufzeichnungen',
        
        // 通知消息
        'trace_fold_enabled': 'CANOE Trace-Faltung aktiviert - zeigt nur die neuesten Daten für jede CAN-ID',
        'trace_fold_disabled': 'Alle Nachrichten erweitert',
        'file_parsed_success': 'Datei erfolgreich geparst!',
        'file_parse_failed': 'Datei-Parsing fehlgeschlagen: ',
        'current_file': 'Aktuelle Datei: ',
        
        'sequence': 'Sequenz',
        'timestamp': 'Zeitstempel',
        'protocol_type': 'Protokolltyp',
        'channel': 'Kanal',
        'direction': 'Richtung',
        'message_id': 'Nachrichten-ID',
        'fdf': 'FDF',
        'brs': 'BRS',
        'esi': 'ESI',
        'dlc': 'DLC',
        'data_segment': 'Datensegment',
        'ascii_data': 'ASCII-Daten',
        'bus_load': 'Bus-Last',
        'error_count': 'Fehleranzahl',
        'timing': 'Timing',
        'crc': 'CRC-Prüfung',
        'other_info': 'Andere Info',
        
        // Filterbedingung-Labels
        'add_filter': 'Filterbedingung hinzufügen',
        'clear_all_filters': 'Alle Filter löschen',
        'multiple_filters': 'Mehrfachfilter',
        'filter_preset': 'Filter-Voreinstellung',
        'apply_preset': 'Voreinstellung anwenden',
        'clear_filters': 'Filter löschen'
    }
};

let currentLanguage = 'zh-CN';

/**
 * CANOE日志解析基础类
 */
class CANOELogApp {
    constructor() {
        this.parser = null;
        this.logData = [];
        this.filteredData = [];
        this.currentFilters = {};
        this.init();
    }

    /**
     * 初始化应用程序
     */
    init() {
        this.parser = new CANOELogParser();
        this.setupEventListeners();
        this.updateDisplay();
    }

    /**
     * 设置事件监听器
     */
    setupEventListeners() {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.addEventListener('change', (event) => {
                this.handleFileUpload(event);
            });
        }

        // 设置过滤器事件监听器
        const filters = ['messageIdFilter', 'protocolFilter', 'channelFilter', 'directionFilter'];
        filters.forEach(filterId => {
            const element = document.getElementById(filterId);
            if (element) {
                element.addEventListener('input', () => {
                    this.applyFilters();
                });
            }
        });

        // 设置错误类型过滤器
        const errorFilters = ['vtErrorFilter', 'crcErrorFilter', 'timeoutErrorFilter', 'busErrorFilter'];
        errorFilters.forEach(filterId => {
            const element = document.getElementById(filterId);
            if (element) {
                element.addEventListener('change', () => {
                    this.applyFilters();
                });
            }
        });
    }

    /**
     * 处理文件上传
     */
    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        // 更新文件名显示
        this.updateSelectedFileName(file.name);

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const content = e.target.result;
                this.parser.parseASCFile(content);
                this.logData = this.parser.getParsedData();
                this.filteredData = [...this.logData];
                this.originalFilteredData = [...this.logData]; // 初始化原始过滤数据
                this.isTraceFolded = false; // 重置折叠状态
                this.displayData(this.filteredData);
                this.updateStatistics();
                this.updateTraceFoldingUI();
                const lang = translations[currentLanguage];
                this.showNotification(lang.file_parsed_success, 'success');
            } catch (error) {
                console.error('解析错误:', error);
                const lang = translations[currentLanguage];
                this.showNotification(lang.file_parse_failed + error.message, 'error');
            }
        };
        reader.readAsText(file);
    }

    /**
     * 更新选中的文件名显示
     */
    updateSelectedFileName(fileName) {
        const fileNameElement = document.getElementById('selectedFileName');
        if (fileNameElement) {
            const lang = translations[currentLanguage];
        fileNameElement.innerHTML = `<i class="fas fa-file-alt"></i> ${lang.current_file}${fileName}`;
        }
    }

    /**
     * 显示数据
     */
    displayData(data) {
        const tbody = document.getElementById('logTableBody');
        if (!tbody) return;

        tbody.innerHTML = '';

        if (data.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="16" class="no-data">
                        <i class="fas fa-search" style="font-size: 3em; color: #ccc; margin-bottom: 10px;"></i>
                        <br>没有找到匹配的数据
                    </td>
                </tr>
            `;
            return;
        }

        // 直接显示数据，不再分组
        data.forEach(item => {
            const row = this.createTableRow(item);
            tbody.appendChild(row);
        });

        this.updateCounters();
    }



    /**
     * 创建表格行
     */
    createTableRow(item, subIndex = null, rowClass = '') {
        const row = document.createElement('tr');
        if (rowClass) row.className = rowClass;

        const cells = [
            subIndex !== null ? `${item.index}-${subIndex}` : item.index,
            item.timestamp ? item.timestamp.toFixed(3) : '',
            item.protocol || '',
            item.channel || '',
            item.direction || '',
            item.messageId || '',
            item.fdf !== undefined && item.fdf !== null ? item.fdf : '',
            item.brs !== undefined && item.brs !== null ? item.brs : '',
            item.esi !== undefined && item.esi !== null ? item.esi : '',
            item.dlc || '',
            item.data || '',
            item.busLoad || '',
            item.errorCount || '',
            item.timeSync || '',
            item.crc || '',
            item.otherInfo || ''
        ];

        cells.forEach(cellContent => {
            const cell = document.createElement('td');
            cell.textContent = cellContent;
            
            // 为错误类型添加特殊样式
            if (this.isErrorType(item)) {
                cell.classList.add('error-cell');
            }
            
            row.appendChild(cell);
        });

        return row;
    }

    /**
     * 格式化系统消息
     */
    formatSystemMessage(item) {
        if (item.type === 'system') {
            return `<span class="system-message ${item.level || 'info'}">${item.message}</span>`;
        }
        return item.message || '';
    }

    /**
     * 更新统计信息
     */
    updateStatistics() {
        if (this.logData.length === 0) return;

        const stats = {
            total: this.logData.length,
            filtered: this.filteredData.length,
            protocols: {},
            channels: {},
            directions: {},
            messageIds: {},
            errorTypes: {
                vt: 0,
                crc: 0,
                timeout: 0,
                bus: 0
            }
        };

        this.filteredData.forEach(item => {
            // 统计协议类型
            const protocol = item.protocol || 'Unknown';
            stats.protocols[protocol] = (stats.protocols[protocol] || 0) + 1;

            // 统计通道
            const channel = item.channel || 'Unknown';
            stats.channels[channel] = (stats.channels[channel] || 0) + 1;

            // 统计传输方向
            const direction = item.direction || 'Unknown';
            stats.directions[direction] = (stats.directions[direction] || 0) + 1;

            // 统计报文ID
            const messageId = item.messageId || 'Unknown';
            stats.messageIds[messageId] = (stats.messageIds[messageId] || 0) + 1;

            // 统计错误类型
            if (this.isVTError(item)) stats.errorTypes.vt++;
            if (this.isCRCError(item)) stats.errorTypes.crc++;
            if (this.isTimeoutError(item)) stats.errorTypes.timeout++;
            if (this.isBusError(item)) stats.errorTypes.bus++;
        });

        this.updateStatisticsDisplay(stats);
    }

    /**
     * 切换组折叠状态
     */


    /**
     * 应用过滤器
     */
    applyFilters() {
        this.currentFilters = {};

        // 获取过滤器值
        const messageIdFilter = document.getElementById('messageIdFilter')?.value || '';
        const protocolFilter = document.getElementById('protocolFilter')?.value || '';
        const channelFilter = document.getElementById('channelFilter')?.value || '';
        const directionFilter = document.getElementById('directionFilter')?.value || '';
        const vtErrorFilter = document.getElementById('vtErrorFilter')?.checked || false;
        const crcErrorFilter = document.getElementById('crcErrorFilter')?.checked || false;
        const timeoutErrorFilter = document.getElementById('timeoutErrorFilter')?.checked || false;
        const busErrorFilter = document.getElementById('busErrorFilter')?.checked || false;

        this.currentFilters = {
            messageId: messageIdFilter,
            protocol: protocolFilter,
            channel: channelFilter,
            direction: directionFilter,
            vtError: vtErrorFilter,
            crcError: crcErrorFilter,
            timeoutError: timeoutErrorFilter,
            busError: busErrorFilter
        };

        // 应用过滤器
        this.filteredData = this.logData.filter(item => {
            // 报文ID过滤
            if (messageIdFilter && !item.messageId?.toLowerCase().includes(messageIdFilter.toLowerCase())) {
                return false;
            }

            // 协议类型过滤
            if (protocolFilter && item.protocol !== protocolFilter) {
                return false;
            }

            // 通道过滤
            if (channelFilter && item.channel !== channelFilter) {
                return false;
            }

            // 传输方向过滤
            if (directionFilter && item.direction !== directionFilter) {
                return false;
            }

            // 错误类型过滤
            if (vtErrorFilter && !this.isVTError(item)) {
                return false;
            }

            if (crcErrorFilter && !this.isCRCError(item)) {
                return false;
            }

            if (timeoutErrorFilter && !this.isTimeoutError(item)) {
                return false;
            }

            if (busErrorFilter && !this.isBusError(item)) {
                return false;
            }

            return true;
        });

        this.displayData(this.filteredData);
        this.updateStatistics();
    }

    /**
     * 检查是否为VT错误
     */
    isVTError(item) {
        return item.otherInfo?.toLowerCase().includes('vt') || 
               item.messageId?.toLowerCase().includes('vt') ||
               item.data?.toLowerCase().includes('vt');
    }

    /**
     * 检查是否为CRC错误
     */
    isCRCError(item) {
        return item.crc?.toLowerCase().includes('error') || 
               item.otherInfo?.toLowerCase().includes('crc') ||
               item.data?.toLowerCase().includes('crc');
    }

    /**
     * 检查是否为超时错误
     */
    isTimeoutError(item) {
        return item.otherInfo?.toLowerCase().includes('timeout') || 
               item.otherInfo?.toLowerCase().includes('超时') ||
               item.data?.toLowerCase().includes('timeout');
    }

    /**
     * 检查是否为总线错误
     */
    isBusError(item) {
        return item.otherInfo?.toLowerCase().includes('bus') || 
               item.otherInfo?.toLowerCase().includes('总线') ||
               item.data?.toLowerCase().includes('bus');
    }

    /**
     * 检查是否为状态消息
     */
    isStatusMessage(item) {
        return item.type === 'system' && item.level === 'status';
    }

    /**
     * 检查是否为错误消息
     */
    isErrorMessage(item) {
        return item.type === 'system' && item.level === 'error';
    }

    /**
     * 检查是否为警告消息
     */
    isWarningMessage(item) {
        return item.type === 'system' && item.level === 'warning';
    }

    /**
     * 检查是否为信息消息
     */
    isInfoMessage(item) {
        return item.type === 'system' && item.level === 'info';
    }

    /**
     * 检查是否为错误类型
     */
    isErrorType(item) {
        return this.isVTError(item) || this.isCRCError(item) || 
               this.isTimeoutError(item) || this.isBusError(item) ||
               this.isErrorMessage(item);
    }

    /**
     * 排序表格
     */
    sortTable(columnIndex) {
        if (this.filteredData.length === 0) return;

        const sortDirection = this.sortColumn === columnIndex && this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.sortColumn = columnIndex;
        this.sortDirection = sortDirection;

        this.filteredData.sort((a, b) => {
            const aValue = this.getColumnValue(a, columnIndex);
            const bValue = this.getColumnValue(b, columnIndex);

            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });

        this.displayData(this.filteredData);
        this.updateSortIndicators(columnIndex, sortDirection);
    }

    /**
     * 获取列值
     */
    getColumnValue(item, columnIndex) {
        const values = [
            item.index,
            item.timestamp,
            item.protocol,
            item.channel,
            item.direction,
            item.messageId,
            item.fdf,
            item.brs,
            item.esi,
            item.dlc,
            item.data,
            item.busLoad,
            item.errorCount,
            item.timeSync,
            item.crc,
            item.otherInfo
        ];

        const value = values[columnIndex];
        if (typeof value === 'number') return value;
        if (typeof value === 'string') return value.toLowerCase();
        return '';
    }

    /**
     * 更新排序指示器
     */
    updateSortIndicators(columnIndex, direction) {
        const headers = document.querySelectorAll('.log-table th');
        headers.forEach((header, index) => {
            const icon = header.querySelector('i');
            if (icon) {
                icon.className = index === columnIndex ? 
                    `fas fa-sort-${direction === 'asc' ? 'up' : 'down'}` : 
                    'fas fa-sort';
            }
        });
    }

    /**
     * 应用预设过滤器
     */
    applyPreset(presetName) {
        const presets = {
            'all': () => {
                this.clearFilters();
            },
            'errors': () => {
                this.clearFilters();
                document.getElementById('vtErrorFilter').checked = true;
                document.getElementById('crcErrorFilter').checked = true;
                document.getElementById('timeoutErrorFilter').checked = true;
                document.getElementById('busErrorFilter').checked = true;
                this.applyFilters();
            },
            'can': () => {
                this.clearFilters();
                document.getElementById('protocolFilter').value = 'CAN';
                this.applyFilters();
            },
            'canfd': () => {
                this.clearFilters();
                document.getElementById('protocolFilter').value = 'CANFD';
                this.applyFilters();
            }
        };

        if (presets[presetName]) {
            presets[presetName]();
            this.showNotification(`已应用预设: ${presetName}`, 'info');
        }
    }

    /**
     * 显示统计图表
     */
    showStatistics() {
        if (this.filteredData.length === 0) {
            this.showNotification('没有数据可显示统计信息', 'warning');
            return;
        }

        const stats = this.calculateStatistics();
        const modal = document.getElementById('statisticsModal');
        const container = document.getElementById('chartContainer');
        
        if (modal && container) {
            container.innerHTML = this.generateStatisticsHTML(stats);
            modal.style.display = 'block';
        }
    }

    /**
     * 计算统计信息
     */
    calculateStatistics() {
        const stats = {
            total: this.filteredData.length,
            protocols: {},
            channels: {},
            directions: {},
            messageIds: {},
            errorTypes: {
                vt: 0,
                crc: 0,
                timeout: 0,
                bus: 0
            },
            timeRange: {
                start: Infinity,
                end: -Infinity
            }
        };

        this.filteredData.forEach(item => {
            // 统计协议类型
            const protocol = item.protocol || 'Unknown';
            stats.protocols[protocol] = (stats.protocols[protocol] || 0) + 1;

            // 统计通道
            const channel = item.channel || 'Unknown';
            stats.channels[channel] = (stats.channels[channel] || 0) + 1;

            // 统计传输方向
            const direction = item.direction || 'Unknown';
            stats.directions[direction] = (stats.directions[direction] || 0) + 1;

            // 统计报文ID
            const messageId = item.messageId || 'Unknown';
            stats.messageIds[messageId] = (stats.messageIds[messageId] || 0) + 1;

            // 统计错误类型
            if (this.isVTError(item)) stats.errorTypes.vt++;
            if (this.isCRCError(item)) stats.errorTypes.crc++;
            if (this.isTimeoutError(item)) stats.errorTypes.timeout++;
            if (this.isBusError(item)) stats.errorTypes.bus++;

            // 统计时间范围
            if (item.timestamp) {
                stats.timeRange.start = Math.min(stats.timeRange.start, item.timestamp);
                stats.timeRange.end = Math.max(stats.timeRange.end, item.timestamp);
            }
        });

        return stats;
    }

    /**
     * 生成统计HTML
     */
    generateStatisticsHTML(stats) {
        return `
            <div class="statistics-grid">
                <div class="stat-card">
                    <h4><i class="fas fa-chart-bar"></i> 总体统计</h4>
                    <p>总记录数: ${stats.total}</p>
                    <p>时间范围: ${stats.timeRange.start.toFixed(3)}s - ${stats.timeRange.end.toFixed(3)}s</p>
                    <p>总时长: ${(stats.timeRange.end - stats.timeRange.start).toFixed(3)}s</p>
                </div>
                
                <div class="stat-card">
                    <h4><i class="fas fa-network-wired"></i> 协议分布</h4>
                    ${Object.entries(stats.protocols).map(([protocol, count]) => 
                        `<p>${protocol}: ${count} (${((count/stats.total)*100).toFixed(1)}%)</p>`
                    ).join('')}
                </div>
                
                <div class="stat-card">
                    <h4><i class="fas fa-exchange-alt"></i> 传输方向</h4>
                    ${Object.entries(stats.directions).map(([direction, count]) => 
                        `<p>${direction}: ${count} (${((count/stats.total)*100).toFixed(1)}%)</p>`
                    ).join('')}
                </div>
                
                <div class="stat-card">
                    <h4><i class="fas fa-exclamation-triangle"></i> 错误统计</h4>
                    <p>VT错误: ${stats.errorTypes.vt}</p>
                    <p>CRC错误: ${stats.errorTypes.crc}</p>
                    <p>超时错误: ${stats.errorTypes.timeout}</p>
                    <p>总线错误: ${stats.errorTypes.bus}</p>
                </div>
            </div>
        `;
    }

    /**
     * 关闭模态框
     */
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    /**
     * 显示通知
     */
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">&times;</button>
        `;

        document.body.appendChild(notification);

        // 自动移除通知
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    /**
     * 获取通知图标
     */
    getNotificationIcon(type) {
        const icons = {
            'success': 'check-circle',
            'error': 'exclamation-circle',
            'warning': 'exclamation-triangle',
            'info': 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    /**
     * 保存当前视图
     */
    saveCurrentView() {
        const view = {
            filters: this.currentFilters,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('canoeLogView', JSON.stringify(view));
        this.showNotification('当前视图已保存', 'success');
    }

    /**
     * 获取当前过滤器
     */
    getCurrentFilters() {
        return this.currentFilters;
    }

    /**
     * 导出数据
     */
    exportData() {
        if (this.filteredData.length === 0) {
            this.showNotification('没有数据可导出', 'warning');
            return;
        }

        const format = prompt('请选择导出格式 (csv/json):', 'csv');
        if (!format) return;

        if (format.toLowerCase() === 'csv') {
            this.exportToCSV();
        } else if (format.toLowerCase() === 'json') {
            this.exportToJSON();
        } else {
            this.showNotification('不支持的导出格式', 'error');
        }
    }

    /**
     * 刷新数据
     */
    refreshData() {
        this.applyFilters();
        this.showNotification('数据已刷新', 'info');
    }

    /**
     * 撤销上次操作
     */
    undoLastAction() {
        // 这里可以实现撤销功能
        this.showNotification('撤销功能待实现', 'info');
    }

    /**
     * 应用保存的视图
     */
    applySavedView(view) {
        if (view.filters) {
            this.currentFilters = view.filters;
            
            // 应用过滤器到UI
            Object.entries(view.filters).forEach(([key, value]) => {
                const element = document.getElementById(key + 'Filter');
                if (element) {
                    if (element.type === 'checkbox') {
                        element.checked = value;
                    } else {
                        element.value = value;
                    }
                }
            });

            this.applyFilters();
            this.showNotification('已应用保存的视图', 'success');
        }
    }

    /**
     * 导出统计报告
     */
    exportStatistics() {
        if (this.filteredData.length === 0) {
            this.showNotification('没有数据可导出统计报告', 'warning');
            return;
        }

        const stats = this.calculateStatistics();
        const report = this.generateStatisticsReport(stats);
        
        const blob = new Blob([report], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `canoe_statistics_${new Date().toISOString().slice(0, 10)}.txt`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.showNotification('统计报告已导出', 'success');
    }

    /**
     * 生成统计报告
     */
    generateStatisticsReport(stats) {
        return `CANOE日志统计报告
生成时间: ${new Date().toLocaleString()}

总体统计:
- 总记录数: ${stats.total}
- 时间范围: ${stats.timeRange.start.toFixed(3)}s - ${stats.timeRange.end.toFixed(3)}s
- 总时长: ${(stats.timeRange.end - stats.timeRange.start).toFixed(3)}s

协议分布:
${Object.entries(stats.protocols).map(([protocol, count]) => 
    `- ${protocol}: ${count} (${((count/stats.total)*100).toFixed(1)}%)`
).join('\n')}

传输方向分布:
${Object.entries(stats.directions).map(([direction, count]) => 
    `- ${direction}: ${count} (${((count/stats.total)*100).toFixed(1)}%)`
).join('\n')}

通道分布:
${Object.entries(stats.channels).map(([channel, count]) => 
    `- 通道 ${channel}: ${count} (${((count/stats.total)*100).toFixed(1)}%)`
).join('\n')}

错误统计:
- VT错误: ${stats.errorTypes.vt}
- CRC错误: ${stats.errorTypes.crc}
- 超时错误: ${stats.errorTypes.timeout}
- 总线错误: ${stats.errorTypes.bus}

最活跃的报文ID (前10):
${Object.entries(stats.messageIds)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([id, count]) => `- ${id}: ${count}次`)
    .join('\n')}

报告结束
        `;
    }

    /**
     * 清除过滤器
     */
    clearFilters() {
        const filters = ['messageIdFilter', 'protocolFilter', 'channelFilter', 'directionFilter'];
        filters.forEach(filterId => {
            const element = document.getElementById(filterId);
            if (element) {
                element.value = '';
            }
        });

        const checkboxes = ['vtErrorFilter', 'crcErrorFilter', 'timeoutErrorFilter', 'busErrorFilter'];
        checkboxes.forEach(checkboxId => {
            const element = document.getElementById(checkboxId);
            if (element) {
                element.checked = false;
            }
        });

        this.applyFilters();
    }

    /**
     * 更新显示
     */
    updateDisplay() {
        this.updateCounters();
        this.updateStatistics();
    }

    /**
     * 更新计数器
     */
    updateCounters() {
        const totalCount = document.getElementById('totalCount');
        const filteredCount = document.getElementById('filteredCount');
        
        if (totalCount) {
            totalCount.textContent = `总记录数: ${this.logData.length}`;
        }
        
        if (filteredCount) {
            filteredCount.textContent = `显示记录数: ${this.filteredData.length}`;
        }
    }

    /**
     * 更新统计显示
     */
    updateStatisticsDisplay(stats) {
        // 这里可以更新页面上的统计显示
        console.log('统计信息已更新:', stats);
    }

    /**
     * 导出为CSV
     */
    exportToCSV() {
        if (this.filteredData.length === 0) {
            this.showNotification('没有数据可导出', 'warning');
            return;
        }

        const headers = ['序号', '时间戳', '协议类型', '通道号', '传输方向', '报文ID', 'FDF', 'BRS', 'ESI', 'DLC', '数据段', '总线负载', '错误计数', '时间同步', 'CRC校验', '其他信息'];
        const csvContent = [
            headers.join(','),
            ...this.filteredData.map(item => [
                item.index,
                item.timestamp,
                item.protocol,
                item.channel,
                item.direction,
                item.messageId,
                item.fdf,
                item.brs,
                item.esi,
                item.dlc,
                item.data,
                item.busLoad,
                item.errorCount,
                item.timeSync,
                item.crc,
                item.otherInfo
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `canoe_log_${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.showNotification('CSV文件已导出', 'success');
    }

    /**
     * 导出为JSON
     */
    exportToJSON() {
        if (this.filteredData.length === 0) {
            this.showNotification('没有数据可导出', 'warning');
            return;
        }

        const jsonContent = JSON.stringify(this.filteredData, null, 2);
        const blob = new Blob([jsonContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `canoe_log_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.showNotification('JSON文件已导出', 'success');
    }
}

class EnhancedCANOELogApp extends CANOELogApp {
    constructor() {
        super();
        this.isRelativeTime = false;
        this.isTraceFolded = false;
        this.originalFilteredData = [];
        this.multipleFilterConditions = [];
        this.initEnhancedFeatures();
    }

    /**
     * 初始化增强功能
     */
    initEnhancedFeatures() {
        this.initKeyboardShortcuts();
        this.initAutoRefresh();
        this.initTooltips();
        this.initResizableColumns();
        this.initClearFileFunctionality();
    }

    /**
     * 初始化键盘快捷键
     */
    initKeyboardShortcuts() {
        document.addEventListener('keydown', (event) => {
            if (event.ctrlKey || event.metaKey) {
                switch (event.key) {
                    case 'f':
                        event.preventDefault();
                        document.getElementById('messageIdFilter').focus();
                        break;
                    case 'o':
                        event.preventDefault();
                        document.getElementById('fileInput').click();
                        break;
                    case 's':
                        event.preventDefault();
                        this.saveCurrentView();
                        break;
                    case 'e':
                        event.preventDefault();
                        this.exportData();
                        break;
                    case 'r':
                        event.preventDefault();
                        this.refreshData();
                        break;
                    case 'z':
                        event.preventDefault();
                        this.undoLastAction();
                        break;
                }
            } else if (event.key === 'Escape') {
                this.clearFilters();
            }
        });
    }

    /**
     * 初始化自动刷新
     */
    initAutoRefresh() {
        if (CONFIG.display.autoRefresh) {
            setInterval(() => {
                if (this.parser.logData.length > 0) {
                    this.updateStatistics();
                }
            }, 5000);
        }
    }

    /**
     * 初始化工具提示
     */
    initTooltips() {
        // 为表格列添加工具提示
        const headers = document.querySelectorAll('.log-table th');
        headers.forEach((header, index) => {
            const description = this.getColumnDescription(index);
            if (description) {
                header.title = description;
            }
        });
    }

    /**
     * 获取列描述
     * @param {number} index - 列索引
     * @returns {string} 列描述
     */
    getColumnDescription(index) {
        const descriptions = [
            '报文序号',
            '报文记录时间（秒）',
            '通信协议类型（CAN/CANFD）',
            '物理CAN总线通道编号',
            '数据传输方向（Tx/Rx）',
            '报文标识符（标准帧11位/扩展帧29位）',
            'CAN FD帧标识位',
            '比特率切换位',
            '错误状态指示位',
            '数据长度代码',
            '十六进制数据内容',
            '总线负载计数器',
            '发送/接收错误计数',
            '时间同步信息',
            '循环冗余校验值',
            '附加信息'
        ];
        return descriptions[index] || '';
    }

    /**
     * 重写显示数据方法，添加序号和折叠功能
     * @param {Array} data - 要显示的数据
     */
    displayData(data) {
        const tbody = document.getElementById('logTableBody');
        
        if (data.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="17" class="no-data">
                        <i class="fas fa-search" style="font-size: 3em; color: #ccc; margin-bottom: 10px;"></i>
                        <br>没有找到匹配的数据
                    </td>
                </tr>
            `;
            return;
        }

        // 重置报文计数器
        this.messageCounter = 0;
        
        // 检查表格宽度并调整"其他信息"列可见性
        this.adjustOtherInfoColumnVisibility();
        
        // 直接显示数据，不再分组
        const rows = data.map(item => this.createTableRow(item)).join('');
        tbody.innerHTML = rows;
        
        this.updateCounters(data.length);
        this.updateStatistics();
    }

    /**
     * 根据可用空间调整"其他信息"列的可见性
     */
    adjustOtherInfoColumnVisibility() {
        const table = document.getElementById('logTable');
        const tableWrapper = document.querySelector('.table-wrapper');
        if (!table || !tableWrapper) return;

        const tableWidth = table.offsetWidth;
        const wrapperWidth = tableWrapper.offsetWidth;
        
        // 如果表格宽度超过容器宽度，隐藏"其他信息"列
        if (tableWidth > wrapperWidth) {
            const otherInfoHeader = table.querySelector('th.col-other');
            const otherInfoCells = table.querySelectorAll('td:nth-child(17)');
            
            if (otherInfoHeader) {
                otherInfoHeader.style.display = 'none';
            }
            otherInfoCells.forEach(cell => {
                cell.style.display = 'none';
            });
        } else {
            const otherInfoHeader = table.querySelector('th.col-other');
            const otherInfoCells = table.querySelectorAll('td:nth-child(17)');
            
            if (otherInfoHeader) {
                otherInfoHeader.style.display = '';
            }
            otherInfoCells.forEach(cell => {
                cell.style.display = '';
            });
        }
    }



    /**
     * 创建表格行
     * @param {Object} item - 数据项
     * @param {number} subIndex - 子序号
     * @param {string} rowClass - 行样式类
     * @returns {string} HTML行内容
     */
    createTableRow(item, subIndex = null, rowClass = '') {
        const messageNumber = subIndex ? `${this.messageCounter}-${subIndex}` : ++this.messageCounter;
        const dataIndex = this.filteredData.findIndex(dataItem => dataItem === item);
        const formattedTimestamp = this.getFormattedTimestamp(item.timestamp, dataIndex);
        
        if (item.type === 'can_message') {
            // 确定错误类型CSS类
            let errorClass = '';
            if (item.isErrorFrame) {
                if (this.isVTError(item)) {
                    errorClass = 'error-vt';
                } else if (this.isCRCError(item)) {
                    errorClass = 'error-crc';
                } else if (this.isTimeoutError(item)) {
                    errorClass = 'error-timeout';
                } else if (this.isBusError(item)) {
                    errorClass = 'error-bus';
                }
            }
            
            return `
                <tr class="message-group ${rowClass} ${errorClass}" data-group="${item.messageId}">
                    <td>${messageNumber}</td>
                    <td class="timestamp">${formattedTimestamp}</td>
                    <td><span class="protocol">${item.protocol}</span></td>
                    <td>${item.channel}</td>
                    <td><span class="direction-${(item.direction || '').toLowerCase()}">${item.direction || ''}</span></td>
                    <td class="message-id">${item.messageId}</td>
                    <td>${item.fdf !== undefined && item.fdf !== null ? item.fdf : '-'}</td>
                    <td>${item.brs !== undefined && item.brs !== null ? item.brs : '-'}</td>
                    <td>${item.esi !== undefined && item.esi !== null ? item.esi : '-'}</td>
                    <td>${item.dlc || '-'}</td>
                    <td class="data-payload">${item.dataPayload || '-'}</td>
                    <td class="ascii-data">${item.asciiData || '-'}</td>
                    <td>${item.busLoad || '-'}</td>
                    <td>${item.errorCounter || '-'}</td>
                    <td>${item.timing || '-'}</td>
                    <td>${item.crc || '-'}</td>
                    <td class="other-info">
                        ${item.isErrorFrame ? '<span class="error-frame">错误帧</span>' : ''} 
                        ${item.additionalInfo || ''}
                    </td>
                </tr>
            `;
        } else if (item.type === 'status') {
            return `
                <tr class="status-message">
                    <td>${messageNumber}</td>
                    <td class="timestamp">${formattedTimestamp}</td>
                    <td><span class="status-info">状态</span></td>
                    <td>${item.channel}</td>
                    <td colspan="2">${item.status}</td>
                    <td colspan="3">TxErr: ${item.txErrors}, RxErr: ${item.rxErrors}</td>
                    <td colspan="10">状态信息</td>
                </tr>
            `;
        } else {
            const systemClass = item.type === 'system_variable' ? 'system-message' : 
                              item.type === 'test_framework' ? 'status-message' : 'error-message';
            return `
                <tr class="${systemClass}">
                    <td>${messageNumber}</td>
                    <td class="timestamp">${formattedTimestamp}</td>
                    <td colspan="16">${this.formatSystemMessage(item)}</td>
                </tr>
            `;
        }
    }

    /**
     * 格式化系统消息
     * @param {Object} item - 系统消息项
     * @returns {string} 格式化后的消息
     */
    formatSystemMessage(item) {
        switch (item.type) {
            case 'system_variable':
                return `系统变量: ${item.variablePath}::${item.variableName} = ${item.value}`;
            case 'test_framework':
                return `测试框架: ${item.message}`;
            case 'trigger_event':
                return `触发事件: ${item.event}`;
            default:
                return item.rawLine;
        }
    }

    /**
     * 更新统计信息
     */
    updateStatistics() {
        // 计算当前显示数据的统计信息
        const stats = this.calculateStatisticsFromData(this.filteredData);
        
        // 更新统计卡片
        const totalMessagesEl = document.getElementById('totalMessages');
        const canMessagesEl = document.getElementById('canMessages');
        const canfdMessagesEl = document.getElementById('canfdMessages');
        const errorFramesEl = document.getElementById('errorFrames');
        
        if (totalMessagesEl) totalMessagesEl.textContent = stats.canMessages;
        if (canMessagesEl) canMessagesEl.textContent = stats.protocols.CAN || 0;
        if (canfdMessagesEl) canfdMessagesEl.textContent = stats.protocols.CANFD || 0;
        if (errorFramesEl) errorFramesEl.textContent = stats.errorFrames;
        
        // 更新总记录数显示
        const totalCountEl = document.getElementById('totalCount');
        const filteredCountEl = document.getElementById('filteredCount');
        
        const lang = translations[currentLanguage];
        if (totalCountEl) totalCountEl.textContent = `${lang.total_records}: ${this.parser.logData.length}`;
        if (filteredCountEl) filteredCountEl.textContent = `${lang.displayed_records}: ${this.filteredData.length}`;
        
        console.log('统计信息已更新:', stats);
    }

    /**
     * 从数据计算统计信息
     * @param {Array} data - 数据数组
     * @returns {Object} 统计信息
     */
    calculateStatisticsFromData(data) {
        const stats = {
            canMessages: 0,
            protocols: { CAN: 0, CANFD: 0 },
            errorFrames: 0,
            timeRange: { start: 0, end: 0 },
            messageIds: {}
        };

        if (data.length === 0) return stats;

        let minTime = Infinity;
        let maxTime = -Infinity;

        data.forEach(item => {
            if (item.type === 'can_message') {
                stats.canMessages++;
                
                // 协议统计
                if (item.protocol === 'CAN') {
                    stats.protocols.CAN++;
                } else if (item.protocol === 'CANFD') {
                    stats.protocols.CANFD++;
                }
                
                // 错误帧统计
                if (item.isErrorFrame) {
                    stats.errorFrames++;
                }
                
                // 时间范围
                if (item.timestamp < minTime) minTime = item.timestamp;
                if (item.timestamp > maxTime) maxTime = item.timestamp;
                
                // 报文ID统计
                const messageId = item.messageId;
                stats.messageIds[messageId] = (stats.messageIds[messageId] || 0) + 1;
            }
        });

        stats.timeRange.start = minTime === Infinity ? 0 : minTime;
        stats.timeRange.end = maxTime === -Infinity ? 0 : maxTime;

        return stats;
    }

    /**
     * CANOE Trace折叠功能 - 只显示每个CAN ID的最新数据
     */
    toggleTraceFolding() {
        this.isTraceFolded = !this.isTraceFolded;
        
        if (this.isTraceFolded) {
            // 保存当前过滤后的数据作为原始数据
            this.originalFilteredData = [...this.filteredData];
            const lang = translations[currentLanguage];
            this.showNotification(lang.trace_fold_enabled, 'info');
        } else {
            // 展开时，恢复原始数据
            if (this.originalFilteredData && this.originalFilteredData.length > 0) {
                this.filteredData = [...this.originalFilteredData];
            }
            const lang = translations[currentLanguage];
            this.showNotification(lang.trace_fold_disabled, 'info');
        }
        
        // 应用所有过滤规则，确保折叠状态与其他过滤条件同时生效
        this.applyAllFilterRules();
        
        // 更新显示
        this.displayData(this.filteredData);
        this.updateStatistics();
        this.updateTraceFoldingUI();
    }

    /**
     * 获取每个CAN ID的最新数据，以及相同报错信息的最新数据
     * @returns {Array} 每个CAN ID的最新消息数组
     */
    getLatestMessagesByCanId() {
        const canIdMap = new Map();
        const errorMessageMap = new Map();
        
        this.originalFilteredData.forEach(item => {
            if (item.type === 'can_message') {
                // 处理CAN消息 - 按CAN ID分组，保留最新的
                const canId = item.messageId;
                if (!canIdMap.has(canId) || item.timestamp > canIdMap.get(canId).timestamp) {
                    canIdMap.set(canId, item);
                }
            } else if (item.type === 'system_message' || item.type === 'system_variable' || 
                       item.type === 'test_framework' || item.type === 'trigger_event' || 
                       item.type === 'status') {
                // 处理系统消息 - 按消息内容分组，保留最新的
                const messageKey = this.getItemText(item);
                if (!errorMessageMap.has(messageKey) || item.timestamp > errorMessageMap.get(messageKey).timestamp) {
                    errorMessageMap.set(messageKey, item);
                }
            }
        });
        
        // 合并最新CAN消息和系统消息
        return [...canIdMap.values(), ...errorMessageMap.values()].sort((a, b) => a.timestamp - b.timestamp);
    }

    /**
     * 更新Trace折叠UI状态
     */
    updateTraceFoldingUI() {
        const foldBtn = document.querySelector('.trace-fold-btn');
        const lang = translations[currentLanguage];
        
        if (foldBtn) {
            if (this.isTraceFolded) {
                foldBtn.classList.add('active');
                foldBtn.innerHTML = `<i class="fas fa-expand-alt"></i> ${lang.fold_data}`;
                foldBtn.title = '取消折叠 - 显示所有数据';
            } else {
                foldBtn.classList.remove('active');
                foldBtn.innerHTML = `<i class="fas fa-compress-alt"></i> ${lang.fold_data}`;
                foldBtn.title = 'CANOE Trace折叠 - 只显示每个CAN ID的最新数据';
            }
        }
    }

    /**
     * 切换时间显示模式（相对时间/绝对时间）
     */
    toggleTimeDisplay() {
        this.isRelativeTime = !this.isRelativeTime;
        const timeBtn = document.querySelector('.control-btn[title*="时间"]');
        
        if (timeBtn) {
            if (this.isRelativeTime) {
                timeBtn.classList.add('active');
                timeBtn.title = '切换为绝对时间显示';
            } else {
                timeBtn.classList.remove('active');
                timeBtn.title = '切换为相对时间显示';
            }
        }
        
        // 重新显示数据以更新时间戳
        this.displayData(this.filteredData);
        this.showNotification(
            this.isRelativeTime ? '已切换到相对时间显示模式' : '已切换到绝对时间显示模式', 
            'info'
        );
    }

    /**
     * 获取格式化的时间戳
     * @param {number} timestamp - 原始时间戳
     * @param {number} index - 数据索引
     * @returns {string} 格式化的时间戳
     */
    getFormattedTimestamp(timestamp, index) {
        if (!this.isRelativeTime) {
            return timestamp.toFixed(6);
        }
        
        // 计算相对时间
        if (index === 0) {
            return `${timestamp.toFixed(6)} (初始时间)`;
        }
        
        const previousTimestamp = this.filteredData[index - 1]?.timestamp;
        if (previousTimestamp !== undefined) {
            const relativeTime = timestamp - previousTimestamp;
            return `${relativeTime.toFixed(6)} (相对)`;
        }
        
        return timestamp.toFixed(6);
    }

    /**
     * 改进的过滤功能，支持VT信息等错误类型
     */
    applyFilters() {
        const protocolFilter = document.getElementById('protocolFilter').value;
        const channelFilter = document.getElementById('channelFilter').value;
        const directionFilter = document.getElementById('directionFilter').value;
        const messageIdFilter = document.getElementById('messageIdFilter').value;
        const timeStartFilter = document.getElementById('timeStartFilter').value;
        const timeEndFilter = document.getElementById('timeEndFilter').value;
        const dataFilter = document.getElementById('dataFilter').value;
        const errorFilter = document.getElementById('errorFilter').value;
        const systemMessageFilter = document.getElementById('systemMessageFilter').value;

        let filteredData = this.parser.logData.filter(item => {
            // 协议类型过滤
            if (protocolFilter && item.protocol !== protocolFilter) {
                return false;
            }

            // 通道号过滤
            if (channelFilter && item.channel !== channelFilter) {
                return false;
            }

            // 传输方向过滤
            if (directionFilter && item.direction !== directionFilter) {
                return false;
            }

            // 报文ID过滤
            if (messageIdFilter) {
                const ids = messageIdFilter.split(',').map(id => id.trim().toLowerCase());
                if (!ids.some(id => (item.messageId || '').toLowerCase().includes(id))) {
                    return false;
                }
            }

            // 时间范围过滤
            if (timeStartFilter && item.timestamp < parseFloat(timeStartFilter)) {
                return false;
            }
            if (timeEndFilter && item.timestamp > parseFloat(timeEndFilter)) {
                return false;
            }

            // 数据内容过滤 - 增强版支持包含/排除
            if (dataFilter) {
                let filterText = dataFilter.toLowerCase();
                const itemText = this.getItemText(item).toLowerCase();
                
                // 处理中文关键词映射
                if (filterText.includes('系统变量')) {
                    filterText = filterText.replace('系统变量', 'sv:');
                }
                
                // 检查是否包含排除标记
                if (filterText.startsWith('!')) {
                    // 排除模式：不包含关键词的内容
                    const excludeKeyword = filterText.substring(1).trim();
                    if (itemText.includes(excludeKeyword)) {
                        return false;
                    }
                } else {
                    // 包含模式：包含关键词的内容
                    if (!itemText.includes(filterText)) {
                        return false;
                    }
                }
            }

            // 错误类型过滤
            if (errorFilter) {
                if (errorFilter === 'error' && !item.isErrorFrame) {
                    return false;
                }
                if (errorFilter === 'normal' && item.isErrorFrame) {
                    return false;
                }
                if (errorFilter === 'vt_error' && !this.isVTError(item)) {
                    return false;
                }
                if (errorFilter === 'crc_error' && !this.isCRCError(item)) {
                    return false;
                }
                if (errorFilter === 'timeout_error' && !this.isTimeoutError(item)) {
                    return false;
                }
                if (errorFilter === 'bus_error' && !this.isBusError(item)) {
                    return false;
                }
            }

            // 系统消息类型过滤
            if (systemMessageFilter && item.type !== 'can_message') {
                if (systemMessageFilter === 'status' && !this.isStatusMessage(item)) {
                    return false;
                }
                if (systemMessageFilter === 'error' && !this.isErrorMessage(item)) {
                    return false;
                }
                if (systemMessageFilter === 'warning' && !this.isWarningMessage(item)) {
                    return false;
                }
                if (systemMessageFilter === 'info' && !this.isInfoMessage(item)) {
                    return false;
                }
            }

            return true;
        });

        this.filteredData = filteredData;
        this.originalFilteredData = [...filteredData]; // 保存原始过滤数据
        
        // 应用多条件过滤 (AND逻辑)
        this.filteredData = applyMultipleFilters(this.filteredData);
        
        // 应用所有过滤规则，包括Trace折叠状态
        this.applyAllFilterRules();
        
        this.displayData(this.filteredData);
        this.updateStatistics();
        this.updateTraceFoldingUI();
        
        // 增强的通知信息
        let notificationMessage = `过滤完成，显示 ${this.filteredData.length} 条记录`;
        
        // 检查是否有基本过滤条件
        const hasBasicFilters = protocolFilter || channelFilter || directionFilter || messageIdFilter || timeStartFilter || timeEndFilter || dataFilter || errorFilter || systemMessageFilter;
        
        // 检查是否有多个过滤条件
        const multipleConditions = getMultipleFilterConditions();
        const hasMultipleFilters = multipleConditions.length > 0;
        
        if (dataFilter) {
            let displayFilter = dataFilter;
            if (dataFilter.toLowerCase().includes('系统变量')) {
                displayFilter = dataFilter.replace(/系统变量/gi, 'SV:');
            }
            
            if (dataFilter.startsWith('!')) {
                const excludeKeyword = displayFilter.substring(1).trim();
                notificationMessage += ` (已排除包含 "${excludeKeyword}" 的记录)`;
            } else {
                notificationMessage += ` (已包含包含 "${displayFilter}" 的记录)`;
            }
        }
        
        if (hasMultipleFilters) {
            notificationMessage += ` (应用了 ${multipleConditions.length} 个多条件过滤)`;
        }
        
        this.showNotification(notificationMessage, 'success');
    }

    /**
     * 应用所有过滤规则，确保所有规则同时生效
     */
    applyAllFilterRules() {
        // 确保有原始数据可用
        if (!this.originalFilteredData || this.originalFilteredData.length === 0) {
            this.originalFilteredData = [...this.logData];
        }
        
        // 先应用多条件过滤到原始数据
        let filteredData = applyMultipleFilters(this.originalFilteredData);
        
        // 如果当前处于Trace折叠状态，应用折叠规则
        if (this.isTraceFolded) {
            // 保存当前过滤后的数据作为原始数据
            this.originalFilteredData = [...filteredData];
            // 获取每个CAN ID的最新消息
            this.filteredData = this.getLatestMessagesByCanId();
        } else {
            // 如果不在折叠状态，直接使用过滤后的数据
            this.filteredData = filteredData;
        }
    }

    /**
     * 获取项目的完整文本用于搜索
     */
    getItemText(item) {
        let text = '';
        
        // 添加时间戳
        if (item.timestamp) {
            text += item.timestamp + ' ';
        }
        
        // 添加协议类型
        if (item.protocol) {
            text += item.protocol + ' ';
        }
        
        // 添加通道号
        if (item.channel) {
            text += item.channel + ' ';
        }
        
        // 添加传输方向
        if (item.direction) {
            text += item.direction + ' ';
        }
        
        // 添加报文ID
        if (item.messageId) {
            text += item.messageId + ' ';
        }
        
        // 添加数据段
        if (item.dataPayload) {
            text += item.dataPayload + ' ';
        }
        
        // 添加其他信息
        if (item.otherInfo) {
            text += item.otherInfo + ' ';
        }
        
        // 添加系统消息内容
        if (item.type === 'system_message' && item.message) {
            text += item.message + ' ';
        }
        
        // 添加系统变量内容 - 包含原始行文本
        if (item.type === 'system_variable' && item.rawLine) {
            text += item.rawLine + ' ';
        }
        
        // 添加测试框架消息内容
        if (item.type === 'test_framework' && item.message) {
            text += `测试框架: ${item.message} `;
        }
        
        // 添加触发事件内容
        if (item.type === 'trigger_event' && item.event) {
            text += item.event + ' ';
        }
        
        // 添加状态消息内容
        if (item.type === 'status' && item.status) {
            text += `Status: ${item.status} `;
        }
        
        // 添加错误信息
        if (item.isErrorFrame) {
            text += 'error frame ';
        }
        
        // 添加原始行文本（如果存在）
        if (item.rawLine) {
            text += item.rawLine + ' ';
        }
        
        return text;
    }

    /**
     * 检查是否为VT信息错误
     */
    isVTError(item) {
        return item.isErrorFrame && (
            item.messageId === 'VT' || 
            (item.additionalInfo && item.additionalInfo.toLowerCase().includes('vt')) ||
            (item.dataPayload && item.dataPayload.toLowerCase().includes('vt'))
        );
    }

    /**
     * 检查是否为CRC校验错误
     */
    isCRCError(item) {
        return item.isErrorFrame && (
            (item.additionalInfo && item.additionalInfo.toLowerCase().includes('crc')) ||
            (item.dataPayload && item.dataPayload.toLowerCase().includes('crc'))
        );
    }

    /**
     * 检查是否为超时错误
     */
    isTimeoutError(item) {
        return item.isErrorFrame && (
            (item.additionalInfo && item.additionalInfo.toLowerCase().includes('timeout')) ||
            (item.dataPayload && item.dataPayload.toLowerCase().includes('timeout'))
        );
    }

    /**
     * 检查是否为总线错误
     */
    isBusError(item) {
        return item.isErrorFrame && (
            (item.additionalInfo && item.additionalInfo.toLowerCase().includes('bus')) ||
            (item.dataPayload && item.dataPayload.toLowerCase().includes('bus'))
        );
    }

    /**
     * 检查是否为状态消息
     */
    isStatusMessage(item) {
        return item.type === 'status' && (
            (item.status && item.status.toLowerCase().includes('status')) ||
            (item.rawLine && item.rawLine.toLowerCase().includes('status'))
        );
    }

    /**
     * 检查是否为错误消息
     */
    isErrorMessage(item) {
        return item.type !== 'can_message' && (
            (item.rawLine && item.rawLine.toLowerCase().includes('error')) ||
            (item.rawLine && item.rawLine.toLowerCase().includes('错误'))
        );
    }

    /**
     * 检查是否为警告消息
     */
    isWarningMessage(item) {
        return item.type !== 'can_message' && (
            (item.rawLine && item.rawLine.toLowerCase().includes('warning')) ||
            (item.rawLine && item.rawLine.toLowerCase().includes('警告'))
        );
    }

    /**
     * 检查是否为一般信息消息
     */
    isInfoMessage(item) {
        return item.type !== 'can_message' && (
            (item.rawLine && item.rawLine.toLowerCase().includes('info')) ||
            (item.rawLine && item.rawLine.toLowerCase().includes('信息'))
        );
    }

    /**
     * 获取错误类型字符串
     */
    getErrorType(item) {
        if (item.isErrorFrame) return 'error';
        if (this.isVTError(item)) return 'vt_error';
        if (this.isCRCError(item)) return 'crc_error';
        if (this.isTimeoutError(item)) return 'timeout_error';
        if (this.isBusError(item)) return 'bus_error';
        return 'normal';
    }

    /**
     * 排序表格
     * @param {number} columnIndex - 列索引
     */
    sortTable(columnIndex) {
        const tbody = document.getElementById('logTableBody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        // 清除之前的排序标记
        document.querySelectorAll('.log-table th').forEach(th => {
            th.classList.remove('sorted');
        });
        
        // 添加排序标记
        const header = document.querySelector(`.log-table th:nth-child(${columnIndex + 1})`);
        header.classList.add('sorted');
        
        // 切换排序方向
        if (this.sortColumn === columnIndex) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = columnIndex;
            this.sortDirection = 'asc';
        }
        
        // 排序数据
        const sortedData = this.parser.filteredData.sort((a, b) => {
            if (a.type !== 'can_message' || b.type !== 'can_message') {
                return 0;
            }
            
            let aValue = this.getColumnValue(a, columnIndex);
            let bValue = this.getColumnValue(b, columnIndex);
            
            // 数值比较
            if (typeof aValue === 'number' && typeof bValue === 'number') {
                return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
            }
            
            // 字符串比较
            aValue = String(aValue).toLowerCase();
            bValue = String(bValue).toLowerCase();
            
            if (this.sortDirection === 'asc') {
                return aValue.localeCompare(bValue);
            } else {
                return bValue.localeCompare(aValue);
            }
        });
        
        this.displayData(sortedData);
    }

    /**
     * 获取列值
     * @param {Object} item - 数据项
     * @param {number} columnIndex - 列索引
     * @returns {*} 列值
     */
    getColumnValue(item, columnIndex) {
        if (item.type !== 'can_message') {
            return '';
        }
        
        const values = [
            this.messageCounter, // 序号
            item.timestamp,
            item.protocol,
            item.channel,
            item.direction,
            item.messageId,
            item.fdf !== undefined && item.fdf !== null ? item.fdf : '',
            item.brs !== undefined && item.brs !== null ? item.brs : '',
            item.esi !== undefined && item.esi !== null ? item.esi : '',
            item.dlc,
            item.dataPayload,
            item.asciiData,
            item.busLoad,
            item.errorCounter,
            item.timing,
            item.crc,
            item.additionalInfo
        ];
        
        return values[columnIndex] || '';
    }

    /**
     * 应用预设过滤
     * @param {string} presetName - 预设名称
     */
    applyPreset(presetName) {
        const preset = CONFIG.filterPresets[presetName];
        if (!preset) return;
        
        // 应用预设过滤条件
        Object.keys(preset.filters).forEach(key => {
            let elementId = key + 'Filter';
            
            // 特殊映射
            if (key === 'data') {
                elementId = 'dataFilter';
            } else if (key === 'errorType') {
                elementId = 'errorFilter';
            } else if (key === 'timeStart') {
                elementId = 'timeStartFilter';
            } else if (key === 'timeEnd') {
                elementId = 'timeEndFilter';
            }
            
            const element = document.getElementById(elementId);
            if (element) {
                element.value = preset.filters[key];
            }
        });
        
        this.applyFilters();
        
        // 显示提示
        this.showNotification(`已应用预设: ${preset.name}`, 'success');
    }

    /**
     * 显示统计图表
     */
    showStatistics() {
        const modal = document.getElementById('statisticsModal');
        const container = document.getElementById('chartContainer');
        
        // 生成统计图表
        const stats = this.parser.getStatistics();
        container.innerHTML = this.generateStatisticsHTML(stats);
        
        modal.style.display = 'block';
    }

    /**
     * 生成统计图表HTML
     * @param {Object} stats - 统计信息
     * @returns {string} HTML内容
     */
    generateStatisticsHTML(stats) {
        return `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div>
                    <h4>协议分布</h4>
                    <div style="height: 200px; display: flex; align-items: center; justify-content: center; background: #f8f9fa; border-radius: 10px;">
                        <div style="text-align: center;">
                            ${Object.entries(stats.protocols).map(([protocol, count]) => 
                                `<div style="margin: 5px 0;">
                                    <strong>${protocol}:</strong> ${count} (${((count/stats.canMessages)*100).toFixed(1)}%)
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                </div>
                <div>
                    <h4>传输方向分布</h4>
                    <div style="height: 200px; display: flex; align-items: center; justify-content: center; background: #f8f9fa; border-radius: 10px;">
                        <div style="text-align: center;">
                            ${Object.entries(stats.directions).map(([direction, count]) => 
                                `<div style="margin: 5px 0;">
                                    <strong>${direction}:</strong> ${count} (${((count/stats.canMessages)*100).toFixed(1)}%)
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                </div>
                <div>
                    <h4>通道分布</h4>
                    <div style="height: 200px; display: flex; align-items: center; justify-content: center; background: #f8f9fa; border-radius: 10px;">
                        <div style="text-align: center;">
                            ${Object.entries(stats.channels).map(([channel, count]) => 
                                `<div style="margin: 5px 0;">
                                    <strong>通道 ${channel}:</strong> ${count} (${((count/stats.canMessages)*100).toFixed(1)}%)
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                </div>
                <div>
                    <h4>错误统计</h4>
                    <div style="height: 200px; display: flex; align-items: center; justify-content: center; background: #f8f9fa; border-radius: 10px;">
                        <div style="text-align: center;">
                            <div style="margin: 5px 0;">
                                <strong>错误帧:</strong> ${stats.errorFrames} (${((stats.errorFrames/stats.canMessages)*100).toFixed(1)}%)
                            </div>
                            <div style="margin: 5px 0;">
                                <strong>正常帧:</strong> ${stats.canMessages - stats.errorFrames} (${(((stats.canMessages - stats.errorFrames)/stats.canMessages)*100).toFixed(1)}%)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * 关闭模态框
     * @param {string} modalId - 模态框ID
     */
    closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    /**
     * 显示通知
     * @param {string} message - 消息内容
     * @param {string} type - 通知类型
     */
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;
        
        const colors = {
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#17a2b8'
        };
        
        notification.style.backgroundColor = colors[type] || colors.info;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    /**
     * 保存当前视图
     */
    saveCurrentView() {
        const view = {
            filters: this.getCurrentFilters(),
            sortColumn: this.sortColumn,
            sortDirection: this.sortDirection,
            timestamp: new Date().toISOString(),
            author: 'luotongde'
        };
        
        localStorage.setItem('canoeLogView', JSON.stringify(view));
        this.showNotification('当前视图已保存', 'success');
    }

    /**
     * 获取当前过滤条件
     * @returns {Object} 过滤条件
     */
    getCurrentFilters() {
        return {
            protocol: document.getElementById('protocolFilter').value,
            channel: document.getElementById('channelFilter').value,
            direction: document.getElementById('directionFilter').value,
            messageId: document.getElementById('messageIdFilter').value,
            timeStart: document.getElementById('timeStartFilter').value,
            timeEnd: document.getElementById('timeEndFilter').value,
            data: document.getElementById('dataFilter').value,
            errorType: document.getElementById('errorFilter').value
        };
    }

    /**
     * 导出数据
     */
    exportData() {
        if (!this.currentFile) {
            this.showNotification('请先选择日志文件', 'warning');
            return;
        }
        
        this.exportToCSV();
    }

    /**
     * 刷新数据
     */
    refreshData() {
        if (this.parser.logData.length > 0) {
            this.displayData(this.parser.filteredData);
            this.updateStatistics();
            this.showNotification('数据已刷新', 'success');
        }
    }

    /**
     * 撤销上次操作
     */
    undoLastAction() {
        const savedView = localStorage.getItem('canoeLogView');
        if (savedView) {
            const view = JSON.parse(savedView);
            this.applySavedView(view);
            this.showNotification('已恢复上次保存的视图', 'info');
        } else {
            this.showNotification('没有可恢复的视图', 'warning');
        }
    }

    /**
     * 应用保存的视图
     * @param {Object} view - 保存的视图
     */
    applySavedView(view) {
        if (view.filters) {
            Object.keys(view.filters).forEach(key => {
                const element = document.getElementById(key + 'Filter');
                if (element) {
                    element.value = view.filters[key];
                }
            });
        }
        
        this.sortColumn = view.sortColumn || 0;
        this.sortDirection = view.sortDirection || 'asc';
        
        this.applyFilters();
    }

    /**
     * 导出统计报告
     */
    exportStatistics() {
        if (!this.currentFile) {
            this.showNotification('请先选择日志文件', 'warning');
            return;
        }
        
        const stats = this.parser.getStatistics();
        const report = this.generateStatisticsReport(stats);
        
        const blob = new Blob([report], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.currentFile.name.replace('.asc', '')}_statistics_report.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        this.showNotification('统计报告已导出', 'success');
    }

    /**
     * 生成统计报告
     * @param {Object} stats - 统计信息
     * @returns {string} 报告内容
     */
    generateStatisticsReport(stats) {
        return `
CANOE日志解析统计报告
========================
生成时间: ${new Date().toLocaleString()}
作者: luotongde
时间: 2025-05-14

文件信息:
- 总记录数: ${stats.totalLines}
- CAN报文数: ${stats.canMessages}
- 状态信息数: ${stats.statusMessages}
- 系统信息数: ${stats.systemMessages}

协议分布:
${Object.entries(stats.protocols).map(([protocol, count]) => 
    `- ${protocol}: ${count} (${((count/stats.canMessages)*100).toFixed(1)}%)`
).join('\n')}

传输方向分布:
${Object.entries(stats.directions).map(([direction, count]) => 
    `- ${direction}: ${count} (${((count/stats.canMessages)*100).toFixed(1)}%)`
).join('\n')}

通道分布:
${Object.entries(stats.channels).map(([channel, count]) => 
    `- 通道 ${channel}: ${count} (${((count/stats.canMessages)*100).toFixed(1)}%)`
).join('\n')}

错误统计:
- 错误帧数: ${stats.errorFrames} (${((stats.errorFrames/stats.canMessages)*100).toFixed(1)}%)
- 正常帧数: ${stats.canMessages - stats.errorFrames} (${(((stats.canMessages - stats.errorFrames)/stats.canMessages)*100).toFixed(1)}%)

时间范围:
- 开始时间: ${stats.timeRange.start.toFixed(3)}s
- 结束时间: ${stats.timeRange.end.toFixed(3)}s
- 总时长: ${(stats.timeRange.end - stats.timeRange.start).toFixed(3)}s

最活跃的报文ID (前10):
${Object.entries(stats.messageIds)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([id, count]) => `- ${id}: ${count}次`)
    .join('\n')}

报告结束
        `;
    }

    /**
     * 初始化可调整列宽功能
     */
    initResizableColumns() {
        const table = document.getElementById('logTable');
        if (!table) return;

        const headers = table.querySelectorAll('th.resizable');
        let isResizing = false;
        let currentHeader = null;
        let startX = 0;
        let startWidth = 0;

        headers.forEach(header => {
            header.addEventListener('mousedown', (e) => {
                const rect = header.getBoundingClientRect();
                const isNearRightEdge = e.clientX > rect.right - 10;

                if (isNearRightEdge) {
                    isResizing = true;
                    currentHeader = header;
                    startX = e.clientX;
                    startWidth = header.offsetWidth;
                    
                    header.classList.add('resizing');
                    document.body.style.cursor = 'col-resize';
                    document.body.style.userSelect = 'none';
                    
                    e.preventDefault();
                }
            });
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing || !currentHeader) return;

            const diffX = e.clientX - startX;
            const newWidth = Math.max(50, startWidth + diffX); // 最小宽度50px
            
            currentHeader.style.width = newWidth + 'px';
            
            // 更新对应的CSS类宽度
            const columnClass = Array.from(currentHeader.classList).find(cls => cls.startsWith('col-'));
            if (columnClass) {
                const style = document.createElement('style');
                style.textContent = `.${columnClass} { width: ${newWidth}px !important; }`;
                document.head.appendChild(style);
            }
        });

        document.addEventListener('mouseup', () => {
            if (isResizing && currentHeader) {
                currentHeader.classList.remove('resizing');
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
                
                isResizing = false;
                currentHeader = null;
            }
        });
    }

    /**
     * 初始化清除文件功能
     */
    initClearFileFunctionality() {
        // 清除文件功能已在HTML中通过onclick事件绑定
        // 这里可以添加额外的初始化逻辑
        
        // 添加窗口大小变化监听器
        window.addEventListener('resize', () => {
            if (this.filteredData.length > 0) {
                this.adjustOtherInfoColumnVisibility();
            }
        });
    }
}

// 全局函数 - 时间显示切换
function toggleTimeDisplay() {
    if (window.app && window.app.toggleTimeDisplay) {
        window.app.toggleTimeDisplay();
    }
}

// 多条件过滤功能
let multipleFilterConditions = [];

/**
 * 添加过滤条件
 */
function addFilterCondition() {
    const container = document.getElementById('multipleFiltersContainer');
    if (!container) return;

    const conditionId = 'filter_' + Date.now();
    const conditionDiv = document.createElement('div');
    conditionDiv.className = 'filter-condition';
    conditionDiv.id = conditionId;

    conditionDiv.innerHTML = `
        <select class="filter-field-select">
            <option value="data">数据内容</option>
            <option value="messageId">报文ID</option>
            <option value="protocol">协议类型</option>
            <option value="channel">通道号</option>
            <option value="direction">传输方向</option>
            <option value="errorType">错误类型</option>
        </select>
        <input type="text" class="filter-value-input" placeholder="输入过滤值">
        <button class="remove-btn" onclick="removeFilterCondition('${conditionId}')">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(conditionDiv);
    multipleFilterConditions.push(conditionId);
}

/**
 * 移除过滤条件
 */
function removeFilterCondition(conditionId) {
    const conditionDiv = document.getElementById(conditionId);
    if (conditionDiv) {
        conditionDiv.remove();
        multipleFilterConditions = multipleFilterConditions.filter(id => id !== conditionId);
        
        // 重新应用过滤
        if (window.enhancedApp) {
            window.enhancedApp.applyFilters();
        }
    }
}

/**
 * 清除所有多条件过滤
 */
function clearAllMultipleFilters() {
    const container = document.getElementById('multipleFiltersContainer');
    if (container) {
        container.innerHTML = '';
        multipleFilterConditions = [];
    }
}

/**
 * 获取多条件过滤值
 */
function getMultipleFilterConditions() {
    const conditions = [];
    
    multipleFilterConditions.forEach(conditionId => {
        const conditionDiv = document.getElementById(conditionId);
        if (conditionDiv) {
            const fieldSelect = conditionDiv.querySelector('.filter-field-select');
            const valueInput = conditionDiv.querySelector('.filter-value-input');
            
            if (fieldSelect && valueInput && valueInput.value.trim()) {
                conditions.push({
                    field: fieldSelect.value,
                    value: valueInput.value.trim()
                });
            }
        }
    });
    
    return conditions;
}

/**
 * 应用多条件过滤
 */
function applyMultipleFilters(data) {
    const conditions = getMultipleFilterConditions();
    if (conditions.length === 0) return data;

    // 添加调试信息
    console.log('应用过滤条件:', conditions);
    console.log('原始数据数量:', data.length);

    const filteredData = data.filter(item => {
        return conditions.every(condition => {
            const { field, value } = condition;
            let itemValue = '';
            let isExclude = value.startsWith('!');
            let searchValue = isExclude ? value.substring(1) : value;

            // 处理中文关键词映射
            if (searchValue.toLowerCase().includes('系统变量')) {
                searchValue = searchValue.replace(/系统变量/gi, 'sv:');
            }

            switch (field) {
                case 'data':
                    itemValue = enhancedApp.getItemText(item).toLowerCase();
                    break;
                case 'messageId':
                    // 处理报文ID，支持多种格式（十六进制、十进制等）
                    let messageId = item.messageId || '';
                    // 如果是十六进制格式，转换为小写进行比较
                    if (messageId.startsWith('0x') || /^[0-9a-fA-F]+$/.test(messageId)) {
                        messageId = messageId.toLowerCase();
                    }
                    itemValue = messageId.toLowerCase();
                    break;
                case 'protocol':
                    itemValue = (item.protocol || '').toLowerCase();
                    break;
                case 'channel':
                    itemValue = (item.channel || '').toLowerCase();
                    break;
                case 'direction':
                    itemValue = (item.direction || '').toLowerCase();
                    break;
                case 'errorType':
                    itemValue = enhancedApp.getErrorType(item).toLowerCase();
                    break;
                default:
                    return true;
            }

            // 改进搜索逻辑，支持更灵活的匹配
            let searchValueLower = searchValue.toLowerCase();
            let itemValueLower = itemValue.toLowerCase();
            
            // 对于报文ID，支持多种匹配方式
            if (field === 'messageId') {
                // 移除可能的0x前缀进行比较
                let cleanSearchValue = searchValueLower.replace(/^0x/, '');
                let cleanItemValue = itemValueLower.replace(/^0x/, '');
                
                // 支持完全匹配、部分匹配、十六进制匹配
                const exactMatch = itemValueLower === searchValueLower;
                const partialMatch = itemValueLower.includes(searchValueLower);
                const hexMatch = cleanItemValue === cleanSearchValue;
                
                const matches = exactMatch || partialMatch || hexMatch;
                return isExclude ? !matches : matches;
            } else {
                // 其他字段使用普通的包含匹配
                const containsValue = itemValueLower.includes(searchValueLower);
                return isExclude ? !containsValue : containsValue;
            }
        });
    });
    
    // 添加调试信息
    console.log('过滤后数据数量:', filteredData.length);
    return filteredData;
}

// 全局函数
window.sortTable = function(columnIndex) {
    enhancedApp.sortTable(columnIndex);
};

window.applyFilters = function() {
    enhancedApp.applyFilters();
};

window.clearFilters = function() {
    enhancedApp.clearFilters();
};

window.applyPreset = function(presetName) {
    enhancedApp.applyPreset(presetName);
};

window.showStatistics = function() {
    enhancedApp.showStatistics();
};

window.closeModal = function(modalId) {
    enhancedApp.closeModal(modalId);
};

window.exportData = function() {
    enhancedApp.exportData();
};

window.refreshData = function() {
    enhancedApp.refreshData();
};

window.toggleTraceFolding = function() {
    enhancedApp.toggleTraceFolding();
};

window.exportToCSV = function() {
    enhancedApp.exportToCSV();
};

window.exportToJSON = function() {
    enhancedApp.exportToJSON();
};

window.exportFilteredData = function() {
    enhancedApp.exportData();
};

window.exportStatistics = function() {
    enhancedApp.exportStatistics();
};

// 多条件过滤全局函数
window.addFilterCondition = addFilterCondition;

window.removeFilterCondition = removeFilterCondition;
window.clearAllMultipleFilters = clearAllMultipleFilters;

// 初始化增强版应用程序
const enhancedApp = new EnhancedCANOELogApp();

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 全局函数 - 清除文件相关
function showClearFileConfirm() {
    const dialog = document.getElementById('clearFileConfirm');
    if (dialog) {
        dialog.classList.add('show');
    }
}

function hideClearFileConfirm() {
    const dialog = document.getElementById('clearFileConfirm');
    if (dialog) {
        dialog.classList.remove('show');
    }
}

function clearLoadedFile() {
    if (window.enhancedApp) {
        // 清除文件输入
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.value = '';
        }

        // 清除数据
        window.enhancedApp.logData = [];
        window.enhancedApp.filteredData = [];
        window.enhancedApp.originalFilteredData = [];
        window.enhancedApp.isTraceFolded = false;

        // 清除显示
        window.enhancedApp.displayData([]);
        window.enhancedApp.updateStatistics();
        window.enhancedApp.updateTraceFoldingUI();

        // 清除文件名显示
        const fileNameElement = document.getElementById('selectedFileName');
        if (fileNameElement) {
            fileNameElement.innerHTML = '';
        }

        // 隐藏确认对话框
        hideClearFileConfirm();

        // 显示通知
        window.enhancedApp.showNotification('文件已清除', 'info');
    }
}

// 初始化应用程序
document.addEventListener('DOMContentLoaded', function() {
    window.enhancedApp = new EnhancedCANOELogApp();
    
    // 设置全局函数
    window.handleFileUpload = (event) => window.enhancedApp.handleFileUpload(event);
    window.applyFilters = () => window.enhancedApp.applyFilters();
    window.clearFilters = () => window.enhancedApp.clearFilters();
    window.sortTable = (columnIndex) => window.enhancedApp.sortTable(columnIndex);
    window.showStatistics = () => window.enhancedApp.showStatistics();
    window.closeModal = (modalId) => window.enhancedApp.closeModal(modalId);
    window.refreshData = () => window.enhancedApp.refreshData();
    window.exportToCSV = () => window.enhancedApp.exportToCSV();
    window.exportToJSON = () => window.enhancedApp.exportToJSON();
    window.exportFilteredData = () => window.enhancedApp.exportFilteredData();
    window.exportStatistics = () => window.enhancedApp.exportStatistics();
    window.toggleTimeDisplay = () => window.enhancedApp.toggleTimeDisplay();
    window.toggleTraceFolding = () => window.enhancedApp.toggleTraceFolding();
    window.applyPreset = (presetName) => window.enhancedApp.applyPreset(presetName);
    
    // 多条件过滤相关函数
    window.addFilterCondition = addFilterCondition;
    window.removeFilterCondition = removeFilterCondition;
    window.clearAllMultipleFilters = clearAllMultipleFilters;
    
    // 清除文件相关函数
    window.showClearFileConfirm = showClearFileConfirm;
    window.hideClearFileConfirm = hideClearFileConfirm;
    window.clearLoadedFile = clearLoadedFile;
});

/**
 * 切换语言
 */
function changeLanguage(language) {
    currentLanguage = language;
    updateLanguageUI();
}

/**
 * 更新界面语言
 */
function updateLanguageUI() {
    const lang = translations[currentLanguage];
    
    // 更新标题
    document.title = lang.title;
    
    // 更新头部信息
    const headerTitle = document.querySelector('.header-title h1');
    if (headerTitle) {
        headerTitle.innerHTML = `<i class="fas fa-chart-line"></i> ${lang.title}`;
    }
    
    const headerSubtitle = document.querySelector('.header-title p');
    if (headerSubtitle) {
        headerSubtitle.textContent = lang.subtitle;
    }
    
    const headerAuthor = document.querySelector('.header-right p:first-of-type');
    if (headerAuthor) {
        headerAuthor.textContent = lang.author;
    }
    
    const headerVersion = document.querySelector('.header-right p:last-of-type');
    if (headerVersion) {
        headerVersion.textContent = lang.version;
    }
    
    // 更新模块标题
    const operationModuleTitle = document.querySelector('.operation-module .module-title');
    if (operationModuleTitle) {
        operationModuleTitle.textContent = lang.operation_module;
    }
    
    const fileModuleTitle = document.querySelector('.file-module .module-title');
    if (fileModuleTitle) {
        fileModuleTitle.textContent = lang.file_module;
    }
    
    const exportModuleTitle = document.querySelector('.export-module .module-title');
    if (exportModuleTitle) {
        exportModuleTitle.textContent = lang.export_module;
    }
    
    const logDataTitle = document.querySelector('.table-header h3');
    if (logDataTitle) {
        logDataTitle.innerHTML = `<i class="fas fa-table"></i> ${lang.log_data}`;
    }
    
    // 更新按钮文本
    const toggleTimeBtn = document.querySelector('button[onclick="toggleTimeDisplay()"]');
    if (toggleTimeBtn) {
        toggleTimeBtn.innerHTML = `<i class="fas fa-clock"></i> ${lang.toggle_time_mode}`;
    }
    
    const foldDataBtn = document.querySelector('button[onclick="toggleTraceFolding()"]');
    if (foldDataBtn) {
        foldDataBtn.innerHTML = `<i class="fas fa-compress-alt"></i> ${lang.fold_data}`;
    }
    
    const refreshDataBtn = document.querySelector('button[onclick="refreshData()"]');
    if (refreshDataBtn) {
        refreshDataBtn.innerHTML = `<i class="fas fa-sync-alt"></i> ${lang.refresh_data}`;
    }
    
    const selectFileBtn = document.querySelector('button[onclick="document.getElementById(\'fileInput\').click()"]');
    if (selectFileBtn) {
        selectFileBtn.innerHTML = `<i class="fas fa-folder-open"></i> ${lang.select_file}`;
    }
    
    const clearFileBtn = document.querySelector('button[onclick="showClearFileConfirm()"]');
    if (clearFileBtn) {
        clearFileBtn.innerHTML = `<i class="fas fa-trash"></i> ${lang.clear_file}`;
    }
    
    // 更新导出按钮
    const exportCSVBtn = document.querySelector('button[onclick="exportToCSV()"]');
    if (exportCSVBtn) {
        exportCSVBtn.innerHTML = `<i class="fas fa-file-csv"></i> ${lang.export_csv}`;
    }
    
    const exportJSONBtn = document.querySelector('button[onclick="exportToJSON()"]');
    if (exportJSONBtn) {
        exportJSONBtn.innerHTML = `<i class="fas fa-file-code"></i> ${lang.export_json}`;
    }
    
    const exportFilteredBtn = document.querySelector('button[onclick="exportFilteredData()"]');
    if (exportFilteredBtn) {
        exportFilteredBtn.innerHTML = `<i class="fas fa-filter"></i> ${lang.export_filtered}`;
    }
    
    const exportStatsBtn = document.querySelector('button[onclick="exportStatistics()"]');
    if (exportStatsBtn) {
        exportStatsBtn.innerHTML = `<i class="fas fa-chart-bar"></i> ${lang.export_statistics}`;
    }
    
    const showStatsBtn = document.querySelector('button[onclick="showStatistics()"]');
    if (showStatsBtn) {
        showStatsBtn.innerHTML = `<i class="fas fa-chart-pie"></i>`;
        showStatsBtn.title = lang.show_statistics;
    }
    
    // 更新统计标签
    const compactStats = document.querySelectorAll('.compact-stat .label');
    compactStats.forEach(label => {
        const text = label.textContent.trim();
        if (text === '总报文' || text === '總訊息' || text === 'Total Messages' || text === 'Gesamtnachrichten') {
            label.textContent = lang.total_messages;
        } else if (text === 'CAN') {
            label.textContent = lang.can;
        } else if (text === 'CANFD') {
            label.textContent = lang.canfd;
        } else if (text === '错误帧' || text === '錯誤幀' || text === 'Error Frames' || text === 'Fehlerrahmen') {
            label.textContent = lang.error_frames;
        } else if (text === '总记录数' || text === '總記錄數' || text === 'Total Records' || text === 'Gesamtaufzeichnungen') {
            label.textContent = lang.total_records;
        } else if (text === '显示记录数' || text === '顯示記錄數' || text === 'Displayed Records' || text === 'Angezeigte Aufzeichnungen') {
            label.textContent = lang.displayed_records;
        }
    });
    
    // 更新过滤条件标题
    const filterConditionsTitle = document.querySelector('.filters-panel h3');
    if (filterConditionsTitle) {
        filterConditionsTitle.textContent = lang.filter_conditions;
    }
    
    // 更新过滤条件标签
    const filterLabels = document.querySelectorAll('.filter-group label');
    filterLabels.forEach(label => {
        const text = label.textContent.trim();
        if (text === '协议类型' || text === '協定類型' || text === 'Protocol Type' || text === 'Protokolltyp') {
            label.textContent = lang.protocol_type;
        } else if (text === '通道号' || text === '通道號' || text === 'Channel Number' || text === 'Kanalnummer') {
            label.textContent = lang.channel_number;
        } else if (text === '传输方向' || text === '傳輸方向' || text === 'Transmission Direction' || text === 'Übertragungsrichtung') {
            label.textContent = lang.transmission_direction;
        } else if (text === '报文ID' || text === '訊息ID' || text === 'Message ID' || text === 'Nachrichten-ID') {
            label.textContent = lang.message_id;
        } else if (text === '开始时间' || text === '開始時間' || text === 'Start Time' || text === 'Startzeit') {
            label.textContent = lang.start_time;
        } else if (text === '结束时间' || text === '結束時間' || text === 'End Time' || text === 'Endzeit') {
            label.textContent = lang.end_time;
        } else if (text === '数据内容' || text === '資料內容' || text === 'Data Content' || text === 'Dateninhalt') {
            label.textContent = lang.data_content;
        } else if (text === '错误类型' || text === '錯誤類型' || text === 'Error Type' || text === 'Fehlertyp') {
            label.textContent = lang.error_type;
        } else if (text === '系统消息类型' || text === '系統訊息類型' || text === 'System Message Type' || text === 'Systemnachrichtentyp') {
            label.textContent = lang.system_message_type;
        }
    });
    
    // 更新过滤条件选项
    const filterOptions = document.querySelectorAll('.filter-group select option');
    filterOptions.forEach(option => {
        const text = option.textContent.trim();
        if (text === '全部' || text === '全部' || text === 'All' || text === 'Alle') {
            option.textContent = lang.all;
        } else if (text === '发送(Tx)' || text === '發送(Tx)' || text === 'Send(Tx)' || text === 'Senden(Tx)') {
            option.textContent = lang.send;
        } else if (text === '接收(Rx)' || text === '接收(Rx)' || text === 'Receive(Rx)' || text === 'Empfangen(Rx)') {
            option.textContent = lang.receive;
        } else if (text === '错误帧' || text === '錯誤幀' || text === 'Error Frame' || text === 'Fehlerrahmen') {
            option.textContent = lang.error_frame;
        } else if (text === '正常帧' || text === '正常幀' || text === 'Normal Frame' || text === 'Normaler Rahmen') {
            option.textContent = lang.normal_frame;
        }
    });
    
    // 更新表格列标题
    const tableHeaders = document.querySelectorAll('.log-table th');
    tableHeaders.forEach((header, index) => {
        const text = header.textContent.replace(/\s*<i.*?<\/i>\s*/g, '').trim();
        if (text === '序号' || text === '序號' || text === 'Sequence' || text === 'Sequenz') {
            header.innerHTML = `${lang.sequence} <i class="fas fa-sort"></i>`;
        } else if (text === '时间戳' || text === '時間戳' || text === 'Timestamp' || text === 'Zeitstempel') {
            header.innerHTML = `${lang.timestamp} <i class="fas fa-sort"></i>`;
        } else if (text === '协议类型' || text === '協定類型' || text === 'Protocol Type' || text === 'Protokolltyp') {
            header.innerHTML = `${lang.protocol_type} <i class="fas fa-sort"></i>`;
        } else if (text === '通道号' || text === '通道號' || text === 'Channel' || text === 'Kanal') {
            header.innerHTML = `${lang.channel} <i class="fas fa-sort"></i>`;
        } else if (text === '传输方向' || text === '傳輸方向' || text === 'Direction' || text === 'Richtung') {
            header.innerHTML = `${lang.direction} <i class="fas fa-sort"></i>`;
        } else if (text === '报文ID' || text === '訊息ID' || text === 'Message ID' || text === 'Nachrichten-ID') {
            header.innerHTML = `${lang.message_id} <i class="fas fa-sort"></i>`;
        } else if (text === 'FDF') {
            header.innerHTML = `${lang.fdf} <i class="fas fa-sort"></i>`;
        } else if (text === 'BRS') {
            header.innerHTML = `${lang.brs} <i class="fas fa-sort"></i>`;
        } else if (text === 'ESI') {
            header.innerHTML = `${lang.esi} <i class="fas fa-sort"></i>`;
        } else if (text === 'DLC') {
            header.innerHTML = `${lang.dlc} <i class="fas fa-sort"></i>`;
        } else if (text === '数据段' || text === '資料段' || text === 'Data Segment' || text === 'Datensegment') {
            header.innerHTML = `${lang.data_segment} <i class="fas fa-sort"></i>`;
        } else if (text === 'ASCII数据' || text === 'ASCII資料' || text === 'ASCII Data' || text === 'ASCII-Daten') {
            header.innerHTML = `${lang.ascii_data} <i class="fas fa-sort"></i>`;
        } else if (text === '总线负载' || text === '匯流排負載' || text === 'Bus Load' || text === 'Bus-Last') {
            header.innerHTML = `${lang.bus_load} <i class="fas fa-sort"></i>`;
        } else if (text === '错误计数' || text === '錯誤計數' || text === 'Error Count' || text === 'Fehleranzahl') {
            header.innerHTML = `${lang.error_count} <i class="fas fa-sort"></i>`;
        } else if (text === '时间同步' || text === '時間同步' || text === 'Timing' || text === 'Timing') {
            header.innerHTML = `${lang.timing} <i class="fas fa-sort"></i>`;
        } else if (text === 'CRC校验' || text === 'CRC校驗' || text === 'CRC Check' || text === 'CRC-Prüfung') {
            header.innerHTML = `${lang.crc} <i class="fas fa-sort"></i>`;
        } else if (text === '其他信息' || text === '其他資訊' || text === 'Other Info' || text === 'Andere Info') {
            header.innerHTML = `${lang.other_info} <i class="fas fa-sort"></i>`;
        }
    });
    
    // 更新多条件过滤按钮
    const addFilterBtn = document.querySelector('.add-filter-btn');
    if (addFilterBtn) {
        addFilterBtn.innerHTML = `<i class="fas fa-plus"></i> ${lang.add_filter}`;
    }
    
    const clearAllFiltersBtn = document.querySelector('.clear-all-filters-btn');
    if (clearAllFiltersBtn) {
        clearAllFiltersBtn.innerHTML = `<i class="fas fa-trash"></i> ${lang.clear_all_filters}`;
    }
    
    // 更新多条件过滤标题
    const multipleFiltersTitle = document.querySelector('.multiple-filters-section h4');
    if (multipleFiltersTitle) {
        multipleFiltersTitle.innerHTML = `<i class="fas fa-filter"></i> ${lang.multiple_filters}`;
    }
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', function() {
    // 设置默认语言
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
    
    // 初始化界面语言
    updateLanguageUI();
});