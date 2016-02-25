import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UILine Class
//-----------------------------------------------------------------------------------------------
export default class UILine extends UIChart {
	
	getChartOption(){
		return {
			tooltip: {
				trigger: "axis"
			},
			
			legend: {
				data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
			},
			
			toolbox: {
				show: true,
				feature: {
					mark: {show: true},
					dataView: {show: true, readOnly: false},
					magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
					restore: {show: true},
					saveAsImage: {show: true}
				}
			},
			
			calculable: true,
			
			xAxis: [
				{
					type: 'category',
					boundaryGap: false,
					data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: 'visitor',
					type: 'line',
					stack: 'gross',
					data: [120, 132, 101, 134, 90, 230, 210]
				},
				{
					name: '联盟广告',
					type: 'line',
					stack: '总量',
					data: [220, 182, 191, 234, 290, 330, 310]
				},
				{
					name: 'customer',
					type: 'line',
					stack: 'gross',
					data: [150, 232, 201, 154, 190, 330, 410]
			    },
				{
					name: '直接访问',
					type: 'line',
					stack: '总量',
					data: [320, 332, 301, 334, 390, 330, 320]
				},
				{
					name: '搜索引擎',
					type: 'line',
					stack: '总量',
					data: [820, 932, 901, 934, 1290, 1330, 1320]
				}
			]
		};
	}
	
	getChartOption2(){
		return {
		    title : {
		        text: '未来一周气温变化',
		        subtext: '纯属虚构'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['最高气温','最低气温']
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['周一','周二','周三','周四','周五','周六','周日']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel : {
		                formatter: '{value} °C'
		            }
		        }
		    ],
		    series : [
		        {
		            name:'最高气温',
		            type:'line',
		            data:[11, 11, 15, 13, 12, 13, 10],
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        },
		        {
		            name:'最低气温',
		            type:'line',
		            data:[1, -2, 2, 5, 3, 2, 0],
		            markPoint : {
		                data : [
		                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name : '平均值'}
		                ]
		            }
		        }
		    ]
		};
	}
	
}

UILine.propTypes = $.extend({}, UIChart.propTypes, {
	
	// 组合名称，双数值轴时无效，多组数据的堆积图时使用，eg：stack:'group1'，则series数组中stack值等于'group1'的数据做堆积计算
	stack: React.PropTypes.string,
	
	// xAxis坐标轴数组的索引，指定该系列数据所用的横坐标轴
	xAxisIndex: React.PropTypes.number,
	
	// yAxis坐标轴数组的索引，指定该系列数据所用的纵坐标轴
	yAxisIndex: React.PropTypes.number,
	
	// 柱间距离，默认为柱形宽度的30%，可设固定值
	//barGap: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	
	// 类目间柱形距离，默认为类目间距的20%，可设固定值
	//barCategoryGap: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	
	// 柱条最小高度，可用于防止某item的值过小而影响交互
	//barMinHeight: React.PropTypes.number,
	
	// 柱条（K线蜡烛）宽度，不设时自适应
	//barWidth: React.PropTypes.number,
	
	// 柱条（K线蜡烛）最大宽度，不设时自适应
	//barMaxWidth: React.PropTypes.number,
	
	/*
	 * 标志图形类型，默认自动选择（8种类型循环使用，不显示标志图形可设为'none'），默认循环选择类型有：
	 * 'circle' | 'rectangle' | 'triangle' | 'diamond' | 'emptyCircle' | 'emptyRectangle' | 'emptyTriangle' | 'emptyDiamond'
	 * 另外，还支持五种更特别的标志图形'heart'（心形）、'droplet'（水滴）、'pin'（标注）、'arrow'（箭头）和'star'（五角星），这并不出现在常规的8类图形中，但无论是在系列级还是数据级上你都可以指定使用，同时，'star' + n（n>=3)可变化出N角星，如指定为'star6'则可以显示6角星
	 * 自1.3.5起支持symbol为自定义图片，格式为'image://' + '图片路径'， 如'image://../asset/ico/favicon.png' 详见例子 this 》
	 */
	symbol: React.PropTypes.string,
	
	// 标志图形大小，可计算特性启用情况建议增大以提高交互体验。可以是单个值，如果在 symbol 为图片的时候想要分别设置宽高防止图片被拉伸，可以使用数组，其中数组第一个值是高，第二个值是宽。 实现气泡图时symbolSize需为Function，气泡大小取决于该方法返回值，传入参数为当前数据项（value数组）。
	symbolSize: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.func, React.PropTypes.array]),
	
	// 标志图形旋转角度[-180,180]
	symbolRotate: React.PropTypes.number,
	
	// 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略），如需全部显示可把showAllSymbol设为true
	showAllSymbol: React.PropTypes.bool,
	
	// 平滑曲线显示，smooth为true时lineStyle不支持虚线
	smooth: React.PropTypes.bool,
	
	// ECharts 会在折线图的数据数量大于实际显示的像素宽度（高度）的时候会启用优化，对显示在一个像素宽度内的数据做筛选，该选项是指明数据筛选的策略。
	// 可选 'nearest', 'min', 'max', 'average'。或者是使用自定义的筛选函数
	dataFilter: React.PropTypes.bool,
	
	// 启动大规模散点图
	//large: React.PropTypes.bool,
	
	// 大规模散点图自动切换阀值，large为true下有效
	//largeThreshold: React.PropTypes.number,
	
	// 是否启用图例（legend）hover时的联动响应（高亮显示）
	legendHoverLink: React.PropTypes.bool,
	
});

UILine.defaultProps = $.extend({}, UIChart.defaultProps, {
	stack: null,
	xAxisIndex: 0,
	yAxisIndex: 0,
	//barGap: "30%",
	//barCategoryGap: "20%",
	//barMinHeight: 0,
	//barWidth: "auto", //自适应
	//barMaxWidth: "auto", //自适应
	symbol: null,
	symbolSize: 2,// 2|4
	symbolRotate: null,
	showAllSymbol: false,
	smooth: false,
	dataFilter: "nearst",
	//large: false,
	//largeThreshold: 2000,
	legendHoverLink: true,
});

