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
import UIColumn from "../../data/datatable/Column";
import CodeTable from "../../../model/CodeTable";

//-----------------------------------------------------------------------------------------------
//	date:		2015/12/03
//	
//	author: yonglu.xie
//	
//	description: DynamicSectionTableTemplate Class
//-----------------------------------------------------------------------------------------------
export default class DynamicSectionTableTemplate {
	
	static getField(data){
		return data.map(function(component, index){
			switch(component.fieldType){
				case ("AUTOCOMPLETE"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UIAutoComplete
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								codeTable={component.codeTable}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
				
				case ("CHECKBOX"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UICheckbox
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								codeTable={component.codeTable}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
					
				case ("COLORPICKER"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UIColorPicker 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
					
				case ("CURRENCY"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UICurrency 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
					
				case ("DATERANGEPICKER"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UIDateRangePicker 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
					
				case ("DATETIMEPICKER"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UIDateTimePicker 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
					
				case ("EMAIL"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UIEmail 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
					
				case ("NUMBER"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UINumber 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
					
				case ("PASSWORD"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UIPassword 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
					
				case ("PERCENT"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UIPercent 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
					
				case ("RADIO"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UIRadio 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								codeTable={component.codeTable}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
					
				case ("RATING"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UIRating 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
						
				case ("SELECT"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UISelect
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								parentId={component.parentId} childrenId={component.childrenId} foreignKey={component.foreignKey}
								codeTable={component.codeTable}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
						
				case ("SLIDER"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UISlider 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
						
				case ("SPINNER"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UISpinner 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
						
				case ("SWITCH"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UISwitch 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
						
				case ("TEXT"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UIText 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
						
				case ("TEXTAREA"):
					return (
						<UIColumn headerTitle={component.label} value={component.value}>
							<UITextarea 
								id={component.fieldCode} label={null} value={component.value}
								required={component.required} helpText={component.helpText}
								validationGroup={component.validationGroup}
								colspan={component.colspan}
								io={component.io} />
						</UIColumn>
					);
					break;
					
				default:
					return (<UIColumn headerTitle={component.label} value={component.value} />);
					break;
			}
		});
	}
}
