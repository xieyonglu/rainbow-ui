import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIWordCloud Class
//-----------------------------------------------------------------------------------------------
export default class UIEventRiver extends UIChart {
	
	getChartOption(){
		return {
	    title: {
	    	text: 'Event River',
	    	subtext: '纯属虚构'
	    },
	    tooltip: {
	    	trigger: 'item',
	    	enterable: true
	    },
	    legend: {
	    	data: ['财经事件', '政治事件']
	    },
	    toolbox: {
	    	show: true,
	    	feature: {
	    		mark: {show: true},
	    		restore: {show: true},
	    		saveAsImage: {show: true}
	    	}
	    },
	    xAxis: [
	    	{
	    		type: "time",
	    		boundaryGap: [0.05, 0.1]
	    	}
	    ],
	    series: [
	    	{
	    		"name": "财经事件", 
	    		"type": "eventRiver", 
	    		"weight": this.props.weight, 
	    		"data": [
	                {
	                    "name": "阿里巴巴上市", 
	                    "weight": 123, 
	                    "evolution": [
	                        {
	                            "time": "2014-05-01", 
	                            "value": 14, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-02", 
	                            "value": 34, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-03", 
	                            "value": 60, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-04", 
	                            "value": 40, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-05", 
	                            "value": 10, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }
	                    ]
	                }, 
	                {
	                    "name": "阿里巴巴上市2", 
	                    "weight": 123, 
	                    "evolution": [
	                        {
	                            "time": "2014-05-02", 
	                            "value": 10, 
	                            "detail": {
	                                "link": "www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-03", 
	                            "value": 34, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-04", 
	                            "value": 40, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-05", 
	                            "value": 10, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }
	                    ]
	                }, 
	                {
	                    "name": "三星业绩暴跌", 
	                    "weight": 123, 
	                    "evolution": [
	                        {
	                            "time": "2014-05-03", 
	                            "value": 24, 
	                            "detail": {
	                                "link": "www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-04", 
	                            "value": 34, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-05", 
	                            "value": 50, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-06", 
	                            "value": 30, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-07", 
	                            "value": 20, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }
	                    ]
	                }
	            ]
	        }, 
	        {
	            "name": "政治事件", 
	            "type": "eventRiver", 
	            "weight": 123, 
	            "data": [
	                {
	                    "name": "Apec峰会", 
	                    "weight": 123, 
	                    "evolution": [
	                        {
	                            "time": "2014-05-06", 
	                            "value": 14, 
	                            "detail": {
	                                "link": "www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-07", 
	                            "value": 34, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-08", 
	                            "value": 60, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-09", 
	                            "value": 40, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-10", 
	                            "value": 20, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }
	                    ]
	                }, 
	                {
	                    "name": "运城官帮透视", 
	                    "weight": 123, 
	                    "evolution": [
	                        {
	                            "time": "2014-05-08", 
	                            "value": 4, 
	                            "detail": {
	                                "link": "www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-09", 
	                            "value": 14, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-10", 
	                            "value": 30, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-11", 
	                            "value": 20, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-12", 
	                            "value": 10, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }
	                    ]
	                }, 
	                {
	                    "name": "底层公务员收入超过副部长", 
	                    "weight": 123, 
	                    "evolution": [
	                        {
	                            "time": "2014-05-11", 
	                            "value": 4, 
	                            "detail": {
	                                "link": "www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-12", 
	                            "value": 24, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-13", 
	                            "value": 40, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-14", 
	                            "value": 20, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-15", 
	                            "value": 15, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }, 
	                        {
	                            "time": "2014-05-16", 
	                            "value": 10, 
	                            "detail": {
	                                "link": "http://www.baidu.com", 
	                                "text": "百度指数", 
	                                "img": '../asset/ico/favicon.png'
	                            }
	                        }
	                    ]
	                }
	            ]
	        }
	    ]
	};
	}
	
}

UIEventRiver.propTypes = $.extend({}, UIChart.propTypes, {
	// xAxis坐标轴数组的索引，指定该系列数据所用的横坐标轴
	xAxisIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 该事件类别的权重
	weight: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 是否启用图例（legend）hover时的联动响应（高亮显示）
	legendHoverLink: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	
	data: React.PropTypes.array
});

UIEventRiver.defaultProps = $.extend({}, UIChart.defaultProps, {
	xAxisIndex: 0,
	weight: 1,
	legendHoverLink: true,
	data: []
});
