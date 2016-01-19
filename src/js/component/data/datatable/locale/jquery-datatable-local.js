/**
 * JQuery DataTable Local
 * Author: Yonglu Xie
 */
(function ($) {
	function DataTableLocal() {
		this.regional = []; // Available regional settings, indexed by language code
		this.regional[""] = { // Default regional settings
			previous: "Previous",
			next: "Next",
			first: "First",
			last: "Last",
			zeroRecords: "Zero Records",
			info: "A",
			infoEmpty: "0 records",
			infoFiltered: "Info Filtered",
		};
		this._defaults = { // Global defaults for all the date picker instances
			showOn: "focus" // "focus" for popup on focus,
		};
		
		$.extend(this._defaults, this.regional[""]);
		this.regional.en = $.extend( true, {}, this.regional[ "" ]);
		this.regional[ "en-US" ] = $.extend( true, {}, this.regional.en );
	}
	
	$.extend(DataTableLocal.prototype, {
		defaults: null,
		
		setDefaults: function(defaults) {
			this.defaults = defaults;
		},
		
		getDefaults: function(){
			return this.defaults;
		}
	});
	
	$.dataTableLocal = new DataTableLocal();
})(jQuery);
