import UIAutoComplete from "../../input/keyvalue/AutoComplete";
import UICheckbox from "../../input/keyvalue/Checkbox";
import UIColorPicker from "../../input/basic/ColorPicker";
import UICurrency from "../../input/digit/Currency";
import UIDateRangePicker from "../../input/basic/DateRangePicker";
import UIDateTimePicker from "../../input/basic/DateTimePicker";
import UIEmail from "../../input/basic/Email";
import UINumber from "../../input/digit/Number";
import UIPassword from "../../input/basic/Password";
import UIPercent from "../../input/digit/Percent";
import UIRadio from "../../input/keyvalue/Radio";
import UIRating from "../../input/basic/Rating";
import UISelect from "../../input/keyvalue/Select";
import UISlider from "../../input/basic/Slider";
import UISpinner from "../../input/basic/Spinner";
import UISwitch from "../../input/basic/Switch";
import UIText from "../../input/basic/Text";
import UITextarea from "../../input/basic/Textarea";
import CodeTable from "../../../model/CodeTable";
//-----------------------------------------------------------------------------------------------
//	date: 2015/12/03
//	
//	author: yonglu.xie
//	
//	description: DynamicSectionFormTemplate Class
//-----------------------------------------------------------------------------------------------
export default class DynamicSectionFormTemplate {
	
	static getField(data){
		return data.map(function(component, index){
			switch(component.FieldType){
				case ("AUTOCOMPLETE"):
					return (
						<UIAutoComplete
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							codeTable={component.codeTable}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
					
				case ("CHECKBOX"):
					return (
						<UICheckbox
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							codeTable={component.codeTable}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
					
				case ("COLORPICKER"):
					return (
						<UIColorPicker 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
					
				case ("CURRENCY"):
					return (
						<UICurrency 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup} visibled={component.visibled}
							colspan={component.colspan} 
							io={component.io} />
					);
					break;
					
				case ("DATERANGEPICKER"):
					return (
						<UIDateRangePicker 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
					
				case ("DATETIMEPICKER"):
					return (
						<UIDateTimePicker 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
					
				case ("EMAIL"):
					return (
						<UIEmail 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
					
				case ("NUMBER"):
					return (
						<UINumber 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
						
				case ("PASSWORD"):
					return (
						<UIPassword 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
						
				case ("PERCENT"):
					return (
						<UIPercent 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
						
				case ("RADIO"):
					return (
						<UIRadio 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							codeTable={component.codeTable}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
					
				case ("RATING"):
					return (
						<UIRating 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
						
				case ("SELECT"):
					return (
						<UISelect
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							parentId={component.parentId} childrenId={component.childrenId} foreignKey={component.foreignKey}
							codeTable={component.codeTable}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
						
				case ("SLIDER"):
					return (
						<UISlider 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
						
				case ("SPINNER"):
					return (
						<UISpinner 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
						
				case ("SWITCH"):
					return (
						<UISwitch 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
						
				case ("TEXT"):
					return (
						<UIText 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
						
				case ("TEXTAREA"):
					return (
						<UITextarea 
							id={component.FieldCode} label={component.Label} value={component.ValueBinding}
							required={component.Required} helpText={component.HelpText}
							validationGroup={component.validationGroup}
							colspan={component.colspan}
							io={component.io} />
					);
					break;
					
				default:
					return null;
					break;
			}
		}.bind(this));
	}
	
}
