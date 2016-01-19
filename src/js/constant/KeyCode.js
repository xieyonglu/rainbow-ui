//-----------------------------------------------------------------------------------------------
//	date: 2015/12/23
//	
//	author: yonglu.xie
//	
//	description: KeyCode Class
//-----------------------------------------------------------------------------------------------
module.exports = {
	//DOWN: 40,
  //ESC: 27,
  //ENTER: 13,
  //LEFT: 37,
  //RIGHT: 39,
  //SPACE: 32,
  //TAB: 9,
  //UP: 38,

	//Values值
	//控制键键码值(keyCode)
	NONE: null, //Not assigned (never is pressed)未分配（永不被按下）
	Backspace: 8, //The backspace key //退格键	
	TAB: 9, //The tab key //制表键
	CLEAR: 12, //The Clear key //清除键
	ENTER: 13,
	SHIFT: 16, 
	CONTROL: 17,
	ALT: 18,
	CAPELOCK: 20,
	//return //Return key //回车键
	//Pause //Pause on PC machines //PC上的暂停键
	ESCAPE: 27, //Escape key //退出键
	SPACE: 32, //Space key //空格键
	PageUp: 33, //Page up //上页
	PageDown: 34, //Page down //下页
	END: 35, //End key //结束键
	HOME: 36, //Home key //起始键
	LeftArrow: 37, //Left arrow key //左箭头键
	UpArrow: 38, //Up arrow key //上箭头键
	RightArrow: 39, //Right arrow key //右箭头键
	DownArrow: 40, //Down arrow key //下箭头键
	INSERT: 45, //Insert key key //插入键
	DELETE: 46, //The forward delete key //正向删除键
	
	//Exclaim //Explaim key //感叹号键'!'。
	//DoubleQuote //Double quote key //双引号键。
	//Hash //Hash key //哈希键。
	//Dollar //Dollar sign key //美元符号键。
	//Ampersand //Ampersand key //和,  &(and 的符号）键。
	//Quote //Quote key //单引号键。
	//LeftParen //Left Parent key //左括号键。
	//RightParen //Right Parent key //右括号键。
	//Asterisk //Asterisk key //星号键 * 。
	//Plus //Plus key //加号键 + 。
	//Comma //Comma ',' key //逗号键 , 。
	//Minus //Minus '-' key //减号键 - 。
	//Period //Period '.' key //句号键 . 。
	//Slash //Slash '/' key //斜杠键 / 。
	//Colon //Colon ':' key //冒号键 : 。
	//Semicolon //Semicolon ';' key //分号键 ; 。
	//Less //Less '<' key //小于号键 < 。
	//Equals //Equals '=' key //等于号键 = 。
	//Greater //Greater '>' key //大于号键 > 。
	//Question //Question mark '?' key //问号键 ? 。
	//At //At key //@符号键。
	//LeftBracket //Left bracket key //左方括号键 [ 。
	//Backslash //Backslash key //反斜杠键 \ 。
	//RightBracket //Right bracket key //右方括号键 ] 。
	//Caret //Caret key //脱字符键 ^ 。
	//Underscore //Underscore '_' key //下划线键 _ 。
	//BackQuote //Back quote key //反引号键 。
	
	//Numlock //Numlock key //数字锁定键 。
	//CapsLock: 20, //Capslock key //大写锁定键 。
	//ScrollLock //Scroll lock key //滚动锁定键 。
	//RightShift //Right shift key //右上档键。
	//LeftShift //Left shift key //左上档键。
	//RightControl //Right Control key //右控制键。
	//LeftControl //Left Control key //左控制键。
	//RightAlt //Right Alt key //右更改键。
	//LeftAlt //Left Alt key //左更改键。
	//LeftApple //Left Apple key //左苹果键。
	//LeftWindows //Left Windows key //左Windows键。
	//RightApple //Right Apple key //右苹果键。
	//RightWindows //Right Windows key //右Windows键。
	//AltGr //Alt Gr key //右侧更改键。
	//Help //Help key //帮助键。
	//Print //Print key //打印键。
	//SysReq //Sys Req key //系统请求键。
	//Break //Break key //中断键。
	//Menu //Menu key //菜单键。
	
	// 数字键盘上的键的键码值(keyCode)
	Keypad0: 97, //Numeric keypad 0 //数字小键盘0。
	Keypad1: 98, //Numeric keypad 1 //数字小键盘1。
	Keypad2: 99, //Numeric keypad 2 //数字小键盘2。
	Keypad3: 100, //Numeric keypad 3 //数字小键盘3。
	Keypad4: 101, //Numeric keypad 4 //数字小键盘4。
	Keypad5: 102, //Numeric keypad 5 //数字小键盘5。
	Keypad6: 103, //Numeric keypad 6 //数字小键盘6。
	Keypad7: 104, //Numeric keypad 7 //数字小键盘7。
	Keypad8: 105, //Numeric keypad 8 //数字小键盘8。
	Keypad9: 106, //Numeric keypad 9 //数字小键盘9。
	
	KeypadMultiply: 106, //Numeric keypad '*' //数字小键盘的乘号 '*'。
	KeypadPlus: 107, //Numeric keypad '+' //数字小键盘的加号 '+'。
	KeypadEnter: 108, //Numeric keypad enter //数字小键盘的回车键。
	KeypadMinus: 109, //Numeric keypad '-' //数字小键盘的减号 '-'。
	KeypadPeriod: 110, //Numeric keypad '.' // 数字小键盘的句点'.'。
	KeypadDivide: 111, //Numeric keypad '/' // 数字小键盘的除号'/'。
	KeypadEquals: null, //Numeric keypad '=' //数字小键盘的等号键'='。
	
	// 功能键键码值(keyCode)
	F1: 112, //F1 function key //F1功能键。
	F2: 113, //F2 function key //F2功能键。
	F3: 114, //F3 function key //F3功能键。
	F4: 115, //F4 function key //F4功能键。
	F5: 116, //F5 function key //F5功能键。
	F6: 117, //F6 function key //F6功能键。
	F7: 118, //F7 function key //F7功能键。
	F8: 119, //F8 function key //F8功能键。
	F9: 120, //F9 function key //F9功能键。
	F10: 121, //F10 function key //F10功能键。
	F11: 122, //F11 function key //F11功能键。
	F12: 123, //F12 function key //F12功能键。
	//F13: 124, //F13 function key //F13功能键。
	//F14: 125, //F14 function key //F14功能键。
	//F15: 126, //F15 function key //F15功能键。
	
	// 字母和数字键的键码值(keyCode)
	A: 65,//'a' key // a键
	B: 66,//'b' key // b键
	C: 67,//'c' key // c键
	D: 68,//'d' key // d键
	E: 69, //'e' key // e键
	F: 70,//'f' key // f键
	G: 71,//'g' key // g键
	H: 72,//'h' key // h键
	I: 73,//'i' key // i键
	J: 74,//'j' key // j键
	K: 75,//'k' key // k键
	L: 76,//'l' key // l键
	M: 77,//'m' key // m键
	N: 78,//'n' key // n键
	O: 79,//'o' key // o键
	P: 80,//'p' key // p键
	Q: 81,//'q' key // q键
	R: 82,//'r' key // r键
	S: 83,//'s' key // s键
	T: 84,//'t' key // t键
	U: 85,//'u' key // u键
	V: 86,//'v' key // v键
	W: 87,//'w' key // w键
	X: 88,//'x' key // x键
	Y: 89,//'y' key // y键
	Z: 90,//'z' key // z键
	
	ALPHA0: 48,//The '0' key on the top of the alphanumeric keyboard.//键盘顶部的数字键'0'。
	ALPHA1: 49,//The '1' key on the top of the alphanumeric keyboard.//键盘顶部的数字键'1'。
	ALPHA2: 50,//The '2' key on the top of the alphanumeric keyboard.//键盘顶部的数字键'2'。
	ALPHA3: 51,//The '3' key on the top of the alphanumeric keyboard.//键盘顶部的数字键'3'。
	ALPHA4: 52,//The '4' key on the top of the alphanumeric keyboard.//键盘顶部的数字键'4'。
	ALPHA5: 53,//The '5' key on the top of the alphanumeric keyboard.//键盘顶部的数字键'5'。
	ALPHA6: 54,//The '6' key on the top of the alphanumeric keyboard.//键盘顶部的数字键'6'。
	ALPHA7: 55,//The '7' key on the top of the alphanumeric keyboard.//键盘顶部的数字键'7'。
	ALPHA8: 56,//The '8' key on the top of the alphanumeric keyboard.//键盘顶部的数字键'8'。
	ALPHA9: 57,//The '9' key on the top of the alphanumeric keyboard.//键盘顶部的数字键'9'。
	
	
	//Mouse0
	//Mouse1//First (primary) mouse button//第一个(主)鼠标键（鼠标左键）。
	//Mouse2//Second (secondary) mouse button//第二个(次)鼠标键（鼠标右键）。
	//Mouse3//Third mouse button //第三个鼠标键（鼠标中键）。
	//Mouse4//Fourth mouse button //第四个鼠标键
	//Mouse5//Fifth mouse button //第五个鼠标键。
	//Mouse6//Sixth mouse button //第六个鼠标键。
	//Mouse7//Seventh mouse button //第七个鼠标键。
	
	
	//JoystickButton0//Button 0 on any joystick //手柄按键0。
	//JoystickButton1//Button 1 on any joystick //手柄按键1。
	//JoystickButton2//Button 2 on any joystick //手柄按键2。
	//JoystickButton3//Button 3 on any joystick //手柄按键3。
	//JoystickButton4//Button 4 on any joystick //手柄按键4。
	//JoystickButton5//Button 5 on any joystick //手柄按键5。
	//JoystickButton6//Button 6 on any joystick //手柄按键6。
	//JoystickButton7//Button 7 on any joystick //手柄按键7。
	//JoystickButton8//Button 8 on any joystick //手柄按键8。
	//JoystickButton9//Button 9 on any joystick //手柄按键9。
	//JoystickButton10//Button 10 on any joystick //手柄按键10。
	//JoystickButton11//Button 11 on any joystick //手柄按键11。
	//JoystickButton12//Button 12 on any joystick //手柄按键12。
	//JoystickButton13//Button 13 on any joystick //手柄按键13。
	//JoystickButton14//Button 14 on any joystick //手柄按键14。
	//JoystickButton15//Button 15 on any joystick //手柄按键15。
	//JoystickButton16//Button 16 on any joystick //手柄按键16。
	//JoystickButton17//Button 17 on any joystick //手柄按键17。
	//JoystickButton18//Button 18 on any joystick //手柄按键18。
	//JoystickButton19//Button 19 on any joystick //手柄按键19。
	
	
	//Joystick1Button0//Button 0 on first joystick //第一个手柄按键0。
	//Joystick1Button1//Button 1 on first joystick //第一个手柄按键1。
	//Joystick1Button2//Button 2 on first joystick //第一个手柄按键2。
	//Joystick1Button3//Button 3 on first joystick //第一个手柄按键3。
	//Joystick1Button4//Button 4 on first joystick //第一个手柄按键4。
	//Joystick1Button5//Button 5 on first joystick //第一个手柄按键5。
	//Joystick1Button6//Button 6 on first joystick //第一个手柄按键6。
	//Joystick1Button7//Button 7 on first joystick //第一个手柄按键7。
	//Joystick1Button8//Button 8 on first joystick //第一个手柄按键8。
	//Joystick1Button9//Button 9 on first joystick //第一个手柄按键9。
	//Joystick1Button10//Button 10 on first joystick //第一个手柄按键10。
	//Joystick1Button11//Button 11 on first joystick //第一个手柄按键11。
	//Joystick1Button12//Button 12 on first joystick //第一个手柄按键12。
	//Joystick1Button13//Button 13 on first joystick //第一个手柄按键13。
	//Joystick1Button14//Button 14 on first joystick //第一个手柄按键14。
	//Joystick1Button15//Button 15 on first joystick //第一个手柄按键15。
	//Joystick1Button16//Button 16 on first joystick //第一个手柄按键16。
	//Joystick1Button17//Button 17 on first joystick //第一个手柄按键17。
	//Joystick1Button18//Button 18 on first joystick //第一个手柄按键18。
	//Joystick1Button19//Button 19 on first joystick //第一个手柄按键19。
	
	
	//Joystick2Button0//Button 0 on second joystick //第二个手柄按键0。
	//Joystick2Button1//Button 1 on second joystick //第二个手柄按键1。
	//Joystick2Button2//Button 2 on second joystick //第二个手柄按键2。
	//Joystick2Button3//Button 3 on second joystick //第二个手柄按键3。
	//Joystick2Button4//Button 4 on second joystick //第二个手柄按键4。
	//Joystick2Button5//Button 5 on second joystick //第二个手柄按键5。
	//Joystick2Button6//Button 6 on second joystick //第二个手柄按键6。
	//Joystick2Button7//Button 7 on second joystick //第二个手柄按键7。
	//Joystick2Button8//Button 8 on second joystick //第二个手柄按键8。
	//Joystick2Button9//Button 9 on second joystick //第二个手柄按键9。
	//Joystick2Button10//Button 10 on second joystick //第二个手柄按键10。
	//Joystick2Button11//Button 11 on second joystick //第二个手柄按键11。
	//Joystick2Button12//Button 12 on second joystick //第二个手柄按键12。
	//Joystick2Button13//Button 13 on second joystick //第二个手柄按键13。
	//Joystick2Button14//Button 14 on second joystick //第二个手柄按键14。
	//Joystick2Button15//Button 15 on second joystick //第二个手柄按键15。
	//Joystick2Button16//Button 16 on second joystick //第二个手柄按键16。
	//Joystick2Button17//Button 17 on second joystick //第二个手柄按键17。
	//Joystick2Button18//Button 18 on second joystick //第二个手柄按键18。
	//Joystick2Button19//Button 19 on second joystick //第二个手柄按键19。
	
	
	//Joystick3Button0//Button 0 on third joystick //第三个手柄按键0。
	//Joystick3Button1//Button 1 on third joystick //第三个手柄按键1。
	//Joystick3Button2//Button 2 on third joystick //第三个手柄按键2。
	//Joystick3Button3//Button 3 on third joystick //第三个手柄按键3。
	//Joystick3Button4//Button 4 on third joystick //第三个手柄按键4。
	//Joystick3Button5//Button 5 on third joystick //第三个手柄按键5。
	//Joystick3Button6//Button 6 on third joystick //第三个手柄按键6。
	//Joystick3Button7//Button 7 on third joystick //第三个手柄按键7。
	//Joystick3Button8//Button 8 on third joystick //第三个手柄按键8。
	//Joystick3Button9//Button 9 on third joystick //第三个手柄按键9。
	//Joystick3Button10//Button 10 on third joystick //第三个手柄按键10。
	//Joystick3Button11//Button 11 on third joystick //第三个手柄按键11。
	//Joystick3Button12//Button 12 on third joystick //第三个手柄按键12。
	//Joystick3Button13//Button 13 on third joystick //第三个手柄按键13。
	//Joystick3Button14//Button 14 on third joystick //第三个手柄按键14。
	//Joystick3Button15//Button 15 on third joystick //第三个手柄按键15。
	//Joystick3Button16//Button 16 on third joystick //第三个手柄按键16。
	//Joystick3Button17//Button 17 on third joystick //第三个手柄按键17。
	//Joystick3Button18//Button 18 on third joystick //第三个手柄按键18。
	//Joystick3Button19//Button 19 on third joystick //第三个手柄按键19。

};