/**
 *  $Id: vk_popup.js 774 2011-06-02 19:57:32Z wingedfox $
 *
 *  Keyboard Iframe mode loader
 *
 *  This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 *  @author Ilya Lebedev
 *  @copyright 2006-2011 Ilya Lebedev <ilya@lebedev.net>
 *  @version $Rev: 774 $
 *  @lastchange $Author: wingedfox $ $Date: 2011-06-02 23:57:32 +0400 (Thu, 02 Jun 2011) $
 *  @class PopupVirtualKeyboard
 *  @constructor
 */
PopupVirtualKeyboard=new function(){var i=this;var I=null;var l;var o=(function(Q){var _=document.getElementsByTagName('html')[0].innerHTML,c=new RegExp('<scr'+'ipt[^>]+?src\\s*=\\s*["\']?([^>]+?/|)'+Q+'([^"\'\\s]*)[^>]*>(.|[\r\n])*?</scr'+'ipt>','i'),C=_.match(c);if(C){if(C[1].match(/^((https?|file)\:\/{2,}|\w:[\\])/))return[C[1],C[2]];if(C[1].indexOf("/")==0)return[C[1],C[2]];var e=document.getElementsByTagName('base');if(e[0]&&e[0].href)return[e[0].href+C[1],C[2]];return[(document.location.href.match(/(.*[\/\\])/)[0]+C[1]).replace(/^\/+/,""),C[2]]}return[null,null]})('vk_popup.js');i.isOpen=function(){return null!=I&&!I.closed};var O=null;i.attachInput=function(Q){if(I&&!I.closed&&I.VirtualKeyboard){return I.VirtualKeyboard.attachInput(Q);}return false};i.open=i.show=function(Q,_){if(!I||I.closed){var c=["status=0","title=0","dependent=yes","dialog=yes","resizable=no","scroll=no","scrollbars=no","width=500","height=500"];I=(window.showModelessDialog||window.open)(o[0]+"vk_popup.html"+o[1],window,c.join(window.showModelessDialog?";":","));l=_;O=Q;return true}return false};i.close=i.hide=function(Q){if(!I||I.closed)return false;if(I.VirtualKeyboard.isOpen())I.VirtualKeyboard.hide();I.close();I=null;if('function'==typeof l){l();}};i.toggle=function(Q){i.isOpen()?i.close():i.open(Q);};i.onload=function(){if('string'==typeof O)O=document.getElementById(O);I.VirtualKeyboard.show(O,I.document.body);I.document.body.className=I.document.body.parentNode.className='VirtualKeyboardPopup';if(I.sizeToContent){I.sizeToContent();}else{var Q=I.document.body.firstChild;while("virtualKeyboard"!=Q.id){I.document.body.removeChild(Q);Q=I.document.body.firstChild}I.dialogHeight=Q.offsetHeight+'px';I.dialogWidth=Q.offsetWidth+'px';I.resizeTo(Q.offsetWidth+I.DOM.getOffsetWidth()-I.DOM.getClientWidth(),Q.offsetHeight+I.DOM.getOffsetHeight()-I.DOM.getClientHeight());}I.onunload=i.close};if(window.attachEvent)window.attachEvent('onunload',i.close);else if(window.addEventListener)window.addEventListener('unload',i.close,false);};
