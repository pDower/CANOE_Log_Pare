 /**
 * CANOE日志解析工具配置文件
 * 作者: luotongde
 * 时间: 2025-05-14
 */

const CONFIG = {
    // 显示配置
    display: {
        maxRows: 10000, // 最大显示行数
        pageSize: 100,  // 每页显示行数
        autoRefresh: true, // 自动刷新
        showLineNumbers: true, // 显示行号
        showRawData: false, // 显示原始数据
        highlightErrors: true, // 高亮错误帧
        highlightStatus: true, // 高亮状态信息
    },

    // 过滤预设
    filterPresets: {
        // 只显示CANFD报文
        canfdOnly: {
            name: "仅CANFD报文",
            filters: {
                protocol: "CANFD"
            }
        },
        
        // 只显示发送报文
        txOnly: {
            name: "仅发送报文",
            filters: {
                direction: "Tx"
            }
        },
        
        // 只显示接收报文
        rxOnly: {
            name: "仅接收报文",
            filters: {
                direction: "Rx"
            }
        },
        
        // 只显示错误帧
        errorFramesOnly: {
            name: "仅错误帧",
            filters: {
                errorType: "error"
            }
        },
        
        // 只显示正常帧
        normalFramesOnly: {
            name: "仅正常帧",
            filters: {
                errorType: "normal"
            }
        },
        
        // 特定时间范围
        timeRange1: {
            name: "前10秒",
            filters: {
                timeEnd: "10"
            }
        },
        
        timeRange2: {
            name: "10-20秒",
            filters: {
                timeStart: "10",
                timeEnd: "20"
            }
        },
        
        // 特定报文ID
        specificIds: {
            name: "关键报文ID",
            filters: {
                messageId: "8f,551,42b,54a"
            }
        },
        
        // 包含VT7001相关内容
        vt7001Include: {
            name: "包含VT7001",
            filters: {
                data: "SV: 1 0 1 ::VTS::VT7001_"
            }
        },
        
        // 排除VT7001相关内容
        vt7001Exclude: {
            name: "排除VT7001",
            filters: {
                data: "!SV: 1 0 1 ::VTS::VT7001_"
            }
        },
        
                    // 排除所有系统变量
            excludeSystemVariables: {
                name: "排除系统变量",
                filters: {
                    data: "!SV:"
                }
            },
            
            // 排除所有系统变量（中文关键词）
            excludeSystemVariablesCN: {
                name: "排除系统变量(中文)",
                filters: {
                    data: "!系统变量"
                }
            }
    },

    // 颜色主题
    themes: {
        light: {
            background: "#ffffff",
            text: "#333333",
            border: "#dee2e6",
            header: "#f8f9fa",
            hover: "#f8f9fa",
            error: "#dc3545",
            warning: "#ffc107",
            success: "#28a745",
            info: "#17a2b8"
        },
        dark: {
            background: "#212529",
            text: "#ffffff",
            border: "#495057",
            header: "#343a40",
            hover: "#495057",
            error: "#dc3545",
            warning: "#ffc107",
            success: "#28a745",
            info: "#17a2b8"
        }
    },

    // 列配置
    columns: {
        timestamp: {
            name: "时间戳",
            width: "120px",
            sortable: true,
            filterable: true
        },
        protocol: {
            name: "协议类型",
            width: "80px",
            sortable: true,
            filterable: true
        },
        channel: {
            name: "通道号",
            width: "70px",
            sortable: true,
            filterable: true
        },
        direction: {
            name: "传输方向",
            width: "80px",
            sortable: true,
            filterable: true
        },
        messageId: {
            name: "报文ID",
            width: "80px",
            sortable: true,
            filterable: true
        },
        fdf: {
            name: "FDF",
            width: "50px",
            sortable: true,
            filterable: false
        },
        brs: {
            name: "BRS",
            width: "50px",
            sortable: true,
            filterable: false
        },
        esi: {
            name: "ESI",
            width: "50px",
            sortable: true,
            filterable: false
        },
        dlc: {
            name: "DLC",
            width: "50px",
            sortable: true,
            filterable: false
        },
        dataPayload: {
            name: "数据段",
            width: "200px",
            sortable: false,
            filterable: true
        },
        busLoad: {
            name: "总线负载",
            width: "80px",
            sortable: true,
            filterable: false
        },
        errorCounter: {
            name: "错误计数",
            width: "80px",
            sortable: true,
            filterable: false
        },
        timing: {
            name: "时间同步",
            width: "80px",
            sortable: true,
            filterable: false
        },
        crc: {
            name: "CRC校验",
            width: "100px",
            sortable: false,
            filterable: false
        },
        additionalInfo: {
            name: "其他信息",
            width: "150px",
            sortable: false,
            filterable: false
        }
    },

    // 导出配置
    export: {
        csv: {
            includeHeaders: true,
            delimiter: ",",
            encoding: "UTF-8"
        },
        json: {
            prettyPrint: true,
            includeMetadata: true
        },
        excel: {
            includeCharts: false,
            includeStatistics: true
        }
    },

    // 性能配置
    performance: {
        virtualScrolling: true, // 虚拟滚动
        debounceDelay: 300, // 防抖延迟
        maxFileSize: 100 * 1024 * 1024, // 最大文件大小 (100MB)
        chunkSize: 1000, // 分块处理大小
        workerThreads: 2 // 工作线程数
    },

    // 快捷键配置
    shortcuts: {
        "Ctrl+F": "focusFilter",
        "Ctrl+O": "openFile",
        "Ctrl+S": "saveFilter",
        "Ctrl+E": "exportData",
        "Ctrl+R": "refreshData",
        "Ctrl+Z": "undoFilter",
        "Escape": "clearFilters"
    },

    // 语言配置
    language: {
        current: "zh-CN",
        available: ["zh-CN", "en-US"],
        translations: {
            "zh-CN": {
                "fileUpload": "文件上传",
                "filters": "过滤条件",
                "export": "导出",
                "statistics": "统计信息",
                "settings": "设置",
                "help": "帮助"
            },
            "en-US": {
                "fileUpload": "File Upload",
                "filters": "Filters",
                "export": "Export",
                "statistics": "Statistics",
                "settings": "Settings",
                "help": "Help"
            }
        }
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}