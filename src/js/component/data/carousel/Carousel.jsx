import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/11/24
//	
//	author: yonglu.xie
//	
//	description: Carousel Component Class
//-----------------------------------------------------------------------------------------------
export default class Carousel extends Component {
	
	/**
	 * Get carousel
	 */
	static getCarousel(carouselId){
		return $("#" + carouselId);
	}
	
	/**
	 * Cycle
	 */
	static cycle(carouselId){
		this.getCarousel(carouselId).carousel("cycle");
	}
	
	/**
	 * Pause
	 */
	static pause(carouselId){
		this.getCarousel(carouselId).carousel("pause");
	}
	
	/**
	 * Prev
	 */
	static prev(carouselId){
		this.getCarousel(carouselId).carousel("prev");
	}
	
	/**
	 * Next
	 */
	static next(carouselId){
		this.getCarousel(carouselId).carousel("next");
	}
	
	/**
	 * Skin to
	 */
	static skinTo(number){
		this.getCarousel(carouselId).carousel(number);
	}
	
	
	render(){
		let carouselArray = this.getCarouselArray();
	
		return (
			<div id={this.componentId} className="carousel slide" style={{width: this.props.width, height: this.props.height}}>
				<ol className="carousel-indicators">{carouselArray[0]}</ol>
				
				<div className="carousel-inner">{carouselArray[1]}</div>
				
				<a className="carousel-control left" href={"#" + this.componentId} data-slide="prev">&lsaquo;</a>
				<a className="carousel-control right" href={"#" + this.componentId} data-slide="next">&rsaquo;</a>
			</div>
		);
	}
	
	/**
	 * Render carousel indicator
	 */
	renderCarouselIndicators(index, element){
		return (<li data-target={"#" + this.componentId} data-slide-to={index} className={this.getActiveStyleClass(element.activeable)} />);
	}
	
	/**
	 * Render carousel inner
	 */
	renderCarouselInner(element){
		return (
			<div className={"item " + this.getActiveStyleClass(element.activeable)}>
				<img src={element.src} alt={element.alt} />
				<div className="carousel-caption">{element.title}</div>
			</div>
		);
	}
	
	getCarouselArray(){
		let _self = this, carouselArray = [[],[]];
		
		if(this.props.dataSource){
			$.each(this.getDataSource(), function(index, element){
				carouselArray[0].push(_self.renderCarouselIndicators(index, element));
				carouselArray[1].push(_self.renderCarouselInner(element));
			});
		} else {
			let children = this.props.children;
			
			if(React.Children.count(children) == 0){}
			
			else if(React.Children.count(children) == 1){
				carouselArray[0].push(this.renderCarouselIndicators(0, children.props));
				carouselArray[1].push(this.renderCarouselInner(children.props));
			}
			
			else {
				children.map(function(child, index){
					carouselArray[0].push(_self.renderCarouselIndicators(index, child.props));
					carouselArray[1].push(_self.renderCarouselInner(child.props));
				});
			}
		}
		
		return carouselArray;
	}
	
	componentDidMount(){
		var _self = this;
		
		$("#" + this.componentId).carousel({
			interval: parseInt(this.props.interval)
		})
		
		.on("slide.bs.carousel", function() {
			if(_self.props.onSlideStart){
				_self.props.onSlideStart();
			}
		})
		
		.on("slid.bs.carousel", function() {
		  if(_self.props.onSlideStop){
				_self.props.onSlideStop();
			}
		});
	}
	
	getDataSource(){
		let {dataSource} = this.props;
		return this.isFunction(dataSource) ? dataSource() : dataSource;
	}
	
	getActiveStyleClass(activeable){
		if(this.parseBool(activeable)){
			return "active";
		}
		return "";
	}
	
};

/**
 * Carousel component prop types
 */
Carousel.propTypes = {
	id: React.PropTypes.string,
	value: React.PropTypes.string,
	width: React.PropTypes.string,
	height: React.PropTypes.string,
	interval: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	dataSource: React.PropTypes.array,
	
	// Carousel event
	onSlideStart: React.PropTypes.func,
	onSlideStop: React.PropTypes.func
};

/**
 * Get Carousel component default props
 */
Carousel.defaultProps = {
	width: "auto !important",
	height: "auto !important",
	interval: 2000,
	
	// Carousel event
	onSlideStart: () => {},
	onSlideStop: () => {},
};
