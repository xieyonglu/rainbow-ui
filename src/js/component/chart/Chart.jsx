import echarts from "echarts/echarts";
import "echarts/chart/base";
import "echarts/chart/island";

import "echarts/chart/line";
import "echarts/chart/bar";
import "echarts/chart/scatter";
import "echarts/chart/k";
import "echarts/chart/pie";
import "echarts/chart/radar";
import "echarts/chart/chord";
import "echarts/chart/force";
import "echarts/chart/map";
import "echarts/chart/heatmap";
import "echarts/chart/gauge";
import "echarts/chart/funnel";
import "echarts/chart/eventRiver";
import "echarts/chart/treemap";
import "echarts/chart/venn";
import "echarts/chart/tree";
import "echarts/chart/wordCloud";

import Util from "../../util/Util";
import config from "../../component-config";


//-----------------------------------------------------------------------------------------------
//	date:		2015/11/16
//	
//	author: yonglu.xie
//	
//	description: UIChart Class
//-----------------------------------------------------------------------------------------------
export default class UIChart extends React.Component {
	
	render() {
		return (
			<div id={this.props.id} style={{height: '400', width: '600'}} />
		);
	}
	
	componentDidMount(){
		//let echart = echarts.init(document.getElementById(this.props.id), theme);
		let echart = echarts.init(document.getElementById(this.props.id));
		
		echart.setOption(this.getChartOption());
		
		//var theme = require("echarts/theme/" + this.props.theme);
		echart.setTheme(require("echarts/theme/" + this.props.theme));
	}
	
	getChartOption(){
    let {dataSource} = this.props;
    if(dataSource){
			return Util.isFunction(dataSource) ? dataSource() : dataSource;
		}
		
		return $.extend(true, {}, this.getTitle(), this.getToolTip(), this.getLegend(), this.getToolbox(), this.getXAxis(), this.getYAxis(), this.getSeries());
	}
	
	getTitle(){
		return {
			title: {
				text: '某地区蒸发量和降水量',
				subtext: '纯属虚构'
			}
		}
	}
	
	getToolTip(){
		return {
			tooltip: {}
		};
	}
	
	getLegend(){
		return {
			legend: {
				data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
			}
		};
	}
	
	getToolbox(){
		return {
			toolbox: {
				show: true
			}
		};
	}
	
	getXAxis(){
		return {
			xAxis: [
				{
					type : 'value'
				}
			]
		};
	}
	
	getYAxis(){
		return {
			yAxis: [
				{
					type : 'category',
					data : ['周一','周二','周三','周四','周五','周六','周日']
				}
			]
		};
	}
	
	getSeries(){
		return {
			series: [
				{
					name:'直接访问',
					type:'bar',
					stack: '总量',
					itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
					data:[320, 302, 301, 334, 390, 330, 320]
				}
			]
		};
	}
	
}

UIChart.propTypes = {
	
	
	width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	
	height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	
	
	theme: React.PropTypes.oneOf(["infographic", "macarons", "shine", "dark", "blue", "green", "red", "gray", "helianthus", "roma", "mint", "macarons2", "sakura", "default"]),
	
	
	dataSource: React.PropTypes.object,
	
	// 全图默认背景，（详见backgroundColor），支持rgba，默认为无，透明
	backgroundColor: React.PropTypes.object,
	
	// 数值系列的颜色列表，（详见color），可配数组，eg：['#87cefa', 'rgba(123,123,123,0.5)','...']，当系列数量个数比颜色列表长度大时将循环选取
	color: React.PropTypes.array,
	
	// 非IE8-支持渲染为图片，（详见renderAsImage）
	renderAsImage: React.PropTypes.bool,
	
	// 是否启用拖拽重计算特性，默认关闭，（详见calculable，相关的还有 calculableColor， calculableHolderColor， nameConnector， valueConnector）
	calculable: React.PropTypes.bool,
	
	// 是否开启动画，默认开启，（详见 animation，相关的还有 addDataAnimation， animationThreshold， animationDuration， animationDurationUpdate ， animationEasing）
	animation: React.PropTypes.bool,
	
	// 时间轴（详见timeline），每个图表最多仅有一个时间轴控件
	timeline: React.PropTypes.object,
	
	// 标题（详见title），每个图表最多仅有一个标题控件
	title: React.PropTypes.object,
	
	// 工具箱（详见toolbox），每个图表最多仅有一个工具箱
	toolbox: React.PropTypes.object,
	
	// 提示框（详见tooltip），鼠标悬浮交互时的信息提示
	tooltip: React.PropTypes.object,
	
	// 图例（详见legend），每个图表最多仅有一个图例，混搭图表共享
	legend: React.PropTypes.object,
	
	// 值域选择（详见dataRange）,值域范围
	dataRange: React.PropTypes.object,
	
	// 数据区域缩放（详见dataZoom）,数据展现范围选择
	dataZoom: React.PropTypes.object,
	
	// 漫游缩放组件（详见roamController）,搭配地图使用
	roamController: React.PropTypes.object,
	
	// 直角坐标系内绘图网格（详见grid）
	grid: React.PropTypes.object,
	
	// 直角坐标系中横轴数组（详见xAxis），数组中每一项代表一条横轴坐标轴，标准（1.0）中规定最多同时存在2条横轴
	xAxis: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]),
	
	// 直角坐标系中纵轴数组（详见yAxis），数组中每一项代表一条纵轴坐标轴，标准（1.0）中规定最多同时存在2条纵轴
	yAxis: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]),
	
	// 驱动图表生成的数据内容（详见series），数组中每一项代表一个系列的特殊选项及数据
	series: React.PropTypes.array,
	
	
	//#########################################################################################
	
	// 一级层叠控制。每一个不同的zlevel将产生一个独立的canvas，相同zlevel的组件或图标将在同一个canvas上渲染。zlevel越高越靠顶层，canvas对象增多会消耗更多的内存和性能，并不建议设置过多的zlevel，大部分情况可以通过二级层叠控制z实现层叠控制。
	zlevel: React.PropTypes.number,
	
	// 二级层叠控制，同一个canvas（相同zlevel）上z越高约靠顶层。
	z: React.PropTypes.number,
	
	/*
	 * 图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。可选为： 
	 * 'line'（折线图） | 'bar'（柱状图） | 'scatter'（散点图） | 'k'（K线图） 
	 * 'pie'（饼图） | 'radar'（雷达图） | 'chord'（和弦图） | 'force'（力导向布局图） | 'map'（地图）
	 */
	type: React.PropTypes.string,
	
	// 系列名称，如启用legend，该值将被legend.data索引相关
	name: React.PropTypes.string,
	
	// 提示框样式，仅对本系列有效，如不设则用option.tooltip（详见tooltip）,鼠标悬浮交互时的信息提示
	//tooltip: React.PropTypes.object,
	
	// 数据图形是否可点击，默认开启，如果没有click事件响应可以关闭
	clickable: React.PropTypes.bool,
	
	// 图形样式（详见itemStyle）
	itemStyle: React.PropTypes.object,
	
	// 数据（详见series.data）
	data: React.PropTypes.array,
	
	// 标注（详见series.markPoint）
	markPoint: React.PropTypes.array,
	
	// 标线（详见series.markLine）
	markLine: React.PropTypes.array,
	
};

UIChart.defaultProps = {
	width: "auto !important",
	height: "400",
	theme: config.DEFAULT_ECHARTS_THEME,
	
	zlevel: 0,
	z: 2,
	type: null,
	name: null,
	tooltip: null,
	clickable: true,
	itemStyle: null,
	data: [],
	markPoint: {},
	markLine: {},
};
