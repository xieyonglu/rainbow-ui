import config from "../component-config";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: CodeTableSorter Class
//-----------------------------------------------------------------------------------------------
export default class CodeTableSorter {
	
	constructor(otherId) {
		this.otherId = otherId;
	}
	
	sort(codes) {
		let _self = this;
		codes.sort(function (a, b) {
			if (_self.otherId) {
				if (a.id == _self.otherId) {
					return 1;
				} else if (b.id == _self.otherId) {
					return -1;
				}
			}
			return a.text < b.text ? -1 : (a.text > b.text ? 1 : 0);
		});
	}
	
}
