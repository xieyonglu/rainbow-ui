import Component from "../../common/Component";
import UpdateContext from "../../context/UpdateContext";

//-----------------------------------------------------------------------------------------------
//	date: 2016/01/15
//	
//	author: yonglu.xie
//	
//	description: Poll Component Class
//-----------------------------------------------------------------------------------------------
export default class Poll extends Component {
	
	componentDidMount(){
		super._componentDidMount();
		
		let _self = this;
		setInterval(function(){
			let {listener, update} = _self.props;
			if(listener){
				listener();
			}
			
			if(update){
				UpdateContext.forceUpdate(update);
			}
		}, parseInt(this.props.interval));
	}
	
};


/**
 * Poll component prop types
 */
Poll.propTypes = {
	interval: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	update: React.PropTypes.string,
	
	listener: React.PropTypes.func
};

/**
 * Get Poll component default props
 */
Poll.defaultProps = {
	interval: 1000
};
