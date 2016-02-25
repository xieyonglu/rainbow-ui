import "../../../../../node_modules/fullcalendar/dist/fullcalendar.css";
import "../../../../../node_modules/fullcalendar/dist/fullcalendar";
//import "../../../../../node_modules/jquery-ui/resizable";
//import "../../../../../node_modules/jquery-ui/jquery-ui";

import moment from "moment";

import Component from "../../../common/Component";
import config from "../../../component-config";
import i18n from "../../../i18n/reactjs-tag.i18n";

//-----------------------------------------------------------------------------------------------
//	date: 2015/11/24
//	
//	author: yonglu.xie
//	
//	description: Schedule Component Class
//-----------------------------------------------------------------------------------------------
export default class Schedule extends Component {
	
	render(){
		return (<div id={this.componentId} />);
	}
	
	componentDidMount(){
		var _self = this;
		
		$("#" + this.componentId).fullCalendar({
			header: {
				left: "prev, next today",
				center: "title",
				right: "month, agendaWeek, agendaDay"
			},
			
			// init fullcalendar i18n
			monthNames: i18n.FullCalendar.monthNames,
			monthNamesShort: i18n.FullCalendar.monthNamesShort,
			dayNames: i18n.FullCalendar.dayNames,
			dayNamesShort: i18n.FullCalendar.DayNamesShort,
			today: i18n.FullCalendar.Today,
			buttonText: {
				prev: i18n.FullCalendar.ButtonText.Prev,
				next: i18n.FullCalendar.ButtonText.Next,
				today: i18n.FullCalendar.ButtonText.Today,
				month: i18n.FullCalendar.ButtonText.Month,
				week: i18n.FullCalendar.ButtonText.Week,
				day: i18n.FullCalendar.ButtonText.Day,
			},
			
			timeFormat: "H:mm",
			axisFormat: "H:mm",
			firstDay: parseInt(this.props.firstDay),
			weekends: this.parseBool(this.props.weekend),
			events: this.getEventData(),
			
			// Resource Data
			loading: function (bool) {
    		//console.log("==loading==");
    	},
			
			// Clicking & Hovering
			dayClick: function(date, jsEvent, view){
				if(_self.props.onDayClick){
					_self.props.onDayClick(date, jsEvent, view);
				}
    	},
    	
    	eventClick: function(calEvent, jsEvent, view){
    		if(_self.props.onEventClick){
					_self.props.onEventClick(calEvent, jsEvent, view);
				}
    	},
    	
    	eventMouseover: function(event, jsEvent, view){
    		//console.log("==eventMouseover==");
    	},
    	
    	eventMouseout: function(event, jsEvent, view){
    	
    	},
    	
    	// Event Rendering
    	eventAfterRender: function(event, element, view){
    		//console.log("==eventAfterRender==");
    	},
    	
    	//droppable: false,
    	editable: this.parseBool(this.props.editable),
    	//dragScroll: false,
    	//resizable: true
		});
	}
	
	componentDidUpdate(prevProps, prevState){
		
	}
	
	getEventData(){
		let dataSource = this.getDataSource();
		for(let element of dataSource){
			if(element.start && this.isString(element.start)) {
				element.start = moment(element.start, config.DEFAULT_DATETIME_SUBMIT_FORMATER);
			}
			
			if(element.end && this.isString(element.end)){
				element.end = moment(element.end, config.DEFAULT_DATETIME_SUBMIT_FORMATER);
			}
		}
		
		return dataSource;
	}
	
	//$('#calendar').fullCalendar('refetchEvents');
	//$('#calendar').fullCalendar('updateEvent', event);
	
	getDataSource(){
		let {dataSource} = this.props;
		return this.isFunction(dataSource) ? dataSource() : dataSource;
	}
	
};

/**
 * Schedule component prop types
 */
Schedule.propTypes = {
	id: React.PropTypes.string.isRequired,
	weekend: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	editable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	dataSource: React.PropTypes.array,
	firstDay: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	
	onDayClick: React.PropTypes.func,
	onEventClick: React.PropTypes.func,
};

/**
 * Get Schedule component default props
 */
Schedule.defaultProps = {
	weekend: true,
	editable: false,
	firstDay: 0,
	
	onDayClick: () => {},
	onEventClick: () => {},
};

