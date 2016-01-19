import "../../../../../plugin/jquery-barcode/jquery-barcode";

import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/26
//	
//	author: yonglu.xie
//	
//	description: BarCode Component Class
//-----------------------------------------------------------------------------------------------
export default class BarCode extends Component {
	
	render(){
    return (
    	<div id={this.componentId} />
		);
	}
	
	componentDidMount(){
		this.initComponent();
	}
	
	initComponent(){
		$("#" + this.componentId).empty().barcode(
			this.props.value,
			this.props.type,
			{
				barWidth: parseInt(this.props.width),
				barHeight: parseInt(this.props.height),
				moduleSize: 5,
				showHRI: this.parseBool(this.props.showHRI),
				bgColor: "#FFFFFF",
				color: "#000000",
				fontSize: 10,
				output: "css",
				
				addQuietZone: true,
				marginHRI: 5,
				posX: 0,
				posY: 0,
			}
		);
	}
	
};


/**
 * BarCode component prop types
 */
BarCode.propTypes = {
	value: React.PropTypes.string,
	width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	showHRI: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	type: React.PropTypes.oneOf(["codabar", "code11", "code39", "code93", "code128", "ean8", "ean13", "std25", "int25", "msi", "datamatrix"]),
};

/**
 * Get BarCode component default props
 */
BarCode.defaultProps = {
	width: 1,
	height: 50,
	type: "codabar",
	showHRI: true
};
