//-----------------------------------------------------------------------------------------------
//	date: 2015/09/25
//	
//	author: yonglu.xie
//	
//	description: Param Component Class
//-----------------------------------------------------------------------------------------------
export default class Param extends React.Component {

	/**
	 * Get parameter
	 */
	 static getParameter(component){
	 	let children = component.props.children;
		let parameter = [];
		
		if(React.Children.count(children) == 0){}
		else if(React.Children.count(children) == 1){
			if(children.props.componentType == "Param"){
				parameter.push({"name": children.props.name, "value": children.props.value});
			}
		}
			
		else {
			children.map(function(child, index){
				if(child.props.componentType == "Param"){
					parameter.push({"name": child.props.name, "value": child.props.value});
				}
			});
		}
			
		return parameter;
	}
		
	/**
	 * Get attribute parameter
	 * param = {[<Param name="a" value="aaa" />, <Param name="b" value="bbb" />, <Param name="c" value="ccc" />]}
	 */
	 static getAttributeParameter(component){
	 	let paramArray = component.props.param;
		let parameter = [];
		if(paramArray != undefined){
			$.each(paramArray, function(index, element){
				if(element.props.componentType == 'Param'){
					parameter.push({"name": element.props.name, "value": element.props.value});
				}
			});
		}
		return parameter;
	}
	
	render(){return null;}
	
};


/**
 * Param component prop types
 */
Param.propTypes = {
	name: React.PropTypes.string,
	value: React.PropTypes.object
};

/**
 * Get Param component default props
 */
Param.defaultProps = {
	componentType: "Param"
};
