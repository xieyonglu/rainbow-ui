import "../../../../../bower_components/jquery-file-download/src/Scripts/jquery.fileDownload";

import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: FileDownload Component Class
//-----------------------------------------------------------------------------------------------
export default class FileDownload extends Component {
	
	render(){
		return (
			<a id={this.componentId} href="javascript:void(0);"
				onClick={this.handlerOnClick.bind(this)} disabled={this.props.disabled}
				style={this.props.style != null && this.props.style != undefined ? this.props.style : null}
				className={this.getDisabled()} >
				{this.renderLinkIcon()}
				{this.props.value}
			</a>
		);
	}
	
	componentDidMount(){
		
	}
	
	renderLinkIcon(){
		if(this.props.icon != null && this.props.icon != undefined){
			return (<span className={this.props.icon} style={{paddingRight: '5px'}} />);
		}
		return null;
	}
	
	getDisabled(){
		if(this.parseBool(this.props.disabled)){
			return "disabled";
		}
		return "";
	}
	
	handlerOnClick(event){
		event.preventDefault();
		if(this.getDisabled() == "disabled"){
			return;
		}
		
		$.fileDownload(this.getURL(), {
			successCallback: function(url) {
				console.log("==success==");
			},
			
			failCallback: function(responseHtml, url) {
				console.log("==fail==");
			}
		});
		
		if(this.props.onClick != undefined){
			this.props.onClick(new OnClickEvent(UIParam.getParameter(this)));
		}
	}
	
};


/**
 * FileDownload component prop types
 */
FileDownload.propTypes = {
	id: React.PropTypes.string,
	value: React.PropTypes.string,
	url: React.PropTypes.string,
	style: React.PropTypes.string,
	icon: React.PropTypes.string
};

/**
 * Get FileDownload component default props
 */
FileDownload.defaultProps = {
	//url: "http://jqueryfiledownload.apphb.com/FileDownload/DownloadReport/0",
	icon: "fa fa-download"
};
