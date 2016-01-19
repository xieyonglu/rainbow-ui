//-----------------------------------------------------------------------------------------------
//	date: 2015/12/25
//	
//	author: yonglu.xie
//	
//	description: Box Component Class
//-----------------------------------------------------------------------------------------------
export default class Box extends React.Component {
	
	render() {
		let _self = this, {children} = this.props;
		let count = React.Children.count(children);
		let childrenArray = [];
		
		if(/*React.Children.count(children)*/count == 0){
			return null;
		}
		
		else if(/*React.Children.count(children)*/count == 1){
			return children;
		}
		
		else {
			children.map(function(child, index){
				childrenArray.push(child);
				
				if(count != index + 1){
					childrenArray.push(<span style={{paddingRight: _self.props.gap}} />);
				}
			});
		}
		
		return (<div className="row" style={{textAlign: this.props.direction}}>{childrenArray}</div>);
	}
	
};


/**
 * Box component prop types
 */
Box.propTypes = {
	direction: React.PropTypes.oneOf(["left", "center", "right"]),
	gap: React.PropTypes.string,
},

/**
 * Get Box component default props
 */
Box.defaultProps = {
	direction: "left",
	gap: "10px"
};
