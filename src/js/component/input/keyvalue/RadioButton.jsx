import KeyValue from "./KeyValue";
import config from "../../../component-config";


//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: RadioButton Component Class
//-----------------------------------------------------------------------------------------------
export default class RadioButton extends KeyValue {
	
	renderInput(){
		return (
			<div className={"form-control btn-group" + this.getSizeStyleClass()} data-toggle="buttons">
				{this.getDomArray()}
			</div>
		);
	}
	
	getDomArray(){
		let _self = this, domArray = [];
		let optionJson = this.getOptionJson();
		let inputValue = this.getComponentValue();
		
		if(optionJson) {
			$.each(optionJson, function(index, element){
				let key = element[config.DEFAULT_CODETABLE_KEYVALUE.KEY];
				let value = element[config.DEFAULT_CODETABLE_KEYVALUE.VALUE];
				
				domArray.push(
					<label className={"btn btn-" + _self.props.styleClass + " " + _self.getDisabledStyleClass() + " " + _self.getActiveStyleClass(inputValue, key)}>
			      <input type="radio" name={_self.getName()} value={key} disabled={_self.getDisabled()} />{value}
			    </label>
				);
			});
		}
		
		return domArray;
	}
	
	initValue(){
		let value = this.getComponentValue();
		
		$("input:radio[name=" + this.componentId + "]").each(function(index, element){
			if(element.value == value){
				$(element).attr("checked", "checked");
			} else {
				$(element).attr("checked", null);
			}
		});
	}
	
	getInputValue(event){
		return event.target.value;
	}
	
};

/**
 * RadioButton component prop types
 */
RadioButton.propTypes = $.extend({}, KeyValue.propTypes, {
	size: React.PropTypes.oneOf(["lg", "sm", "xs"])
	
	// not support onfocus & onblur event
});

/**
 * Get RadioButton component default props
 */
RadioButton.defaultProps = $.extend({}, KeyValue.defaultProps, {
	
});
