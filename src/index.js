"use strict";
require("../node_modules/bootstrap/dist/js/bootstrap.min");

module.exports = {
	
	// Button Component
	UIButton: require("./js/component/button/button/Button"),
	UILink: require("./js/component/button/link/Link"),
	UIMenuButton: require("./js/component/button/menubutton/MenuButton"),
	UISplitButton: require("./js/component/button/splitbutton/SplitButton"),
	
	
	// Chart Component
	/*UIChart: require("./js/component/chart/Chart"),
	UIBar: require("./js/component/chart/Bar"),
	UIChord: require("./js/component/chart/Chord"),
	UIEventRiver: require("./js/component/chart/EventRiver"),
	UIForce: require("./js/component/chart/Force"),
	UIFunnel: require("./js/component/chart/Funnel"),
	UIGauge: require("./js/component/chart/Gauge"),
	UIHeatMap: require("./js/component/chart/HeatMap"),
	UIK: require("./js/component/chart/K"),
	UILine: require("./js/component/chart/Line"),
	UIMap: require("./js/component/chart/Map"),
	UIPie: require("./js/component/chart/Pie"),
	UIRadar: require("./js/component/chart/Radar"),
	UIScatter: require("./js/component/chart/Scatter"),
	UITreeChart: require("./js/component/chart/TreeChart"),
	UITreeMap: require("./js/component/chart/TreeMap"),
	UIVenn: require("./js/component/chart/Venn"),
	UIWordCloud: require("./js/component/chart/WordCloud"),
	*/
	
	// Data Component
	//UIData: require("./js/component/data/Data"),
	UICarousel: require("./js/component/data/carousel/Carousel"),
	UICarouselItem: require("./js/component/data/carousel/CarouselItem"),
	UIDataGrid: require("./js/component/data/datagrid/DataGrid"),
	UIDataList: require("./js/component/data/datalist/DataList"),
	UIDataTable: require("./js/component/data/datatable/DataTable"),
	UIColumn: require("./js/component/data/datatable/Column"),
	UIFullCalendar: require("./js/component/data/fullcalendar/FullCalendar"),
	UIBaiduMap: require("./js/component/data/map/BaiduMap"),
	UIGoogleMap: require("./js/component/data/map/GoogleMap"),
	UIMindMap: require("./js/component/data/mindmap/MindMap"),
	UIPickList: require("./js/component/data/picklist/PickList"),
	UITimeLine: require("./js/component/data/timeline/TimeLine"),
	UITimeLineItem: require("./js/component/data/timeline/TimeLineItem"),
	UITree: require("./js/component/data/tree/Tree"),
	UITreeTable: require("./js/component/data/treetable/TreeTable"),
	
	
	// Integration Component
	UIDropZone: require("./js/component/integration/dropzone/DropZone"),
	UIFileDownload: require("./js/component/integration/filedownload/FileDownload"),
	UIFileUpload: require("./js/component/integration/fileupload/FileUpload"),
	UIPrinter: require("./js/component/integration/printer/Printer"),
	
	
	// Input Component
	// KeyValue
	UIAutoComplete: require("./js/component/input/keyvalue/AutoComplete"),
	UICheckbox: require("./js/component/input/keyvalue/Checkbox"),
	UICheckboxButton: require("./js/component/input/keyvalue/CheckboxButton"),
	UIRadio: require("./js/component/input/keyvalue/Radio"),
	UIRadioButton: require("./js/component/input/keyvalue/RadioButton"),
	UISelect: require("./js/component/input/keyvalue/Select"),
	UITextSelect: require("./js/component/input/keyvalue/TextSelect"),
	UITwoText: require("./js/component/input/keyvalue/TwoText"),
	
	// Basic
	UIClockPicker: require("./js/component/input/basic/ClockPicker"),
	UIColorPicker: require("./js/component/input/basic/ColorPicker"),
	UIDateRangePicker: require("./js/component/input/basic/DateRangePicker"),
	UIDateTimePicker: require("./js/component/input/basic/DateTimePicker"),
	UIEditor: require("./js/component/input/basic/Editor"),
	UIEmail: require("./js/component/input/basic/Email"),
	UIPassword: require("./js/component/input/basic/Password"),
	UIRating: require("./js/component/input/basic/Rating"),
	UISignature: require("./js/component/input/basic/Signature"),
	UISlider: require("./js/component/input/basic/Slider"),
	UISpinner: require("./js/component/input/basic/Spinner"),
	UISwitch: require("./js/component/input/basic/Switch"),
	UIText: require("./js/component/input/basic/Text"),
	UITextarea: require("./js/component/input/basic/Textarea"),
	
	// Digit
	UICurrency: require("./js/component/input/digit/Currency"),
	UINumber: require("./js/component/input/digit/Number"),
	UIPercent: require("./js/component/input/digit/Percent"),
	
	
	// Multimedia
	UIBarCode: require("./js/component/multimedia/code/BarCode"),
	UIQRCode: require("./js/component/multimedia/code/QRCode"),
	UICamera: require("./js/component/multimedia/camera/Camera"),
	UICropper: require("./js/component/multimedia/cropper/Cropper"),
	UIGalleria: require("./js/component/multimedia/galleria/Galleria"),
	UIGraphic: require("./js/component/multimedia/graphic/Graphic"),
	UIThumbnail: require("./js/component/multimedia/graphic/Thumbnail"),
	UIImageCompare: require("./js/component/multimedia/imagecompare/ImageCompare"),
	UIMedia: require("./js/component/multimedia/media/Media"),	
	
	
	// Menu Component
	UIBreadCrumb: require("./js/component/menu/breadcrumb/BreadCrumb"),
	UIContextMenu: require("./js/component/menu/contextmenu/ContextMenu"),
	UIFloatMenu: require("./js/component/menu/floatmenu/FloatMenu"),
	UIFloatMenuGroup: require("./js/component/menu/floatmenu/FloatMenuGroup"),
	UILeftNav: require("./js/component/menu/leftnav/LeftNav"),
	UIMenu: require("./js/component/menu/menu/Menu"),
	UIMegaMenu: require("./js/component/menu/megamenu/MegaMenu"),
	UIMenuBar: require("./js/component/menu/menubar/MenuBar"),
	UITabMenu: require("./js/component/menu/tabmenu/TabMenu"),
	UIMenuItem: require("./js/component/menu/MenuItem"),
	UISeparator: require("./js/component/menu/Separator"),
	UISubMenu: require("./js/component/menu/SubMenu"),
	
	
	// Misc Component
	UICaptcha: require("./js/component/misc/Captcha"),
	UICode: require("./js/component/misc/Code"),
	UICodeMirror: require("./js/component/misc/CodeMirror"),
	UIEvent: require("./js/component/misc/Event"),
	UIException: require("./js/component/misc/Exception"),
	UIHotKey: require("./js/component/misc/HotKey"),
	UIIcon: require("./js/component/misc/Icon"),
	UILabel: require("./js/component/misc/Label"),
	UILog: require("./js/component/misc/Log"),
	UIOutputText: require("./js/component/misc/OutputText"),
	UIPagination: require("./js/component/misc/Pagination"),
	UIParam: require("./js/component/misc/Param"),
	UIPoll: require("./js/component/misc/Poll"),
	UIProgress: require("./js/component/misc/Progress"),
	UISection: require("./js/component/misc/Section"),
	UISpacer: require("./js/component/misc/Spacer"),
	UITerminal: require("./js/component/misc/Terminal"),
	
	
	// Overlay Component
	UIAjaxStatus: require("./js/component/overlay/ajaxstatus/AjaxStatus"),
	UILoader: require("./js/component/overlay/ajaxstatus/Loader"),
	UIConfirmDialog: require("./js/component/overlay/confirmdialog/ConfirmDialog"),
	UIDialog: require("./js/component/overlay/dialog/Dialog"),
	UIDialogFooter: require("./js/component/overlay/dialog/DialogFooter"),
	UIMessage: require("./js/component/overlay/message/Message"),
	UITooltip: require("./js/component/overlay/tooltip/Tooltip"),
	
	
	// Panel Component
	UIAccordion: require("./js/component/panel/accordion/Accordion"),
	UIAffix: require("./js/component/panel/affix/Affix"),
	UIDynamicPage: require("./js/component/panel/dynamic/DynamicPage"),
	UIDynamicSection: require("./js/component/panel/dynamic/DynamicSection"),
	UIFieldset: require("./js/component/panel/fieldset/Fieldset"),
	UIForm: require("./js/component/panel/form/Form"),
	UIJumbotron: require("./js/component/panel/jumbotron/Jumbotron"),
	UILayout: require("./js/component/panel/layout/Layout"),
	UILayoutUnit: require("./js/component/panel/layout/LayoutUnit"),
	UIPage: require("./js/component/panel/page/Page"),
	UIPanel: require("./js/component/panel/panel/Panel"),
	UIBox: require("./js/component/panel/panelgrid/Box"),
	UICell: require("./js/component/panel/panelgrid/Cell"),
	UIRow: require("./js/component/panel/panelgrid/Row"),
	UIPanelGrid: require("./js/component/panel/panelgrid/PanelGrid"),
	UISmartPanelGrid: require("./js/component/panel/panelgrid/SmartPanelGrid"),
	UITab: require("./js/component/panel/tab/Tab"),
	UITabItem: require("./js/component/panel/tab/TabItem"),
	UITabItemList: require("./js/component/panel/tab/TabItemList"),
	UIUpdatePanel: require("./js/component/panel/updatepanel/UpdatePanel"),
	UIWizard: require("./js/component/panel/wizard/Wizard"),
	UIWizardStep: require("./js/component/panel/wizard/WizardStep"),
	UIWizardStepButton: require("./js/component/panel/wizard/WizardStepButton"),
	
	
	// Toolkit Component
	UIDraggable: require("./js/component/toolkit/draggable/Draggable"),
	UIDroppable: require("./js/component/toolkit/droppable/Droppable"),
	UIResizable: require("./js/component/toolkit/resizable/Resizable"),
	UISelectable: require("./js/component/toolkit/selectable/Selectable"),
	UISortable: require("./js/component/toolkit/sortable/Sortable"),
	
	
	// Common
	//AppDispatcher: require("./js/common/AppDispatcher"),
	//PageHeader: require("./js/common/PageHeader"),
	//PageFooter: require("./js/common/PageFooter"),
	
	
	// Context
	//DataStore: require("./js/context/DataStore"),
	DataContext: require("./js/context/DataContext"),
	UpdateContext: require("./js/context/UpdateContext"),
	//ValidatorContext: require("./js/context/ValidatorContext"),
	
	
	// Util
	Ajax: require("./js/util/Ajax"),
	AjaxUtil: require("./js/util/AjaxUtil"),
	JSONUtil: require("./js/util/JSONUtil"),
	DateUtil: require("./js/util/DateUtil"),
	ArrayUtil: require("./js/util/ArrayUtil"),
	ELUtil: require("./js/util/ELUtil"),
	I18NUtil: require("./js/util/I18NUtil"),
	I18N: require("./js/util/I18NUtil").getMessage,
	MessageHelper: require("./js/util/MessageHelper"),
	StringUtil: require("./js/util/StringUtil"),
	Util: require("./js/util/Util"),
	
	
	// Model
	CodeTable: require("./js/model/CodeTable"),
	CodeTableSorter: require("./js/model/CodeTableSorter"),
	
	
	// Configuration
	config: require("./js/component-config"),
	
};
require("./css/RainbowUI.css");
