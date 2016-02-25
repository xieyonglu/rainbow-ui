//import EM from "../../../../plugin/jquery-virtualkeyboard/vk_loader.js?vk_layout=CN%20Chinese%20Simpl.%20Pinyin&vk_skin=flat_gray";

import Component from "../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2016/01/11
//	
//	author: yonglu.xie
//	
//	description: KeyBoard Component Class
//-----------------------------------------------------------------------------------------------
export default class KeyBoard extends Component {

	render(){
		return (
			<div>
				<div>
	       Subject:<br/>
	       <input name="testa" id="testa" type="text" onfocus="VirtualKeyboard.attachInput(this)" /><br />
	       Password (has keyboard animation disabled):<br />
	       <input name="test_pwd" id="test_pwd" type="password" className="VK_no_animate" onfocus="VirtualKeyboard.attachInput(this)" /><br />
	       Text:<br/>
	       <textarea name="testb" id="testb" type="text" cols="55" rows="10" wrap="soft" onfocus="VirtualKeyboard.attachInput(this)"></textarea>
	       <br/><br/>
	       <div id="td"></div><br/>
	       <input id="showkb" type="button" value="Keyboard" onclick="VirtualKeyboard.toggle('testb','td'); return false;" />
	      </div>
	      <div id="dbg"></div>
			</div>
		);
	}
	
	componentDidMount2(){
		EM.addEventListener(window,'domload',function(){
             /*
             *  open the keyboard
             */
             VirtualKeyboard.toggle('testb','td');
             var el = document.getElementById('sul')
                ,lt = VirtualKeyboard.getLayouts()
                ,dl = window.location.href.replace(/[?#].+/,"")
             for (var i=0,lL=lt.length; i<lL; i++) {
                 var cl = lt[i];
                 cl = cl[0]+" "+cl[1];
                 lt[i] = "<a href=\""+dl+"?vk_layout="+cl+"\" onclick=\"VirtualKeyboard.switchLayout(this.title);return false;\" title=\""+cl+"\" alt=\""+cl+"\" >"+cl+"</a>"
             }
             el.innerHTML += "<li>"+lt.join("</li><li>")+"</li>";
         });
	}
	
};


/**
 * KeyBoard component prop types
 */
KeyBoard.propTypes = {
	
};

/**
 * Get KeyBoard component default props
 */
KeyBoard.defaultProps = {
	
};
