import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIHeatMap Class
//-----------------------------------------------------------------------------------------------
export default class UIHeatMap extends UIChart {
	
	getChartOption(){
		var heatData = [];
		for (var i = 0; i < 20; ++i) {
		    heatData.push([
		        400 + Math.random() * 300,
		        5 + Math.random() * 10,
		        Math.random()
		    ]);
		}
		for (var i = 0; i < 100; ++i) {
		    heatData.push([
		        100 + Math.random() * 600,
		        150 + Math.random() * 50,
		        Math.random()
		    ]);
		}
		for (var i = 0; i < 200; ++i) {
		    heatData.push([
		        Math.random() * 1000,
		        Math.random() * 800,
		        Math.random() * 0.5
		    ]);
		}
		return {
			title: {
				text: '热力图自定义样式'
			},
			series: [
				{
					type: 'heatmap',
					data: heatData,
					hoverable: false,
					gradientColors: [{
						offset: 0.4,
						color: 'green'
					}, {
						offset: 0.5,
						color: 'yellow'
					}, {
						offset: 0.8,
						color: 'orange'
					}, {
						offset: 1,
						color: 'red'
					}],
					minAlpha: this.props.minAlpha,
					valueScale: this.props.valueScale,
					opacity: this.props.opacity
				}
			]
		};
	}
	
}

UIHeatMap.propTypes = $.extend({}, UIChart.propTypes, {
	
	// 一个热力图数据点的模糊范围，单位是像素
	blurSize: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	/* 
	 * offset 和 color 的 Object 的数组，如 [{ offset: 0.2, color: 'blue' }, { offset 0.8, color: 'cyan' }]；
	 * 也可以是一个颜色字符串的数组如 ['blue', 'cyan', 'lime', 'yellow', 'red']，颜色将均匀分布。
	 */
	gradientColors: React.PropTypes.object,
	
	// 当均一化后的数据点的值小于这个值时，将被设为该值。该值保证了数据值很小的数据也能在地图上展示
	minAlpha: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 所有数据点的值将乘以这个值再进行绘制
	valueScale: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 整个热力图的不透明度
	opacity: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
});

UIHeatMap.defaultProps = $.extend({}, UIChart.defaultProps, {
	blurSize: 30,
	gradientColors: null,
	minAlpha: 0.05,
	valueScale: 1,
	opacity: 1
});
