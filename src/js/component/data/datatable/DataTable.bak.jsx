var Util = require('../../../util/Util');
var UpdateContext = require('../../../context/UpdateContext');

require('./locale/jquery-datatable-local');
require('./locale/jquery-datatable-zh_cn');
require('../../../../../node_modules/datatables/media/js/jquery.dataTables.min');
require('../../../../../node_modules/datatables/media/css/jquery.dataTables.min.css');

//-----------------------------------------------------------------------------------------------
//	date: 2015/08/01
//	
//	author: yonglu.xie
//	
//	description: UIDataTable Component Class
//-----------------------------------------------------------------------------------------------
var UIDataTable = React.createClass({
	
	statics: {
		/**
		 * create form modal dialog
		 * @param title
		 * @returns {*}
		 */
		getDataTable: function(dataTableId){
			return $('#' + dataTableId).DataTable();
		},
		
		getSelected: function(dataTableId){
			return this.getDataTable(dataTableId).rows('.selected');
		},
		 
		getSelectedData: function(dataTableId){
			return this.getDataTable(dataTableId).rows('.selected').data();
		}
	},

	propTypes: {
		id: React.PropTypes.string,
		value: React.PropTypes.object,
		dataSource: React.PropTypes.string,
		selectionMode: React.PropTypes.oneOf(['single', 'multiple']),
		lengthMenu: React.PropTypes.array,
		displayLength: React.PropTypes.string,
		headerTitle: React.PropTypes.string,
		
		isHeading: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
		indexable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
		detailable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
		sortable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
		searchable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
		pageable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
		infoable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
		
		scrollX: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
		scrollY: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string])
	},
	
	getDefaultProps: function(){
		return {
			scrollX: 'disabled',
			scrollY: 'disabled',
			lengthMenu: [10, 20, 30, 40, 50], //[[10, 25, 50, -1], [10, 25, 50, "All"]],
			displayLength: 10,
			
			isHeading: false,
			searchable: false,
			pageable: true,
			indexable: false,
			detailable: false,
			sortable: false
		}
	},
	
	getInitialState: function(){
		return {
			value: null
		}
	},
	/*
	<thead>
        		<tr>
        				<th rowSpan="2" style={{width: '10px'}}>Index</th>
        				<th rowSpan="2">Position</th>
                <th rowSpan="2">
                		<input type="checkbox" id="checkbox" />Name
                </th>
                <th colSpan="2">HR Information</th>
                <th colSpan="3">Contact</th>
            </tr>
            <tr>
                <th>Position</th>
                <th>Salary</th>
                <th>Office</th>
                <th>Start Date</th>
                <th>Extn.</th>
            </tr>
        </thead>*/
  /*
  <thead>
        		<tr>
        				<th rowSpan="2" style={{width: '100px'}} className="lock">Index</th>
        				<th rowSpan="2" style={{width: '100px'}} className="lock">Position</th>
                <th rowSpan="2" style={{width: '100px'}}>
                		<input type="checkbox" id="checkbox" />Name
                </th>
                <th colSpan="2" style={{width: '200px'}}>HR Information</th>
                <th colSpan="3" style={{width: '300px'}}>Contact</th>
            </tr>
            <tr>
                <th style={{width: '100px'}}>Position</th>
                <th style={{width: '100px'}}>Salary</th>
                <th style={{width: '100px'}}>Office</th>
                <th style={{width: '100px'}}>Start Date</th>
                <th style={{width: '100px'}}>Extn.</th>
            </tr>
        </thead>*/
	
	render: function(){
		//console.log("==render==datetable==" + this.props.value);
		return (
			<div className="panel panel-default">
				{this.renderPanelHeading()}
				
				<div className="panel-body" style={{paddingTop: '0px', paddingBottom: '5px'}}>
					<table id={this.props.id} className="table table-striped table-hover" style={{width: '100%'}}></table>
				</div>
      </div>
		);
	},
	
	/**
	 * render panel heading
	 * @returns {XML}
	 */
	renderPanelHeading: function () {
		if (!Util.parseBool(this.props.isHeading)) {
			return null;
		}
		
		return (<div className="panel-heading">
			<div className="row">
				<div className="col-sm-3 col-md-3 col-lg-3">
					<span className="panel-heading-title">{this.props.headerTitle}</span>
			  </div>
			  <div className="col-sm-9 col-md-9 col-lg-9" />
			</div>
		</div>);
 	},
	
	renderHeader: function() {
		return this.props.children.map(function(children, index){
       return (
       	<th>{children.props.headerTitle}</th>
       );
		});
	},
	
	//<tfoot><tr>{this.renderFooter()}</tr></tfoot>
	renderFooter: function() {
		return this.props.children.map(function(children, index){
			return (
       	<th>{children.props.headerTitle}</th>
       );
		});
	},
	
	//<tbody><tr>{this.renderBody()}</tr></tbody>
	renderBody: function() {
		var count = 10;
		for(var i=0; i<count; i++){
			
			return this.props.children.map(function(children, index){
				return (
	       	 <td>Hello</td>  
	      );
			});
		}
	},
	
	//shouldComponentUpdate: function(nextProps, nextState){
		//alert("==shouldComponentUpdate==");
		//return true;
	//},
	
	componentWillUpdate: function(){
		//console.log("---componentWillUpdate---" + JSON.stringify(this.props.value));
	},
	
	componentDidUpdate: function(prevProps, prevState){
		var value = this.getValue();
 		if(value != undefined){
 			$('#' + this.props.id).dataTable().fnClearTable();
 			$('#' + this.props.id).dataTable().fnAddData(value, true);
 		}
    
    this.dataTable.draw();
	},
	
	componentWillMount: function(){
		//alert('==table==componentWillMount==' + JSON.stringify(this.props.value));
		//this.setState({value: this.props.value});
	},
	
	componentDidMount: function(){
		//console.log(this.props.id + "---componentDidMount---" + JSON.stringify(this.props.value));
		this.handlerComponent();
		
		UpdateContext.put(this.props.id, this);
	},
	
	handlerComponent: function(){
		var _self = this;
		
    this.dataTable = $('#' + this.props.id).DataTable($.extend({}, {
       //"jQueryUI": true,
       //aaSorting: [[ 4, "desc" ]],
       showRowNumber: true,
       scrollCollapse: true,
       
       paging: Util.parseBool(this.props.pageable),
       searching: Util.parseBool(this.props.searchable),
       ordering: Util.parseBool(this.props.sortable),
       info: Util.parseBool(this.props.infoable),
       
       lengthChange: false,
       lengthMenu: this.props.lengthMenu,
       displayLength: parseInt(this.props.displayLength),
       
       destroy: true,
       pagingType: "full_numbers",
       order: [[1, 'asc']],
       autoWidth: true,
       //fnDrawCallback: function(){
       //_self.handlerTable();
       //}
    }, this.getAjaxSource(), this.getScroll(), /*this.getColumn(),*/ this.getColumnDefine(), this.getLanguage()));
    
    this.handlerSelectionMode();
    this.handlerColumnDetails();
	},
	
	getAjaxSource: function(){
		var _self = this;
		
		if(this.props.value != undefined){
			return {
				data: _self.getValue()
			};
		} else {
			return {
				ajax: {
					url: _self.getDataSource(),
					data: function (data) {
						data.pageIndex = data.start;
						data.pageSize = data.length;
						
						delete data.start;
						delete data.length;
					},
					//success: function(data){
					//alert('success--' + JSON.stringify(data));
					//data.draw = data.quoteCriteria.pageIndex;
					//data.recordsTotal = 60;
					//data.recordsFiltered = 42;
					//}
				},
				//ajaxSource: 'dataTableSource',
				processing: true,
				serverSide: true,
				//fnServerData: this.retrieveData // 获取数据的处理函数
			};
		}
	},
	
	getScroll: function(){
		var scroll = {};
		
		if(!this.props.scrollX && this.props.scrollX != 'false'){
			scroll.scrollX = this.props.scrollX;
		}
		
		if(!this.props.scrollY && this.props.scrollY != 'false'){
			scroll.scrollY = this.props.scrollY;
		}
		
		return scroll;
	},
	
	handlerColumnIndex: function(columnDef, targetIndex){
		if(Util.parseBool(this.props.indexable)) {
			columnDef.push({
				searchable: false,
				orderable: false,
				targets: 0,
				data: null,
				class: "",
				width: '5px',
				render: function (data, type, full, meta) {
					return meta.row + 1;
				}
	    });
	    targetIndex ++;
    }
    return targetIndex;
	},
	
	handlerRowDetails: function(columnDef, targetIndex){
		if(Util.parseBool(this.props.detailable)){
			columnDef.push({
				searchable: false,
				orderable: false,
				class: "details-control",
				data: null,
				targets: targetIndex,
				defaultContent: "",
				width: '5px'
    	});
    	targetIndex ++;
		}
		return targetIndex;
	},
	
	getColumnDefine: function(){
		var columnDef = [];
		var targetIndex = 0;
		
		targetIndex = this.handlerColumnIndex(columnDef, targetIndex);
		targetIndex = this.handlerRowDetails(columnDef, targetIndex);
		
		this.props.children.map(function(child, index){
			var columnTemp = {title: child.props.headerTitle, class: 'center'};
			
			if(React.isValidElement(child.props.children) && child.props.children.props.value != undefined){
				columnTemp.data = child.props.children.props.value;
			} else if(child.props.value != undefined){
				columnTemp.data = child.props.value;
			}
			
			columnTemp.targets = targetIndex;
      targetIndex ++;
      
      if(child.props.width != undefined){
      	columnTemp.width = child.props.width;
      }
      
      columnTemp.class = '';
      
      // handler column render
      columnTemp.render = function (data, type, full, meta) {
      	if(React.isValidElement(child.props.children)){
      		child.props.children.props.value = data;
      		return React.renderToString(child.props.children);
      	}
      	
      	else if(child.props.render != undefined) {
      		var render = child.props.render;
      		if (typeof render === 'function') {
      			callback = render;
      		}
      		
      		if (callback != null) {
      			return callback(data, type, full, meta);
      		}
      		return '==none==';
      	}
      	
      	else {
      		return data;
      	}
      };
      
      columnDef.push(columnTemp);
		});
		
		//alert("==" + JSON.stringify(columnDef));
		return {columnDefs: columnDef};
	},
	
	getColumn: function(){
		var column = [];
		
		/*column.push({
			searchable: false,
			orderable: false,
			targets: 0,
			data: '1'
    });
		
		if(this.props.rowDetail == 'true' || this.props.rowDetail){
			column.push({
				class: "details-control",
				orderable: false,
				data: null,
				defaultContent: "",
				width: '50px'
    	});
		}*/
		
		/*var _self = this;
		if(React.Children.count(this.props.children) == 0){
			
		} 
		
		else if(React.Children.count(this.props.children) == 1){
			var child = this.props.children;
			var columnTemp = {title: child.props.headerTitle, class: 'center'};
	       
	    if(React.isValidElement(child.props.children) && child.props.children.props.value != undefined){
	    	
	      columnTemp.data = child.props.children.props.value;
	    } else if(child.props.value != undefined){
	    	
	      columnTemp.data = child.props.value;
	    }
	       
	    column.push(columnTemp);
		} 
		
		else {*/
			this.props.children.map(function(child, index){
	       var columnTemp = {title: child.props.headerTitle, class: 'center'};
	       
	       if(React.isValidElement(child.props.children) && child.props.children.props.value != undefined){
	       	columnTemp.data = child.props.children.props.value;
	       } else if(child.props.value != undefined){
	       	columnTemp.data = child.props.value;
	       }
	       
	       column.push(columnTemp);
			});
		//}
		
		//alert("getColumn===" + JSON.stringify(column));
		
		return {columns: column};
	},
	
	getLanguage: function(){
		var locale = $.dataTableLocal.getDefaults();
		return {
			language: {
				paginate: {
					previous: locale.previous,
	        next: locale.next,
	        first: locale.first,
	        last: locale.last
	      },
	      "zeroRecords": locale.zeroRecords,
	      "info": locale.info,
	      "infoEmpty": locale.infoEmpty,
	      "infoFiltered": locale.infoFiltered,
	      "processing": locale.processing,
	      "lengthMenu": locale.lengthMenu,
	      "tmptyTable": locale.tmptyTable,
	      "search": '<span class="label label-success">' + locale.search + '</span>'
      }
    };
	},
	
	handlerSelectionMode: function(){
		var table = $('#' + this.props.id).DataTable();
    if(this.props.selectionMode == 'single'){
    	$('#' + this.props.id + ' tbody').on('click', 'tr', function () {
    		if ($(this).hasClass('selected')) {
        	$(this).removeClass('selected');
        }
        else {
        	table.$('tr.selected').removeClass('selected');
        	$(this).addClass('selected');
        }
    	});
 			
    	//$('#button').click( function() {
    	//	table.row('.selected').remove().draw( false );
    	//});
    } else if(this.props.selectionMode == 'multiple'){
    	$('#' + this.props.id + ' tbody').on('click', 'tr', function(){
        $(this).toggleClass('selected');
    	});
 
    	//$('#button').click(function() {
      //  alert(table.rows('.selected').data().length +' row(s) selected' );
    	//});
    }
	},
	
	handlerColumnDetails: function(){
		// Array to track the ids of the details displayed rows
    var detailRows = [];
    var dt = $('#' + this.props.id).DataTable();
    //var dt = this.dataTable;
    var _self = this;
    $('#' + this.props.id + ' tbody').on('click', 'tr td.details-control', function() {
    	var tr = $(this).closest('tr');
    	var row = dt.row(tr);
    	var idx = $.inArray(tr.attr('id'), detailRows);
    	
    	if (row.child.isShown()) {
    		tr.removeClass('details');
    		row.child.hide();
    		
    		// Remove from the 'open' array
    		detailRows.splice( idx, 1 );
      } else {
      	tr.addClass('details');
      	row.child(_self.format(row.data())).show();
      	
      	// Add to the 'open' array
      	if (idx === -1) {
      		detailRows.push(tr.attr('id'));
      	}
      }
    });
 
    // On each draw, loop over the 'detailRows' array and show any child rows
    dt.on('draw', function (){
    	$.each(detailRows, function(i, id) {
    		$('#' + id + ' td.details-control').trigger('click');
      });
    });
	},
	
	format: function(data) {
		var render = this.props.rowDetailRender;
		if (typeof render === 'function') {
			callback = render;
		}
		if (callback != null) {
			return callback(data);
		}
	},
	
	getValue: function(){
		var value = this.props.value;
		return Util.isFunction(value) ? value() : value; 
	},
	
	getDataSource: function(){
		var dataSource = this.props.dataSource;
		return Util.isFunction(dataSource) ? dataSource() : dataSource;
	}
	
});

module.exports = UIDataTable;
