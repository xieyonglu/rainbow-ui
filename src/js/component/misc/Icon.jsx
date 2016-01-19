import Component from "../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Icon Component Class
//-----------------------------------------------------------------------------------------------
export default class Icon extends Component {
	
	/**
	 * get size
	 * @returns {*}
	 */
	getSize() {
		var size = {
			"fa-lg": this.props.size === "lg",
    	"fa-2x": this.props.size === "2x",
    	"fa-3x": this.props.size === "3x",
    	"fa-4x": this.props.size === "4x",
    	"fa-5x": this.props.size === "5x",
    	"fa-fw": this.props.fixWidth
    };
    if (this.props.css){
    	size[this.props.css] = true;
    }
    return size;
  }
  
  /**
   * get icon
   * @returns {*}
   */
  getIcon () {
  	var c = {
  		"fa": true,
    	"fa-spin": this.props.spin,
    	"fa-pulse": this.props.pulse,
    	"fa-rotate-90": this.props.rotate == 90,
    	"fa-rotate-180": this.props.rotate == 180,
    	"fa-rotate-270": this.props.rotate == 270,
    	"fa-flip-horizontal": this.props.flip === "horizontal",
    	"fa-flip-vertical": this.props.flip === "vertical"
    };
    c["fa-" + this.props.icon] = true;
    if (this.props.iconClassName) {
    	c[this.props.iconClassName] = true;
    }
    return c;
  }
  
  /**
   * render
   * @returns {XML}
   */
  render () {
  	var size = this.getSize();
  	var iconClasses = this.getIcon();
  	
  	return <span className={this.setClass($.extend(iconClasses, size))} title={this.props.tooltip}/>;
  }
  
  setClass(classJson){
  	var classString = "";
    $.each(classJson, function(key, value){
    	if(value){
    		classString = classString + " " + key;
    	}    		
    });
    return classString;
  }
  
};


/**
 * Icon component prop types
 */
Icon.propTypes = {
	icon: React.PropTypes.string.isRequired,
	size: React.PropTypes.oneOf(["lg", "2x", "3x", "4x", "5x"]),
	fixWidth: React.PropTypes.bool,
	
	spin: React.PropTypes.bool,
	pulse: React.PropTypes.bool,
	rotate: React.PropTypes.oneOf([90, 180, 270]),
	flip: React.PropTypes.oneOf(["horizontal", "vertical"]),
	tooltip: React.PropTypes.string,
	
	css: React.PropTypes.string,
};

/**
 * Get Icon component default props
 */
Icon.defaultProps = {
	fixWidth: true,
	spin: false
};
