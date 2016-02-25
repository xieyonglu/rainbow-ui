//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: DialogFooter Component Class
//-----------------------------------------------------------------------------------------------
export default class DialogFooter extends React.Component {
	
	render(){
		return (<div className="modal-footer">{this.renderFooterButton()}</div>);
	}
	
	/**
	 * Render footer button
	 */
	renderFooterButton(){
		let buttonArray = this.getFooterButton();
		
		if(buttonArray[1].length != 0) {
    	return (
	    	<div className="col-sm-12 col-md-12 col-lg-12">
		    	<div className="col-sm-4 col-md-4 col-lg-4" style={{textAlign: "left"}}>
		    		{buttonArray[0]}
		      </div>
		      
		      <div className="col-sm-4 col-md-4 col-lg-4" style={{textAlign: "center"}}>
		    		{buttonArray[1]}
		      </div>
		      
		      <div className="col-sm-4 col-md-4 col-lg-4" style={{textAlign: "right"}}>
		      	{buttonArray[2]}
		      </div>
	      </div>
      )
    } 
    
    else {
    	return (
	    	<div className="col-sm-12 col-md-12 col-lg-12">
		    	<div className="col-sm-6 col-md-6 col-lg-6" style={{textAlign: 'left', padding: '0px'}}>
		    		{buttonArray[0]}
		      </div>
		      
		      <div className="col-sm-6 col-md-6 col-lg-6" style={{textAlign: 'right', padding: '0px'}}>
		      	{buttonArray[2]}
		      </div>
	      </div>
      )
    }
	}
	
	getFooterButton(){
		let buttonArray = [[], [], []];
	
		React.Children.forEach(this.props.children, function(child){
			if(child.props.position == "left") {
				buttonArray[0].push(child);
			}
			
			else if(child.props.position == "center") {
				buttonArray[1].push(child);
			}
			
			else if(child.props.position == "right") {
				buttonArray[2].push(child);
			} 
			
			else {
				buttonArray[2].push(child);
			}
    });
    
    return buttonArray;
	}
	
};


/**
 * DialogFooter component prop types
 */
DialogFooter.propTypes = {
	componentType: React.PropTypes.string
};

/**
 * Get DialogFooter component default props
 */
DialogFooter.defaultProps = {
	componentType: "DialogFooter"
};

