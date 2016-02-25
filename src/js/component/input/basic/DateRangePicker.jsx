import "../../../../../node_modules/bootstrap-daterangepicker/daterangepicker.css";
import "../../../../../node_modules/bootstrap-daterangepicker/daterangepicker";
import moment from "moment";


import StringUtil from "../../../util/StringUtil";
import Convertor from "../../../convertor/Convertor";
import Input from "../Input";
import DateTimePickerConvertor from "../../../convertor/DateTimePickerConvertor";
import config from "../../../component-config";
import i18n from "../../../i18n/reactjs-tag.i18n";
import Param from "../../misc/Param";
import OnChangeEvent from "../../../event/OnChangeEvent";
import ConvertorConstant from "../../../convertor/ConvertorConstant";


//-----------------------------------------------------------------------------------------------
//	date:
//
//	author: yonglu.xie
//
//	description: DateRangePicker Component Class
//-----------------------------------------------------------------------------------------------
export default class DateRangePicker extends Input {

	renderInput(){
		return (
			<div className="input-group date dateTime">
				<input id={this.componentId} name={this.getName()} type="text" className="form-control" ref={this.componentId + "_ref"} />
				
				<span className="input-group-addon pickerposition">
					<span className="glyphicon glyphicon-calendar fa fa-calendar" onClick={this.onClickIcon.bind(this)} />
				</span>
			</div>
		);
	}

	initComponent(){
		let _self = this;
		
		$("#" + this.componentId).daterangepicker({
			autoApply: false,//this.parseBool(this.props.autoApply),
     	// startDate: null,//moment().startOf('day'),
      //endDate: moment(),
      minDate: this.props.minDate,
      maxDate: this.getMaxDate(),
      dateLimit: this.props.dateLimit,//{days: 30},

      singleDatePicker: false,
      opens: this.props.open,
      
      //起止时间的最大间隔
      showDropdowns: true,
      showWeekNumbers: false, //是否显示第几周
      timePicker: this.parseBool(this.props.timePicker), //是否显示小时和分钟
      timePickerIncrement: 60, //时间的增量，单位为分钟
      timePicker12Hour : false, //是否使用12小时制来显示时间
      buttonClasses: ["btn btn-default"],
      applyClass: "btn-small btn-primary blue",
      cancelClass: "btn-small",

      autoUpdateInput: false,
      locale: {
      	separator: this.props.separator,
      	format: this.getFormat(),//'YYYY-MM-DD HH:mm:ss', //控件中from和to 显示的日期格式
      	applyLabel: i18n.DateRangePicker.ApplyLabel,
      	cancelLabel: i18n.DateRangePicker.CancelLabel,
      	fromLabel: i18n.DateRangePicker.FromLabel,
      	toLabel: i18n.DateRangePicker.ToLabel,
      	customRangeLabel: i18n.DateRangePicker.CustomRangeLabel,
      	daysOfWeek: i18n.DateRangePicker.DaysOfWeek,
      	monthNames: i18n.DateRangePicker.MonthNames,
      	firstDay: 1
      },
      ranges_: {
      	"最近1小时": [moment().subtract('hours', 1), moment()],
      	"今日": [moment().startOf('day'), moment()],
      	"昨日": [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
      	"最近7日": [moment().subtract('days', 6), moment()],
      	"最近30日": [moment().subtract('days', 29), moment()]
      }
    }, function(startValue, endValue, label) {
    	console.log(startValue + "####" + endValue + "----" + label);
    	//_self.setComponentValue(startValue, endValue);
    })
    
    .on("apply.daterangepicker", function(event, picker){
    	let format = _self.getFormat();
    	$(this).val(picker.startDate.format(format) + _self.props.separator + picker.endDate.format(format));
    	_self.setComponentValue(picker.startDate, picker.endDate);
    	
    	// handle onchange event
			if(_self.props.onChange){
				_self.props.onChange(new OnChangeEvent(_self, event, Param.getParameter(_self)));
			}
    })
    
    .on("cancel.daterangepicker", function(event, picker){
    	$(this).val("");
    	_self.setComponentValue(null, null);
    	
    	// handle onchange event
			if(_self.props.onChange){
				_self.props.onChange(new OnChangeEvent(_self, event, Param.getParameter(_self)));
			}
    });
	}

	getMaxDate(){
		if(this.props.maxDate == "TODAY"){
			return moment();
		}
		return this.props.maxDate;
	}

	getFormat(){
		if(this.props.format != undefined){
			return this.props.format.toUpperCase();
		} else {
			return config.DEFAULT_DATETIME_FORMATER;
		}
	}

	setComponentValue(startValue, endValue){
    if(startValue != undefined && endValue != undefined){
			if(this.props.startValueLink || this.props.endValueLink){
				this.props.startValueLink.requestChange(Convertor.getAsObject(this.getConvertorId(), this, startValue));
				this.props.endValueLink.requestChange(Convertor.getAsObject(this.getConvertorId(), this, endValue));
			} else {
				this.setValue(this.props.startValue, Convertor.getAsObject(this.getConvertorId(), this, startValue));
	   	 	this.setValue(this.props.endValue, Convertor.getAsObject(this.getConvertorId(), this, endValue));
			}
		} else {
			if(this.props.startValueLink || this.props.endValueLink){
				this.props.startValueLink.requestChange(null);
				this.props.endValueLink.requestChange(null);
			} else {
				this.setValue(this.props.startValue, null);
	   	 	this.setValue(this.props.endValue, null);
			}
		}
  }

  getComponentValue(){
		if(this.props.startValue != undefined || this.props.endValue != undefined){
			let startValue = this.getValue(this.props.startValue);
			let endValue = this.getValue(this.props.endValue);
			
			if(startValue != null && endValue != null){
				return Convertor.getAsString(this.getConvertorId(), this, startValue) + this.props.separator + Convertor.getAsString(this.getConvertorId(), this, endValue);
			}
			return null;
		} else if(this.props.defaultValue != undefined){
			let value = this.props.defaultValue.split(" ");
			return Convertor.getAsString(this.getConvertorId(), this, StringUtil.trim(value[0])) + this.props.separator + Convertor.getAsString(this.getConvertorId(), this, StringUtil.trim(value[1]));
		}
		return null;
  }
  
  onClickIcon(event){
		event.preventDefault();
		$("#" + this.componentId).focus();
	}
	
	getConvertorId(){
		return ConvertorConstant.DATETIMEPICKER_CONVERTOR;
	}

};


/**
 * DateRangePicker component prop types
 */
DateRangePicker.propTypes = $.extend({}, Input.propTypes, {
	startValue: React.PropTypes.string,
	endValue: React.PropTypes.string,
	maxDate: React.PropTypes.object,
	minDate: React.PropTypes.object,
	separator: React.PropTypes.string,
	dateLimit: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool, React.PropTypes.object]),
	open: React.PropTypes.oneOf(["left", "center", "right"]),
	timePicker: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool])
});

/**
 * Get DateRangePicker component default props
 */
DateRangePicker.defaultProps = $.extend({}, Input.defaultProps, {
	separator: " ~ ",
	dateLimit: false,
	open: "right",
	timePicker: false
});
