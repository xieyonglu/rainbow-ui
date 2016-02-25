import i18n from "../../i18n/reactjs-tag.i18n";

//-----------------------------------------------------------------------------------------------
//	date: 2015/10/17
//	
//	author: yonglu.xie
//	
//	description: Pagination Class
//-----------------------------------------------------------------------------------------------
export default class Pagination extends React.Component {

	/**
	 * Get page count
	 */
	static getPageCount(totalCount, pageSize){
		if(totalCount % pageSize == 0){
			return parseInt(totalCount / pageSize);
		}
		return parseInt(totalCount / pageSize) + 1;
	}
	
	/**
	 * Get page no
	 */
	static getPageNo(pageIndex, pageSize){
		return (pageIndex - 1) / pageSize + 1;
	}
	
	render() {
		if(this.props.pageCount == undefined){
			this.props.pageCount = 1;
			this.props.currentPageIndex = 1;
		}
		
		return (
			<div className="">
				{this.renderPageInfo()}
				
				<div className="col-sm-8 col-md-8 col-lg-8" style={{textAlign: 'right', paddingRight: '0px'}}>
					<ul className="pagination">
						{this.renderFirst()}
						{this.renderPrevious()}
						{this.renderNumber()}
						{this.renderNext()}
						{this.renderLast()}
					</ul>
				</div>
			</div>
		);
	}
	
	/**
	 * Render page info
	 */
	renderPageInfo (){
		return (
			<div className="col-sm-4 col-md-4 col-lg-4" style={{paddingLeft: '0px'}}>
				({this.props.currentPageIndex} of {this.props.pageCount})
			</div>
		);
	}
	
	/**
	 * Render number
	 */
	renderNumber(){
		let currentPage = parseInt(this.props.currentPageIndex);
		let totalPage = parseInt(this.props.pageCount);
		let MAX_NUM = parseInt(this.props.maxNumber);
		
		var numberArray = [];
		if(totalPage < MAX_NUM){
			for(var i = 1; i <= totalPage; i++){
				numberArray.push(this.handlerNumber(i));
    	}
    }
    	
    else if(currentPage >= 1 && currentPage <= parseInt((MAX_NUM + 1) / 2)){
    	for(var i = 1; i <= MAX_NUM; i++){
    		numberArray.push(this.handlerNumber(i));
    	}
    }
    	
    else if(currentPage >= parseInt((MAX_NUM + 3) / 2) && currentPage <= (totalPage - parseInt((MAX_NUM + 2) / 2))){
    	for(var i = currentPage - parseInt((MAX_NUM - 1) / 2); i <= (currentPage + parseInt(MAX_NUM / 2)) && i <= totalPage; i++){
    		numberArray.push(this.handlerNumber(i));
    	}
    }
    	
    else if(currentPage >= (totalPage - parseInt(MAX_NUM / 2)) && (currentPage <= totalPage)){
    	for(var i = totalPage - MAX_NUM + 1; i > 0 && i <= totalPage; i++){
    		numberArray.push(this.handlerNumber(i));
    	}
		}
		
    return numberArray;
  }
    
  /**
   * Render first
   */
  renderFirst(){
  	if(this.props.currentPageIndex <= 1){
  		return (<li className="disabled"><a href="javascript:void(0);">{i18n.FirstPage}</a></li>);
    }
    return (<li><a href="javascript:void(0);" onClick={this.onToFirst.bind(this)}>{i18n.FirstPage}</a></li>);
  }
  
  /**
   * Render previous
   */
  renderPrevious(){
  	if(this.props.currentPageIndex <= 1){
  		return (<li className="disabled"><a href="javascript:void(0);">{i18n.PreviousPage}</a></li>);
    }
    return (<li><a href="javascript:void(0);" onClick={this.onToPrevious.bind(this)}>{i18n.PreviousPage}</a></li>);
  }
    
  /**
   * Render next
   */
  renderNext(){
  	if(this.props.currentPageIndex == this.props.pageCount || this.props.pageCount <= 1){
  		return (<li className="disabled"><a href="javascript:void(0);">{i18n.NextPage}</a></li>);
  	}
  	return (<li><a href="javascript:void(0);" onClick={this.onToNext.bind(this)}>{i18n.NextPage}</a></li>);
  }
    
  /**
   * Render last
   */
  renderLast(){
  	if(this.props.currentPageIndex == this.props.pageCount || this.props.pageCount <= 1){
    	return (<li className="disabled"><a href="javascript:void(0);">{i18n.LastPage}</a></li>);
   	}
   	return (<li><a href="javascript:void(0);" onClick={this.onToLast.bind(this)}>{i18n.LastPage}</a></li>);
  }
  
  onToFirst(){
   	this.props.onToPage(1);
  }
    
  onToPrevious(){
   	this.props.onToPage(parseInt(this.props.currentPageIndex) - 1);
  }
    
  onToNumber(event){
   	this.props.onToPage($(event.target).attr("data-number"));
  }
    
  onToNext(){
   	this.props.onToPage(parseInt(this.props.currentPageIndex) + 1);
  }
    
  onToLast(){
   	this.props.onToPage(parseInt(this.props.pageCount));
  }
    
  handlerNumber(index){
   	let active = this.getActiveStyleClass(index);
   	return (
    	<li className={active}>
    		<a href="javascript:void(0);" onClick={(active == null) ? this.onToNumber.bind(this) : null} data-number={index}>{index}</a>
    	</li>
   	);
  }
  
  getActiveStyleClass(pageIndex){
   	return (this.props.currentPageIndex == pageIndex) ? "active" : null;
  }
  
};


/**
 * Pagination component prop types
 */
Pagination.propTypes = {
	currentPageIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  pageCount: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  maxNumber: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  
  pageIndex: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  pageSize: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  totalCount: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  
  onToPage: React.PropTypes.func.isRequired,
};

/**
 * Get Pagination component default props
 */
Pagination.defaultProps = {
	currentPageIndex: 1,
  maxNumber: 5
};
