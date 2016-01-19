import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2016/01/17
//	
//	author: yonglu.xie
//	
//	description: ToolBar Component Class
//-----------------------------------------------------------------------------------------------
export default class ToolBar extends Component {
	
	render(){
		let toolbarArray = this.getToolBarArray();
	
    return (
    	<nav className={"navbar navbar-primary"} role="navigation" style={{border: "1px solid #423C3C", minHeight: "15px", padding: "5px"}}>
				<div id={this.componentId}>
					<ul id={this.componentId + "_navbar"} className="nav navbar-nav">
						{toolbarArray[0]}
					</ul>
					
					<ul className="nav navbar-nav pull-right">
						{toolbarArray[1]}
					</ul>
				</div> 
			</nav>
    );
	}
	
	getToolBarArray(){
		let toolbarArray = [[], []];
	
		React.Children.forEach(this.props.children, function(child){
			if(child.props.position == "left") {
				toolbarArray[0].push(child.props.children);
			}
			
			else if(child.props.position == "right") {
				toolbarArray[1].push(child.props.children);
			} 
			
			else {
				toolbarArray[0].push(child.props.children);
			}
    });
    
    return toolbarArray;
	}
	
	//componentDidMount(){}
	
};


/**
 * ToolBar component prop types
 */
ToolBar.propTypes = {
	
};

/**
 * Get ToolBar component default props
 */
ToolBar.defaultProps = {
	
};
