import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";

import "../../../../../node_modules/slick-carousel/slick/slick";

import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/12/25
//	
//	author: yonglu.xie
//	
//	description: Galleria Component Class
//-----------------------------------------------------------------------------------------------
export default class Galleria extends Component {
	
	render() {
		return (
			<div style={{backgroundColor: "yellow", paddingLeft: "25px", paddingRight: "25px"}}>
				<div id={this.props.id} class="slider single-item" style={{backgroundColor: "#eeeeee"}}>
						<div><h3>1</h3></div>
						<div><h3>2</h3></div>
						<div><h3>3</h3></div>
						<div><h3>4</h3></div>
						<div><h3>5</h3></div>
						<div><h3>6</h3></div>
				</div>
			</div>
		);
	}
	
	componentDidMount(){
		$("#" + this.props.id).slick({
			//dots: true,
		  //speed: 500,
		  //infinite: true,
		  //slidesToShow: 3,
		  //slidesToScroll: 3,
		  
		  dots: true,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
	}
	
};


/**
 * Galleria component prop types
 */
Galleria.propTypes = {
	
},

/**
 * Get Galleria component default props
 */
Galleria.defaultProps = {
	
};
