//-----------------------------------------------------------------------------------------------
//	date: 2015/12/03
//	
//	author: yonglu.xie
//	
//	description: DynamicPageTemplate Class
//-----------------------------------------------------------------------------------------------
var DynamicPageTemplate = {
	
	getSection: function(data){
		
		return data.map(function(component, index){
			switch(component.template){
				case ('DEFAULT'):
					return (
						 <DynamicSection
						 	pageName={component.pageName}
						 	sectionName={component.sectionName}
						 	subSectionName={component.subSectionName} />
					);
				
				default:
					return null;
			}
		});
	}
	
}