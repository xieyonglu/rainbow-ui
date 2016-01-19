import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIWordCloud Class -- 仪表盘 (驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据)
//-----------------------------------------------------------------------------------------------
export default class UIGauge extends UIChart {
	
	getChartOption(){
		return {
			tooltip: {
				formatter: "{a} <br/>{b} : {c}%"
			},
			toolbox: {
				show: true,
				feature: {
					mark: {show: true},
					restore: {show: true},
					saveAsImage: {show: true}
				}
			},
			series: [
				{
					name: "业务指标",
					type: "gauge",
					detail: {
						formatter: '{value}%'
					},
					data: [
						{value: 50, name: '完成率'}
					]
				}
			]
		};
	}
	
}

UIGauge.propTypes = $.extend({}, UIChart.propTypes, {
	// 圆心坐标，支持绝对值（px）和百分比，百分比计算min(width, height) * 50%
	center: React.PropTypes.array,
	
	// 半径，支持绝对值（px）和百分比，百分比计算比，min(width, height) / 2 * 75%，传数组实现环形图，[内半径，外半径]
	radius: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.array]),
	
	// 开始角度, 饼图（90）、仪表盘（225），有效输入范围：[-360,360]
	startAngle: React.PropTypes.number,
	
	// 结束角度,有效输入范围：[-360,360]，保证startAngle - endAngle为正值
	endAngle: React.PropTypes.number,
	
	// 指定的最小值
	min: React.PropTypes.number,
	
	// 指定的最大值
	max: React.PropTypes.number,
	
	// 分割段数，默认为10
	splitNumber: React.PropTypes.number,
	
	/**
	 * 坐标轴线，默认显示 
	 * 属性show控制显示与否，
	 * 属性lineStyle（详见lineStyle）控制线条样式， 
	 * 比较特殊的是这里的lineStyle.color是一个二维数组，用于把仪表盘轴线分成若干份， 
	 * 并且可以给每一份指定具体的颜色，格式为:[[百分比, 颜色值], [...]]
	 */
	axisLine: React.PropTypes.object,
	
	/**
	 * 坐标轴小标记，默认显示
	 * 属性show控制显示与否，
	 * 属性lineStyle（详见lineStyle）控制线条样式，
	 * 属性splitNumber控制每份split细分多少段
	 * 属性length控制线长
	 */
	axisTick: React.PropTypes.object,
	
	/**
	 * 坐标轴文本标签（详见axis.axislabel） 
	 * 属性formatter可以格式化文本标签，
	 * 属性textStyle（详见textStyle）控制文本样式
	 */
	axisLabel: React.PropTypes.object,
	
	/**
	 * 主分隔线，默认显示
	 * 属性show控制显示与否， 
	 * 属性length控制线长
	 * 属性lineStyle（详见lineStyle）控制线条样式
	 */
	splitLine: React.PropTypes.object,
	
	/**
	 * 指针样式
	 * 属性length控制线长，百分比相对的是仪表盘的外半径
	 * 属性width控制指针最宽处，
	 * 属性color控制指针颜色
	 */
	pointer: React.PropTypes.object,
	
	/**
	 * 仪表盘标题
	 * 属性show控制显示与否，
	 * 属性offsetCenter用于标题定位，数组为横纵相对仪表盘圆心坐标偏移，支持百分比（相对外半径），
	 * 属性textStyle（详见textStyle）控制文本样式
	 */
	title: React.PropTypes.object,
	
	/**
	 * 仪表盘详情
	 * 属性show控制显示与否，
	 * 属性backgroundColor控制边框颜色， 
	 * 属性borderWidth控制边框线宽，
	 * 属性borderColor控制边框颜色，
	 * 属性width控制详情宽度，
	 * 属性height控制详情高度，
	 * 属性offsetCenter用于详情定位，数组为横纵相对仪表盘圆心坐标偏移，支持百分比（相对外半径），
	 * 属性formatter可以格式化文本，
	 * 属性textStyle（详见textStyle）控制文本样式
	 */
	detail: React.PropTypes.object,
	
	// 是否启用图例（legend）hover时的联动响应（高亮显示）
	legendHoverLink: React.PropTypes.bool,
});

UIGauge.defaultProps = $.extend({}, UIChart.defaultProps, {
	center: ['50%', '50%'],
	radius: [0, '75%'],
	startAngle: 225,
	endAngle: -45,
	min: 0,
	max: 100,
	splitNumber: 10,
	
	axisLine: {
		show: true,
    lineStyle: {
    	color: [
    		[0.2, '#228b22'],
    		[0.8, '#48b'],
    		[1, '#ff4500']
    	],
    	width: 30
    }
  },
  
	axisTick: {
    show: true,
    splitNumber: 5,
    length :8,
    lineStyle: {
        color: '#eee',
        width: 1,
        type: 'solid'
    }
	},
	
	axisLabel: {
    show: true,
    formatter: null,
    textStyle: {
        color: 'auto'
    }
	},
	
	splitLine: {
    show: true,
    length :30,
    lineStyle: {
    	color: '#eee',
    	width: 2,
    	type: 'solid'
    }
	},
	
	pointer: {
    length : '80%',
    width : 8,
    color : 'auto'
	},
	
	title: {
    show: true,
    offsetCenter: [0, '-40%'],
    textStyle: {
    	color: '#333',
    	fontSize: 15
    }
	},
	
	detail: {
    show: true,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    borderColor: '#ccc',
    width: 100,
    height: 40,
    offsetCenter: [0, '40%'],
    formatter: null,
    textStyle: {
    	color: 'auto',
    	fontSize: 30
    }
	},
	
	legendHoverLink: true,
});
