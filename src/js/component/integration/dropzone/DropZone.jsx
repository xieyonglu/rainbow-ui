import Dropzone from "dropzone";
//import "../../../../../node_modules/dropzone/dist/dropzone.css";


import Component from "../../../common/Component";
import i18n from "../../../i18n/reactjs-tag.i18n";
//-----------------------------------------------------------------------------------------------
//	date: 2015/09/14
//	
//	author: yonglu.xie
//	
//	description: DropZone Component Class
//-----------------------------------------------------------------------------------------------
export default class DropZone extends Component {
	
	/**
	 * Get DropZone
	 */
	static getDropZone(dropZoneId){
		return Dropzone.forElement("#" + dropZoneId);
	}
		
	/**
	 * Upload files
	 */
	static upload(dropZoneId){
		this.getDropZone(dropZoneId).processQueue();
	}
		
	/**
	 * All accepted files
	 */
	static getAcceptedFiles(dropZoneId){
		return this.getDropZone(dropZoneId).getAcceptedFiles();
	}
		
	/**
	 * All rejected files
	 */
	static getRejectedFiles(dropZoneId){
		return this.getDropZone(dropZoneId).getRejectedFiles();
	}
		
	/**
	 * All queued files
   */
	static getQueuedFiles(dropZoneId){
		return this.getDropZone(dropZoneId).getQueuedFiles();
	}
		
	/**
	 * All uploading files
	 */
	static getUploadingFiles(dropZoneId){
		return this.getDropZone(dropZoneId).getUploadingFiles();
	}
	
	render(){
		return (
			<div id={this.componentId} className="dropzone"
				style={{width: this.props.width, height: this.props.height, border: "1px dashed #2196f3"}}>
				
			</div>
		);
	}
	
	componentDidMount(){
		this.handlerComponent();
	}
	
	handlerComponent(){
		var _self = this;
		
		// Prevent Dropzone from auto discovering this element
		Dropzone.options.myAwesomeDropzone = false;
		// This is useful when you want to create the
		// Dropzone programmatically later
		
		// Disable auto discover for all elements
		Dropzone.autoDiscover = false;
		$("#" + this.componentId).dropzone({
			url: this.getURL(),
			method: "post",
			parallelUploads: this.props.parallelUpload,
			maxFilesize: this.props.maxFileSize,
			filesizeBase: 1000,
			//paramName: [],
			uploadMultiple: false,
			//headers
			addRemoveLinks: true,
			//previewsContainer
			clickable: this.parseBool(this.props.clickable),
			//createImageThumbnails
			//maxThumbnailFilesize
			//thumbnailWidth
			//thumbnailHeight
			maxFiles: this.props.maxFile,
			//resize
			//init
			acceptedFiles: this.props.acceptFile,
			//accept
      autoProcessQueue: this.parseBool(_self.props.autoUpload),
     
      //change the previewTemplate to use Bootstrap progress bars
      //<div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n<div class=\"dz-details\">\n<div class=\"dz-filename\"><span data-dz-name></span></div>\n<div class=\"dz-size\" data-dz-size></div>\n<img data-dz-thumbnail />\n</div>\n<div class=\"progress progress-small progress-striped active\"><div class=\"progress-bar progress-bar-success\" data-dz-uploadprogress></div></div>\n<div class=\"dz-success-mark\"><span></span></div>\n<div class=\"dz-error-mark\"><span></span></div>\n</div>",
			forceFallback: false,
			//fallback
			
			
			// To translate dropzone, you can also provide these options
			dictDefaultMessage: i18n.DropZone.dictDefaultMessage,
			dictFallbackMessage: i18n.DropZone.dictFallbackMessage,
			dictFallbackText: i18n.DropZone.dictFallbackText,
			dictInvalidFileType: i18n.DropZone.dictInvalidFileType,
			dictFileTooBig: i18n.DropZone.dictFileTooBig,
			dictResponseError: i18n.DropZone.dictResponseError,
			dictCancelUpload: i18n.DropZone.dictCancelUpload,
			dictCancelUploadConfirmation: i18n.DropZone.dictCancelUploadConfirmation,
			dictRemoveFile: i18n.DropZone.dictRemoveFile,
			dictMaxFilesExceeded: i18n.DropZone.dictMaxFilesExceeded,
			
			
			init: function() {
        _self.handlerErrorEvent(this);
        
        _self.hanlderRemoveFileEvent(this);
        
        _self.hanlderAddFileEvent(this);
        
        _self.hanlderSuccessEvent(this);
        
        _self.hanlderCompleteEvent(this);
        
        this.on("maxfilesexceeded", function(file){
		       console.log("No more files please!");
		    });
		  }
		});
	}
	
	/**
	 * Handler error event
	 */
	handlerErrorEvent(dropzone){
		var _self = this;
		dropzone.on("error", function(file, message) {
			if(_self.props.onError != undefined){
				_self.props.onError.call(file, message);
			}
		});
	}
	
	/**
	 * Handler remove file event
	 */
	hanlderRemoveFileEvent(dropzone){
		var _self = this;
		dropzone.on("removedfile", function(file) {
			if(_self.props.onRemoveFile != undefined){
				_self.props.onRemoveFile.call();
			}
    });
	}
	
	/**
	 * Handler add file event
	 */
	hanlderAddFileEvent(dropzone){
		var _self = this;
		dropzone.on("addedfile", function(file) {
			if(_self.props.onAddFile != undefined){
				_self.props.onAddFile.call();
			}
    });
	}
	
	/**
	 * Handler success event
	 */
	hanlderSuccessEvent(dropzone){
		var _self = this;
		dropzone.on("success", function(file, data) {
			if(_self.props.onSuccess != undefined){
				_self.props.onSuccess.call(file, data);
			}
    });
	}
	
	/**
	 * Handler complete event
	 */
	hanlderCompleteEvent(dropzone){
		var _self = this;
		dropzone.on("complete", function(file) {
			if(_self.props.onComplete != undefined){
				_self.props.onComplete.call();
			}
    });
	}
	
};


/**
 * DropZone component prop types
 */
DropZone.propTypes = {
	id: React.PropTypes.string.isRequired,
	url: React.PropTypes.string,
	width: React.PropTypes.string,
	height: React.PropTypes.string,
	paramName: React.PropTypes.object,
	//districtMessage: React.PropTypes.string,
	acceptFile: React.PropTypes.string,
	maxFile: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	maxFileSize: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	parallelUpload: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	autoUpload: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	clickable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	
	onError: React.PropTypes.func,
	onRemoveFile: React.PropTypes.func,
	onAddFile: React.PropTypes.func,
	onSuccess: React.PropTypes.func,
	onComplete: React.PropTypes.func
};

/**
 * Get DropZone component default props
 */
DropZone.defaultProps = {
	width: '100%',
	height: 'auto !important',
	//districtMessage: "Drop files here to upload",
	acceptFile: null, // eg: ".jpg,.png,.gif,.bmp,.jpeg,.JPG,.PNG,.GIF,.BMP,.JPEG" ,
	maxFile: 10,
	maxFileSize: 512, // MB
	parallelUpload: 100,
	autoUpload: true,
	paramName: null,
	clickable: true,
};
