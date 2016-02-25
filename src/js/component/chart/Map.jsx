import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIMap Class
//-----------------------------------------------------------------------------------------------
export default class UIMap extends UIChart {
	
	getChartOption(){
		return {
			title: {
				text: "iphone销量",
				subtext: "纯属虚构",
				x: "center"
			},
			tooltip: {
				trigger: "item"
			},
			legend: {
				orient: "vertical",
				x: "left",
				data: ["iphone3", "iphone4", "iphone5"]
			},
			dataRange: {
				min: 0,
				max: 2500,
				x: 'left',
				y: 'bottom',
				text: ['高','低'], // 文本，默认为数值文本
				calculable : true
			},
			toolbox: {
				show: true,
				orient : 'vertical',
				x: 'right',
				y: 'center',
				feature: {
					mark: {show: true},
					dataView: {show: true, readOnly: false},
					restore: {show: true},
					saveAsImage: {show: true}
				}
			},
			roamController: {
				show: true,
				x: 'right',
				mapTypeControl: {
					'china': true
				}
			},
			series: [
				{
		            name: 'iphone3',
		            type: 'map',
		            mapType: 'china',
		            roam: false,
		            itemStyle:{
		                normal:{label:{show:true}},
		                emphasis:{label:{show:true}}
		            },
		            data:[
		                {name: '北京',value: Math.round(Math.random()*1000)},
		                {name: '天津',value: Math.round(Math.random()*1000)},
		                {name: '上海',value: Math.round(Math.random()*1000)},
		                {name: '重庆',value: Math.round(Math.random()*1000)},
		                {name: '河北',value: Math.round(Math.random()*1000)},
		                {name: '河南',value: Math.round(Math.random()*1000)},
		                {name: '云南',value: Math.round(Math.random()*1000)},
		                {name: '辽宁',value: Math.round(Math.random()*1000)},
		                {name: '黑龙江',value: Math.round(Math.random()*1000)},
		                {name: '湖南',value: Math.round(Math.random()*1000)},
		                {name: '安徽',value: Math.round(Math.random()*1000)},
		                {name: '山东',value: Math.round(Math.random()*1000)},
		                {name: '新疆',value: Math.round(Math.random()*1000)},
		                {name: '江苏',value: Math.round(Math.random()*1000)},
		                {name: '浙江',value: Math.round(Math.random()*1000)},
		                {name: '江西',value: Math.round(Math.random()*1000)},
		                {name: '湖北',value: Math.round(Math.random()*1000)},
		                {name: '广西',value: Math.round(Math.random()*1000)},
		                {name: '甘肃',value: Math.round(Math.random()*1000)},
		                {name: '山西',value: Math.round(Math.random()*1000)},
		                {name: '内蒙古',value: Math.round(Math.random()*1000)},
		                {name: '陕西',value: Math.round(Math.random()*1000)},
		                {name: '吉林',value: Math.round(Math.random()*1000)},
		                {name: '福建',value: Math.round(Math.random()*1000)},
		                {name: '贵州',value: Math.round(Math.random()*1000)},
		                {name: '广东',value: Math.round(Math.random()*1000)},
		                {name: '青海',value: Math.round(Math.random()*1000)},
		                {name: '西藏',value: Math.round(Math.random()*1000)},
		                {name: '四川',value: Math.round(Math.random()*1000)},
		                {name: '宁夏',value: Math.round(Math.random()*1000)},
		                {name: '海南',value: Math.round(Math.random()*1000)},
		                {name: '台湾',value: Math.round(Math.random()*1000)},
		                {name: '香港',value: Math.round(Math.random()*1000)},
		                {name: '澳门',value: Math.round(Math.random()*1000)}
		            ]
		        },
		        {
		            name: 'iphone4',
		            type: 'map',
		            mapType: 'china',
		            itemStyle:{
		                normal:{label:{show:true}},
		                emphasis:{label:{show:true}}
		            },
		            data:[
		              {name: '北京',value: Math.round(Math.random()*1000)},
	                {name: '天津',value: Math.round(Math.random()*1000)},
	                {name: '上海',value: Math.round(Math.random()*1000)},
	                {name: '重庆',value: Math.round(Math.random()*1000)},
	                {name: '河北',value: Math.round(Math.random()*1000)},
	                {name: '安徽',value: Math.round(Math.random()*1000)},
	                {name: '新疆',value: Math.round(Math.random()*1000)},
	                {name: '浙江',value: Math.round(Math.random()*1000)},
	                {name: '江西',value: Math.round(Math.random()*1000)},
	                {name: '山西',value: Math.round(Math.random()*1000)},
	                {name: '内蒙古',value: Math.round(Math.random()*1000)},
	                {name: '吉林',value: Math.round(Math.random()*1000)},
	                {name: '福建',value: Math.round(Math.random()*1000)},
	                {name: '广东',value: Math.round(Math.random()*1000)},
	                {name: '西藏',value: Math.round(Math.random()*1000)},
	                {name: '四川',value: Math.round(Math.random()*1000)},
	                {name: '宁夏',value: Math.round(Math.random()*1000)},
	                {name: '香港',value: Math.round(Math.random()*1000)},
	                {name: '澳门',value: Math.round(Math.random()*1000)}
	            ]
	        },
	        {
	            name: 'iphone5',
	            type: 'map',
	            mapType: 'china',
	            itemStyle:{
	                normal:{label:{show:true}},
	                emphasis:{label:{show:true}}
	            },
	            data:[
	                {name: '北京',value: Math.round(Math.random()*1000)},
	                {name: '天津',value: Math.round(Math.random()*1000)},
	                {name: '上海',value: Math.round(Math.random()*1000)},
	                {name: '广东',value: Math.round(Math.random()*1000)},
	                {name: '台湾',value: Math.round(Math.random()*1000)},
	                {name: '香港',value: Math.round(Math.random()*1000)},
	                {name: '澳门',value: Math.round(Math.random()*1000)}
	            ]
	        }
	    ]
	};
	}
	
}

