import StringUtil from "../../../util/StringUtil";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/24
//	
//	author: yonglu.xie
//	
//	description: PanelGrid Component Class
//-----------------------------------------------------------------------------------------------
export default class PanelGrid extends React.Component {
	
	render(){
		let _self = this;
		let columnClass = this.getColumnClass();
		let styleClassArray = this.getStyleClassArray();
		
		if(React.Children.count(this.props.children) == 0){
			return null;
		}
		
		else if(React.Children.count(this.props.children) == 1){
			let children = this.props.children;
			return (
				<div className="row">
					<div className={columnClass}>
							{this.renderCell(children)}
					</div>
				</div>
			);
		} 
		//<div className={columnClass}></div>
		else {
			return (
				<div className="col-sm-12 col-md-12 col-lg-12">
				{
					this.props.children.map(function(children, index){
						return children;
					})
				}
				</div>
			);
		}
	}
	
	renderCell(children){
		let column = children.props.column;
		let columnClass = "col-sm-" + column + " col-md-" + column + " col-lg-" + column;
		return (
			<div className={columnClass}>{children.props.children}</div>
		);
	}
	
	render2(){
		let _self = this;
		let columnClass = this.getColumnClass();
		let styleClassArray = this.getStyleClassArray();
		
		if(React.Children.count(this.props.children) == 0){
			return null;
		}
		
		else if(React.Children.count(this.props.children) == 1){
			let children = this.props.children;
			return (
				<div className="row">
					<div className={columnClass + " form-group"}>
							{this.renderLabel(children, styleClassArray[0])}
							
							{this.renderInput(children, styleClassArray[1])}
					</div>
				</div>
			);
		} 
		
		else {
			return (
				<div className="row">
				{
					this.props.children.map(function(children, index){
							return (
								<div className={columnClass + " form-group"}>
										{_self.renderLabel(children, styleClassArray[0])}
										
										{_self.renderInput(children, styleClassArray[1])}
								</div>
							)
					})
				}
				</div>
			);
		}
	}
	
	getInput(children, source){
		let _self = this;
		let input = null;
		children.props.children.map(function(child, index){
			if(!_self.isLabel(child)){
				if(React.Children.count(child.props.children) == 0){
					return null;
				}
				
				else if(React.Children.count(child.props.children) == 1){
					let child2 = child.props.children;
					if(child2.props.id == source){
						input = child2;
					}
				}
				
				else {
					child.props.children.map(function(child2, index){
						if(child2.props.id == source){
							input = child2;
						}
					});
				}
			}
		});
		return input;
	}
	
	renderLabel(children, styleClass){
		let _self = this;
		return children.props.children.map(function(child, index){
			if(_self.isLabel(child)){
				let input = _self.getInput(children, child.props.source);
				
				return (
					<label htmlFor={child.props.source}
						className={styleClass + " form-group control-label"}
						style={{textAlign: 'left'}}>
						{input.props.label}
						
						{_self.renderHelpText(input)}
						
						{_self.renderRequired(input)}
					</label>
				);
			}
		});
	}
	
	renderInput(children, styleClass){
		let _self = this;
		return children.props.children.map(function(child, index){
				if(!_self.isLabel(child)){
					return (<div className={styleClass} id="1">{child.props.children}</div>);
				}
		});
	}
	
	isLabel(children){
		if(children.props.componentType == 'Label'){
			return true;
		}
		
		return false;
	}
	
	/**
	 * render children comonent required
	 */
	renderRequired(children) {
		if(children.props.required == null || children.props.required == undefined || 
			 !parseBool(children.props.required) || children.props.io == "out"){
			return null;	
		} else {
			return (
				<span className="fa fa-asterisk fa-lg"
					data-toggle="tooltip" data-placement="bottom" title="It is required ..."
					style={{paddingLeft: '5px', color:'#A94442', fontSize: '10px'}}>
				</span>
			);
		}
	}
	
	/**
	 * render children comonent helpText
	 */
	renderHelpText(children){
		if(children.props.helpText == null || children.props.helpText == undefined){
			return null;
		} else {
			return (
				<span className="fa fa-question-circle fa-lx"
					data-toggle="tooltip" data-placement="bottom" title={children.props.helpText}
					style={{paddingLeft: '5px', color:'#ed9c28'}}>
				</span>
			);
		}
	}
	
	getColumnClass(){
		if(this.props.column != null && this.props.column != undefined){			
			let column = 12 / this.props.column;
			/*if(children.props.colspan != null && children.props.colspan != undefined){
				column = children.props.colspan * column;
			}*/
			return ("col-sm-" + column + " col-md-" + column + " col-lg-" + column)
		}
		return '';	
	}
	
	getStyleClassArray() {
		let allocation = this.props.styleClassAllocation.split(",");
		let styleClass = [];
		styleClass[0] = "col-sm-" + StringUtil.trim(allocation[0]) + " col-md-" + StringUtil.trim(allocation[0]) + " col-lg-" + StringUtil.trim(allocation[0]);
		styleClass[1] = "col-sm-" + StringUtil.trim(allocation[1]) + " col-md-" + StringUtil.trim(allocation[1]) + " col-lg-" + StringUtil.trim(allocation[1]);
		
		return styleClass;
	}
	
};


/**
 * PanelGrid component prop types
 */
PanelGrid.propTypes = {
	id: React.PropTypes.string,
	columns: React.PropTypes.string,
	widthAllocation: React.PropTypes.string,
	styleClassAllocation: React.PropTypes.string
};

/**
 * Get PanelGrid component default props
 */
PanelGrid.defaultProps = {
	column: 3,
	styleClassAllocation: "6,6"
};