import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIChord Class -- 和弦图
//-----------------------------------------------------------------------------------------------
export default class UIChord extends UIChart {

	getChartOption(){
		return {
	    title : {
	        text: '德国队效力联盟',
	        x:'right',
	        y:'bottom'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: function (params) {
	            if (params.indicator2) {    // is edge
	                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
	            } else {    // is node
	                return params.name
	            }
	        }
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            restore : {show: true},
	            magicType: {show: true, type: ['force', 'chord']},
	            saveAsImage : {show: true}
	        }
	    },
	    legend: {
	        x: 'left',
	        data:['阿森纳', '拜仁慕尼黑', '多特蒙德']
	    },
	    series : [
	        {
	            name: '德国队效力联盟',
	            type:'chord',
	            sort : 'ascending',
	            sortSub : 'descending',
	            ribbonType: false,
	            radius: '60%',
	            itemStyle : {
	                normal : {
	                    label : {
	                        rotate : true
	                    }
	                }
	            },
	            minRadius: 7,
	            maxRadius: 20,
	            // 使用 nodes links 表达和弦图
	            nodes: [
	                {name:'默特萨克'},
	                {name:'厄齐尔'},
	                {name:'波多尔斯基'},
	                {name:'诺伊尔'},
	                {name:'博阿滕'},
	                {name:'施魏因施泰格'},
	                {name:'拉姆'},
	                {name:'克罗斯'},
	                {name:'穆勒', symbol: 'star'},
	                {name:'格策'},
	                {name:'胡梅尔斯'},
	                {name:'魏登费勒'},
	                {name:'杜尔姆'},
	                {name:'格罗斯克罗伊茨'},
	                {name:'阿森纳'},
	                {name:'拜仁慕尼黑'},
	                {name:'多特蒙德'}
	            ],
	            links: [
	                {source: '阿森纳', target: '默特萨克', weight: 1, name: '效力'},
	                {source: '阿森纳', target: '厄齐尔', weight: 1, name: '效力'},
	                {source: '阿森纳', target: '波多尔斯基', weight: 1, name: '效力'},
	                {source: '拜仁慕尼黑', target: '诺伊尔', weight: 1, name: '效力'},
	                {source: '拜仁慕尼黑', target: '博阿滕', weight: 1, name: '效力'},
	                {source: '拜仁慕尼黑', target: '施魏因施泰格', weight: 1, name: '效力'},
	                {source: '拜仁慕尼黑', target: '拉姆', weight: 1, name: '效力'},
	                {source: '拜仁慕尼黑', target: '克罗斯', weight: 1, name: '效力'},
	                {source: '拜仁慕尼黑', target: '穆勒', weight: 1, name: '效力'},
	                {source: '拜仁慕尼黑', target: '格策', weight: 1, name: '效力'},
	                {source: '多特蒙德', target: '胡梅尔斯', weight: 1, name: '效力'},
	                {source: '多特蒙德', target: '魏登费勒', weight: 1, name: '效力'},
	                {source: '多特蒙德', target: '杜尔姆', weight: 1, name: '效力'},
	                {source: '多特蒙德', target: '格罗斯克罗伊茨', weight: 1, name: '效力'}
	            ]
	        }
	    ]
	};
	}
	
}

UIChord.propTypes = $.extend({}, UIChart.propTypes, {
	
	// 节点分类, 详见图数据结构表示中的categories
	categories: React.PropTypes.array,
	
	// 和弦图的顶点数据, 详见图数据结构表示中的nodes(data)
	nodes: React.PropTypes.array,
	
	// 和弦图的边数据, 和matrix二选一 详见图数据结构表示中的links
	links: React.PropTypes.array,
	
	// 和弦图的邻接矩阵, 和links二选一 详见图数据结构表示中的matrix
	matrix: React.PropTypes.array,
	
	// ribbonType的和弦图节点使用扇形绘制，边使用有大小端的ribbon绘制，可以表示出边的权重，图的节点边之间必须是双向边，非ribbonType的和弦图节点使用symbol绘制，边使用贝塞尔曲线，不能表示边的权重，但是可以使用单向边
	ribbonType: React.PropTypes.bool,
	
	// 同series（直角系）, ribbonType为false时有效
	symbol: React.PropTypes.string,
	
	// 节点的大小, ribbonType为false时有效
	symbolSize: React.PropTypes.number,
	
	// 顶点数据映射成symbol半径后的最小半径, ribbonType为false时有效
	minRadius: React.PropTypes.number,
	
	// 顶点数据映射成symbol半径后的最大半径, ribbonType为false时有效
	maxRadius: React.PropTypes.number,
	
	// 是否显示刻度, ribbonType为true时有效
	showScale: React.PropTypes.bool,
	
	// 是否显示刻度文字, ribbonType为true时有效
	showScaleText: React.PropTypes.bool,
	
	// 每个sector之间的间距(用角度表示)
	padding: React.PropTypes.number,
	
	// 数据排序， 可以取none, ascending, descending
	sort: React.PropTypes.oneOf(["none", "ascending", "descending"]),
	
	// 数据排序（弦）， 可以取none, ascending, descending
	sortSub: React.PropTypes.oneOf(["none", "ascending", "descending"]),
	
	// 显示是否顺时针
	clockWise: React.PropTypes.bool,
});

UIChord.defaultProps = $.extend({}, UIChart.defaultProps, {
	categories: null,
	nodes: [],
	links: [],
	matrix: [],
	ribbonType: true,
	symbol: "circle",
	symbolSize: null,
	minRadius: 10,
	maxRadius: 20,
	showScale: false,
	showScaleText: false,
	padding: 2,
	sort: "none",
	sortSub: "none",
	clockWise: false,
});
