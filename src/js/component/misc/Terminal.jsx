import from "../../../../node_modules/jquery.terminal/js/jquery.terminal-0.9.3.min";
import from "../../../../node_modules/jquery.terminal/js/jquery.mousewheel-min";
import from "../../../../node_modules/jquery.terminal/css/jquery.terminal-0.9.3.css";

import Component from "../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2016/01/13
//	
//	author: yonglu.xie
//	
//	description: Terminal Component Class
//-----------------------------------------------------------------------------------------------
export default class Terminal extends Component {
	
	render(){
    return (<div id={this.componentId} className="terminal" />);
	}
	
	componentDidMount(){
		this.initComponent();
	}
	
	initComponent(){
		let _self = this;
		
		$("#" + this.componentId).terminal(function(command, term){
			let {commandHandler} = _self.props;
			if(commandHandler != undefined){
				commandHandler(command, term);
			}
    }, {
    	name: "js_demo",
    	greetings: this.props.greeting,   	
    	height: this.props.height,
    	width: this.props.width,
    	prompt: this.props.prompt,
    	onInit: function(term){
    		//greetings(term);
      },
      keypress: function(event, term){
      	
      }
    });
	}
	
};


/**
 * Terminal component prop types
 */
Terminal.propTypes = {
	greeting: React.PropTypes.string,
	prompt: React.PropTypes.string,
	width: React.PropTypes.string,
	height: React.PropTypes.string,
	
	commandHandler: React.PropTypes.func
};

/**
 * Get Terminal component default props
 */
Terminal.defaultProps = {
	greeting: "Welcome to RainbowUI Terminal, how are you today?",
	prompt: "rainbow> ",
  height: 300,
  width: 1000,
};
