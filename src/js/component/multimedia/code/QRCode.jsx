//https://larsjung.de/jquery-qrcode/
import "../../../../../plugin/jquery-qrcode/jquery.qrcode-0.12.0";

import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/26
//	
//	author: yonglu.xie
//	
//	description: QRCode Component Class
//-----------------------------------------------------------------------------------------------
export default class QRCode extends Component {
	
	render(){
    return (
    	<div id={this.componentId} style={{position: "static"}}/>
		);
	}
	
	componentDidMount(){
		this.initComponent();
	}
	
	initComponent(){
		$("#" + this.componentId).qrcode({
			width: 200,
			height: 200,
			correctLevel: 0,
			text: this.utf16to8("size doesn't matter"),
			//render: "canvas",
			typeNumber: -1, 
			//correctLevel: QRErrorCorrectLevel.H,
			background: "#ffffff",
			foreground: "#000000",
			
			// render method: 'canvas', 'image' or 'div'
	    render: 'canvas',
	
	    // version range somewhere in 1 .. 40
	    minVersion: 1,
	    maxVersion: 40,
	
	    // error correction level: 'L', 'M', 'Q' or 'H'
	    ecLevel: 'L',
	
	    // offset in pixel if drawn onto existing canvas
	    left: 0,
	    top: 0,
	
	    // size in pixel
	    size: 200,
	
	    // code color or image element
	    fill: '#000',
	
	    // background color or image element, null for transparent background
	    //background: null,
	
	    // content
	    //text: 'no text',
	
	    // corner radius relative to module width: 0.0 .. 0.5
	    radius: 0,
	
	    // quiet zone in modules
	    quiet: 0,
	
	    // modes
	    // 0: normal
	    // 1: label strip
	    // 2: label box
	    // 3: image strip
	    // 4: image box
	    mode: 0,
	
	    mSize: 0.1,
	    mPosX: 0.5,
	    mPosY: 0.5,
	
	    label: 'no label',
	    fontname: 'sans',
	    fontcolor: '#000',
	
	    image: null
		});
	}
	
	utf16to8(str) {
		let out, i, len, c;
		out = "";
		len = str.length;
		for(i = 0; i < len; i++){
			c = str.charCodeAt(i);
			if((c >= 0x0001) && (c <= 0x007F)){
				out += str.charAt(i);
			} else if (c > 0x07FF) {
				out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
				out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
				out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
			} else {
				out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
				out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
			}
		}
		return out;
  }
	
};


/**
 * QRCode component prop types
 */
QRCode.propTypes = {
	
};

/**
 * Get QRCode component default props
 */
QRCode.defaultProps = {
	
};
