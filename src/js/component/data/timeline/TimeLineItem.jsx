import moment from "moment";

import Util from "../../../util/Util";
import config from "../../../component-config";

//-----------------------------------------------------------------------------------------------
//	date: 2015/11/20
//	
//	author: yonglu.xie
//	
//	description: TimeLineItem Component Class
//-----------------------------------------------------------------------------------------------
export default class TimeLineItem extends React.Component {
	
	render(){
		return (
			<li className={this.getInvertedStyleClass()}>
				<div className={"timeline-badge " + this.props.styleClass}>
					<i className={this.props.icon} />
				</div>
				
				<div className="timeline-panel">
					<div className="timeline-heading">
						<h4 className="timeline-title">{this.props.title}</h4>
						<div>
							<small className="text-muted">
								<i className="glyphicon glyphicon-time" /> {this.getDateTime()}
							</small>
						</div>
					</div>
					
					<div className="timeline-body">
						<p>{this.getContent()}</p>
					</div>
				</div>
			</li>
		);
	}
	
	getContent(){
		let {content} = this.props;
		if(Util.isArray(content)){
			let contentArray = [];
			$.each(content, (index, element) => {
				contentArray.push(<div>{element}</div>);
			});
			return contentArray;
		}
		return this.props.content;
	}
	
	getInvertedStyleClass(){
		if(Util.parseBool(this.props.inverted)){
			return "timeline-inverted";
		}
		return "";
	}
	
	getDateTime(){
		let {dateTime, format} = this.props;
		if(dateTime != undefined){
			return moment(dateTime, config.DEFAULT_DATETIME_SUBMIT_FORMATER).format(format);
		}
	}
	
};


/**
 * TimeLineItem component prop types
 */
TimeLineItem.propTypes = {
	id: React.PropTypes.string,
	icon: React.PropTypes.string,
	title: React.PropTypes.string,
	content: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.string]),
	dateTime: React.PropTypes.string,
	//format: React.PropTypes.string,
	styleClass: React.PropTypes.oneOf(["default", "primary", "success", "warning", "danger", "info"]),
	inverted: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
};

/**
 * Get timeLineItem component default props
 */
TimeLineItem.defaultProps = {
	styleClass: config.DEFAULT_STYLE_CLASS,
	//format: config.DEFAULT_DATETIME_FORMATER,
	inverted: true
};
