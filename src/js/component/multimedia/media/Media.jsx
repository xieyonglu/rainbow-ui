import "../../../../../plugin/jquery-media/jquery.media";

import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/26
//	
//	author: yonglu.xie
//	
//	description: Media Component Class
//-----------------------------------------------------------------------------------------------
export default class Media extends Component {
	
	render(){
    return (<a id={this.componentId} />);
	}
	
	componentDidMount(){
		this.initComponent();
	}
	
	initComponent(){
		$("#" + this.componentId).media({
		 	width: this.props.width,
		 	height: this.props.height,
		 	autoplay: false,
		 	
		 	//src: '../../../../../node_modules/RainbowUI/plugin/jquery-media/2.swf'
		 	src: '../../../../../node_modules/RainbowUI/plugin/jquery-media/guice.pdf'
    });
	}
	
};


/**
 * Media component prop types
 */
Media.propTypes = {
	width: React.PropTypes.string,
	height: React.PropTypes.string,
};

/**
 * Get Media component default props
 */
Media.defaultProps = {
	width: "800px",
	height: "300px",
};
