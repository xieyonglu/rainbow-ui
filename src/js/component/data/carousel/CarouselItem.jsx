//-----------------------------------------------------------------------------------------------
//	date: 2015/11/24
//	
//	author: yonglu.xie
//	
//	description: CarouselItem Component Class
//-----------------------------------------------------------------------------------------------
export default class CarouselItem extends React.Component {
	
	render(){return null;}
	
};

/**
 * CarouselItem component prop types
 */
CarouselItem.propTypes = {
	title: React.PropTypes.string,
	src: React.PropTypes.string,
	alt: React.PropTypes.string,
	activeable: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
};

/**
 * Get CarouselItem component default props
 */
CarouselItem.defaultProps = {
	activeable: false
};
