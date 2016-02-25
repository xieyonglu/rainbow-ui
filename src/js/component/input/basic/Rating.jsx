import "../../../../../plugin/bootstrap-star-rating/css/star-rating.css";
import "../../../../../plugin/bootstrap-star-rating/js/star-rating";

import Input from "../Input";
import Param from "../../misc/Param";
import OnChangeEvent from "../../../event/OnChangeEvent";


//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Rating Component Class
//-----------------------------------------------------------------------------------------------
export default class Rating extends Input {
	
	renderInput(){
		return (
			<input id={this.componentId} name={this.getName()} type="number"
				className="rb-rating" data-rtl="0" ref={this.componentId + "_ref"} />
		);
	}
	
	initComponent(){
		let _self = this;
		
		$("#" + this.componentId).unbind("change");
		$("#" + this.componentId).rating({
			min: this.props.min,
			max: this.props.max,
			step: this.props.step,
			size: this.props.size,
			stars: this.props.stars,
			showClear: this.parseBool(this.props.showClear),
			showCaption: this.parseBool(this.props.showCaption),
			
			// hover attribute
			hoverEnabled: true,
      hoverChangeCaption: true,
      hoverChangeStars: true,
      hoverOnClear: true,
			
			// unicode character -> Stars£º&#xf005; Thumbs Up: &#xf164; Coffee: &#xf0f4;
			symbol: String.fromCharCode("0x" + this.props.symbol),
			glyphicon: false,
			ratingClass: "rating-fa",
			containerClass: "text-left",
			defaultCaption: "{rating} hearts",
			
			starCaptions: function(val) {
				if (val < 3) {
					return val;
				} else {
					return "high";
				}
			},
			
			starCaptionClasses: function(val) {
				if (val < 3) {
					return "label label-danger";
				} else {
					return "label label-success";
				}
			}
		})
		
		// Rating clear event
		.on("rating.clear", function(event) {
			console.log("Your rating is reset");
			_self.setComponentValue(event);
			
			if(_self.props.onClear){
				_self.props.onClear();
			}
		})
		
		// Rating change event
		.on("rating.change", function(event, value, caption) {
			console.log("You rated: " + value + " = " + $(caption).text());
			_self.setComponentValue(event);
			
			if(_self.props.onChange){
				_self.props.onChange(new OnChangeEvent(_self, event, Param.getParameter(_self)));
			}
		})
		
		// Rating reset event
		.on("rating.reset", function(event) {
			console.log("rating.reset");
			
			if(_self.props.onReset){
				_self.props.onReset();
			}
		})
		
		// Rating change event
		.on("rating.hover", function(event, value, caption, target) {
		  //console.log("rating.hover");
		  
		  if(_self.props.onHover){
				_self.props.onHover();
			}
		})
		
		.on('rating.hoverleave', function(event, target) {
			//console.log("==rating.hoverleave==");
			
			if(_self.props.onHoverLeave){
				_self.props.onHoverLeave();
			}
		})
		
		.on("rating.refresh", function(event) {
			//console.log("rating.refresh");
			
			if(_self.props.onRefresh){
				_self.props.onRefresh();
			}
		});
	}
	
};


/**
 * Rating component prop types
 */
Rating.propTypes = $.extend({}, Input.propTypes, {
	min: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	max: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	step: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	stars: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	size: React.PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]),
	symbol: React.PropTypes.string,
	showClear: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	showCaption: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
		
	// not support onFocus & onBlur event
	onChange: React.PropTypes.func,
	onClear: React.PropTypes.func,
	onReset: React.PropTypes.func,
	onHover: React.PropTypes.func,
	onHoverLeave: React.PropTypes.func,
	onRefresh: React.PropTypes.func,
});

/**
 * Get Rating component default props
 */
Rating.defaultProps = $.extend({}, Input.defaultProps, {
	symbol: "f005", // fa-star
	showClear: true,
	showCaption: true,
	min: 0,
	max: 5,
	step: 1,
	stars: 5,
	size: "xs",
});

