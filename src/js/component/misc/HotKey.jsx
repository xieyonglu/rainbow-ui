import "../../../../plugin/jquery-hotkeys/jquery.hotkeys";

import UpdateContext from "../../context/UpdateContext";

//-----------------------------------------------------------------------------------------------
//	date: 2016/01/11
//	
//	author: yonglu.xie
//	
//	description: HotKey Component Class
//-----------------------------------------------------------------------------------------------
export default class HotKey extends React.Component {
	
	render(){return null;}
	
	componentDidMount(){
		let _self = this;
		$(document).bind("keydown", _self.props.bind, function (ev){
		 	console.log("You press the " + _self.props.bind + " key.");
		 	
		 	// handler handler
			if(_self.props.onHandler != undefined){
				_self.props.onHandler();
			}
			
			// handler update
			if(_self.props.update != undefined){
				UpdateContext.forceUpdate(_self.props.update);
			}
		 	
		 	return false;
		});
	}
	
};


/**
 * HotKey component prop types
 */
HotKey.propTypes = {
	bind: React.PropTypes.string,
	update: React.PropTypes.string,
	
	//actionListener
	onHandler: React.PropTypes.func,
};

/**
 * Get HotKey component default props
 */
HotKey.defaultProps = {
	
};
