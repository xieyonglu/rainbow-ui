import "../../../../../node_modules/select2/dist/css/select2.css";
import "../../../../../node_modules/select2/dist/js/select2";
import "../../../../../node_modules/select2/dist/js/select2.full";


import KeyValue from "./KeyValue";
import i18n from "../../../i18n/reactjs-tag.i18n";
import UpdateContext from "../../../context/UpdateContext";
import config from "../../../component-config";
import Event from "../../misc/Event";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Select Component Class
//-----------------------------------------------------------------------------------------------
export default class Select extends KeyValue {
	
	/*
		<select id={this.componentId} name={this.componentId} className="form-control multiSelect" multiple
		 	style={{width: this.props.width}} >
		 	<optgroup label="Condiments" data-max-options="2">
		 		<option>Mustard</option>
		 		<option>Ketchup</option>
		 		<option>Relish</option>
		 	</optgroup>
		 	<optgroup label="Breads" data-max-options="2">
		 		<option>Plain</option>
		 		<option>Steamed</option>
		 		<option>Toasted</option>
		 	</optgroup>
		</select>
	*/
	renderInput() {
		if(this.parseBool(this.props.multiSelect)){
			return (
				<select id={this.componentId} name={this.getName()} className="form-control multiSelect" multiple
					ref={this.componentId + "_ref"} style={{width: this.props.width}}>
				</select>
			);
		} else {
			return (
				<select id={this.componentId} name={this.getName()} className="form-control"
					style={{width: this.props.width}} defaultValue={this.props.defaultValue}
					ref={this.componentId + "_ref"}>
				</select>
			);
		}
	}
	
	componentDidMount(){
		super._componentDidMount();
		if(this.props.io != "out"){
			this.initComponentEvent();
			this.initEvent();
			this.initValidator();
			this.fillSelectOption();
			this.initProperty();
			
			Event.initEventListener(this);
			
			UpdateContext.put(this.componentId, this);
			if(this.parseBool(this.props.autoComplete)){
				$("#" + this.componentId).select2();
			}
		}
	}
	
	componentDidUpdate(){
		if(this.props.io != "out"){
			this.fillSelectOption();
			this.initProperty();
			
			if(this.parseBool(this.props.autoComplete)){
				$("#" + this.componentId).select2();
			}
		}
	}
	
	initValue(){
		if(!this.parseBool(this.props.showBlankOption)){
			this.setComponentValue();
		}
		
		super.initValue();
	}
	
	getInputValue(event){
  	if(this.parseBool(this.props.multiSelect)){
	  	let valueArray = [];
		  let myselect = document.getElementById(this.componentId);
		  for(let i=0; i<myselect.length; i++){
		  	if(myselect.options[i].selected == true){
		  		valueArray.push(myselect.options[i].value);
	      }
	    }
	    return valueArray;
    }
  	return React.findDOMNode(this.refs[this.componentId + "_ref"]).value;
  }
	
	/**
	 * Init component event
	 */
	initComponentEvent(){
		let _self = this;
		
		$("#" + this.componentId).change(function(event, data){			
			if(data != undefined && data.eventName == "parentTrigger"){
				_self.fillSelectOption();
			}
			
			// trigger component change after fill select option
			_self.setComponentValue(event);
			
			let childrenId = _self.props.childrenId;
			if(childrenId != null && childrenId != "" && childrenId != undefined){
				let childrenArray = childrenId.split(",");
				
				$.each(childrenArray, function(index, element){
					$("#" + element).trigger("change", {eventName: "parentTrigger"});
				});
			}
		});
	}
	
	/**
	 * Fill select option
	 */
	fillSelectOption(){
		let _self = this;
		let selfElement = this.getSelfElement();
		let optionJson = this.getOptionJson();
		
		selfElement.empty();
		this.handlerBlankOption(selfElement);
		
		if(optionJson){
			let valueTemp = this.getComponentValue();
		
			$.each(optionJson, (index, element) => {
				let option = null;
				let key = element[config.DEFAULT_CODETABLE_KEYVALUE.KEY];
				let value = element[config.DEFAULT_CODETABLE_KEYVALUE.VALUE];
				
				if(_self.isKeyValueElement(valueTemp, key)){
					option = '<option value="'+key+'" selected>' + value + '</option>';
				} else {
					option = '<option value="'+key+'">' + value + '</option>';
				}
				selfElement.append(option);
			});
		}
	}
	
	/**
	 * Handler blank option
	 */
	handlerBlankOption(element){
		if(this.parseBool(this.props.showBlankOption)){
			element.append('<option value="">' + this.props.blankOption + '</option>');
		}
	}
	
	/*** Get parent element */
	getParentElement(){return $("#" + this.props.parentId);}
	
	/*** Get self element */
	getSelfElement(){return $("#" + this.componentId);}
	
	/*** Get children element */
	getChildrenElement(){return $("#" + this.props.childrenId);}
	
};


/**
 * Select component prop types
 */
Select.propTypes = $.extend({}, KeyValue.propTypes, {
	parentId: React.PropTypes.string,
	childrenId: React.PropTypes.string,
	foreignKey: React.PropTypes.string,
	autoComplete: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	multiSelect: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	showBlankOption: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	blankOption: React.PropTypes.string,
});


/**
 * Get Select component default props
 */
Select.defaultProps = $.extend({}, KeyValue.defaultProps, {
	blankOption: i18n.BlankOption,
	showBlankOption: true,
	multiSelect: false,
	autoComplete: false
});
