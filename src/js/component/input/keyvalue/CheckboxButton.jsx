import KeyValue from "./KeyValue";
import config from "../../../component-config";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: CheckboxButton Component Class
//-----------------------------------------------------------------------------------------------
export default class CheckboxButton extends KeyValue {
	
	renderInput(){
		return (
			<div id={this.componentId + "_div"} className={"form-control btn-group" + this.getSizeStyleClass()} data-toggle="buttons">
				{this.getDomArray()}
			</div>
		);
	}
  
  getDomArray(){
  	let _self = this, domArray = [];
		let optionJson = this.getOptionJson();
		let inputValue = this.getComponentValue();
		
		if(optionJson){
			$.each(optionJson, function(index, element){
				let key = element[config.DEFAULT_CODETABLE_KEYVALUE.KEY];
				let value = element[config.DEFAULT_CODETABLE_KEYVALUE.VALUE];
				
				domArray.push(
					<label id={_self.componentId + "_label"} className={"btn btn-" + _self.props.styleClass + " " + _self.getDisabledStyleClass() + " " + _self.getActiveStyleClass(inputValue, key)}>
			      <input type="checkbox" name={_self.getName()} value={key} disabled={_self.getDisabled()} />
			      {value}
			    </label>
				);
			});
		}
		return domArray;
	}
	
	initValue(){
		let value = this.getComponentValue();
		let _self = this;
		
		$("input:checkbox[name=" + this.componentId + "]").each(function(index, element){
			if(_self.isKeyValueElement(value, element.value)){
				$(element).attr("checked", "checked");
			} else {
				$(element).attr("checked", null);
			}
		});
	}
	
	getInputValue(event){
		let valueArray = [];
		$("input:checkbox[name=" + this.componentId + "]:checked").each(function(index, element){
			valueArray.push(element.value);
		});
		return valueArray;
  }
	
};


/**
 * CheckboxButton component prop types
 */
CheckboxButton.propTypes = $.extend({}, KeyValue.propTypes, {
	size: React.PropTypes.oneOf(["lg", "sm", "xs"]),
	
	// not support onfocus & onblur event
});

/**
 * Get CheckboxButton component default props
 */
CheckboxButton.defaultProps = $.extend({}, KeyValue.defaultProps, {
	
});
