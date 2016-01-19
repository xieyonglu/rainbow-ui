import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UITreeChart Class
//-----------------------------------------------------------------------------------------------
export default class UITreeChart extends UIChart {
	
	getChartOption(){
		return {
			title: {
				text: '手机品牌',
				subtext: '线、节点样式'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{b}: {c}"
			},
			toolbox: {
				show: true,
				feature: {
					mark: {show: true},
					dataView: {show: true, readOnly: false},
					restore: {show: true},
					saveAsImage: {show: true}
				}
			},
			calculable : false,
			
			series: [
				{
					name: '树图',
					type: 'tree',
					orient: 'horizontal',  // vertical horizontal
					rootLocation: {x: 100, y: '60%'}, // 根节点位置  {x: 'center',y: 10}
					nodePadding: this.props.nodePadding,
					symbol: 'circle',
					symbolSize: 40,
					itemStyle: {
						normal: {
							label: {
								show: true,
								position: 'inside',
								textStyle: {
									color: '#cc9999',
									fontSize: 15,
									fontWeight:  'bolder'
								}
							},
							lineStyle: {
								color: '#000',
								width: 1,
								type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
							}
						},
						emphasis: {
							label: {
								show: true
							}
						}
					},
					data: [
		                {
		                    name: '手机',
		                    value: 6,
		                    symbolSize: [90, 70],
		                    symbol: 'image://http://www.iconpng.com/png/ecommerce-business/iphone.png',
		                    itemStyle: {
		                        normal: {
		                            label: {
		                                show: false
		                            }
		                        }
		                    },
		                    children: [
		                        {
		                            name: '小米',
		                            value: 4,
		                            symbol: 'image://http://pic.58pic.com/58pic/12/36/51/66d58PICMUV.jpg',
		                            itemStyle: {
		                                normal: {
		                                    label: {
		                                        show: false
		                                    }
		                                }
		                            },
		                            symbolSize: [60, 60],
		                            children: [
		                                {
		                                    name: '小米1',
		                                    symbol: 'circle',
		                                    symbolSize: 20,
		                                    value: 4,
		                                    itemStyle: {
		                                        normal: {
		                                            color: '#fa6900',
		                                            label: {
		                                                show: true,
		                                                position: 'right'
		                                            },
		                                            
		                                        },
		                                        emphasis: {
		                                            label: {
		                                                show: false
		                                            },
		                                            borderWidth: 0
		                                        }
		                                    }
		                                },
		                                {
		                                    name: '小米2',
		                                    value: 4,
		                                    symbol: 'circle',
		                                    symbolSize: 20,
		                                    itemStyle: {
		                                        normal: {
		                                            label: {
		                                                show: true,
		                                                position: 'right',
		                                                formatter: "{b}"
		                                            },
		                                            color: '#fa6900',
		                                            borderWidth: 2,
		                                            borderColor: '#cc66ff'
		
		                                        },
		                                        emphasis: {
		                                            borderWidth: 0
		                                        }
		                                    }
		                                },
		                                {
		                                    name: '小米3',
		                                    value: 2,
		                                    symbol: 'circle',
		                                    symbolSize: 20,
		                                    itemStyle: {
		                                        normal: {
		                                            label: {
		                                                position: 'right'
		                                            },
		                                            color: '#fa6900',
		                                            brushType: 'stroke',
		                                            borderWidth: 1,
		                                            borderColor: '#999966',
		                                        },
		                                        emphasis: {
		                                            borderWidth: 0
		                                        }
		                                    }
		                                }
		                            ]
		                        },
		                        {
		                            name: '苹果',
		                            symbol: 'image://http://www.viastreaming.com/images/apple_logo2.png',
		                            symbolSize: [60, 60],
		                            itemStyle: {
		                                normal: {
		                                    label: {
		                                        show: false
		                                    }
		                                    
		                                }
		                            },
		                            value: 4
		                        },
		                        {
		                            name: '华为',
		                            symbol: 'image://http://market.huawei.com/hwgg/logo_cn/download/logo.jpg',
		                            symbolSize: [60, 60],
		                            itemStyle: {
		                                normal: {
		                                    label: {
		                                        show: false
		                                    }
		                                    
		                                }
		                            },
		                            value: 2
		                        },
		                        {
		                            name: '联想',
		                            symbol: 'image://http://www.lenovo.com.cn/HomeUpload/Home001/6d94ee9a20140714.jpg',
		                            symbolSize: [100, 40],
		                            itemStyle: {
		                                normal: {
		                                    label: {
		                                        show: false
		                                    }
		                                    
		                                }
		                            },
		                            value: 2
		                        }
		                    ]
		                }
		            ]
		        }
		    ]
		};
	}
	
}

UITreeChart.propTypes = $.extend({}, UIChart.propTypes, {
	// 根节点坐标，支持绝对值（px）、字符和百分比
	rootLocation: React.PropTypes.object,
	
	// 层间距
	layerPadding: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 节点间距
	nodePadding: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 树的方向可选：'vertical' | 'horizontal' | 'radial'
	orient: React.PropTypes.oneOf(["vertical", "horizontal", "radial"]),
	
	// 方向反转，可选：'inverse'
	direction: React.PropTypes.string,
	
	// 是否开启滚轮缩放和拖拽漫游，默认为false（关闭），其他有效输入为true（开启），'scale'（仅开启滚轮缩放），'move'（仅开启拖拽漫游）
	roam: React.PropTypes.oneOf(["false", "true", "scale", "move"]),
	
	// 同series（直角系）
	symbol: React.PropTypes.string,
	
	// 所有该类目的节点的大小
	symbolSize: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 参见itemStyle
	itemStyle: React.PropTypes.object,
	
	data: React.PropTypes.object
});

UITreeChart.defaultProps = $.extend({}, UIChart.defaultProps, {
	rootLocation: null,
	layerPadding: 100,
	nodePadding: 30,
	orient: "vertical",
	direction: "",
	roam: false,
	symbol: "circle",
	symbolSize: 20,
	itemStyle: {},
	data: []
});
