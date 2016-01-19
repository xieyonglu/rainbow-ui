import Component from "../../common/Component";
import UpdateContext from "../../context/UpdateContext";
import Param from "./Param";


//-----------------------------------------------------------------------------------------------
//	date: 2016/01/15
//	
//	author: yonglu.xie
//	
//	description: Event Component Class
//-----------------------------------------------------------------------------------------------
export default class Event extends Component {

	/**
	 * Init event
	 */
	 static initEventListener(component){
	 	let _self = this, {children} = component.props;
		
		if(React.Children.count(children) == 0){}
		else if(React.Children.count(children) == 1){
			if(children.props.componentType == "Event"){
				_self.doEventListener(component, children);
			}
		}
			
		else {
			children.map(function(child, index){
				if(child.props.componentType == "Event"){
					_self.doEventListener(component, child);
				}
			});
		}
	}
		
	/**
	 * Init attribute event
	 * event = {[<Event event="a" listener="..." />, <Event event="b" listener="..." />, <Event event="c" listener="..." />]}
	 */
	 static initAttributeEventListener(component){
	 	let _self = this, eventArray = component.props.event;
		if(eventArray != undefined){
			$.each(eventArray, function(index, element){
				if(element.props.componentType == "Event"){
					_self.doEventListener(component, element);
				}
			});
		}
	}
	
	static doEventListener(component, event){
		$("#" + component.componentId).bind(event.props.event, function(){
			let {listener, update} = event.props;
			if(listener){
				listener();
			}
			
			if(update){
				UpdateContext.forceUpdate(update);
			}
		});
	}
	
};


/**
 * Event component prop types
 */
Event.propTypes = {
	event: React.PropTypes.oneOf(["keyup", "change", "blur", "focus"]),
	update: React.PropTypes.string,
	listener: React.PropTypes.func,
};

/**
 * Get Event component default props
 */
Event.defaultProps = {
	componentType: "Event"
};
