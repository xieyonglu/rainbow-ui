//http://www.catchmyfame.com/catchmyfame-jquery-plugins/jquery-beforeafter-plugin/

import "../../../../../plugin/jquery-beforeafter/jquery-ui-1.11.4.custom.min";
import "../../../../../plugin/jquery-beforeafter/jquery.beforeafter-1.4";

//import "../../../../../node_modules/jquery-image-reveal/dist/jquery.imageReveal.css";
//import "../../../../../node_modules/jquery-image-reveal/dist/jquery.imageReveal";

import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/26
//	
//	author: yonglu.xie
//	
//	description: ImageCompare Component Class
//-----------------------------------------------------------------------------------------------
export default class ImageCompare extends Component {
	
	/*render(){
    return (
    	<div id="demo" class1="imageReveal" class2="container">
    		<img src="../../../../../node_modules/RainbowUI/node_modules/jquery-image-reveal/dist/demo/images/1-before.jpg" />
    		<img src="../../../../../node_modules/RainbowUI/node_modules/jquery-image-reveal/dist/demo/images/1-after.jpg" />
	    </div>
    );
	}
	
	componentDidMount(){
		$('#demo').imageReveal({
		    barWidth: 15,
		    touchBarWidth: 40,
		    paddingLeft: 0,
		    paddingRight: 0,
		    startPosition: 0.25,
		    showCaption: true,
		    captionChange: 0.5,
		    width: 500,
		    height: 500
		});
	}*/
	
	render(){
    return (
    	<div id={this.props.id}>
    		<div><img alt="before" src={this.props.leftImage} width="755" height="425" /></div>
    		<div><img alt="after" src={this.props.rightImage} width="755" height="425" /></div>
    	</div>
    );
	}
	
	componentDidMount(){
		this.initComponent();
	}
	
	initComponent(){
		$("#" + this.props.id).beforeAfter({
			animateIntro: true,
			introDelay: 1000,
			introDuration: 1000,
			introPosition: .5,
			showFullLinks: this.parseBool(this.props.showFullLink),
			beforeLinkText: this.props.beforeLinkText,
			afterLinkText: this.props.afterLinkText,
			imagePath: '../../../../../node_modules/RainbowUI/plugin/jquery-beforeafter/', //导航图片的路径（绝对路径或相对路径），导航图片指的是中间绿色条以及左右三角，默认值：/js/beforeAfter/
			cursor: "pointer",//"e-resize"
			clickSpeed: 600,
			linkDisplaySpeed: 200,
			dividerColor: "#888",//'#070'
			enableKeyboard: false,
			keypressAmount: 20,
			onReady: function(){
				console.log("==onReady==");
			}
		});
	}
	
};


/**
 * ImageCompare component prop types
 */
ImageCompare.propTypes = {
	leftImage: React.PropTypes.string,
	rightImage: React.PropTypes.string,
	width: React.PropTypes.string,
	height: React.PropTypes.string,
	
	showFullLink: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	beforeLinkText: React.PropTypes.string,
	afterLinkText: React.PropTypes.string,
};

/**
 * Get ImageCompare component default props
 */
ImageCompare.defaultProps = {
	leftImage: "../../../../../node_modules/RainbowUI/plugin/jquery-beforeafter/before.jpg",
	rightImage: "../../../../../node_modules/RainbowUI/plugin/jquery-beforeafter/after.jpg",
	
	showFullLink: true,
	beforeLinkText: "Show only before",
	afterLinkText: "Show only after",
};
