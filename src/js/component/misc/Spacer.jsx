import clearSource from "../../../style/paper/images/dot_clear.gif";
import Component from "../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2016/01/11
//	
//	author: yonglu.xie
//	
//	description: Spacer Component Class
//-----------------------------------------------------------------------------------------------
export default class Spacer extends Component {
	
	render(){
    return (<img id={this.componentId} width={this.props.width} height={this.props.height} alt="" src={clearSource} />);
	}
	
	componentDidMount(){
		
	}
	
};


/**
 * Spacer component prop types
 */
Spacer.propTypes = {
	width: React.PropTypes.string,
	height: React.PropTypes.string,
};

/**
 * Get Spacer component default props
 */
Spacer.defaultProps = {
	
};
