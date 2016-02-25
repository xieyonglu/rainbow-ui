import UIButton from "../../button/button/Button";
import UIWizard from "./Wizard";


//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: WizardStepButton Component Class
//-----------------------------------------------------------------------------------------------
export default class WizardStepButton extends React.Component {
	
	render(){
		let stepNumber = this.props.stepNumber;
		if(stepNumber == 0){
			return (
				<div className="row">
					<div className="col-sm-6 col-md-6 col-lg-6" style={{textAlign: 'left'}}>
						<UIButton value="Save" styleClass="info" icon="fa fa-save" causeValidation="false" onClick={this.save}/>
						<UIButton value="Exit" styleClass="danger" icon="fa fa-check" onClick={this.exit} causeValidation="false" />
					</div>
					<div className="col-sm-6 col-md-6 col-lg-6" style={{textAlign: 'right'}}>
						<UIButton value="Next" styleClass="info" icon="fa fa-check" onClick={this.next}
							causeValidation="false" validationGroup="policyPeriod, vehicleInfo, primaryDriver"/>
					</div>
				</div>
			);
		} 
		
		else if(stepNumber == 1){
			return (
				<div className="row">
					<div className="col-sm-6 col-md-6 col-lg-6" style={{textAlign: 'left'}}>
						<UIButton value="Back" styleClass="info" icon="fa fa-save" onClick={this.back} />
						<UIButton value="Save" styleClass="info" icon="fa fa-save" />
						<UIButton value="Exit" styleClass="danger" icon="fa fa-check" />
					</div>
					
					<div className="col-sm-6 col-md-6 col-lg-6" style={{textAlign: 'right'}}>
						<UIButton value="Next" styleClass="info" icon="fa fa-check" onClick={this.next} />
					</div>
				</div>
			);
		} 
		
		else if(stepNumber == 2){
			return (
				<div className="row">
					<div className="col-sm-4 col-md-4 col-lg-4" style={{textAlign: 'left'}}>
							<UIButton value="Back" styleClass="info" icon="fa fa-save" onClick={this.back} />
							<UIButton value="Save" styleClass="info" icon="fa fa-save" />
							<UIButton value="Exit" styleClass="danger" icon="fa fa-check" />
					</div>
					
					<div className="col-sm-8 col-md-8 col-lg-8" style={{textAlign: 'right'}}>
							<UIButton value="Reject" styleClass="info" icon="fa fa-save" />
							<UIButton value="Send To UW" styleClass="info" icon="fa fa-save" />
							<UIButton value="Preview" styleClass="danger" icon="fa fa-check" />
							<UIButton value="Send Quote" styleClass="info" icon="fa fa-save" />
							<UIButton value="Bind" styleClass="info" icon="fa fa-check" onClick={this.next} />
					</div>
				</div>
			);
		}	
		
		else if(stepNumber == 3){
			return (
				<div className="row">
					<div className="col-sm-6 col-md-6 col-lg-6" style={{textAlign: 'left'}}>
							<UIButton value="Amend" styleClass="info" icon="fa fa-save" onClick={this.amend} />
							<UIButton value="Save" styleClass="info" icon="fa fa-save" />
							<UIButton value="Exit" styleClass="danger" icon="fa fa-check" />
					</div>
					
					<div className="col-sm-6 col-md-6 col-lg-6" style={{textAlign: 'right'}}>
							<UIButton value="Reject" styleClass="info" icon="fa fa-save" />
							<UIButton value="Confirm And Pay" styleClass="info" icon="fa fa-check" onClick={this.next} />
					</div>
				</div>
			);
		}
		
		else if(stepNumber == 4){
			return (
				<div className="row">
					<div className="col-sm-6 col-md-6 col-lg-6" style={{textAlign: 'left'}}>
							<UIButton value="Amend" styleClass="info" icon="fa fa-save" onClick={this.amend} />
							<UIButton value="Save" styleClass="info" icon="fa fa-save" />
							<UIButton value="Exit" styleClass="danger" icon="fa fa-check" />
					</div>
					
					<div className="col-sm-6 col-md-6 col-lg-6" style={{textAlign: 'right'}}>
							<UIButton value="Issue Policy" styleClass="info" icon="fa fa-save" />
					</div>
				</div>
			);
		}
		
		return null;
	}
	
	save(){
		
	}
	
	exit(){
		$('#confirmDialog').modal('toggle');
	}
	
	next(){
		UIWizard.next("wizard");
	}
	
	back(){
		UIWizard.previous("wizard");
	}
	
	amend(){
		UIWizard.skipTo("wizard", 1);
	}
	
};


/**
 * WizardStepButton component prop types
 */
WizardStepButton.propTypes = {
	stepNumber: React.PropTypes.number
};

/**
 * Get WizardStepButton component default props
 */
WizardStepButton.defaultProps = {
	
};