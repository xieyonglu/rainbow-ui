module.exports = function (grunt) {
    // Project configuration.
    grunt
        .initConfig({
            pkg: grunt.file.readJSON('package.json'),
            srcJsPath:'src/js',
            targetPath: 'dist',
            middlePath: 'intermediate',
            clean: {
                all: ['<%= targetPath %>', '<%= middlePath %>'],
                mid: ['<%= middlePath %>'],
                compile: ['<%= targetPath %>']
            },
            concat: {
                options: {
                    separator: '\n'
                },
                js: {
                    src: [
                            
                            // Component config
                            '<%= middlePath %>/src/js/component-config.js',
                            
                            // Common
                            '<%= middlePath %>/src/js/common/ComponentConstants.js',

                            // Event
                            '<%= middlePath %>/src/js/event/Event.js',
                            '<%= middlePath %>/src/js/event/OnChangeEvent.js',
                            '<%= middlePath %>/src/js/event/OnBlurEvent.js',
                            '<%= middlePath %>/src/js/event/OnClickEvent.js',
                            '<%= middlePath %>/src/js/event/OnTabChangeEvent.js',

                            // Context
                            '<%= middlePath %>/src/js/context/DataContext.js',
                            '<%= middlePath %>/src/js/context/ValidatorContext.js',
                            '<%= middlePath %>/src/js/context/UpdateContext.js',


                            // Convertor
                            '<%= middlePath %>/src/js/convertor/ConvertorConstant.js',
                            '<%= middlePath %>/src/js/convertor/Convertor.js',
                            '<%= middlePath %>/src/js/convertor/DateTimePickerConvertor.js',
                            '<%= middlePath %>/src/js/convertor/NumberConvertor.js',


                            // Validator
                            '<%= middlePath %>/src/js/validator/ValidatorConstant.js',
                            '<%= middlePath %>/src/js/validator/Validator.js',
                            '<%= middlePath %>/src/js/validator/EmailValidator.js',


                            // Util
                            '<%= middlePath %>/src/js/util/Util.js',
                            '<%= middlePath %>/src/js/util/Ajax.js',
                            '<%= middlePath %>/src/js/util/AjaxUtil.js',
                            '<%= middlePath %>/src/js/util/ELUtil.js',
                            '<%= middlePath %>/src/js/util/ArrayUtil.js',
                            '<%= middlePath %>/src/js/util/StringUtil.js',
                            '<%= middlePath %>/src/js/util/MessageHelper.js',


                            // Model
                            '<%= middlePath %>/src/js/model/CodeTable.js',
                            '<%= middlePath %>/src/js/model/CodeTableSorter.js',


                            // Overlay Component
                            '<%= middlePath %>/src/js/component/overlay/dialog/Dialog.js',
                            '<%= middlePath %>/src/js/component/overlay/dialog/DialogFooter.js',
                            '<%= middlePath %>/src/js/component/overlay/alert/Alert.js',
                            '<%= middlePath %>/src/js/component/overlay/confirmdialog/ConfirmDialog.js',
                            '<%= middlePath %>/src/js/component/overlay/ajaxstatus/AjaxStatus.js',
                            '<%= middlePath %>/src/js/component/overlay/ajaxstatus/Loader.js',


                            // Panel Component
                            '<%= middlePath %>/src/js/component/panel/accordion/Accordion.js',
                            '<%= middlePath %>/src/js/component/panel/affix/Affix.js',
                            '<%= middlePath %>/src/js/component/panel/fieldset/Fieldset.js',
                            '<%= middlePath %>/src/js/component/panel/layout/Layout.js',
                            '<%= middlePath %>/src/js/component/panel/panel/Panel.js',
                            '<%= middlePath %>/src/js/component/panel/timeline/Timeline.js',
                            '<%= middlePath %>/src/js/component/panel/timeline/TimelineItem.js',
                            '<%= middlePath %>/src/js/component/panel/panelgrid/PanelGrid.js',
                            '<%= middlePath %>/src/js/component/panel/panelgrid/Cell.js',
                            '<%= middlePath %>/src/js/component/panel/panelgrid/SmartPanelGrid.js',
                            '<%= middlePath %>/src/js/component/panel/tab/Tab.js',
                            '<%= middlePath %>/src/js/component/panel/tab/TabItem.js',
                            '<%= middlePath %>/src/js/component/panel/tab/TabItemList.js',
                            '<%= middlePath %>/src/js/component/panel/wizard/Wizard.js',
                            '<%= middlePath %>/src/js/component/panel/wizard/WizardStep.js',
                            '<%= middlePath %>/src/js/component/panel/wizard/WizardStepButton.js',
                            '<%= middlePath %>/src/js/component/panel/dynamic/DynamicPage.js',
                            '<%= middlePath %>/src/js/component/panel/dynamic/DynamicSection.js',
                            '<%= middlePath %>/src/js/component/panel/dynamic/dynamic-page.template.js',
                            '<%= middlePath %>/src/js/component/panel/dynamic/dynamic-section.template.js',


                            // Data Component
                            '<%= middlePath %>/src/js/component/data/datatable/locale/jquery-datatable-local.js',
                            '<%= middlePath %>/src/js/component/data/datatable/locale/jquery-datatable-zh_cn.js',
                            '<%= middlePath %>/src/js/component/data/datatable/DataTable.js',
                            '<%= middlePath %>/src/js/component/data/datatable/Column.js',
                            '<%= middlePath %>/src/js/component/data/tree/Tree.js',
                            '<%= middlePath %>/src/js/component/data/treetable/TreeTable.js',
                            '<%= middlePath %>/src/js/component/data/carousel/Carousel.js',
                            
                            // File Component
                            '<%= middlePath %>/src/js/component/file/filedownload/FileDownload.js',
                            '<%= middlePath %>/src/js/component/file/fileupload/FileUpload.js',
                            '<%= middlePath %>/src/js/component/file/dropzone/DropZone.js',


                            // Button Component
                            '<%= middlePath %>/src/js/component/button/button/Button.js',
                            '<%= middlePath %>/src/js/component/button/link/Link.js',
                            '<%= middlePath %>/src/js/component/button/menubutton/MenuButton.js',
                            '<%= middlePath %>/src/js/component/button/splitbutton/SplitButton.js',

                            // Menu Component
                            '<%= middlePath %>/src/js/component/menu/menu/Menu.js',
                            '<%= middlePath %>/src/js/component/menu/menubar/MenuBar.js',
                            '<%= middlePath %>/src/js/component/menu/breadcrumb/BreadCrumb.js',
                            '<%= middlePath %>/src/js/component/menu/MenuItem.js',
                            '<%= middlePath %>/src/js/component/menu/SubMenu.js',
                            '<%= middlePath %>/src/js/component/menu/Separator.js',


                            // Input Component
                            '<%= middlePath %>/src/js/component/input/Input.js',
                            '<%= middlePath %>/src/js/component/input/CodeTable.js',
                            '<%= middlePath %>/src/js/component/input/Digit.js',
                            '<%= middlePath %>/src/js/component/input/AutoComplete.js',
                            '<%= middlePath %>/src/js/component/input/Checkbox.js',
                            '<%= middlePath %>/src/js/component/input/Currency.js',
                            '<%= middlePath %>/src/js/component/input/DateTimePicker.js',
                            '<%= middlePath %>/src/js/component/input/DateRangePicker.js',
                            '<%= middlePath %>/src/js/component/input/Email.js',
                            '<%= middlePath %>/src/js/component/input/Number.js',
                            '<%= middlePath %>/src/js/component/input/Password.js',
                            '<%= middlePath %>/src/js/component/input/Percent.js',
                            '<%= middlePath %>/src/js/component/input/Radio.js',
                            '<%= middlePath %>/src/js/component/input/Select.js',
                            '<%= middlePath %>/src/js/component/input/Text.js',
                            '<%= middlePath %>/src/js/component/input/TwoText.js',
                            '<%= middlePath %>/src/js/component/input/Textarea.js',
                            '<%= middlePath %>/src/js/component/input/CheckboxButton.js',
                            '<%= middlePath %>/src/js/component/input/RadioButton.js',
                            '<%= middlePath %>/src/js/component/input/Rating.js',
                            '<%= middlePath %>/src/js/component/input/ClockPicker.js',
                            '<%= middlePath %>/src/js/component/input/ColorPicker.js',
                            '<%= middlePath %>/src/js/component/input/Slider.js',
                            '<%= middlePath %>/src/js/component/input/Spinner.js',
                            '<%= middlePath %>/src/js/component/input/Switch.js',
                            '<%= middlePath %>/src/js/component/input/Editor.js',
                            '<%= middlePath %>/src/js/component/input/CKEditor.js',


                            // Other Component
                            '<%= middlePath %>/src/js/component/form/Form.js',
                            '<%= middlePath %>/src/js/component/label/Label.js',
                            '<%= middlePath %>/src/js/component/overlay/OutputText.js',
                            '<%= middlePath %>/src/js/component/fullcalendar/FullCalendar.js',
                    ],
                    dest: '<%= targetPath %>/js/src-<%= pkg.version %>.js'
                },
                commonjs: {
                    src: [
                            '<%= middlePath %>/common/js/jquery.js',
                            '<%= middlePath %>/common/js/jquery.mockjax.js',
                            '<%= middlePath %>/common/js/moment.js',
                            '<%= middlePath %>/common/js/jsface.js',
                            '<%= middlePath %>/common/js/jsface.pointcut.js',
                            '<%= middlePath %>/common/js/react.js',
                            '<%= middlePath %>/common/js/react-with-addon.js',
                            '<%= middlePath %>/common/js/JSXTransformer.js',
                            '<%= middlePath %>/common/js/ReactRouter.js',
                            '<%= middlePath %>/common/js/bootstrap.js',
                            '<%= middlePath %>/common/js/material.js',
                            '<%= middlePath %>/common/js/ripples.js',
                            '<%= middlePath %>/common/js/jquery.blockUI.js',
                            '<%= middlePath %>/common/js/jquery.shCircleLoader.js',
                            '<%= middlePath %>/common/js/toastr.min.js',
                            '<%= middlePath %>/common/js/jquery.dataTables.js',



                    ],
                    dest: '<%= targetPath %>/js/common-<%= pkg.version %>.js'
                },
                concatjs: {
                    src: [
                            '<%= targetPath %>/js/common-<%= pkg.version %>.js',
                            '<%= targetPath %>/js/src-<%= pkg.version %>.js',
                    ],
                    dest: '<%= targetPath %>/js/<%= pkg.name %>-<%= pkg.version %>.js'
                },
                commonCss: {
                    src: [
                            '<%= middlePath %>/common/css/bootstrap.css',
                            '<%= middlePath %>/common/css/roboto.css',
                            '<%= middlePath %>/common/css/material.css',
                            '<%= middlePath %>/common/css/ripples.css',
                            '<%= middlePath %>/common/css/material-fullpalette.css',
                            '<%= middlePath %>/common/css/font-awesome.css',
                            '<%= middlePath %>/common/css/jquery.shCircleLoader.css',
                            '<%= middlePath %>/common/css/toastr.css',
                            '<%= middlePath %>/common/css/jquery.dataTables.css',
                    ],
                    dest: '<%= targetPath %>/css/common-<%= pkg.version %>.css'
                },
                srcCss: {
                    src: [
                            '<%= middlePath %>/src/css/rainbowUI.css'
                    ],
                    dest: '<%= targetPath %>/css/src-<%= pkg.version %>.css'
                },
                concatCss: {
                    src: [
                            '<%= targetPath %>/css/common-<%= pkg.version %>.css',
                            '<%= targetPath %>/css/src-<%= pkg.version %>.css'
                    ],
                    dest: '<%= targetPath %>/css/<%= pkg.name %>-<%= pkg.version %>.css'
                }
            },
            uglify: {
                js: {
                    options: {
                        banner: '/*! <%= pkg.name %>.<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                        sourceMap: true
                    },
                    files: {
                        '<%= targetPath %>/js/<%= pkg.name %>-<%= pkg.version %>.min.js': ['<%= concat.concatjs.dest %>']
                    }
                }
            },
            react: {
                dynamic_mappings: {
                    files: [{
                        expand: true,
                        //cwd: 'resource',
                        src: [
                            // Component config
                            'src/js/component-config.js',
                            
                            // Common
                            'src/js/common/ComponentConstants.js',

                            // Event
                            'src/js/event/Event.js',                       
                            'src/js/event/OnChangeEvent.js',
                            'src/js/event/OnBlurEvent.js',
                            'src/js/event/OnClickEvent.js',
                            'src/js/event/OnTabChangeEvent.js',

                            // Context
                            'src/js/context/DataContext.js',
                            'src/js/context/UpdateContext.js',
                            'src/js/context/ValidatorContext.js',
                            

                            // Convertor
                            'src/js/convertor/ConvertorConstant.js',
                            'src/js/convertor/Convertor.js',                            
                            'src/js/convertor/DateTimePickerConvertor.js',
                            'src/js/convertor/NumberConvertor.js',


                            // Validator
                            'src/js/validator/Validator.js',
                            'src/js/validator/ValidatorConstant.js',
                            'src/js/validator/EmailValidator.js',


                            // Util
                            'src/js/util/Util.js',
                            'src/js/util/Ajax.js',
                            'src/js/util/AjaxUtil.js',
                            'src/js/util/ELUtil.js',
                            'src/js/util/ArrayUtil.js',                                                        
                            'src/js/util/StringUtil.js',             
                            'src/js/util/MessageHelper.js',

                            // Model
                            'src/js/model/CodeTable.js',
                            'src/js/model/CodeTableSorter.js',


                            // Overlay Component
                            'src/js/component/overlay/dialog/Dialog.jsx',
                            'src/js/component/overlay/dialog/DialogFooter.jsx',
                            'src/js/component/overlay/alert/Alert.jsx',
                            'src/js/component/overlay/confirmdialog/ConfirmDialog.jsx',
                            'src/js/component/overlay/ajaxstatus/AjaxStatus.jsx',
                            'src/js/component/overlay/ajaxstatus/Loader.jsx',


                            // Panel Component
                            'src/js/component/panel/accordion/Accordion.jsx',
                            'src/js/component/panel/affix/Affix.jsx',
                            'src/js/component/panel/fieldset/Fieldset.jsx',
                            'src/js/component/panel/layout/Layout.jsx',
                            'src/js/component/panel/panel/Panel.jsx',                            
                            'src/js/component/panel/timeline/Timeline.jsx',                            
                            'src/js/component/panel/timeline/TimelineItem.jsx',                           
                            
                            'src/js/component/panel/panelgrid/PanelGrid.jsx',
                            'src/js/component/panel/panelgrid/Cell.jsx',
                            'src/js/component/panel/panelgrid/SmartPanelGrid.jsx',
                            'src/js/component/panel/tab/Tab.jsx',
                            'src/js/component/panel/tab/TabItem.jsx',
                            'src/js/component/panel/tab/TabItemList.jsx',
                            'src/js/component/panel/wizard/Wizard.jsx',
                            'src/js/component/panel/wizard/WizardStep.jsx',
                            'src/js/component/panel/wizard/WizardStepButton.jsx',
                         
                            'src/js/component/panel/dynamic/DynamicPage.jsx',
                            'src/js/component/panel/dynamic/DynamicSection.jsx',
                            'src/js/component/panel/dynamic/dynamic-page.template.jsx',
                            'src/js/component/panel/dynamic/dynamic-section.template.jsx',


                            // Data Component                   
                            'src/js/component/data/datatable/locale/jquery-datatable-local.js',
                            'src/js/component/data/datatable/locale/jquery-datatable-zh_cn.js',
                            'src/js/component/data/datatable/DataTable.jsx',
                            'src/js/component/data/datatable/Column.jsx',                  
                            'src/js/component/data/tree/Tree.jsx',
                            'src/js/component/data/treetable/TreeTable.jsx',
                            'src/js/component/data/carousel/Carousel.jsx',

                                                        // File Component
                            'src/js/component/file/filedownload/FileDownload.jsx',
                            'src/js/component/file/fileupload/FileUpload.jsx',
                            'src/js/component/file/dropzone/DropZone.jsx',
                                                        


                            // Button Component
                            'src/js/component/button/button/Button.jsx',
                            'src/js/component/button/link/Link.jsx',
                            'src/js/component/button/menubutton/MenuButton.jsx',
                            'src/js/component/button/splitbutton/SplitButton.jsx',
              

                            // Menu Component
                            'src/js/component/menu/menu/Menu.jsx',
                            'src/js/component/menu/menubar/MenuBar.jsx',
                            'src/js/component/menu/breadcrumb/BreadCrumb.jsx',
                            'src/js/component/menu/MenuItem.jsx',
                            'src/js/component/menu/SubMenu.jsx',
                            'src/js/component/menu/Separator.jsx',


                            // Input Component             

                            'src/js/component/input/Input.jsx',
                            'src/js/component/input/CodeTable.jsx',
                            'src/js/component/input/Digit.jsx',
                            'src/js/component/input/AutoComplete.jsx',
                            'src/js/component/input/Checkbox.jsx',
                            'src/js/component/input/Currency.jsx',
                            'src/js/component/input/DateTimePicker.jsx',
                            'src/js/component/input/DateRangePicker.jsx',
                            'src/js/component/input/Email.jsx',
                            'src/js/component/input/Number.jsx',
                            'src/js/component/input/Password.jsx',
                            'src/js/component/input/Percent.jsx',
                            'src/js/component/input/Radio.jsx',
                            'src/js/component/input/Select.jsx',
                            'src/js/component/input/Text.jsx',
                            'src/js/component/input/Textarea.jsx',
                            'src/js/component/input/TwoText.jsx',
                            'src/js/component/input/CheckboxButton.jsx',
                            'src/js/component/input/RadioButton.jsx',
                            'src/js/component/input/Rating.jsx',
                            'src/js/component/input/ClockPicker.jsx',
                            'src/js/component/input/ColorPicker.jsx',
                            'src/js/component/input/Slider.jsx',
                            'src/js/component/input/Spinner.jsx',
                            'src/js/component/input/Switch.jsx',
                            'src/js/component/input/Editor.jsx',
                            'src/js/component/input/CKEditor.jsx',                         
                            

                            // Other Component
                            'src/js/component/form/Form.jsx',
                            'src/js/component/label/Label.jsx',
                            'src/js/component/overlay/OutputText.jsx',
                            'src/js/component/fullcalendar/FullCalendar.jsx',                       
 


                        ],
                        dest: '<%= middlePath %>/',
                        ext: '.js'
                    }]
                }
            },
            copy: {
                // copy parrot css and rename
                'commonCss': {
                    files: [
                        {
                            expand: true,
                            cwd: 'node_modules/bootstrap/dist/css/',
                            src: ['bootstrap.css'],
                            dest: '<%= middlePath %>/common/css/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/font-awesome/css/',
                            src: ['font-awesome.css'],
                            dest: '<%= middlePath %>/common/css/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/toastr/build/',
                            src: ['toastr.css'],
                            dest: '<%= middlePath %>/common/css/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/datatables/media/css/',
                            src: ['jquery.dataTables.css'],
                            dest: '<%= middlePath %>/common/css/'
                        },
                        {
                            expand: true,
                            cwd: 'src/css/',
                            src: ['rainbowUI.css'],
                            dest: '<%= middlePath %>/src/css/'
                        }
                        
                    ]
                },
                'pluginCss': {
                    files: [
                        {
                            expand: true,
                            cwd: 'plugins/bootstrap-material-design/css/',
                            src: ['roboto.css','material.css','ripples.css','material-fullpalette.css'],
                            dest: '<%= middlePath %>/common/css/'
                        },
                        {
                            expand: true,
                            cwd: 'plugins/jquery-shcircleloader/',
                            src: ['jquery.shCircleLoader.css'],
                            dest: '<%= middlePath %>/common/css/'
                        }
                    ]
                },
                'fonts': {
                    files: [
                        {
                            expand: true,
                            cwd: 'plugins/bootstrap-material-design/fonts/',
                            src: ['*.*'],
                            dest: '<%= targetPath %>/fonts/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/bootstrap/dist/fonts/',
                            src: ['*.*'],
                            dest: '<%= targetPath %>/fonts/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/font-awesome/fonts/',
                            src: ['*.*'],
                            dest: '<%= targetPath %>/fonts/'
                        }
                    ]
                },
                'commonJs': {
                    files: [
                        {
                            expand: true,
                            cwd: 'node_modules/jquery/dist',
                            src: ['jquery.js'],
                            dest: '<%= middlePath %>/common/js/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/jquery-mockjax/dist',
                            src: ['jquery.mockjax.js'],
                            dest: '<%= middlePath %>/common/js/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/moment',
                            src: ['moment.js'],
                            dest: '<%= middlePath %>/common/js/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/jsface/dist',
                            src: ['jsface.js','jsface.pointcut.js'],
                            dest: '<%= middlePath %>/common/js/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/react/dist',
                            src: ['react.js','react-with-addons.js','JSXTransformer.js'],
                            dest: '<%= middlePath %>/common/js/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/react-router/umd',
                            src: ['ReactRouter.js'],
                            dest: '<%= middlePath %>/common/js/'
                        },
                         {
                            expand: true,
                            cwd: 'node_modules/bootstrap/dist/js',
                            src: ['bootstrap.js'],
                            dest: '<%= middlePath %>/common/js/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/block-ui/',
                            src: ['jquery.blockUI.js'],
                            dest: '<%= middlePath %>/common/js/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/toastr/build/',
                            src: ['toastr.min.js'],
                            dest: '<%= middlePath %>/common/js/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/datatables/media/js/',
                            src: ['jquery.dataTables.js'],
                            dest: '<%= middlePath %>/common/js/'
                        }


                        
                    ]
                },
                'pluginJs': {
                    files: [
                        {
                            expand: true,
                            cwd: 'plugins/bootstrap-material-design/js',
                            src: ['material.js','ripples.js'],
                            dest: '<%= middlePath %>/common/js/'
                        },
                        {
                            expand: true,
                            cwd: 'plugins/jquery-shcircleloader/',
                            src: ['jquery.shCircleLoader.js'],
                            dest: '<%= middlePath %>/common/js/'
                        }
                    ]
                },
                'image': {
                    files: [
                        {
                            expand: true,
                            cwd: 'src/images/',
                            src: ['*.png'],
                            dest: '<%= targetPath %>/images/'
                        },
                        {
                            expand: true,
                            cwd: 'node_modules/datatables/media/images',
                            src: ['*.png'],
                            dest: '<%= targetPath %>/images/'
                        },

                        
                    ]
                },
            },
            cssmin: {
                options: {
                    banner: '/*! <%= pkg.name %>.<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    sourceMap: false
                },
                compress:{
                    files:{
                        '<%= targetPath %>/css/<%= pkg.name %>-<%= pkg.version %>.min.css':['<%= concat.concatCss.dest %>']
                    }

                }
            },
            jshint: {
                options: {
                    eqnull: true,
                    scripturl: true, //disable the check "Script URL"
                    // more options here if you want to override JSHint
                    // defaults
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true
                    }
                },
                js: {
                    files: {src: ['<%= middlePath %>/**/*.js']}

                }
            },
        });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-replace');

    // copy bower files to target
    grunt.registerTask('default', ['clean:all', 'react','copy','concat','uglify','clean:mid']);
    grunt.registerTask('release', ['clean:all', 'react', 'copy','concat','uglify','cssmin', 'clean:mid']);
};

