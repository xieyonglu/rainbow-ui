//-----------------------------------------------------------------------------------------------
//	date: 2015/10/24
//
//	author: yonglu.xie
//
//	description: SmartPanelGrid Component Class
//-----------------------------------------------------------------------------------------------
export default class SmartPanelGrid extends React.Component {

	render(){
		return (<div style={this.props.style} className={this.props.className}>{this.renderLayout()}</div>)
	}

	/**
	 * Render Layout
	 */
	renderLayout() {
		let _self = this;
		let {children} = this.props;

		if(React.Children.count(children) == 0){
			return null;
		}

		else if(React.Children.count(children) == 1){
			if(this.props.layout != undefined/* && children.props.layout == undefined*/){
				children.props.layout = this.props.layout;
			}
			if(this.props.widthAllocation != undefined && children.props.widthAllocation == undefined){
				children.props.widthAllocation = this.props.widthAllocation;
			}

			return (<div className={this.getColumnClass(children)}>{children}</div>);
		}

		else {
			let dom = [], domTemp = [], start = 1;
			children.map(function(child, index){
				if(child != null && child != undefined){
					if(_self.props.layout != undefined){
						child.props.layout = _self.props.layout;
					}
					if(_self.props.widthAllocation != undefined){
						child.props.widthAllocation = _self.props.widthAllocation;
					}
					
					domTemp.push(<div className={_self.getColumnClass(child)}>{child}</div>);
					start = (child != undefined && child.props.colspan != undefined) ? (start + parseInt(child.props.colspan) - 1) : start;
					if((index + start) % _self.props.column == 0){
						dom.push(<div className="row">{domTemp}</div>);
						domTemp = [];
					}
				} else {
					start = start + 1;
				}
			});
			
			if(domTemp.length > 0){
				dom.push(<div className="row">{domTemp}</div>);
			}
			
			return dom;
		}
	}

	/**
	 * Get column class
	 */
	getColumnClass(children){
		if(this.props.column != null && this.props.column != undefined){
			let column = 12 / this.props.column;

			if(children != undefined && React.isValidElement(children) && children.props.colspan != null && children.props.colspan != undefined){
				column = children.props.colspan * column;
			}
			return ("col-sm-" + column + " col-md-" + column + " col-lg-" + column)
		}
		return "";
	}

};


/**
 * SmartPanelGrid component prop types
 */
SmartPanelGrid.propTypes = {
	id: React.PropTypes.string,
	layout: React.PropTypes.oneOf(["horizontal", "vertical", "inline"]),
	column: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	widthAllocation: React.PropTypes.string,
	styleClassAllocation: React.PropTypes.string
};

/**
 * Get SmartPanelGrid component default props
 */
SmartPanelGrid.defaultProps = {
	column: 2
};
