import "../../../../../node_modules/block-ui/jquery.blockUI";
import Loader from "./Loader";

//-----------------------------------------------------------------------------------------------
//	date: 2015/08/15
//	
//	author: yonglu.xie
//	
//	description: AjaxStatus Component Class
//-----------------------------------------------------------------------------------------------
export default class AjaxStatus extends React.Component {

	/**
	 * create form modal dialog
	 * @param title
	 * @returns {*}
	 */
	static show(ajaxStatusId){
		if($("#ajaxStatus").attr("id") == undefined){
			return;
		}
		
		if(ajaxStatusId == null || ajaxStatusId == undefined){
			ajaxStatusId = "ajaxStatus";
		}
		//console.log("==SUCCESS==" + $("#" +ajaxStatusId).length);
			
		$.blockUI({
			//message: "<div style='width:100px;height:50px;background-color:yellow;'>==Please Wait==</div>",
			message: $("#" + ajaxStatusId),
			//message: React.renderToString(<Loader id={ajaxStatusId + "_loader"} />),
			css: {
				//width: '90px',
				//height: '80px',
				backgroundColor: "none",
				textAlign: "center",
				cursor: "default",
				top: "20%",
				left: "45%",
				border: "0px",
				width: "auto",
				height: "auto !important",
				color: "red"
			}
		});
	}
		
	static hide(ajaxStatusId){
		$.unblockUI();
	}
  
  render() {
   	return (
    	<div id={this.props.id} style={{display: "none"}}>
    		{
    			this.props.children == undefined ? 
    			(<Loader id={this.props.id + "_loader"} />) : this.props.children
    		}
    	</div>
    );
  }
    
  componentDidMount() {}
    
};


/**
 * AjaxStatus component prop types
 */
AjaxStatus.propTypes = {
	id: React.PropTypes.string,
  loader: React.PropTypes.object
};

/**
 * Get ajaxStatus component default props
 */
AjaxStatus.defaultProps = {
	id: "ajaxStatus"
};
