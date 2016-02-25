import "../../../../../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.css";
import "../../../../../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin";


import Input from "../Input";


//-----------------------------------------------------------------------------------------------
//	date:
//
//	author: yonglu.xie
//
//	description: Spinner Component Class
//-----------------------------------------------------------------------------------------------
export default class Spinner extends Input {

	renderInput(){
		return (
			<input id={this.componentId} name={this.getName()} type="text" ref={this.componentId + "_ref"}
       //data-bts-init-val=""
       //data-bts-step="1"
       data-bts-decimal="0"
       data-bts-step-interval="100"
       data-bts-force-step-divisibility="round"
       data-bts-step-interval-delay="500"
       data-bts-prefix=""
       data-bts-postfix=""
       data-bts-prefix-extra-class=""
       data-bts-postfix-extra-class=""
       data-bts-booster="true"
       data-bts-boostat="10"
       data-bts-max-boosted-step="false"
       data-bts-mousewheel="true"
       data-bts-button-down-class="btn btn-default"
       data-bts-button-up-class="btn btn-default"/>
		);
	}

	initComponent(){
		let _self = this;

		let initValue = _self.props.min == undefined ? "" : _self.props.min
		$("#" + this.componentId).TouchSpin({
			//initval: initValue,
			step: parseInt(_self.props.step),
			verticalbuttons: true,
			min: parseInt(_self.props.min),
			max: parseInt(_self.props.max),
			verticalupclass: "glyphicon glyphicon-plus",
			verticaldownclass: "glyphicon glyphicon-minus",

			//decimals: 2,
			//boostat: 5,
			//maxboostedstep: 10,
			//postfix: '%'
			//prefix: '$'
    });
	}

};


/**
 * Spinner component prop types
 */
Spinner.propTypes = $.extend({}, Input.propTypes, {
	min: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	max: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	step: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
});

/**
 * Get Spinner component default props
 */
Spinner.defaultProps = $.extend({}, Input.defaultProps, {
	//min: 0,
	//max: 100,
	step: 1
});
