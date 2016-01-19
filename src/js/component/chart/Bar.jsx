import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIBar Class
//-----------------------------------------------------------------------------------------------
export default class UIBar extends UIChart {
	
	getChartOption(){
		/*let charCloudOption = {
			tooltip: {show: true},
			legend: {data:['销量']},
			xAxis: [
				{
					type: 'category',
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					"name": "销量",
					"type": "bar",
					"data": [5, 20, 40, 10, 10, 20]
				}
			]
		};*/
		
    return {
    	title: {
    		text: "某地区蒸发量和降水量",
    		subtext: "纯属虚构"
    	},
    	tooltip: {
    		trigger: "axis"
    	},
    	legend: {
    		data: ["visitor", "customer"]
    	},
    	toolbox: {
    		show: true,
    		feature: {
    			mark: {show: true},
    			dataView: {show: true, readOnly: false},
    			magicType: {show: true, type: ["line", "bar"]},
    			restore: {show: true},
    			saveAsImage: {show: true}
    		}
    	},
    	calculable: true,
    	xAxis: [
    		{
    			type: 'category',
    			data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
    			type: 'bar',
    			data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
    			markPoint: {
    				data: [
    					{type: 'max', name: 'max'},
    					{type: 'min', name: 'min'}
    				]
    			},
    			markLine: {
    				data: [
    					{type: 'average', name: 'Average'}
    				]
    			}
    		},
    		{
    			name: 'customer',
    			type: 'bar',
    			data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
    			markPoint: {
    				data: [
    					{name: 'max', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18},
    					{name: 'min', value: 2.3, xAxis: 11, yAxis: 3}
    				]
    			},
    			markLine: {
    				data: [
    					{type: 'average', name: 'Average'}
    				]
    			}
    		}
    	]
		};
	}
	
};

UIBar.propTypes = $.extend({}, UIChart.propTypes, {
	// 组合名称，双数值轴时无效，多组数据的堆积图时使用，eg：stack:'group1'，则series数组中stack值等于'group1'的数据做堆积计算
	stack: React.PropTypes.string,
	
	// xAxis坐标轴数组的索引，指定该系列数据所用的横坐标轴
	xAxisIndex: React.PropTypes.number,
	
	// yAxis坐标轴数组的索引，指定该系列数据所用的纵坐标轴
	yAxisIndex: React.PropTypes.number,
	
	// 柱间距离，默认为柱形宽度的30%，可设固定值
	barGap: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	
	// 类目间柱形距离，默认为类目间距的20%，可设固定值
	barCategoryGap: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	
	// 柱条最小高度，可用于防止某item的值过小而影响交互
	barMinHeight: React.PropTypes.number,
	
	// 柱条（K线蜡烛）宽度，不设时自适应
	barWidth: React.PropTypes.number,
	
	// 柱条（K线蜡烛）最大宽度，不设时自适应
	barMaxWidth: React.PropTypes.number,
	
	/*
	 * 标志图形类型，默认自动选择（8种类型循环使用，不显示标志图形可设为'none'），默认循环选择类型有：
	 * 'circle' | 'rectangle' | 'triangle' | 'diamond' | 'emptyCircle' | 'emptyRectangle' | 'emptyTriangle' | 'emptyDiamond'
	 * 另外，还支持五种更特别的标志图形'heart'（心形）、'droplet'（水滴）、'pin'（标注）、'arrow'（箭头）和'star'（五角星），这并不出现在常规的8类图形中，但无论是在系列级还是数据级上你都可以指定使用，同时，'star' + n（n>=3)可变化出N角星，如指定为'star6'则可以显示6角星
	 * 自1.3.5起支持symbol为自定义图片，格式为'image://' + '图片路径'， 如'image://../asset/ico/favicon.png' 详见例子 this 》
	 */
	//symbol: React.PropTypes.string,
	
	// 标志图形大小，可计算特性启用情况建议增大以提高交互体验。可以是单个值，如果在 symbol 为图片的时候想要分别设置宽高防止图片被拉伸，可以使用数组，其中数组第一个值是高，第二个值是宽。 实现气泡图时symbolSize需为Function，气泡大小取决于该方法返回值，传入参数为当前数据项（value数组）。
	//symbolSize: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.func, React.PropTypes.array]),
	
	// 标志图形旋转角度[-180,180]
	//symbolRotate: React.PropTypes.number,
	
	// 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略），如需全部显示可把showAllSymbol设为true
	//showAllSymbol: React.PropTypes.bool,
	
	// 平滑曲线显示，smooth为true时lineStyle不支持虚线
	//smooth: React.PropTypes.bool,
	
	// ECharts 会在折线图的数据数量大于实际显示的像素宽度（高度）的时候会启用优化，对显示在一个像素宽度内的数据做筛选，该选项是指明数据筛选的策略。
	// 可选 'nearest', 'min', 'max', 'average'。或者是使用自定义的筛选函数
	//dataFilter: React.PropTypes.bool,
	
	// 启动大规模散点图
	//large: React.PropTypes.bool,
	
	// 大规模散点图自动切换阀值，large为true下有效
	//largeThreshold: React.PropTypes.number,
	
	// 是否启用图例（legend）hover时的联动响应（高亮显示）
	legendHoverLink: React.PropTypes.bool,
}),

UIBar.defaultProps = $.extend({}, UIChart.defaultProps, {
	stack: null,
	xAxisIndex: 0,
	yAxisIndex: 0,
	barGap: "30%",
	barCategoryGap: "20%",
	barMinHeight: 0,
	barWidth: "auto", //自适应
	barMaxWidth: "auto", //自适应
	//symbol: null,
	//symbolSize: 2,// 2|4
	//symbolRotate: null,
	//showAllSymbol: false,
	//smooth: false,
	//dataFilter: "nearst",
	//large: false,
	//largeThreshold: 2000,
	legendHoverLink: true,
});
