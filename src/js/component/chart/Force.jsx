import UIChart from "./Chart";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/15
//	
//	author: yonglu.xie
//	
//	description: UIWordCloud Class -- 力导向布局图 (驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据)
//-----------------------------------------------------------------------------------------------
export default class UIForce extends UIChart {
	
	getChartOption(){
		return  {
	    title : {
	        text: '人物关系：乔布斯',
	        subtext: '数据来自人立方',
	        x:'right',
	        y:'bottom'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: '{a} : {b}'
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
	        data:['家人','朋友']
	    },
	    series : [
	        {
	            type:'force',
	            name : "人物关系",
	            ribbonType: false,
	            categories : [
	                {
	                    name: '人物'
	                },
	                {
	                    name: '家人'
	                },
	                {
	                    name:'朋友'
	                }
	            ],
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true,
	                        textStyle: {
	                            color: '#333'
	                        }
	                    },
	                    nodeStyle : {
	                        brushType : 'both',
	                        borderColor : 'rgba(255,215,0,0.4)',
	                        borderWidth : 1
	                    },
	                    linkStyle: {
	                        type: 'curve'
	                    }
	                },
	                emphasis: {
	                    label: {
	                        show: false
	                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
	                    },
	                    nodeStyle : {
	                        //r: 30
	                    },
	                    linkStyle : {}
	                }
	            },
	            useWorker: false,
	            minRadius : 15,
	            maxRadius : 25,
	            gravity: 1.1,
	            scaling: 1.1,
	            roam: 'move',
	            nodes:[
	                {category:0, name: '乔布斯', value : 10, label: '乔布斯\n（主要）'},
	                {category:1, name: '丽萨-乔布斯',value : 2},
	                {category:1, name: '保罗-乔布斯',value : 3},
	                {category:1, name: '克拉拉-乔布斯',value : 3},
	                {category:1, name: '劳伦-鲍威尔',value : 7},
	                {category:2, name: '史蒂夫-沃兹尼艾克',value : 5},
	                {category:2, name: '奥巴马',value : 8},
	                {category:2, name: '比尔-盖茨',value : 9},
	                {category:2, name: '乔纳森-艾夫',value : 4},
	                {category:2, name: '蒂姆-库克',value : 4},
	                {category:2, name: '龙-韦恩',value : 1},
	            ],
	            links : [
	                {source : '丽萨-乔布斯', target : '乔布斯', weight : 1, name: '女儿'},
	                {source : '保罗-乔布斯', target : '乔布斯', weight : 2, name: '父亲'},
	                {source : '克拉拉-乔布斯', target : '乔布斯', weight : 1, name: '母亲'},
	                {source : '劳伦-鲍威尔', target : '乔布斯', weight : 2},
	                {source : '史蒂夫-沃兹尼艾克', target : '乔布斯', weight : 3, name: '合伙人'},
	                {source : '奥巴马', target : '乔布斯', weight : 1},
	                {source : '比尔-盖茨', target : '乔布斯', weight : 6, name: '竞争对手'},
	                {source : '乔纳森-艾夫', target : '乔布斯', weight : 1, name: '爱将'},
	                {source : '蒂姆-库克', target : '乔布斯', weight : 1},
	                {source : '龙-韦恩', target : '乔布斯', weight : 1},
	                {source : '克拉拉-乔布斯', target : '保罗-乔布斯', weight : 1},
	                {source : '奥巴马', target : '保罗-乔布斯', weight : 1},
	                {source : '奥巴马', target : '克拉拉-乔布斯', weight : 1},
	                {source : '奥巴马', target : '劳伦-鲍威尔', weight : 1},
	                {source : '奥巴马', target : '史蒂夫-沃兹尼艾克', weight : 1},
	                {source : '比尔-盖茨', target : '奥巴马', weight : 6},
	                {source : '比尔-盖茨', target : '克拉拉-乔布斯', weight : 1},
	                {source : '蒂姆-库克', target : '奥巴马', weight : 1}
	            ]
	        }
	    ]
	};
	/*var ecConfig = require('echarts/config');
	function focus(param) {
	    var data = param.data;
	    var links = option.series[0].links;
	    var nodes = option.series[0].nodes;
	    if (
	        data.source !== undefined
	        && data.target !== undefined
	    ) { //点击的是边
	        var sourceNode = nodes.filter(function (n) {return n.name == data.source})[0];
	        var targetNode = nodes.filter(function (n) {return n.name == data.target})[0];
	        console.log("选中了边 " + sourceNode.name + ' -> ' + targetNode.name + ' (' + data.weight + ')');
	    } else { // 点击的是点
	        console.log("选中了" + data.name + '(' + data.value + ')');
	    };*/
	}
	
}

