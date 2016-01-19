import "../../../../../node_modules/cropper/dist/cropper";
import "../../../../../node_modules/cropper/dist/cropper.css";


//-----------------------------------------------------------------------------------------------
//	date: 2015/12/25
//	
//	author: yonglu.xie
//	
//	description: Cropper Component Class
//-----------------------------------------------------------------------------------------------
export default class Cropper extends React.Component {
	
	render(){
    return (
	    <div>
			  <img id={this.props.id} src="../../../../../node_modules/RainbowUI/src/images/logo.png" />
			</div>
		);
	}
	
	componentDidMount(){
		this.initComponent();
	}
	
	initComponent(){
		$("#" + this.props.id).cropper({
		  aspectRatio: 16 / 9,
		  crop: function(event) {
		    // Output the result data for cropping image. 
		    console.log(event.x);
		    console.log(event.y);
		    console.log(event.width);
		    console.log(event.height);
		    console.log(event.rotate);
		    console.log(event.scaleX);
		    console.log(event.scaleY);
		  }
		});
	}
	
};


/**
 * Cropper component prop types
 */
Cropper.propTypes = {
	// value="#{cropperView.croppedImage}" image="/resources/demo/images/nature/nature6.jpg" initialCoords="225,75,300,125"
};

/**
 * Get Cropper component default props
 */
Cropper.defaultProps = {
	
};
