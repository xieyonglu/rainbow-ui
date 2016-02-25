//http://eonasdan.github.io/bootstrap-datetimepicker/Options/

import moment from "moment";
import "../../../../../bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css";
import "../../../../../bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker";

import Input from "../Input";
import Param from "../../misc/Param";
import OnChangeEvent from "../../../event/OnChangeEvent";
import DateTimePickerConvertor from "../../../convertor/DateTimePickerConvertor";
import config from "../../../component-config";
import ConvertorConstant from "../../../convertor/ConvertorConstant";


//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: DateTimePicker Component Class
//-----------------------------------------------------------------------------------------------
export default class DateTimePicker extends Input {
	
	renderInput(){
		return (
			<div className="input-group date dateTime">
				<input id={this.componentId} name={this.getName()} type="text" className="form-control" ref={this.componentId + "_ref"} />
				
				<span className="input-group-addon pickerposition" style={{verticalAlign: "top"}}>
					<span className="glyphicon glyphicon-calendar fa fa-calendar" onClick={this.onClickIcon.bind(this)} />
				</span>
			</div>
		);
	}
	
	initComponent(){
		let _self = this;
		
		$("#" + this.componentId).unbind("change");
		$("#" + this.componentId).datetimepicker({
			format: this.getFormat(),
			useCurrent: false,
			keepInvalid: false,
      sideBySide: true,
      viewMode: this.props.viewMode,
      
      // inline & debug
      inline: this.parseBool(this.props.inline),
      debug: this.parseBool(this.props.inline), // #1314
      focusOnShow: false,
      
      collapse: false,
      calendarWeeks: false,
      keepOpen: false,
      
      date: DateTimePickerConvertor.getAsObject(this, this.getComponentValue()),
      defaultDate: DateTimePickerConvertor.getAsObject(this, this.props.defaultValue),
      minDate: this.getMinDate(),
      maxDate: this.getMaxDate(),
      daysOfWeekDisabled: this.props.daysOfWeekDisabled,
      
			showTodayButton: this.parseBool(this.props.showToday),
      showClear: this.parseBool(this.props.showClear),
      showClose: this.parseBool(this.props.showClose)
		})
		.on("dp.change", function(event){
			_self.setComponentValue(event);
		  
		  // handle onchange event
			if(_self.props.onChange){
				_self.props.onChange(new OnChangeEvent(_self, event, Param.getParameter(_self)));
			}
		});
	}
	
	getInputValue(event){
		if(this.parseBool(this.props.inline)){
			return DateTimePickerConvertor.getAsString(this, event.date);
		}
  	return React.findDOMNode(this.refs[this.componentId + "_ref"]).value;
  }
	
	onClickIcon(event){
		event.preventDefault();
		$("#" + this.componentId).focus();
	}
	
	getFormat(){
		if(this.props.format != undefined){
			return this.props.format;//.toLowerCase();
		} else {
			//if(this.props.minViewMode == "years" || this.props.minViewMode == 2){
			//	return "yyyy";
			//}
			return config.DEFAULT_DATETIME_FORMATER.split(" ")[0];//.toLowerCase();
		}
	}
	
	getMinDate(){
		if(this.props.minDate != undefined){
			let value = null;
			if(this.props.minDate == "TODAY"){
				value = DateTimePickerConvertor.getAsObject(this, moment().format(config.DEFAULT_DATETIME_SUBMIT_FORMATER));
			} else {
				value = DateTimePickerConvertor.getAsObject(this, this.props.minDate);
			}
			
			if(value != undefined){
				let format = this.getFormat();
				if(format == "YYYY"){
					return moment(value + "0101 00:00:00", "YYYYMMDD HH:mm:ss");
				}
				return value;
			}
		}
		return false;
	}
	
	getMaxDate(){
		if(this.props.maxDate != undefined){
			let value = null;
			if(this.props.maxDate == "TODAY"){
				value = DateTimePickerConvertor.getAsObject(this, moment().format(config.DEFAULT_DATETIME_SUBMIT_FORMATER));
			} else {
				value = DateTimePickerConvertor.getAsObject(this, this.props.maxDate);
			}
			
			if(value != undefined){
				let format = this.getFormat();
				if(format == "YYYY"){
					return moment(value + "1231 23:59:59", "YYYYMMDD HH:mm:ss");
				}
				return value;
			}
		}
		return false;
	}
	
	getConvertorId(){
		return ConvertorConstant.DATETIMEPICKER_CONVERTOR;
	}
	
};


/**
 * DateTimePicker component prop types
 */
DateTimePicker.propTypes = $.extend({}, Input.propTypes, {
	minDate: React.PropTypes.string,
	maxDate: React.PropTypes.string,
	viewMode: React.PropTypes.oneOf(["decades", "years", "months", "days"]),
	toolbarPlacement: React.PropTypes.oneOf(["default", "top", "bottom"]),
	daysOfWeekDisabled: React.PropTypes.array,
	
	inline: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	showClose: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	showToday: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	showClear: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
});

/**
 * Get DateTimePicker component default props
 */
DateTimePicker.defaultProps = $.extend({}, Input.defaultProps, {
	close: false,
	viewMode: 'days',
	toolbarPlacement: 'default',
	weekStart: 0, // day of the week start. 0 for Sunday - 6 for Saturday
	daysOfWeekDisabled: [],
	showClose: false,
	showToday: false,
	showClear: false,
	inline: false,
	format: config.DEFAULT_DATETIME_FORMATER,
});
