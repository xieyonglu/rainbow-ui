import "./jquery.shCircleLoader.css";
import "./jquery.shCircleLoader";

import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/08/15
//	
//	author: yonglu.xie
//	
//	description: Loader Component Class
//-----------------------------------------------------------------------------------------------
export default class Loader extends React.Component {
	
	render() {
		return (<span className="fa fa-spinner fa-pulse fa-5x" style={{fontSize: "100px", color: "#FFFFFF"}}></span>);
		
		//return (
		//	<div id={this.props.id} style={{width: (this.props.side + "px"), height: (this.props.side + "px")}} />
		//);
	}
	
	componentDidMount() {
		/*$("#" + this.props.id).shCircleLoader({
			color: "red",
			dots: 24,
			dotsRadius: 13,
			keyframes:
				"0%  {background: red;    {prefix}transform: scale(1)}\
				20%  {background: orange; {prefix}transform: scale(.4)}\
				40%  {background: red;    {prefix}transform: scale(0)}\
				50%  {background: red;    {prefix}transform: scale(1)}\
				70%  {background: orange; {prefix}transform: scale(.4)}\
				90%  {background: red;    {prefix}transform: scale(0)}\
				100% {background: red;    {prefix}transform: scale(1)}"
		});*/
		
		
		// Default loader
		//$("#" + this.props.id).shCircleLoader();
		
		// Counterclockwise direction
		//$("#" + this.props.id).shCircleLoader({clockwise: false});
		
		// Custom color
		//$("#" + this.props.id).shCircleLoader({color: "red"});
		
		// Custom duration
		//$("#" + this.props.id).shCircleLoader({duration: 2});
		
		// Custom dots
		//$("#" + this.props.id).shCircleLoader({
		//	dots: 24,
		//	dotsRadius: 10
		//});
		
		// Custom dot animation
		//$("#" + this.props.id).shCircleLoader({keyframes: "0%{background:black}40%{background:transparent}60%{background:transparent}100%{background:black}"});
		
		//$("#" + this.props.id).shCircleLoader({namespace:"myns",color:"transparent",dotsRadius:15});
	}
	
};


/**
 * Loader component prop types
 */
Loader.propTypes = {
	id: React.PropTypes.string.isRequired,
	side: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string])
};

/**
 * Get loader component default props
 */
Loader.defaultProps = {
	side: 150
};
