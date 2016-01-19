import Data from "../Data";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/24
//	
//	author: yonglu.xie
//	
//	description: DataList Component Class
//-----------------------------------------------------------------------------------------------
export default class DataList extends Data {

	constructor(props) {
    super(props);
  }
	
	renderData(){
    return (
    	<div className="">
    		<ul className="list-group">{this.getSectionArray()}</ul>
    	</div>
    );
	}
	
	/**
	 * Get section array
	 */
	getSectionArray(){
		let _self = this, elementArray = [];
		if(this.pageValue != undefined){
	    $.each(this.pageValue, function(index, element){
	    	elementArray.push(
	    		<li className="list-group-item">
	    			{_self.renderBadge(element)}
	    			
	    			{_self.renderDataList(element)}
	    		</li>
	    	);
	    });
    }
    return elementArray;
	}
	
	/**
	 * Render badge
	 */
	renderBadge(element){
		if(this.props.badge != undefined){
			return (
				<span className="datalist badge">{element[this.props.badge]}</span>
			);
		}
	}
	
	renderDataList(data){
		let render = this.props.contentRender;
		let callback = null;
		if (typeof render === 'function') {
			callback = render;
		}
		
		if (callback != null) {
			return render(data);
		}
	}
	
};


/**
 * DataList component prop types
 */
DataList.propTypes = $.extend(Data.propTypes, {
	badge: React.PropTypes.string,
}),

/**
 * Get DataList component default props
 */
DataList.defaultProps = $.extend(Data.defaultProps, {
	
});

