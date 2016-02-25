module.exports = {
	
	Data: {
		All: "All",
	},
	
	// DataTable
	DataTable: {
		SelectAll: "",
		SingleSelect: ""
	},
	
	// Pagination
	DropDownInfo: "Each page shows {0} records",
	Search: "Search",
	FirstPage: "First",
	PreviousPage: "Previous",
	NextPage: "Next",
	LastPage: "Last",
	
	// Input
	// Select
	BlankOption: "Please Select",
	
	// DateRangePicker
	DateRangePicker: {
	  ApplyLabel: "Confirm",
	  CancelLabel: "Cancel",
	  FromLabel: "Start",
	  ToLabel: "End",
	  CustomRangeLabel: "Custom",
	  DaysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	  MonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	},
  
  // Data
  // FullCalendar
  FullCalendar: {
  	MonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		MonthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		DayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		DayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		Today: ["Today"],
		FirstDay: 1,
		ButtonText: {
			//Prev: "<",
			//Next: ">",
			Today: "today",
			Month: "month",
			Week: "week",
			Day: "day"
		}
  },
  
  DropZone: {
  	dictDefaultMessage: "Drop files here to upload",
		dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
		dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
		dictInvalidFileType: "You cannot upload the file type, file type is only *.xls.",
		dictFileTooBig: "The file is too large ({{filesize}}MB). The maximum upload file support: {{maxFilesize}}MB.",
		dictResponseError: "Failed to upload file!",
		dictCancelUpload: "Cancel File",
		dictCancelUploadConfirmation: "Are you sure you want to cancel the upload?",
		dictRemoveFile: "Remove File",
		dictMaxFilesExceeded: "You can upload only a maximum of {{maxFiles}} files",
  },
  
  MSG_NOT_FOUND: "MSG NOT FOUND"
};
