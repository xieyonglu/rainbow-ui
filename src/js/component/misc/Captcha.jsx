//import "../../../../bower_components/rainbow-master/themes/blackboard.css";
//import "../../../../bower_components/rainbow-master/js/rainbow";
//import "../../../../bower_components/rainbow-master/js/language/generic";
//import "../../../../bower_components/rainbow-master/js/language/javascript";

//var asciiCaptcha = require('../../../../node_modules/ascii-captcha/lib/ascii-captcha');
//var mathCaptcha = require('../../../../node_modules/math-captcha/math-captcha');
//require('../../../../node_modules/jquery-simple-captcha/src/jquery.simpleCaptcha');
//require('../../../../node_modules/jquery-simple-captcha/src/jquery.simpleCaptcha.css');
//require('../../../../plugin/bootstrap-captcha/bootstrap-captcha');

import Component from "../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/25
//	
//	author: yonglu.xie
//	
//	description: Captcha Component Class
//-----------------------------------------------------------------------------------------------
export default class Captcha extends Component {
	
	render(){
		return null;
	}
	
	render2(){
    return (
    	<pre style={{fontSize: '2px', lineHeight: '2px'}}>
    		{asciiCaptcha.word2Transformedstr(asciiCaptcha.generateRandomText(5))}
    	</pre>
    );
	}
	
	render3(){
		//return (<div id="captcha"></div>);
		return (<div id="dropHere"></div>);
	}
	
	componentDidMount(){
		//$('#captcha').simpleCaptcha({
	    // any options you want to set
	  //  scriptPath: null
	  //});
	  
	  //$('#dropHere').bootstrapCaptcha({
     //     iconSize: '2x',
          //onDrop: function(results){
          //  console.log(results);
         // }
    //   });
	}
	
};


/**
 * Captcha component prop types
 */
Captcha.propTypes = {
	
};

/**
 * Get code component default props
 */
Captcha.defaultProps = {
	
};
