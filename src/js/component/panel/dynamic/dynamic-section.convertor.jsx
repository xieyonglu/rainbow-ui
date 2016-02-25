//-----------------------------------------------------------------------------------------------
//	date: 2015/11/25
//	
//	author: yonglu.xie
//	
//	description: DynamicSectionConvertor Class
//-----------------------------------------------------------------------------------------------
module.exports = {
	
	getDynamicSectionValue(sectionData) {
    let data = [], fieldJson = sectionData.Fields;
    for(let key in fieldJson){
    	let fieldType, field = fieldJson[key];
    	
    	switch(field.DataType){
    		case "STRING": 
    			fieldType = "TEXT";
    			break;
    			
    		case "DOUBLE":
    			fieldType = "CURRENCY";
    			break;
    			
    		case "DATE":
    			fieldType = "DATETIMEPICKER";
    			break;
    			
    		case "INTEGER":
    			fieldType = "NUMBER";
    			break;
    			
    		default:
    			fieldType = "";
    			break;
    	}
    	
    	data.push({
    		sectionId: "001",
	    	fieldId: "001",
	    	fieldName: "FieldName_" + key,
	    	fieldCode: "FieldCode_" + key,
	    	fieldType: fieldType,
	    	required: true,
	    	label: key,
	    	minLength: field.MinLength,
	    	maxLength: field.MaxLength
	    });
    }
    
    return data;
  }
  
};
