import "../../../../../plugin/openvalidator/dist/css/bootstrapValidator.css";
import "../../../../../plugin/openvalidator/dist/js/bootstrapValidator";


import ArrayUtil from "../../../util/ArrayUtil";
import Command from "../Command";
import ValidatorContext from "../../../context/ValidatorContext";
import UpdateContext from "../../../context/UpdateContext";
import OnClickEvent from "../../../event/OnClickEvent";
import Param from "../../misc/Param";
import config from "../../../component-config";


//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Button Component Class
//-----------------------------------------------------------------------------------------------
export default class Button extends Command {
	
	constructor(props) {
    super(props);
  }
	
	render() {
		if(!this.parseBool(this.props.visibled)) {
			return null;
		}
	
		if(this.props.role == "button") {
			return (
	    	<button id={this.componentId} className={this.getStyleClass() + " " + this.getSize() + " " + this.getDisabled()} 
	    		disabled={this.getDisabled()} type={this.props.type}
	    		onClick={this.handlerOnClick.bind(this)}
	    		style={this.props.style != null && this.props.style != undefined ? this.props.style : null}
	    		data-dismiss={this.props.buttonType == "cancel" ? "modal" : null}>
	    		{this.renderButtonIcon()}
	    		<span>{this.getProperty("value")}</span>
	    	</button>
			);
		} else if(this.props.role == "link") {
			return (
	    	<a href="javascript:void(0);" className={this.getStyleClass()}
	    		role="button" disabled={this.getDisabled()} onClick={this.handlerOnClick.bind(this)}>
	    		{this.props.value}
	    	</a>
			);
		}
	}
	
	//btn-lg, btn-sm, btn-xs, btn-block
	//DEFAULT: "default", PRIMARY: "primary", SUCCESS: "success", INFO: "info", WARNING: "warning", DANGER: "danger", LINK: "link",
	//LG: "lg", SM: "sm", XS: "xs", BLOCK: "block",
	
	getStyleClass(){
		switch(this.props.styleClass){
			case (/*this.DEFAULT*/"default"):
				return "btn btn-default";
			case (/*this.PRIMARY*/"primary"):
				return "btn btn-primary";
			case (/*this.SUCCESS*/"success"):
				return "btn btn-success";
			case (/*this.INFO*/"info"):
				return "btn btn-info";
			case (/*this.WARNING*/"warning"):
				return "btn btn-warning";
			case (/*this.DANGER*/"danger"):
				return "btn btn-danger";
			case (/*this.LINK*/"link"):
				return "btn btn-link";
			case (undefined):
				return "btn btn-primary";
			default:
				return this.props.styleClass;
		}
	}
	
	renderButtonIcon(){
		if(this.props.icon != null && this.props.icon != undefined){
			if(this.props.value != null && this.props.value != undefined){
				return (<span className={this.props.icon} style={{paddingRight: '5px'}} />);
			}
			return (<span className={this.props.icon} />);
		}
		return null;
	}
	
	handlerOnClick(event){
		event.preventDefault();
		
		if(this.getDisabled() == "disabled"){
			return;
		}
		
		// reset form
		if(ValidatorContext.form != null && $(ValidatorContext.form).data("bootstrapValidator") != undefined){
			$(ValidatorContext.form).data("bootstrapValidator").resetForm();
			ValidatorContext.form.bootstrapValidator("destroy");
		}
		//console.log(JSON.stringify(ValidatorContext.getValidatorList()));
		
		if(this.parseBool(this.props.causeValidation)){
			let validator = null;
			if(this.props.validationGroup != undefined){
				validator = ValidatorContext.getValidators(this.props.validationGroup);
			} else {
				validator = ValidatorContext.getAllValidator();
			}
			
			ValidatorContext.form = $("#registerForm").bootstrapValidator({
				//live: "enabled",
				message: "This value is not valid",
				container: config.DEFAULT_VALIDATOR_CONTAINER,
				feedbackIcons: {
					valid: "glyphicon glyphicon-ok",
					invalid: "glyphicon glyphicon-remove",
					validating: "glyphicon glyphicon-refresh"
				},
				fields: validator,
				submitHandler: function (validator, form, submitButton){
          return false;
        }
			}).bootstrapValidator("validate");
			
			//if invalid field, the first field focus
			if(!$(ValidatorContext.form).data("bootstrapValidator").isValid()){
				let invalidField = $(ValidatorContext.form).data("bootstrapValidator").$invalidFields;
				if(invalidField.length > 0){
					$("#" + invalidField[0].id).focus();
				}
				return;
			}
		}
		
		// handler onClick
		if(this.props.onClick != undefined){
			this.props.onClick(new OnClickEvent(this, event, Param.getParameter(this)));
		}
		
		// handler update
		if(this.props.update != undefined){
			UpdateContext.forceUpdate(this.props.update);
		}
	}
	
