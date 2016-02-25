import SignaturePad from "../../../../../node_modules/signature_pad/signature_pad";
import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/28
//	
//	author: yonglu.xie
//	
//	description: Signature Component Class
//-----------------------------------------------------------------------------------------------
export default class Signature extends Component {
	
	/**
	 * Get signature
	 */
	static getSignature(signatureId){
		return $("#" + signatureId)[0];
	}
	
	/**
	 * Is empty
	 */
	static isEmpty(signatureId){
	
	}
	
	/**
	 * Clear
	 */
	static clear(signatureId){
    var canvas = this.getSignature(signatureId);
    var ctx = canvas.getContext("2d");

        ctx.fillStyle = this.backgroundColor;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //this._reset();
	}
	
	/**
	 * To data url
	 */
	static toDataURL(signatureId){
		let canvas = this.getSignature(signatureId);
    return canvas.toDataURL.apply(canvas, arguments);
	}
	
	/**
	 * From data url
	 */
	static fromDataURL(signatureId){
	
	}
	
	render(){
		return (
			<canvas id={this.componentId} style={{border: "1px solid gray", cursor: "default"}}/>
  	);
	}
	
	render2(){
    return (
    	<div id="signature-pad" className="m-signature-pad">
    		<div className="m-signature-pad--body">
    			<canvas id={this.componentId} />
    		</div>
    		<div className="m-signature-pad--footer">
    			<div className="description">Sign above</div>
	      	<button type="button" className="button clear" data-action="clear">Clear</button>
	      	<button type="button" className="button save" data-action="save">Save</button>
	    	</div>
	  	</div>
  	);
	}
	
	componentDidMount(){
		var //wrapper = document.getElementById("signature-pad"),
    //clearButton = wrapper.querySelector("[data-action=clear]"),
    //saveButton = wrapper.querySelector("[data-action=save]"),
    canvas = $("#" + this.componentId)[0],//wrapper.querySelector("canvas"),
    signaturePad;

		// Adjust canvas coordinate space taking into account pixel ratio,
		// to make it look crisp on mobile devices.
		// This also causes canvas to be cleared.
		function resizeCanvas() {
		    // When zoomed out to less than 100%, for some very strange reason,
		    // some browsers report devicePixelRatio as less than 1
		    // and only part of the canvas is cleared then.
		    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
		    canvas.width = canvas.offsetWidth * ratio;
		    canvas.height = canvas.offsetHeight * ratio;
		    canvas.getContext("2d").scale(ratio, ratio);
		}
		
		window.onresize = resizeCanvas;
		resizeCanvas();
		
		signaturePad = new SignaturePad(canvas);
		
		//clearButton.addEventListener("click", function (event) {
		//    signaturePad.clear();
		//});
		
		//saveButton.addEventListener("click", function (event) {
		//    if (signaturePad.isEmpty()) {
		//        alert("Please provide signature first.");
		//    } else {
		 //   	console.log("=====" + signaturePad.toDataURL());
		//        window.open(signaturePad.toDataURL());
		//    }
		//});
	}
	
};


/**
 * Signature component prop types
 */
Signature.propTypes = {
	
};

/**
 * Get Signature component default props
 */
Signature.defaultProps = {
	
};
