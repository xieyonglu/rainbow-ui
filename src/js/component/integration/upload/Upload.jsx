//require('../../../../../bower_components/bootstrap-fileinput/css/fileinput.css');
//require('../../../../../bower_components/bootstrap-fileinput/js/fileinput');

import "../../../../../plugin/bootstrap-fileinput/css/fileinput.css";
import "../../../../../plugin/bootstrap-fileinput/js/fileinput";

//require('../../../../../bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget');
//require('../../../../../bower_components/blueimp-file-upload/js/jquery.iframe-transport');
//require('../../../../../bower_components/blueimp-file-upload/js/jquery.fileupload');//1056
//require('../../../../../bower_components/blueimp-file-upload/css/jquery.fileupload.css');

import Input from "../../input/Input";
import ELUtil from "../../../util/ELUtil";
import Component from "../../../common/Component";

//-----------------------------------------------------------------------------------------------
//	date:
//	
//	author: yonglu.xie
//	
//	description: Upload Component Class
//-----------------------------------------------------------------------------------------------
export default class Upload extends Input {
	
	/*
	<noscript>
	        	<input type="hidden" name="redirect" value="https://blueimp.github.io/jQuery-File-Upload/" />
	        </noscript>
	        
	        <button type="submit" className="btn btn-primary start">
	                    <i className="glyphicon glyphicon-upload"></i>
	                    <span>Start upload</span>
	                </button>
	                
	                <button type="reset" className="btn btn-warning cancel">
	                    <i className="glyphicon glyphicon-ban-circle"></i>
	                    <span>Cancel upload</span>
	                </button>
	                
	                <button type="button" className="btn btn-danger delete">
	                    <i className="glyphicon glyphicon-trash"></i>
	                    <span>Delete</span>
	                </button>
	                <input type="checkbox" className="toggle" />
	                <span className="fileupload-process"></span>
	
	render2: function(){
		return (
			 <div id="fileupload" className="form-control"
			 	action="//jquery-file-upload.appspot.com/" method="POST" enctype="multipart/form-data">
	        
	        <div className="fileupload-buttonbar">
	                <span className="btn btn-success fileinput-button fileupload">
	                    <i className="glyphicon glyphicon-plus"></i>
	                    <span>Add files...</span>
	                    <input type="file" name="files[]" multiple />
	                </span>
	                <div className="fileupload-progress">
			                <div className="progress progress-striped active" role="progressbar" aria-valuemin="11" aria-valuemax="100" style={{margin: '0px'}}>
			                    <div className="progress-bar progress-bar-success" style={{width: '12%'}}></div>
			                </div>
			            </div>
	        </div>
	    </div>
		);
	},*/
	
	renderInput(){
		return (
			<input id={this.componentId} type="file" name="files" multiple className="form-control" />
		);
	}
	
