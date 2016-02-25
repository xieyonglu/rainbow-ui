import "../../../../../bower_components/jQuery.print/jQuery.print";

import Component from "../../../common/Component";
import Param from "../../misc/Param";


//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Printer Component Class
//-----------------------------------------------------------------------------------------------
export default class Printer extends Component {
	
	render(){
		return (
			<a id={this.componentId} href="javascript:void(0);"
				onClick={this.handlerOnClick.bind(this)} disabled={this.props.disabled}
				style={this.props.style}
				className={this.getDisabled()} >
				{this.renderLinkIcon()}
				{this.props.value}
			</a>
		);
	}
	
	renderLinkIcon(){
		if(this.props.icon != null && this.props.icon != undefined){
			return (<span className={this.props.icon} style={{paddingRight: "5px"}} />);
		}
		return null;
	}
	
	//getDisabled(){
	//	if(this.parseBool(this.props.disabled)){
	//		return "disabled";
	//	}
	//	return "";
	//}
	
	handlerOnClick(event){
		event.preventDefault();
		//console.log(this.props.disabled + "-------" + this.getDisabled());
		//if(this.getDisabled() == "disabled"){
		//	return;
		//}
		
		var _self = this;
		//$(event.target).print();
		$("#" + this.componentId).print({
			//Use Global styles
			globalStyles: false,
			//Add link with attrbute media=print
			mediaPrint: false,
			//Custom stylesheet
			//stylesheet : "http://fonts.googleapis.com/css?family=Inconsolata",
			//Print in a hidden iframe
			iframe: this.parseBool(_self.props.iframe),
			//Don't print this
			noPrintSelector: ".avoid-this",
			//Add this at top
			prepend: "Hello World!!!<br/>",
			//Add this on bottom
			append: "<br/>Buh Bye!"
		});
		
		if(this.props.onClick != undefined){
			this.props.onClick(new OnClickEvent(Param.getParameter(this)));
		}
	}
	
};


/**
 * Printer component prop types
 */
Printer.propTypes = {
	id: React.PropTypes.string,
	value: React.PropTypes.string,
	style: React.PropTypes.string,
	icon: React.PropTypes.string,
	iframe: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	target: React.PropTypes.string
};

/**
 * Get Printer component default props
 */
Printer.defaultProps = {
	icon: "fa fa-print",
	iframe: true
};
