//-----------------------------------------------------------------------------------------------
//	date: 2015/12/03
//	
//	author: yonglu.xie
//	
//	description: DynamicPage Component Class
//-----------------------------------------------------------------------------------------------
export default class DynamicPage extends React.Component {
	
	render(){
		return (
			<div>{DynamicPageTemplate.getSection(this.data)}</div>
		);
	}
	
	componentWillMount(){
		var dataTemp = null;
		
		AjaxUtil.doPost(
			$cfg.DEFAULT_DYNAMIC_PAGE_URL, 
			{pageName: this.props.pageName},
			{
				async: false,
				done: function(data){
					dataTemp = data;
				}
			}
		);
		/*
		$.ajax({
			url: $cfg.DEFAULT_DYNAMIC_PAGE_URL,
			type: 'GET',
			async: false,
			data: {pageName: this.props.pageName},
			dataType: 'json',
			error: function (xhr) {
				alert('page-無法取得資料!');
			},
			success: function (response) {
				data = response;
			}
    });*/
    this.data = dataTemp;
	}
	
};


/**
 * DynamicPage component prop types
 */
DynamicPage.propTypes = {
	pageId: React.PropTypes.string,
	pageName: React.PropTypes.string
};

/**
 * Get DynamicPage component default props
 */
DynamicPage.defaultProps = {
	data: null
};
