import AjaxStatus from "../../overlay/ajaxstatus/AjaxStatus";
import Form from "../form/Form";

import Component from "../../../common/Component";
import config from "../../../component-config";

import DataContext from "../../../context/DataContext";
import ValidatorContext from "../../../context/ValidatorContext";
import UpdateContext from "../../../context/UpdateContext";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/11
//	
//	author: yonglu.xie
//	
//	description: Page Component Class
//-----------------------------------------------------------------------------------------------
export default class Page extends Component {
	
	render(){
		return (
			<div>
				<AjaxStatus />
				<div id="exception_container" />
				{this.renderPageHeader()}
				<Form id="registerForm">{this.renderPage()}</Form>
				{this.renderPageFooter()}
			</div>
		);
	}
	
	/**
	 * Render page header
	 */
	renderPageHeader(){
		let PageHeader = config.DEFAULT_CLASS.PAGE_HEADER;
		if(PageHeader && this.parseBool(this.props.showPageHeader)){
			return (<PageHeader />);
		}
		return null;
	}
	
	/**
	 * Render page footer
	 */
	renderPageFooter(){
		let PageFooter = config.DEFAULT_CLASS.PAGE_FOOTER;
		if(PageFooter && this.parseBool(this.props.showPageFooter)){
			return (<PageFooter />);
		}
	}
	
	/**
	 * Render page
	 */
	renderPage(){
		return this.props.children;
	}
	
	componentWillMount(){
		this.clearComponentId();
	}
	
	componentDidMount(){
		$("[data-toggle='tooltip']").tooltip();
		
		this.validateComponentId();
	}
	
	componentDidUpdate(){
		$("[data-toggle='tooltip']").tooltip();
	}
	
	componentWillUnmount() {
  	console.log("==page destory==");
  	DataContext.clear();
  	ValidatorContext.clear();
  	UpdateContext.clear();
  }
	
};

/**
 * Page component prop types
 */
Page.propTypes = {
	pageName: React.PropTypes.string,
	skin: React.PropTypes.string,
	showPageHeader: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	showPageFooter: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
};

/**
 * Get Page component default props
 */
Page.defaultProps = {
	showPageHeader: true,
	showPageFooter: true,
};
