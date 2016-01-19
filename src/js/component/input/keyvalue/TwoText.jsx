import KeyValue from "./KeyValue";
import Dialog from "../../overlay/dialog/Dialog";
import DialogFooter from "../../overlay/dialog/DialogFooter";
import DataTable from "../../data/datatable/DataTable";
import Column from "../../data/datatable/Column";
import SmartPanelGrid from "../../panel/panelgrid/SmartPanelGrid";
import Button from "../../button/button/Button";
import Param from "../../misc/Param";
import OnChangeEvent from "../../../event/OnChangeEvent";
import config from "../../../component-config";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: TwoText Component Class
//-----------------------------------------------------------------------------------------------
export default class TwoText extends KeyValue {
	
	renderInput(){
		if(this.parseBool(this.props.hiddenValue)){
			return (
				<div>
					<div className="input-group col-sm-12 col-md-12 col-lg-12">
						<input id={this.componentId} name={this.getName()} type="text"
							className="form-control" placeholder={this.props.placeHolder}
							ref={this.componentId + "_ref"} disabled={this.getDisabled()} />
							
						<span className="input-group-addon fixalliconposition" style={{cursor: 'pointer'}} onClick={this.onShowSearchCodeTableDialog.bind(this)}>
							<span className="fa fa-search"/>
						</span>
					</div>
					
					{this.renderSearchCodeTableDialog()}
				</div>
			);
		}
	
		return (
			<div>
				<div className="input-group col-sm-12 col-md-12 col-lg-12">
					<div className="col-sm-6 col-md-6 col-lg-6" style={{padding: '0px'}}>
						<input id={this.componentId} name={this.getName()} type="text"
							className="form-control" placeholder={this.props.placeHolder}
							ref={this.componentId + "_ref"} disabled={this.getDisabled()} />
					</div>
					
					<div className="col-sm-6 col-md-6 col-lg-6" style={{padding: '0px'}}>
						<input id={this.componentId + "_value"} name={this.componentId + "_value"} type="text"
							className="form-control" placeholder={this.props.placeHolder} disabled />
					</div>

					<span className="input-group-addon fixalliconposition" style={{cursor: 'pointer'}} 
						onClick={this.onShowSearchCodeTableDialog.bind(this)}>
						<span className="fa fa-search"/>
					</span>
				</div>

				{this.renderSearchCodeTableDialog()}
			</div>
		);
	}

	/*
	<UISmartPanelGrid column="3" styleClassAllocation="4,8">
					<UIText value="" label="Key" />
					<UIText value="" label="Value" />
					<UIButton value="Serch" icon="fa fa-search" />
				</UISmartPanelGrid>
	*/
	renderSearchCodeTableDialog(){
		return (
			<Dialog id={this.componentId + "_SearchCodeTableDialog"} title="Search Code Table" width="800px">
				<DataTable id={this.componentId + "_SearchCodeTableDataTable"}
					value={this.getDataTableData()} selectionMode="single"
				  searchable="true" headerTitle="Search Code Table">

	      	<Column headerTitle="Key" value="key" />

	      	<Column headerTitle="Value" value="value" />
	      </DataTable>
	      
				<DialogFooter>
					<Button value="Cancel" styleClass="danger" icon="fa fa-close" position="right" buttonType='cancel' />
					
					<Button value="Confirm" styleClass="primary" icon="fa fa-check" position="right" onClick={this.onSubmitCodeTable.bind(this)}/>
				</DialogFooter>
			</Dialog>
		);
	}
	
	getOutputValue(){
		let codeTable = this.codeTable.getMap();
		let key = this.getComponentValue();
		
		let value = (codeTable[key] != undefined) ? codeTable[key][config.DEFAULT_CODETABLE_KEYVALUE.VALUE] : null;
		key = (key != null && key != undefined) ? key : "";
		value = (value != null && value != undefined) ? value : "";
		
		return key + " " + value;
	}

	getDataTableData(){
		let tableData = [];
		let codeTable = this.codeTable.getMap();
		
		if(codeTable) {
			$.each(codeTable, function(index, element){
				tableData.push({key: element[config.DEFAULT_CODETABLE_KEYVALUE.KEY], value: element[config.DEFAULT_CODETABLE_KEYVALUE.VALUE]});
			});
		}

		return tableData;
	}

	componentDidMount(){
		super._componentDidMount();
		if(this.props.io != "out"){
			this.initEvent();
			this.initValue();
			this.initValidator();
			
			let _self = this;
			$("#" + this.componentId).blur(function(event){
				let codeTable = _self.codeTable.getMap();
				if(codeTable[event.target.value] == undefined){
					_self.setValue(_self.props.value, "");
					$("#" + _self.componentId).val("");
					$("#" + _self.componentId + "_value").val("");
				} else {
					$("#" + _self.componentId + "_value").val(codeTable[event.target.value][config.DEFAULT_CODETABLE_KEYVALUE.VALUE]);
				}
			});
		}
	}
	
	initValue(){
		let codeTable = this.codeTable.getMap();
		let key = this.getComponentValue();
		let value = (codeTable[key] != undefined) ? codeTable[key][config.DEFAULT_CODETABLE_KEYVALUE.VALUE] : null;
		
		$("#" + this.componentId).val(key);
		$("#" + this.componentId + "_value").val(value);
	}
	
	onShowSearchCodeTableDialog(event){
		event.preventDefault();
		if(this.getDisabled() == "disabled"){
			return;
		}
	
    Dialog.show(this.componentId + "_SearchCodeTableDialog");
	}

	onSubmitCodeTable(){
		let selectedData = DataTable.getSelectedRecord(this.componentId + "_SearchCodeTableDataTable");
		Dialog.hide(this.componentId + "_SearchCodeTableDialog");

		let key = selectedData["0"].key;
		let codeTable = this.codeTable.getMap();
		$("#" + this.componentId).val(key);
		$("#" + this.componentId + "_value").val(codeTable[key][config.DEFAULT_CODETABLE_KEYVALUE.VALUE]);
		
		//this.setValue(this.props.value, key);
		this.setComponentValue();
		
		// call onchange event
		if(this.props.onChange){
			this.props.onChange(new OnChangeEvent(this, event, Param.getParameter(this)));
		}
	}
	
};

/**
 * TwoText component prop types
 */
TwoText.propTypes = $.extend({}, KeyValue.propTypes, {
	hiddenValue: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
});

/**
 * Get TextText component default props
 */
TwoText.defaultProps = $.extend({}, KeyValue.defaultProps, {
	hiddenValue: false
});
