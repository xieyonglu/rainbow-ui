import "../../../../../plugin/jquery-layout/layout-default-latest.css";
import "../../../../../plugin/jquery-layout/jquery.layout-latest";

import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:		2015/11/27
//	
//	author: yonglu.xie
//	
//	description: Layout Component Class
//-----------------------------------------------------------------------------------------------
export default class Layout extends Component {
	
	render(){
		return (
			<div id={this.componentId} style={{width: "100%", height: "500px"}}>
				{this.props.children}
			</div>
		);
	}
	
	componentDidMount(){
		this.initComponent();
	}
	
	initComponent(){
		$("#" + this.componentId).layout({
			applyDefaultStyles: true,//应用默认样式
			scrollToBookmarkOnLoad: false,//页加载时滚动到标签
			showOverflowOnHover: false,//鼠标移过显示被隐藏的，只在禁用滚动条时用。
			north__closable: false,//可以被关闭
			north__resizable: false,//可以改变大小
			north__size: 50, //pane的大小
			spacing_open: 5, //边框的间隙
			spacing_closed: 5, //关闭时边框的间隙
			resizerTip: "可调整大小",//鼠标移到边框时，提示语
			resizerCursor: "resize-p",// 鼠标移上的指针样式
			resizerDragOpacity: 0.9,//调整大小边框移动时的透明度
			//maskIframesOnResize: "#ifa",//在改变大小的时候，标记iframe（未通过测试）
			
			sliderTip: "显示/隐藏侧边栏",//在某个Pane隐藏后，当鼠标移到边框上显示的提示语。
			sliderCursor: "pointer",//在某个Pane隐藏后，当鼠标移到边框上时的指针样式。
			slideTrigger_open: "dblclick",//在某个Pane隐藏后，鼠标触发其显示的事件。(click", "dblclick", "mouseover)  
			slideTrigger_close: "click",//在某个Pane隐藏后，鼠标触发其关闭的事件。("click", "mouseout") 
			
			togglerTip_open: "关闭",//pane打开时，当鼠标移动到边框上按钮上，显示的提示语
			togglerTip_closed: "打开",//pane关闭时，当鼠标移动到边框上按钮上，显示的提示语
			//togglerLength_open: 100,//pane打开时，边框按钮的长度
			//togglerLength_closed: 200,//pane关闭时，边框按钮的长度
			
			//hideTogglerOnSlide: true,//在边框上隐藏打开/关闭按钮(测试未通过)
			//togglerAlign_open: "left",//pane打开时，边框按钮显示的位置
			//togglerAlign_closed: "right",//pane关闭时，边框按钮显示的位置
			//togglerContent_open: "<div style='background:red'>AAA</div>",//pane打开时，边框按钮中需要显示的内容可以是符号"<"等。需要加入默认css样式.ui-layout-toggler .content
			//togglerContent_closed: "<img/>",//pane关闭时，同上。
			
			enableCursorHotkey: true,//启用快捷键CTRL或shift + 上下左右。
			customHotkeyModifier: "shift",//自定义快捷键控制键("CTRL", "SHIFT", "CTRL+SHIFT"),不能使用alt
			south__customHotkey: "shift+0",//自定义快捷键（测试未通过）
			fxName: "drop",//打开关闭的动画效果
			fxSpeed: "slow",//动画速度
			//fxSettings: {duration: 500, easing: "bounceInOut" }//自定义动画设置(未通过测试)
			//initClosed: true,//初始时，所有pane关闭
			//initHidden: true //初始时，所有pane隐藏
			
			// Show
			onshow: function(){
				console.log("==onshow==");
			},
			onshow_start: function(){
				console.log("==onshow_start==");
			},
			onshow_end: function(){
				console.log("==onshow_end==");
			},
			
			// Hide
			onhide: function(){
				console.log("==onhide==");
			},
			onhide_start: function(){
				console.log("==onhide_start:==");
			},
			onhide_end: function(){
				console.log("==onhide_end==");
			},
			
			// Open
			onopen: function(){
				console.log("==onopen==");
			},
			onopen_start: function(){
				console.log("==onopen_start==");
			},
			onopen_end: function(){
				console.log("==onopen_end==");
			},
			
			// Close
			onclose: function(){
				console.log("==onclose==");
			},
			onclose_start: function(){
				console.log("==onclose_start==");
			},
			onclose_end: function(){
				console.log("==onclose_end:==");
			},
			
			// Resize
			onresize: function(){
				console.log("==onresize==");
			},
			onresize_start: function(){
				console.log("==onresize_start==");
			},
			onresize_end: function(){
				console.log("==onresize_end==");
			}
		});
	}
	
};

/**
 * Layout component prop types
 */
Layout.propTypes = {
	id: React.PropTypes.string,
	
	// Show
	onShow: React.PropTypes.func,
	onShowStart: React.PropTypes.func,
	onShowEnd: React.PropTypes.func,
	
	// Hide
	onHide: React.PropTypes.func,
	onHideStart: React.PropTypes.func,
	onHideEnd: React.PropTypes.func,
	
	// Open
	onOpen: React.PropTypes.func,
	onOpenStart: React.PropTypes.func,
	onOpenEnd: React.PropTypes.func,
	
	// Close
	onClose: React.PropTypes.func,
	onCloseStart: React.PropTypes.func,
	onCloseEnd: React.PropTypes.func,
	
	// Resize
	onResize: React.PropTypes.func,
	onResizeStart: React.PropTypes.func,
	onResizeEnd: React.PropTypes.func,
};

/**
 * Get Layout component default props
 */
Layout.defaultProps = {
	
};