	componentDidMount(){
		var _self = this;
		
		$("#" + this.componentId).fileinput({
			showUpload: true,
			previewFileType: 'any'
		});
		
		/*
		$("#" + this.componentId).uploadify({
                auto:false, 
                //接受true or false两个值，当为true时选择文件后会自动上传；为false时只会把选择的文件增加进队列但不会上传，这时只能使用upload的方法触发上传。不设置auto时默认为true
                buttonClass: "some-class", 
                //设置上传按钮的class
                buttonCursor: 'hand',
                //设置鼠标移到按钮上的开状，接受两个值'hand'和'arrow'(手形和箭头)
                buttonImage: 'img/browse-btn.png', 
                //设置图片按钮的路径（当你的按钮是一张图片时）。如果使用默认的样式，你还可以创建一个鼠标悬停状态，但要把两种状态的图片放在一起，并且默认的放上面，悬停状态的放在下面（原文好难表达啊：you can create a hover state for the button by stacking the off state above the hover state in the image）。这只是一个比较便利的选项，最好的方法还是把图片写在CSS里面。
                buttonText: '<div>选择文件</div>',
                //设置按钮文字。值会被当作html渲染，所以也可以包含html标签
                checkExisting: '/uploadify/check-exists.php',
                //接受一个文件路径。此文件检查正要上传的文件名是否已经存在目标目录中。存在时返回1，不存在时返回0(应该主要是作为后台的判断吧)，默认为false
                debug: false,
                //开启或关闭debug模式
                fileObjName:'filedata',
                //设置在后台脚本使用的文件名。举个例子，在php中，如果这个选项设置为'the_files',你可以使用$_FILES['the_files']存取这个已经上传的文件。
                fileSizeLimit:'100MB',
                //设置上传文件的容量最大值。这个值可以是一个数字或者字符串。如果是字符串，接受一个单位（B,KB,MB,GB）。如果是数字则默认单位为KB。设置为0时表示不限制
                fileTypeExts: '*.*',
                //设置允许上传的文件扩展名（也就是文件类型）。但手动键入文件名可以绕过这种级别的安全检查，所以你应该始终在服务端中检查文件类型。输入多个扩展名时用分号隔开('*.jpg;*.png;*.gif')
                fileTypeDesc: 'All Files',
                //可选文件的描述。这个值出现在文件浏览窗口中的文件类型下拉选项中。（chrome下不支持，会显示为'自定义文件',ie and firefox下可显示描述）
                //formData: {
               ///     timestamp: '<?php echo $timestamp;?>',
               //     token: '<?php echo md5('unique_salt' . $timestamp);?>'
               // },
                //通过get或post上传文件时，此对象提供额外的数据。如果想动态设置这些值，必须在onUploadStartg事件中使用settings的方法设置。在后台脚本中使用 $_GET or $_POST arrays (PHP)存取这些值。看官网参考写法：http://www.uploadify.com/documentation/uploadify/formdata/
                height: 30,
                //设置按钮的高度(单位px)，默认为30.(不要在值里写上单位，并且要求一个整数，width也一样)
                width: 120,
                //设置按钮宽度(单位px)，默认120
                itemTemplate:false,
                //模板对象。给增加到上传队列中的每一项指定特殊的html模板。模板格式请看官网http://www.uploadify.com/documentation/uploadify/itemtemplate/
                method:'post',
                //提交上传文件的方法，接受post或get两个值，默认为post
                multi: false,
                //设置是否允许一次选择多个文件，true为允许，false不允许
                overrideEvents: [],
                //重写事件，接受事件名称的数组作为参数。所设置的事件将可以被用户重写覆盖
                preventCaching:true,
                //是否缓存swf文件。默认为true，会给swf的url地址设置一个随机数，这样它就不会被缓存。(有些浏览器缓存了swf文件就会触发不了里面的事件--by rainweb)
                progressData: 'percentage',
                //设置文件上传时显示数据，有‘percentage’ or ‘speed’两个参数(百分比和速度)
                queueID: false,
                //设置上传队列DOM元素的ID，上传的项目会增加进这个ID的DOM中。设置为false时则会自动生成队列DOM和ID。默认为false
                queueSizeLimit: 999,
                //设置每一次上传队列中的文件数量。注意并不是限制总的上传文件数量（那是uploadLimit）.如果增加进队列中的文件数量超出这个值，将会触发onSelectError事件。默认值为999
                removeCompleted: true,
                //是否移除掉队列中已经完成上传的文件。false为不移除
                removeTimeout: 3,
                //设置上传完成后删除掉文件的延迟时间，默认为3秒。如果removeCompleted为false的话，就没意义了
                requeueErrors: false,
                //设置上传过程中因为出错导致上传失败的文件是否重新加入队列中上传
                successTimeout: 30,
                //设置文件上传后等待服务器响应的秒数，超出这个时间，将会被认为上传成功，默认为30秒
                swf: 'uploadify.swf',
                //swf的相对路径，必写项
                uploader: 'uploadify.php',
                //服务器端脚本文件路径，必写项
                uploadLimit: 999
                //上传文件的数量。达到或超出这数量会触发onUploadError方法。默认999
            });*/

	}
	
	componentDidMount2(){
		var _self = this;
		
		//$("#" + componentId).fileupload('add', {files: filesList});
		
		$("#" + this.componentId).fileupload({
		    url: "files/upload",
		    autoUpload: Util.parseBool(_self.props.autoUpload),
		    //dataType: 'json',
		    formData: {param1:"p1", param2:"p2"},
		    
		    done: function(event, result){
		    	console.log("==done==" + JSON.stringify(result.result));
		    },
		    progressall: function (event, data) {
		    	console.log("==progressall==");
		    },
		    success: function(result, textStatus, jqXHR){
					console.log("==success==");
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.log("==error==");
				},
				complete: function(result, textStatus, jqXHR){
					console.log("==complete==");
				}
		});
	}
	
};


/**
 * Upload component prop types
 */
Upload.propTypes = $.extend({}, Input.propTypes, {
	id: React.PropTypes.string.isRequired,
	url: React.PropTypes.string,
	autoUpload: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string]),
	multiple: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.string])
});

/**
 * Get Upload component default props
 */
Upload.defaultProps = $.extend({}, Input.defaultProps, {
	autoUpload: true
});

