(function(){
	jQuery.dataTableLocal.regional['zh-CN'] = {
		first: "首页",
		previous: "上一页",
		next: "下一页",
		last: "末页",
    zeroRecords: "没有内容",
    info: "总共_PAGES_ 页，显示第_START_ 到第 _END_ ，筛选之后得到 _TOTAL_ 条，初始_MAX_ 条 ",
    infoEmpty: "0条记录",
    infoFiltered: "数据表中共为 _MAX_ 条记录",
    
    processing: "正在加载中......",
		lengthMenu: "每页显示 _MENU_ 条记录",
		sZeroRecords: "正在加载中......",
		tmptyTable: "表中无数据存在！",
		search: "搜索"
	};
	
	jQuery.dataTableLocal.setDefaults(jQuery.dataTableLocal.regional['zh-CN']);
})(jQuery);

