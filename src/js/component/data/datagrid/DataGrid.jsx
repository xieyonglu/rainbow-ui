import Data from "../Data";
import config from "../../../component-config";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/24
//	
//	author: yonglu.xie
//	
//	description: DataGrid Component Class
//-----------------------------------------------------------------------------------------------
export default class DataGrid extends Data {
	
	constructor(props) {
    super(props);
    
    this.state = $.extend({}, this.state, {
			pageSize: 12
		});
  }
	
	renderData(){
    return (<div className="">{this.getSectionArray()}</div>);
	}
	
	/**
	 * Get section array
	 */
	getSectionArray(){
    let _self = this, elementArray = [];
    let columnClass = this.getColumnClass();
    
    $.each(this.pageValue, function(index, element){
    	let sectionStyleClass = (element.styleClass != undefined) ? element.styleClass : _self.props.sectionStyleClass;
    	
    	elementArray.push(
    		<div className={columnClass} style={{padding: '3px'}}>
    			<div className="ui-datagrid">
	    			<div className={"panel panel-" + sectionStyleClass} style={{margin: '0px'}}>
						  {_self.renderSectionTitle(element)}
						  
						  <div className="panel-body" style={{padding: '0px'}}>
						  	{_self.renderDataGrid(element)}
						  </div>
						</div>
					</div>
    		</div>
    	);
    });
    
    return elementArray;
	}
	
	/**
	 * Render section title
	 */
	renderSectionTitle(element){
		if(this.props.sectionTitle){
			return (
				<div className="panel-heading">
					<span className="panel-title">{element[this.props.sectionTitle]}</span>
				</div>
			);
		}
	}
	
	/**
	 * Render data grid
	 */
	renderDataGrid(data){
		let render = this.props.contentRender;
		if (typeof render === "function") {
			return render(data);
		}
	}
	
	/**
	 * Get column class
	 */
	getColumnClass(){
		if(this.props.column != null && this.props.column != undefined){			
			let column = 12 / this.props.column;
			return "col-sm-" + column + " col-md-" + column + " col-lg-" + column;
		}
		return "";
	}
	
};

/**
 * DataGrid component prop types
 */
DataGrid.propTypes = $.extend(Data.propTypes, {
	sectionTitle: React.PropTypes.string,
	sectionStyleClass: React.PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "info"]),
	column: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
}),

/**
 * Get DataGrid component default props
 */
DataGrid.defaultProps = $.extend(Data.defaultProps, {
	sectionStyleClass: config.DEFAULT_STYLE_CLASS,
	column: 3
});
