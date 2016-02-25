import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIWordCloud Class
//-----------------------------------------------------------------------------------------------
export default class UIVenn extends UIChart {
	
	getChartOption(){
		this.props.data = [
			{value:100, name:'访问'},
			{value:50, name:'咨询'},
			{value:20, name:'公共'}
		];
	
		return {
			title: {
				text: "访问 vs 咨询",
				subtext: "各个数据的集合"
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
		  calculable: false,
		  series: [{
		  	name: "韦恩图",
		  	type: "venn",
		  	itemStyle: {
		  	normal: {
		  		label: {
		  			show: true,
		  			textStyle: {
		  				fontFamily: 'Arial, Verdana, sans-serif',
		  				fontSize: 16,
		  				fontStyle: 'italic',
		  				fontWeight: 'bolder'
		  			}
		  		},
		  		labelLine: {
		  			show: false,
		  			length: 10,
		  			lineStyle: {
		  				// color: 各异,
		  				width: 1,
		  				type: 'solid'
		  			}
		  		}
		  	},
		  	emphasis: {
		  		color: '#cc99cc',
		  		borderWidth: 3,
		  		borderColor: '#996699'
		  	}
		  },
		  data: this.props.data
		 }]
		};
	}
	
}

UIVenn.propTypes = $.extend({}, UIChart.propTypes, {
	itemStyle: React.PropTypes.object,
	
	// 数据列表，长度为3，前两项分别表示两个集合，第三项表示交集。每一个数组项为Object {}，内容如下：
	data: React.PropTypes.object,
});

UIVenn.defaultProps = $.extend({}, UIChart.defaultProps, {
	itemStyle: {},
	data: [],
});
