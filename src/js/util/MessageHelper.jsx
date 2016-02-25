import "../../../node_modules/toastr/build/toastr.min.css";
import toastr from "../../../node_modules/toastr/build/toastr.min";

//-----------------------------------------------------------------------------------------------
//	date: 2015/07/23
//	
//	author: yonglu.xie
//	
//	description: All kinds of information package.
//-----------------------------------------------------------------------------------------------
var MessageHelper = {
	
	SUCCESS:	"success",
	INFO: 		"info",
	WARNING: 	"warning",
	ERROR: 		"error",
	
	//message position
	POSITION_TOP_LEFT: 					"toast-top-left",
	POSITION_TOP_CENTER: 				"toast-top-center",
	POSITION_TOP_RIGHT: 				"toast-top-right",
	POSITION_TOP_FULL_WIDTH:		"toast-top-full-width",
	
	POSITION_BOTTOM_LEFT: 			"toash-bottom-left",
	POSITION_BOTTOM_CENTER: 		"toast-bottom-center",
	POSITION_BOTTOM_RIGHT: 			"toast-botton-right",
	POSITION_BOTTOM_FULL_WIDTH:	"toast-bottom-full-width",
	
	//default message position
	DEFAULT_POSITION: 					"toast-top-right",
	
	isValidAge: function(age) {
		return age >= this.SUCCESS && age <= this.INFO;
	},
	
	getMessageOption: function(position){
		return {
			closeButton: true,
			debug: false,
			progressBar: true,
			positionClass: position,
			onclick: null,
			showDuration: "300", //显示动作（从无到有这个动作）持续的时间
			hideDuration: "1000", //隐藏动作持续的时间
			timeOut: "5000", //间隔的时间
			extendedTimeOut: "1000",
			showEasing: "swing",
			hideEasing: "linear",
			showMethod: "fadeIn",
			hideMethod: "fadeOut"
		};
  },
  
  constructor: function(title, message) {
    this.title = title;
    this.message = message;
  },
	
	// success -> green
	success: function(message, title, position){
		//toastr.success(title, message);
		
		toastr.options = this.getMessageOption(this.handlerPosition(position));
		let $toast = toastr[this.SUCCESS](message, title);
	},
	
	// info -> blue
	info: function(message, title, position){
		//toastr.info(title, message);
		
		toastr.options = this.getMessageOption(this.handlerPosition(position));
		let $toast = toastr[this.INFO](message, title);
	},
	
	// warning -> orange
	warning: function(message, title, position){
		//toastr.warning(title, message);
		
		toastr.options = this.getMessageOption(this.handlerPosition(position));
		let $toast = toastr[this.WARNING](message, title);
	},
	
	// error -> red
	error: function(message, title, position){
		//toastr.error(title, message);
		
		toastr.options = this.getMessageOption(this.handlerPosition(position));
		let $toast = toastr[this.ERROR](message, title);
	},
	
	handlerPosition: function(position){
		if(position == undefined || position == null){
			return this.DEFAULT_POSITION;
		}
		
		return position;
	}
	
}

module.exports = MessageHelper;
