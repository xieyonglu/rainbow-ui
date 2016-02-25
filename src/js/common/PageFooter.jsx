//-----------------------------------------------------------------------------------------------
//	date: 2015/10/11
//	
//	author: yonglu.xie
//	
//	description: PageFooter Component Class
//-----------------------------------------------------------------------------------------------
export default class PageFooter extends React.Component {
	
	render(){
		return (
			<div className="row" style={{padding: "5px"}}>
				<div className="col-sm-12 col-md-12 col-lg-12 pagefooter-content">
					eBaoTech
				</div>
			</div>
		);
	}
}

/**
 * PageFooter component prop types
 */
PageFooter.propTypes = {
	
};

/**
 * Get PageFooter component default props
 */
PageFooter.defaultProps = {
	
};

