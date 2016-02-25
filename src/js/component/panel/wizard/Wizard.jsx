import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Wizard Component Class
//-----------------------------------------------------------------------------------------------
export default class Wizard extends Component {
	
	/**
	 * Get wizard
	 */
	static getWizard(wizardId){
		return $("#" + wizardId + "_hiddenBtn");
	}
	
	/**
	 * Next
	 */
	static next(wizardId){
		this.getWizard(wizardId).trigger("click", {stepNumber: "next"});
		
		//document.getElementsByTagName('body')[0].scrollTop = 0;
		$("html, body").animate({"scrollTop": 0}, 100);
	}
	
	/**
	 * Previous
	 */
	static previous(wizardId){
		this.getWizard(wizardId).trigger("click", {stepNumber: "previous"});
		
		$("html, body").animate({"scrollTop": 0}, 100);
	}
	
	/**
	 * Skip to
	 */
	static skipTo(wizardId, stepNum){
		this.getWizard(wizardId).trigger("click", {stepNumber: stepNum});
		
		$("html, body").animate({"scrollTop": 0}, 100);
	}
	
	constructor(props) {
    super(props);
    
    this.state = {
    	stepNumber: null
    };
  }
	
	render(){
		return (
			<div>
				<ul className="wizard-steps">{this.renderWizardHeader()}</ul>
				{this.renderWizardContent()}
				{this.renderWizardStepButton()}
			</div>
		);
	}
	
	renderWizardHeader(){
		let _self = this;
		return this.props.children.map(function(child, index){
			return (
				<li data-target="#step1" className={(_self.state.stepNumber == index + 1) ? "active" : ""}>
					<span className="step">{index + 1}</span>
					<span className="title">{child.props.title}</span>
				</li>
			);
		});
	}
	
	renderWizardContent(){
		let _self = this;
		return this.props.children.map(function(child, index){
			if(_self.state.stepNumber == index + 1){
				return (
					<div id={"step-" + index} style={{width: "100%"}}>
						{child.props.children}
					</div>
				);
			}
		});
	}
	
	renderWizardStepButton(){
		if(this.props.wizardStepButton != null && this.state.stepNumber != null){
			let wizardStepButton = <this.props.wizardStepButton stepNumber={this.state.stepNumber} />;
			
			return (
				<div>
					<button id={this.props.id + "_hiddenBtn"} type="button" style={{display: "none"}} />
					{wizardStepButton}
				</div>
			);
		}
		return null;
	}
	
	componentWillMount(){
		if(this.props.activeIndex == null || this.props.activeIndex == undefined){
			this.setState({stepNumber: 1});
		} else {
			this.setState({stepNumber: this.getProperty("activeIndex")});
		}
	}
	
	componentDidMount(){
		let _self = this;
		
		$("#" + this.props.id + "_hiddenBtn").click(function(event, data){
			event.preventDefault();
			
			let stepNumber = data.stepNumber;
			if(stepNumber == "next"){
				_self.setState({stepNumber: parseInt(_self.state.stepNumber) + 1});
			}
			
			else if(stepNumber == "previous"){
				_self.setState({stepNumber: parseInt(_self.state.stepNumber) - 1});
			} 
			
			else {
				_self.setState({stepNumber: stepNumber});
			}
		});
	}
	
};


/**
 * Wizard component prop types
 */
Wizard.propTypes = {
	id: React.PropTypes.string,
	activeIndex: React.PropTypes.string,
	wizardStepButton: React.PropTypes.object
};

/**
 * Get wizard component default props
 */
Wizard.defaultProps = {
	activeIndex: 1
};
