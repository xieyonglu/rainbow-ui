//import "../../../../../node_modules/webrtc/webrtc.bundle";
import "../../../../../node_modules/webrtc/webrtc";

import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Camera Component Class
//-----------------------------------------------------------------------------------------------
export default class Camera extends Component {
	
	render(){
    return (
    	  <video id="video" autoplay></video>
    );
	}
	
	componentDidMount2(){
		var getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
		
    getUserMedia.call(navigator, {
    	video: true,
    	audio: true
    }, function(localMediaStream) {
    	var video = document.getElementById('video');
    	video.src = window.URL.createObjectURL(localMediaStream);
    	video.onloadedmetadata = function(e) {
    		console.log("Label: " + localMediaStream.label);
    		console.log("AudioTracks" , localMediaStream.getAudioTracks());
    		console.log("VideoTracks" , localMediaStream.getVideoTracks());
    	};
    }, function(e) {
    	console.log("Reeeejected!", e);
    });
	}
	
};


/**
 * Camera component prop types
 */
Camera.propTypes = {
	width: React.PropTypes.string,
	height: React.PropTypes.string,
	
	onSuccess: React.PropTypes.func,
	onError: React.PropTypes.func,
	onStream: React.PropTypes.func
};

/**
 * Get Camera component default props
 */
Camera.defaultProps = {
	
};
