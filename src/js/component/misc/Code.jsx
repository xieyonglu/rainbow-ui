import "../../../../bower_components/rainbow-master/themes/blackboard.css";
import "../../../../bower_components/rainbow-master/js/rainbow";
import "../../../../bower_components/rainbow-master/js/language/generic";
import "../../../../bower_components/rainbow-master/js/language/javascript";

import Component from "../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/25
//	
//	author: yonglu.xie
//	
//	description: Code Class
//-----------------------------------------------------------------------------------------------
export default class Code extends Component {
	
	render(){
    return (
    	<pre>
				<code id={this.componentId} data-language="javascript">
					{this.getCodeContent()}
				</code>
			</pre>
    );
	}
	
	getCodeContent(){
		console.log(this.props.codeSrc);
	
		if(this.props.value != undefined){
			return this.props.value;
		} else {
			var contentString;
			$.ajax({
		 		type: "get",
		 		async: false,
		 		url: this.props.codeSrc,
		 		contentType: "application/json; charset=utf-8",
		 		dataType: "json",
		 		cache: false,
		 		success: function(content){
		 			contentString = content.responseText;
		 		},
		 		error: function(content){
		 			contentString = content.responseText;
		 		}
		 	});
		 	return this.handlerContent(contentString);
		}
	}
	
	handlerContent(content){
		var contentString = JSON.stringify(content).replace(/\\r/g, "").replace(/\\n/g, "\n").replace(/\\"/g, "\"").replace(/\\t/g, "    ");
  	return contentString.substr(1, contentString.length - 2);
	}
	
	componentDidMount(){
		var _self = this;
		setTimeout(function() {
			Rainbow.color();
		}, 100);
	}
	
};


/**
 * Code component prop types
 */
Code.propTypes = {
	id: React.PropTypes.string.isRequired,
	codeSrc: React.PropTypes.string.isRequired,
	value: React.PropTypes.string
};

/**
 * Get Code component default props
 */
Code.defaultProps = {
	
};
