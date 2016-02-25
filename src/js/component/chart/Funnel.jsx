import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIFunnel Class -- 漏斗图 (驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据)
//-----------------------------------------------------------------------------------------------
export default class UIFunnel extends UIChart {
	
	getChartOption(){
		return {
			title: {
				text: '漏斗图',
				subtext: '纯属虚构'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}%"
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
			legend: {
				data: ['展现','点击','访问','咨询','订单']
			},
			calculable: true,
			series: [
				{
					name: '漏斗图',
					type: 'funnel',
					width: '40%',
					data: [
						{value:60, name:'访问'},
						{value:40, name:'咨询'},
						{value:20, name:'订单'},
						{value:80, name:'点击'},
						{value:100, name:'展现'}
					]
				},
				{
					name: '金字塔',
					type: 'funnel',
					x: '50%',
					sort: 'ascending',
					itemStyle: {
						normal: {
						// color: 各异,
						label: {
							position: 'left'
						}
					}
				},
				data:[
					{value:60, name:'访问'},
					{value:40, name:'咨询'},
					{value:20, name:'订单'},
					{value:80, name:'点击'},
					{value:100, name:'展现'}
				]
			}]
		};
	}
	
}

UIFunnel.propTypes = $.extend({}, UIChart.propTypes, {
	// 左上角横坐标，数值单位px，支持百分比（字符串），如'50%'(显示区域横向中心)
	x: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 左上角纵坐标，数值单位px，支持百分比（字符串），如'50%'(显示区域纵向中心)
	y: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 右下角横坐标，数值单位px，支持百分比（字符串），如'50%'(显示区域横向中心)
	x2: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 右下角纵坐标，数值单位px，支持百分比（字符串），如'50%'(显示区域纵向中心)
	y2: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 总宽度，默认为绘图区总宽度 - x - x2，数值单位px，指定width后将忽略x2，支持百分比（字符串），如'50%'(显示区域一半的宽度)
	width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 总高度，默认为绘图区总高度 - y - y2，数值单位px，指定height后将忽略y2，支持百分比（字符串），如'50%'(显示区域一半的高度)
	height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 水平方向对齐布局类型，默认居中对齐，可用选项还有：'left' | 'right' | 'center'
	funnelAlign: React.PropTypes.oneOf(["left", "right", "center"]),
	
	// 指定的最小值
	min: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 指定的最大值
	max: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 最小值min映射到总宽度的比例，如果需要最小值的图形并不是尖端三角，可设置minSize实现
	minSize: React.PropTypes.string,
	
	// 最大值max映射到总宽度的比例
	maxSize: React.PropTypes.string,
	
	// 数据排序， 可以取ascending, descending
	sort: React.PropTypes.oneOf(["ascending", "descending"]),
	
	// 数据图形间距
	gap: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	// 否启用图例（legend）hover时的联动响应（高亮显示）
	legendHoverLink: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
});

UIFunnel.defaultProps = $.extend({}, UIChart.defaultProps, {
	x: 80,
	y: 60,
	x2: 80,
	y2: 60,
	width: null,
	height: null,
	funnelAlign: "center",
	min: 0,
	max: 100,
	minSize: "0%",
	maxSize: "100%",
	sort: "descending",
	gap: 0,
	legendHoverLink: true,
});
