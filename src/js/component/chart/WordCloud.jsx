import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIWordCloud Class
//-----------------------------------------------------------------------------------------------
export default class UIWordCloud extends UIChart {
	
	getChartOption(){
		var _self = this;
		var data = [
			{name: "Sam S Club", value: 10000, itemStyle: this.createRandomItemStyle()},
			{name: "Macys", value: 6181, itemStyle: this.createRandomItemStyle()},
			{name: "Amy Schumer", value: 4386, itemStyle: this.createRandomItemStyle()},
			{name: "Jurassic World", value: 4055, itemStyle: this.createRandomItemStyle()},
			{name: "Charter Communications", value: 2467, itemStyle: this.createRandomItemStyle()},
			{name: "Chick Fil A", value: 2244, itemStyle: this.createRandomItemStyle()},
			{name: "Planet Fitness", value: 1898, itemStyle: this.createRandomItemStyle()},
			{name: "Pitch Perfect", value: 1484, itemStyle: this.createRandomItemStyle()},
			{name: "Express", value: 1112, itemStyle: this.createRandomItemStyle()},
			{name: "Home", value: 965, itemStyle: this.createRandomItemStyle()},
			{name: "Johnny Depp", value: 847, itemStyle: this.createRandomItemStyle()},
			{name: "Lena Dunham", value: 582, itemStyle: this.createRandomItemStyle()},
			{name: "Lewis Hamilton", value: 555, itemStyle: this.createRandomItemStyle()},
			{name: "KXAN", value: 550, itemStyle: this.createRandomItemStyle()},
			{name: "Mary Ellen Mark", value: 462, itemStyle: this.createRandomItemStyle()},
			{name: "Farrah Abraham", value: 366, itemStyle: this.createRandomItemStyle()},
			{name: "Rita Ora", value: 360, itemStyle: this.createRandomItemStyle()},
			{name: "Serena Williams", value: 282, itemStyle: this.createRandomItemStyle()},
			{name: "NCAA baseball tournament", value: 273, itemStyle: this.createRandomItemStyle()},
			{name: "Point Break", value: 265, itemStyle: this.createRandomItemStyle()}
		];
	
		return  {
			title: {
				text: "Google Trends",
				link: "http://www.google.com/trends/hottrends"
			},
			tooltip: {
				show: true
			},
			series: [{
				name: "Google Trends",
				type: "wordCloud",
				size: this.props.size,
				textRotation: this.props.textRotation,
				textPadding: 0,
				autoSize: this.props.autoSize,
				data: data
			}]
		};
	}
	
	createRandomItemStyle() {
		return {
			normal: {
				color: 'rgb(' + [
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160)
				].join(',') + ')'
			}
		};
	}
	
}

UIWordCloud.propTypes = $.extend({}, UIChart.propTypes, {
	// 字符云中心位置，支持绝对值（px）和百分比
	center: React.PropTypes.array,
	
	// 字符云大小，支持绝对值（px）和百分比
	size: React.PropTypes.array,
	
	// 文字旋转角度可选列表，默认会随机从水平（0）和垂直（90）两个方向中选择，可以设置多个可选角度，例如 [0, -45, 45, 90]
	textRotation: React.PropTypes.array,
	
	// 字体大小自动计算配置，默认开启自动计算，程序会根据每个数据的 value 大小以及画布的大小控制字体大小以达到最佳的显示效果。minSize 可以强制最小字体。 关闭的时候字体大小取 itemStyle.normal.textStyle.fontSize，建议开启。
	autoSize: React.PropTypes.object,
	
	//
	itemStyle: React.PropTypes.object,
	
});

UIWordCloud.defaultProps = $.extend({}, UIChart.defaultProps, {
	center: ['50%', '50%'] ,
	size: ['40%', '40%'] ,
	textRotation: [0, 90],
	autoSize: {enable: true, minSize: 12} ,
	itemStyle: {},
});
