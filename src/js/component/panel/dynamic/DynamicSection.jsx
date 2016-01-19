import SmartPanelGrid from "../panelgrid/SmartPanelGrid";
import AjaxUtil from "../../../util/AjaxUtil";
import config from "../../../component-config";

import DynamicSectionFormTemplate from "./dynamic-section-form.template";
import DynamicSectionListTemplate from "./dynamic-section-table.template";
import DynamicSectionConvertor from "./dynamic-section.convertor";

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/03
//	
//	author: yonglu.xie
//	
//	description: DynamicSection Class
//-----------------------------------------------------------------------------------------------
export default class DynamicSection extends React.Component {
	
	/**
	 * Get table section
	 */
	static getTableSection(component){
		return DynamicSectionListTemplate.getField(DynamicSection.getSectionData(component));
	}
	
	/**
	 * Get form section
	 */
	static getFormSection(component){
		return DynamicSectionFormTemplate.getField(DynamicSection.getSectionData(component));
	}
	
	static getSectionData(component){
		if(component.props.value != undefined){
			let value = component.props.value;
			return (typeof value === "function") ? value() : value;
		}
		
		// handler url & param & convertor ajax
		else if(component.props.url != undefined){
			let dataTemp = null;
			let {dynamicSectionConvertor} = component.props;
			AjaxUtil.doGet(
				component.props.url, 
				component.props.param,
				{
					async: false,
					done: function(data){
						if(dynamicSectionConvertor != undefined){
							dataTemp = dynamicSectionConvertor.getDynamicSectionValue(data);
						}
					}
				}
			);
			return dataTemp;
		}
		
		// handler pageName & sectionName & subSectionName ajax
		else {
			var dataTemp = null;
			AjaxUtil.doGet(
				config.DEFAULT_DYNAMIC_SECTION_URL,
				{
					pageName: component.props.pageName,
					sectionName: component.props.sectionName,
					subSectionName: component.props.subSectionName
				},
				{
					async: false,
					done: function(data){
						dataTemp = data;
					}
				}
			);
	    return dataTemp;
		}
	}
	
	render(){
		return (
			<SmartPanelGrid>
				{DynamicSectionFormTemplate.getField(DynamicSection.getSectionData(this))}
			</SmartPanelGrid>
		);
	}
	
	componentWillMount(){}
	
	getDynamicSectionValue(){
		let {value} = this.props;
		return (typeof value === "function") ? value() : value;
	}
	
};

/**
 * DynamicSection component prop types
 */
DynamicSection.propTypes = {
	sectionId: React.PropTypes.string,
	sectionType: React.PropTypes.oneOf(["form", "table"]),
	
	value: React.PropTypes.object,
	
	pageName: React.PropTypes.string,
	sectionName: React.PropTypes.string,
	subSectionName: React.PropTypes.string,
	
	url: React.PropTypes.object,
	param: React.PropTypes.object,
	dynamicSectionConvertor: React.PropTypes.object
};

/**
 * Get DynamicSection component default props
 */
DynamicSection.defaultProps = {
	sectionType: "form",
	dynamicSectionConvertor: DynamicSectionConvertor
};
