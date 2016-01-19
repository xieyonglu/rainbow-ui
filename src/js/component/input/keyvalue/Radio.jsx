import KeyValue from "./KeyValue";
import config from "../../../component-config";

//-----------------------------------------------------------------------------------------------
//	date: 2015/08/01
//	
//	author: yonglu.xie
//	
//	description: Radio Component Class
//-----------------------------------------------------------------------------------------------
export default class Radio extends KeyValue {
	
	renderInput() {
		return (<div className="radio">{this.getDomArray()}</div>);
	}
	
	getDomArray(){
		let _self = this, radioArray = [];
		let optionJson = this.getOptionJson();
		
		if(optionJson) {
			$.each(optionJson, function(index, element){
				let key = element[config.DEFAULT_CODETABLE_KEYVALUE.KEY];
				let value = element[config.DEFAULT_CODETABLE_KEYVALUE.VALUE];
				
				let radioItem = (
					<label>
						<input type="radio" name={_self.getName()} id={_self.componentId + "_" + key} value={key}
							ref={_self.componentId + "_ref"} disabled={_self.getDisabled()} />
						{value}
					</label>
				);
				
				if(_self.props.displayStyle == "horizontal"){
					radioArray.push(<div className="radio">{radioItem}</div>);
					
					if(_self.props.itemSpacing != null && _self.props.itemSpacing != undefined){
						radioArray.push(<div style={{paddingTop: _self.props.itemSpacing}} />);
					}
				} else {
					radioArray.push(radioItem);
					
					if(_self.props.itemSpacing != null && _self.props.itemSpacing != undefined){
						radioArray.push(<span style={{paddingLeft: _self.props.itemSpacing}} />);
					}
				}
			});
		}
		
		return radioArray;
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
 * Radio component prop types
 */
Radio.propTypes = $.extend({}, KeyValue.propTypes, {
	displayStyle: React.PropTypes.oneOf(["horizontal", "vertical"]),
	itemSpacing: React.PropTypes.string
});

/**
 * Get Radio component default props
 */
Radio.defaultProps = $.extend({}, KeyValue.defaultProps, {
	componentType: "RADIO",
	displayStyle: "vertical",
	itemSpacing: null
});
