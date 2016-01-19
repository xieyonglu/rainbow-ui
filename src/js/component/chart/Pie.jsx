import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIPie Class
//-----------------------------------------------------------------------------------------------
export default class UIPie extends UIChart {

	getChartOption(){
		return {
			title: {
				text: '某站点用户访问来源',
				subtext: '纯属虚构',
				x:'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient : 'vertical',
				x : 'left',
				//data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				data: ['customer','visitor','other']
			},
			toolbox: {
				show: true,
				feature: {
				mark: {show: true},
				dataView: {show: true, readOnly: false},
				magicType: {
					show: true, 
					type: ['pie', 'funnel'],
					option: {
						funnel: {
							x: '25%',
							width: '50%',
							funnelAlign: 'left',
							max: 1548
						}
					}
				},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		    },
		    calculable : true,
		    //series : [
		     //   {
		     //       name:'访问来源',
		     //       type:'pie',
		     //       radius : '55%',
		     //       center: ['50%', '60%'],
		      //      data:[
		      //          {value:335, name:'直接访问'},
		      //          {value:310, name:'邮件营销'},
		      //          {value:234, name:'联盟广告'},
		      //          {value:135, name:'视频广告'},
		       //         {value:1548, name:'搜索引擎'}
		      //      ]
		      //  }
		    //]
		     series : [
		        {
		            name:'Session Referrer',
		            type:'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:350, name:'customer'},
		                {value:400, name:'visitor'},
		                {value:250, name:'other'},
		            ]
		        }
		    ]
		};
	}
	
}

UIPie.propTypes = $.extend({}, UIChart.propTypes, {
	
	// 圆心坐标，支持绝对值（px）和百分比，百分比计算min(width, height) * 50%
	center: React.PropTypes.array,
	
	// 半径，支持绝对值（px）和百分比，百分比计算比，min(width, height) / 2 * 75%， 传数组实现环形图，[内半径，外半径]
	radius: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.array]),
	
	// 开始角度, 饼图（90）、仪表盘（225），有效输入范围：[-360,360]
	startAngle: React.PropTypes.number,
	
	// 最小角度，可用于防止某item的值过小而影响交互
	minAngle: React.PropTypes.number,
	
	// 显示是否顺时针
	clockWise: React.PropTypes.bool,
	
	// 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
	roseType: React.PropTypes.string,
	
	// 选中是扇区偏移量
	selectedOffset: React.PropTypes.number,
	
	// 选中模式，默认关闭，可选single，multiple
	selectedMode: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	// 是否启用图例（legend）hover时的联动响应（高亮显示）
	legendHoverLink: React.PropTypes.bool,
}),

UIPie.defaultProps = $.extend({}, UIChart.defaultProps, {
	center: ['50%', '50%'],
	radius: [0, '75%'],
	startAngle: 90,
	minAngle: 0,
	clockWise: true,
	roseType: null,
	selectedOffset: 10,
	selectedMode: null,
	legendHoverLink: true,
});
