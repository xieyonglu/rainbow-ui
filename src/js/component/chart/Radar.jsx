import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIPie Class -- 雷达图 (驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据)
//-----------------------------------------------------------------------------------------------
export default class UIRadar extends UIChart {

	getChartOption(){
		return {
		    title : {
		        text: '预算 vs 开销（Budget vs spending）',
		        subtext: '纯属虚构'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'right',
		        y : 'bottom',
		        data:['预算分配（Allocated Budget）','实际开销（Actual Spending）']
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    polar : [
		       {
		           indicator : [
		               { text: '销售（sales）', max: 6000},
		               { text: '管理（Administration）', max: 16000},
		               { text: '信息技术（Information Techology）', max: 30000},
		               { text: '客服（Customer Support）', max: 38000},
		               { text: '研发（Development）', max: 52000},
		               { text: '市场（Marketing）', max: 25000}
		            ]
		        }
		    ],
		    calculable : true,
		    series : [
		        {
		            name: '预算 vs 开销（Budget vs spending）',
		            type: 'radar',
		            data : [
		                {
		                    value : [4300, 10000, 28000, 35000, 50000, 19000],
		                    name : '预算分配（Allocated Budget）'
		                },
		                 {
		                    value : [5000, 14000, 28000, 31000, 42000, 21000],
		                    name : '实际开销（Actual Spending）'
		                }
		            ]
		        }
		    ]
		};
	}
	
}

UIRadar.propTypes = $.extend({}, UIChart.propTypes, {
	
	// 极坐标索引
	polarIndex: React.PropTypes.number,
	
	// 同series（直角系）
	symbol: React.PropTypes.string,
	
	// 同series（直角系）
	symbolSize: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.func, React.PropTypes.array]),
	
	// 同series（直角系）
	symbolRotate: React.PropTypes.number,
	
	// 是否启用图例（legend）hover时的联动响应（高亮显示）
	legendHoverLink: React.PropTypes.bool
	
}),

UIRadar.defaultProps = $.extend({}, UIChart.defaultProps, {
	polarIndex: 0,
	symbol: null,
	symbolSize: 2,
	symbolRotate: null,
	legendHoverLink: true
});