	/*
	handlerOnClick1: function(event){
		$.fn.clearValidation = function(){
			var v = $(this).validate();
			$('[name]', this).each(function(){
				v.successList.push(this);
				v.showErrors();
			});
			v.resetForm();
			v.reset();
		};
	
		jQuery.validator.setDefaults({
		    highlight1: function (element, errorClass, validClass) {
		        if (element.type === "radio") {
		            this.findByName(element.name).addClass(errorClass).removeClass(validClass);
		        } else {
		            $(element).closest('.form-group').removeClass('has-success has-feedback').addClass('has-error has-feedback');
		            $(element).closest('.form-group').find('i.fa').remove();
		            $(element).closest('.form-group').append('<i class="fa fa-exclamation fa-lg form-control-feedback"></i>');
		        }
		    },
		    unhighlight1: function (element, errorClass, validClass) {
		    		if (element.type === "radio") {
		            this.findByName(element.name).removeClass(errorClass).addClass(validClass);
		        } else {
		            $(element).closest('.form-group').removeClass('has-error has-feedback').addClass('has-success has-feedback');
		            $(element).closest('.form-group').find('i.fa').remove();
		            $(element).closest('.form-group').append('<i class="fa fa-check fa-lg form-control-feedback"></i>');
		        }
		    },
				submitHandler: function (form) {
            return false;
        },
		    
		    highlight: function (element, errorClass) {
		       //$(element).closest('.form-group').addClass('has-error');
		       
		       $(element).closest('.form-group').addClass('has-error');
		       //$(element).closest('.form-group').find('i.fa').remove();
		       //$(element).closest('.form-group').append('<i class="fa fa-exclamation fa-lg form-control-feedback"></i>');
		    },
		    unhighlight: function (element, errorClass) {
		       //$(element).closest('.form-group').removeClass('has-error');
		       
		       $(element).closest('.form-group').removeClass('has-error');
		       //$(element).closest('.form-group').find('i.fa').remove();
		       //$(element).closest('.form-group').append('<i class="fa fa-check fa-lg form-control-feedback"></i>');
		    },
		    showErrors: function(errorMap, errorList) {
		    		var _self = this;
		        $.each(this.successList, function(index, value) {
		        		_self.settings.unhighlight.call(this, value);
		            return $(value).popover("hide");
		        });
		        
		        return $.each(errorList, function(index, value) {
		        		_self.settings.highlight.call(this, value.element);
		            var _popover;
		            _popover = $(value.element).popover({
		                trigger: "manual",
		                placement: "auto",
		                content: value.message,
		                template: "<div class=\"popover\"><div class=\"arrow\"></div><div class=\"popover-inner\"><div class=\"popover-content\" style=\"color: #A94442\"><p></p></div></div></div>"
		            });
		            _popover.data("bs.popover").options.content = value.message;
		            return $(value.element).popover("show");
		        });
		    }
		});
	
		var formElement = document.getElementById("registerForm");
 		var validator = $(formElement).validate();
		$('[name]', formElement).each(function(){
		   validator.successList.push(this);
		   validator.showErrors();
		});
		validator.resetForm();
		validator.reset();
		
		$('.form-group').each(function() {$(this).removeClass('has-error');});
		
		var settings = validator.settings;
		
		if(count % 2 == 0){
			$.extend(settings, {
           rules: {
			        'yonglu': {
			            required: true,
			            minlength: 5,
			            maxlength: 20
			        },
			        'expiryDate': {
			            required: true,
			            //email: true,
			            minlength: 5,
			            maxlength: 100
			        },
			        'effectiveDate': {
			            required: true,
			            minlength: 6,
			            maxlength: 25
			        }
			    },
			    onsubmit: false
			});
		} else {
			$.extend(settings, {
		    rules: {
		        'chassisNo': {
		            required: true,
		            minlength: 5,
		            maxlength: 20
		        },
		        'engineNo': {
		            required: true,
		            //email: true,
		            minlength: 5,
		            maxlength: 100
		        }
		    },
		    onsubmit: false
			});
		}
		
		count ++ ;
		if ($("#registerForm").valid()){
			//alert('==true==');
		} else {
			//alert('==false==');
		}
	}*/

};


/**
 * Button component prop types
 */
Button.propTypes = $.extend({}, Command.propTypes, {
	role: React.PropTypes.oneOf(["button", "link"]),
	type: React.PropTypes.oneOf(["button", "submit"]),
	causeValidation: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	validationGroup: React.PropTypes.string,
	update: React.PropTypes.string,
	
	onComplete: React.PropTypes.func//oncomplete="PF('dlg').show()"
}),

/**
 * Get Button component default props
 */
Button.defaultProps = $.extend({}, Command.defaultProps, {
	role: "button",
	causeValidation: false
});
