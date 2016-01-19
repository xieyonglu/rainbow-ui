import UpdateContext from "../../../context/UpdateContext";
import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/08/01
//	
//	author: yonglu.xie
//	
//	description: UpdatePanel Component Class
//-----------------------------------------------------------------------------------------------
export default class UpdatePanel extends Component {

	constructor(props) {
    super(props);
    
    this.state = {
    	stepNumber: 1
    };
  }
	
	render(){
		let render;
		if(this.props.render != undefined){
			render = this.props.render();
		} else {
		 	render = this.props.children;
		}
		
		if(parseInt(this.state.stepNumber) % 2 == 0){
			return (
				<div id={this.componentId} ref={this.componentId + "_ref"} className={this.props.className}>
					{render}
					<button id={this.componentId + "_hiddenBtn"} type="button" style={{display: "none"}} />
				</div>
			);
		} else {
			return (
				<div id={this.componentId} ref={this.componentId + "_ref"} className={this.props.className}>
					<div>{render}</div>
					<button id={this.componentId + "_hiddenBtn"} type="button" style={{display: "none"}} />
				</div>
			);
		}
	}
	
	componentDidMount(){
		UpdateContext.put(this.componentId, this);
		
		let _self = this;
		$("#" + this.componentId + "_hiddenBtn").click(function(event, data){
			event.preventDefault();
			_self.setState({stepNumber: parseInt(_self.state.stepNumber) + 1});
		});
	}
	
	componentWillUpdate(prevProps, prevState){
		//var isUnmount = React.unmountComponentAtNode(document.getElementById(this.componentId));
		//var isUnmount = React.unmountComponentAtNode(React.findDOMNode(this.componentId));
		//console.log(isUnmount);
		//console.log("==render==componentWillUpdate==");
		//this.componentWillMount();
		//$("#" + this.componentId + "_hiddenBtn").trigger("click");
 		//var updatePanel = document.getElementById(this.componentId);
		//while(updatePanel.hasChildNodes()) {
		//	updatePanel.removeChild(updatePanel.firstChild);
		//}
		//React.render(<span>{this.props.children}</span>, document.getElementById(this.componentId));
	}
	
};


/**
 * UpdatePanel component prop types
 */
UpdatePanel.propTypes = {
	id: React.PropTypes.string.isRequired,
	render: React.PropTypes.func
};

/**
 * Get updatePanel component default props
 */
UpdatePanel.defaultProps = {
	componentType: "UpdatePanel"
};
