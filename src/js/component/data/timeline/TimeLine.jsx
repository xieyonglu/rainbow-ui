import moment from "moment";

import TimeLineItem from "./TimeLineItem";
import config from "../../../component-config";
import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date: 2015/11/20
//	
//	author: yonglu.xie
//	
//	description: TimeLine Component Class
//-----------------------------------------------------------------------------------------------
export default class TimeLine extends Component {
	
	render(){
		return (
		 	<ul className={"timeline " + this.getSideStyleClass()}>
				{this.renderTimeLine()}
			</ul>
		);
	}
	
	renderTimeLine(){
		let {dataSource, children, format} = this.props;
		
		if(dataSource != undefined){
			return this.renderTimeLineDataSource();
		} else {
			if(React.Children.count(children) == 0){return null;}
			
			else if(React.Children.count(children) == 1){
				children.props.format = format;
				return children;
			}
			
			else {
				return children.map(function(child, index){
					child.props.format = format;
					return child;
				});
			}
		}
	}
	
	renderTimeLineDataSource(){
		var _self = this, timeLineArray = [];
		
		$.each(this.getDataSource(), function(key, value){
			timeLineArray.push(
				<TimeLineItem {...
					{
						icon: value.icon,
						title: value.title,
						content: value.content,
						dateTime: value.dateTime,
						format: _self.props.format,
						styleClass: value.styleClass,
						inverted: value.inverted
					}
				} />
			);
		});
		
		return timeLineArray;
	}
	
	componentDidMount2(){
		var $timeline_block = $('.timeline > li');

		//hide timeline blocks which are outside the viewport
		$timeline_block.each(function(){
			if($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
				$(this).find('.timeline-badge, .timeline-panel').addClass('is-hidden');
			}
		});
	
		//on scolling, show/animate timeline blocks when enter the viewport
		$(window).on('scroll', function(){
			$timeline_block.each(function(){
				if($(this).offset().top <= $(window).scrollTop()  +$(window).height() * 0.75 && $(this).find('.timeline-badge, .timeline-panel').hasClass('is-hidden')) {
					$(this).find('.timeline-badge, .timeline-panel').removeClass('is-hidden').addClass('bounce-in');
				}
			});
		});
	}
	
	getSideStyleClass(){
		if(this.parseBool(this.props.side)){
			return "timeline-side";
		}
		return "";
	}
	
	getDataSource(){
		let {dataSource} = this.props;
		return this.isFunction(dataSource) ? dataSource() : dataSource;
	}
	
};


/**
 * TimeLine component prop types
 */
TimeLine.propTypes = {
	id: React.PropTypes.string,
	side: React.PropTypes.string,
	format: React.PropTypes.string,
	dataSource: React.PropTypes.array
};

/**
 * Get TimeLine component default props
 */
TimeLine.defaultProps = {
	side: false,
	format: config.DEFAULT_DATETIME_FORMATER
};
