import KeyValue from "./KeyValue";
import config from "../../../component-config";


//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Checkbox Component Class
//-----------------------------------------------------------------------------------------------
export default class Checkbox extends KeyValue {
	
	renderInput() {
		if(this.parseBool(this.props.single)){
			return this.renderSingleInput();
		} else {
			return this.renderMultipleInput();
		}
	}
	
	renderSingleInput(){
		return (
			<div className="checkbox">
				<label>
					<input type="checkbox" id={this.componentId} name={this.getName()}
						ref={this.componentId + "_ref"} disabled={this.getDisabled()} />
				</label>
			</div>
		);
	}
	
	renderMultipleInput(){
		return (<div className="checkbox">{this.getDomArray()}</div>);
	}
	
	getDomArray(){
		let _self = this;
		let optionJson = this.getOptionJson();
		let checkboxArray = [];
		
		if(optionJson) {
			$.each(optionJson, function(index, element){
				let key = element[config.DEFAULT_CODETABLE_KEYVALUE.KEY];
				let value = element[config.DEFAULT_CODETABLE_KEYVALUE.VALUE];
				
				let checkboxItem = (
					<label>
						<input type="checkbox" name={_self.getName()} value={key}
							ref={_self.componentId + "_ref"} disabled={_self.getDisabled()} />
						{value}
					</label>
				);
				
				if(_self.props.displayStyle == "horizontal"){
					checkboxArray.push(<div className="checkbox">{checkboxItem}</div>);
					
					if(_self.props.itemSpacing != null && _self.props.itemSpacing != undefined){
						checkboxArray.push(<div style={{paddingTop: _self.props.itemSpacing}} />);
					}
				} else {
					checkboxArray.push(checkboxItem);
					
					if(_self.props.itemSpacing != null && _self.props.itemSpacing != undefined){
						checkboxArray.push(<span style={{paddingLeft: _self.props.itemSpacing}} />);
					}
				}
			});
		}
		
		return checkboxArray;
	}
	
	getOutputValue(){
		if(this.parseBool(this.props.single)){
			return ($.inArray(Checkbox.CHECKED_VALUE, this.getComponentValue()) != -1) ? Checkbox.CHECKED_VALUE : Checkbox.UNCHECKED_VALUE;
		} else {
			return super.getOutputValue();
		}
	}
	
	initValue(){
		let _self = this, value = this.getComponentValue();
		
		if(this.parseBool(this.props.single)){
			if(_self.isKeyValueElement(Checkbox.CHECKED_VALUE, value)){
				$("#" + this.componentId).attr("checked", "checked");
			} else {
				$("#" + this.componentId).attr("checked", null);
			}
		}
		
		else {
			$("input:checkbox[name=" + this.componentId + "]").each((index, element) => {
				if(_self.isKeyValueElement(value, element.value)){
					$(element).attr("checked", "checked");
				} else {
					$(element).attr("checked", null);
				}
			});
		}
	}
	
	getInputValue(event){	
  	if(this.parseBool(this.props.single)){
  		return $("#" + this.componentId).is(":checked") ? Checkbox.CHECKED_VALUE : Checkbox.UNCHECKED_VALUE;
  	} else {
	  	var valueArray = [];
	  	$("input:checkbox[name=" + this.componentId + "]:checked").each(function(index, element){
	  		valueArray.push(element.value);
	  	});
	  	return valueArray;
  	}
  }
};


// hanlder checkbox checked value & unchecked value
Checkbox.CHECKED_VALUE = config.DEFAULT_BOOLEAN_VALUE.TRUE;
Checkbox.UNCHECKED_VALUE = config.DEFAULT_BOOLEAN_VALUE.FALSE;


/**
 * Checkbox component prop types
 */
Checkbox.propTypes = $.extend({}, KeyValue.propTypes, {
	single: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	displayStyle: React.PropTypes.oneOf(["horizontal", "vertical"]),
	itemSpacing: React.PropTypes.string
});

/**
 * Get Checkbox component default props
 */
Checkbox.defaultProps = $.extend({}, KeyValue.defaultProps, {
	componentType: "CHECKBOX",
	single: false,
	displayStyle: "vertical"
});
