import "../../../../../plugin/ueditor/ueditor.config";
import "../../../../../plugin/ueditor/ueditor.all.min";
//import "../../../../../plugin/ueditor/lang/zh-cn/zh-cn";

import Input from "../Input";

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/22
//	
//	author: yonglu.xie
//	
//	description: Editor Component Class
//-----------------------------------------------------------------------------------------------
export default class Editor extends Input {
	
	static getEditor(editorId){
		return UE.getEditor("container");
	}
	
	static setContent(editorId, content){
		this.getEditor(editorId).setContent(content);
	}
	
	static getContent(editorId){
		this.getEditor(editorId).getContent();
	}
	
	//ue.getContentTxt();
	//ue.getPlainTxt();
	//ue.hasContents();
	//ue.focus();
	//ue.blur();
	//ue.isFocus();
	//ue.setDisabled();
	//ue.setEnabled();
	//ue.setHide();
	//ue.setShow();
	//ue.selection.getText();
  
  renderInput(){
  	return (
  		<script id={this.props.id} type="text/plain" style={{width: "1024px", height: "500px"}} />
  	);
  }
	
	componentDidMount(){
		console.log(this.props.id + "----------");
		var ue = UE.getEditor(this.props.id, {
			autoHeight: false,
			zIndex: 999,
			lang: "zh-cn",
		});
		
		//设置编辑器的内容
    //ue.setContent('hello');
    //获取html内容，返回: <p>hello</p>
    //var html = ue.getContent();
    //获取纯文本内容，返回: hello
    //var txt = ue.getContentTxt();
	}
	
};


/**
 * Editor.propTypes component prop types
 */
Editor.propTypes = $.extend({}, Input.propTypes, {
	width: React.PropTypes.string,
	height: React.PropTypes.string
});

/**
 * Get Editor component default props
 */
Editor.defaultProps = $.extend({}, Input.defaultProps, {
	
});