UIForce.propTypes = $.extend({}, UIChart.propTypes, {
	
	// 节点分类, 详见图数据结构表示中的categories
	categories: React.PropTypes.array,
	
	// 力导向图的顶点数据, 详见图数据结构表示中的nodes(data), 力导向中独有的项：
	nodes: React.PropTypes.array,
	
	// 力导向图的边数据, 和matrix二选一 详见图数据结构表示中的links
	links: React.PropTypes.array,
	
	// 力导向图的邻接矩阵, 和links二选一 详见图数据结构表示中的matrix
	matrix: React.PropTypes.array,
	
	// 布局中心，可以是绝对值或者相对百分比
	center: React.PropTypes.array,
	
	// 布局大小，可以是绝对值或者相对百分比
	size: React.PropTypes.number,
	
	// 顶点数据映射成圆半径后的最小半径
	minRadius: React.PropTypes.number,
	
	// 顶点数据映射成圆半径后的最大半径
	maxRadius: React.PropTypes.number,
	
	// 同series（直角系）
	symbol: React.PropTypes.string,
	
	// 节点的大小
	symbolSize: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.array]),
	
	// 力导向图的边两端图形样式，可指定为'arrow', 详见symbolList
	linkSymbol: React.PropTypes.string,
	
	// 力导向图的边两端图形大小
	linkSymbolSize: React.PropTypes.array,
	
	// 布局缩放系数，并不完全精确, 效果跟布局大小类似
	scaling: React.PropTypes.number,
	
	// 向心力系数，系数越大则节点越往中心靠拢
	gravity: React.PropTypes.number,
	
	// 节点是否能被拖拽
	draggable: React.PropTypes.bool,
	
	// 在 500+ 顶点的图上建议设置 large 为 true, 会使用 Barnes-Hut simulation, 同时开启 useWorker 并且把 steps 值调大
	large: React.PropTypes.bool,
	
	// 是否在浏览器支持 web worker 的时候把布局计算放入 web worker 中
	useWorker: React.PropTypes.bool,
	
	// 每一帧布局计算的迭代次数，因为每一帧绘制的时间经常会比布局时间长很多，所以在使用 web worker 的时候可以把 steps 调大来平衡两者的时间从而达到效率最优化
	steps: React.PropTypes.number,
	
	// 是否开启滚轮缩放和拖拽漫游，默认为false（关闭），其他有效输入为true（开启），'scale'（仅开启滚轮缩放），'move'（仅开启拖拽漫游）
	roam: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
});

UIForce.defaultProps = $.extend({}, UIChart.defaultProps, {
	categories: null,
	nodes: [],
	links: [],
	matrix: [],
	center: ['50%', '50%'],
	size: "100%",
	minRadius: 10,
	maxRadius: 20,
	symbol: "circle",
	symbolSize: null,
	linkSymbol: "none",
	linkSymbolSize: [10, 15],
	scaling: 1,
	gravity: 1,
	draggable: true,
	large: false,
	useWorker: false,
	steps: 1,
	roam: false,
});
