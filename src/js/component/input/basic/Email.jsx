import Input from "../Input";
import ValidatorConstant from "../../../validator/ValidatorConstant";


//-----------------------------------------------------------------------------------------------
//	date:
//
//	author: yonglu.xie
//
//	description: Email Component Class
//-----------------------------------------------------------------------------------------------
export default class Email extends Input {

	renderInput(){
		return (
			<div className="input-group">
				<span className="input-group-addon  pickerposition">
					<span className="glyphicon glyphicon-envelope" />
				</span>
				
				<input id={this.componentId} name={this.getName()} type="text" className="form-control"
					placeholder={this.props.placeHolder} ref={this.componentId + "_ref"} />
			</div>
		);
	}

	getValidatorId(){
		return ValidatorConstant.EMAIL_VALIDATOR;
	}

};