UIMap.propTypes = $.extend({}, UIChart.propTypes, {
	
	// 选中模式，默认关闭，可选single，multiple
	selectedMode: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	/*
	 * 地图类型，支持world，china及全国34个省市自治区。省市自治区的mapType直接使用简体中文： 
	 * 新疆， 西藏， 内蒙古， 青海， 四川， 黑龙江， 甘肃， 云南， 广西， 湖南， 陕西， 
	 * 广东，吉林， 河北， 湖北， 贵州， 山东， 江西， 河南， 辽宁， 山西， 安徽， 福建， 
	 * 浙江， 江苏，重庆， 宁夏， 海南， 台湾， 北京， 天津， 上海， 香港， 澳门' 
	 * 支持子区域模式，通过主地图类型扩展出所包含的子区域地图，格式为'主地图类型|子区域名称'，
	 * 如 'world|Brazil'，'china|广东'，详见例子 this
	 */
	mapType: React.PropTypes.string,
	
	// 非数值显示（如仅用于显示标注标线时），可以通过hoverable:false关闭区域悬浮高亮
	hoverable: React.PropTypes.bool,
	
	// 是否启用值域漫游组件（dataRange）hover时的联动响应（详情披露）
	dataRangeHoverLink: React.PropTypes.bool,
	
	// 地图位置设置，默认只适应上下左右居中可配x，y，width，height，任意参数为空都将根据其他参数自适应
	mapLocation: React.PropTypes.object,
	
	// 地图数值计算方式，默认为加和，可选为：'sum'（总数） | 'average'（均值）
	mapValueCalculation: React.PropTypes.string,
	
	// 地图数值计算结果小数精度，mapValueCalculation为average时有效，默认为取整，需要小数精度时设置大于0的整数
	mapValuePrecision: React.PropTypes.number,
	
	// 显示图例颜色标识（系列标识的小圆点），存在legend时生效
	showLegendSymbol: React.PropTypes.bool,
	
	// 是否开启滚轮缩放和拖拽漫游，默认为false（关闭），其他有效输入为true（开启），'scale'（仅开启滚轮缩放），'move'（仅开启拖拽漫游）
	roam: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	// 滚轮缩放的极限控制，可指定{max:number, min:number}，其中max为放大系数，有效值应大于1，min为缩小系数，有效值应小于1
	scaleLimit: React.PropTypes.object,
	
	// 自定义地区的名称映射，如{'China' : '中国'}
	nameMap: React.PropTypes.object,
	
	// 地区的名称文本位置修正，数值单位为px，正值为左下偏移，负值为右上偏移，如{'China' : [10, -10]}
	textFixed: React.PropTypes.object,
	
	// 通过绝对经纬度指定地区的名称文本位置，如{'Islands':[113.95, 22.26]}，香港离岛区名称显示定位到东经113.95，北纬22.26上
	geoCoord: React.PropTypes.object,
	
	// 叠加在地图上的热力图，数据位置为经纬度。配置同 series（热力图）
	heatmap: React.PropTypes.object
	
});

UIMap.defaultProps = $.extend({}, UIChart.defaultProps, {
	selectedMode: null,
	mapType: "china",
	hoverable: true,
	dataRangeHoverLink: true,
	mapLocation: {x:'center',y:'center'},
	mapValueCalculation: "sum",
	mapValuePrecision: 0,
	showLegendSymbol: true,
	roam: false,
	scaleLimit: null,
	nameMap: null,
	textFixed: null,
	geoCoord: null,
	heatmap: null,
});
