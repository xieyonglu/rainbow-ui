import "../../../../../node_modules/jquery-autocomplete/jquery.autocomplete.css";
import "../../../../../node_modules/jquery-autocomplete/jquery.autocomplete";

import KeyValue from "./KeyValue";
import Param from "../../misc/Param";
import OnChangeEvent from "../../../event/OnChangeEvent";
import config from "../../../component-config";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/08
//	
//	author: yonglu.xie
//	
//	description: AutoComplete Component Class
//-----------------------------------------------------------------------------------------------
export default class AutoComplete extends KeyValue {
	
	renderInput(){
		if(this.parseBool(this.props.dropDown)){
			return (
				<div className="input-group">
					{this.renderInputElement()}
					
					<span className="input-group-btn">
						<button id={this.componentId + "_dropdownBtn"} className="btn btn-default" type="button">
							<span className="caret" />
						</button>
					</span>
				</div>
			);
		} else {
			return this.renderInputElement();
		}
	}
	
	/**
	 * Render input element
	 */
	renderInputElement(){
		return (
			<input id={this.componentId} name={this.getName()} type="text" className="form-control"
				placeholder={this.props.placeHolder} ref={this.componentId + "_ref"} />
		);
	}
	
	initValue(){
		if(this.codeTable != undefined){
			$("#" + this.componentId).val(this.codeTable.getValue(this.getComponentValue()));
		}
	}
	
	initComponent(){
		let _self = this;
		
		$("#" + this.componentId).autocomplete({
				valueKey: config.DEFAULT_CODETABLE_KEYVALUE.VALUE,
		 		titleKey: config.DEFAULT_CODETABLE_KEYVALUE.VALUE,
		 		highlight: true,
		 		
		 		showHint: true,
				dropdownWidth: "100%",
				dropdownStyle: {}, //{background: "red", color: "yellow", width: "500px"},
				itemStyle: {}, //{background: "red", color: "green", width: "500px"},
				hintStyle: false,
				style: false,
				debug: true,
				openOnFocus: true,
				closeOnBlur: true,
				autoselect: false,
				accents: true,
				replaceAccentsForRemote: true,
		 		
		 		limit: this.props.limit != undefined ? this.props.limit : this.codeTable.getCode().length,
		 		visibleLimit: 10,
		 		//visibleHeight: -10,
		 		defaultHeightItem: 30,
		 		
		 		valid: [
		 			function (value, query){
		 				if(this.accents){
		 					value = value;//accentReplace(value);
		 					query = query;//accentReplace(query);
		 				}
		 				return String(value).toLowerCase().indexOf(query.toLowerCase())!=-1;
		 			}
		 		],
		 		
		 		source:[{
					data: _self.codeTable != undefined ? _self.codeTable.getCode() : [],
					
					render: function(item, source, pid, query){
						var value = item[this.valueKey], title = item[this.titleKey];
					 	return '<div '+(value==query?'class="active"':'') +
						  ' data-value="' + encodeURIComponent(value)+'">' + title + 
						  '</div>';
					}
		 		}],
		 }).on("selected.xdsoft",function(event, datum){
		 		//event.key = datum.componentId;
		 		//event.value = datum.text;
		 		_self.setComponentValue(event);
		 		
		 		// call onchange event
				if(_self.props.onChange){
					_self.props.onChange(new OnChangeEvent(_self, event, Param.getParameter(_self)));
				}
		 });
		 
		 $("#" + this.componentId).blur(function(event){
				let value = event.target.value;
				let key = _self.codeTable.getKey(value);
				
				if(key == null || key == ""){
					if(_self.parseBool(_self.props.acceptInput)){
						_self.setValue(_self.props.value, value);
					} else {
						$("#" + _self.componentId).val("");
						_self.setValue(_self.props.value, "");
					}
				}
		});
		 
		 $("#" + this.componentId + "_dropdownBtn").click(function(){
		 		$("#" + _self.componentId).trigger("updateContent open");
				$("#" + _self.componentId).focus();
		 });
	}
	
	getInputValue(event){
		return this.codeTable.getKey(event.target.value);
	}
	
};

/**
 * AutoComplete component prop types
 */
AutoComplete.propTypes = $.extend({}, KeyValue.propTypes, {
	dropDown: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	acceptInput: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
	limit: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
});

/**
 * Get AutoComplete component default props
 */
AutoComplete.defaultProps = $.extend({}, KeyValue.defaultProps, {
	dropDown: false,
	acceptInput: false,
	//limit: Number.MAX_VALUE
});
