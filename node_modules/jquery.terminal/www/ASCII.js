var LINES = {
	BOLD: {
		HORIZONTAL: 9473,
		VERTICAL: 9475,
		TOP_LEFT: 9487,
		TOP_RIGHT: 9491,
		BOTTOM_LEFT: 9495,
		BOTTOM_RIGHT: 9499,
		LEFT_CENTER: 9507,
		RIGHT_CENTER: 9515,
		TOP_CENTER: 9523,
		BOTTOM_CENTER: 9531,
		CENTER: 9547
	},
	DOUBLE: {
		HORIZONTAL: 9552,
		VERTICAL: 9553,
		TOP_LEFT: 9556,
		TOP_RIGHT: 9559,
		BOTTOM_LEFT: 9562,
		BOTTOM_RIGHT: 9565,
		LEFT_CENTER: 9568,
		RIGHT_CENTER: 9571,
		TOP_CENTER: 9574,
		BOTTOM_CENTER: 9577,
		CENTER: 9580
	},
	NORMAL: {
		HORIZONTAL: 9472,
		VERTICAL: 9474,
		TOP_LEFT: 9484,
		TOP_RIGHT: 9488,
		BOTTOM_LEFT: 9492,
		BOTTOM_RIGHT: 9496,
		LEFT_CENTER: 9500,
		RIGHT_CENTER: 9508,
		TOP_CENTER: 9516,
		BOTTOM_CENTER: 9524,
		CENTER: 9532
	},
	ROUNDED: {
		TOP_LEFT: 9581,
		TOP_RIGHT: 9582,
		BOTTOM_LEFT: 9584,
		BOTTOM_RIGHT: 9583
	}
};

var CHESS = {
	WHITE: {
		QUEEN: 9813,
		KING: 9812,
		ROOK: 9814,
		KNIGHT: 9816,
		BISHOP: 9815,
		PAWN: 9817
	},
	BLACK: {
		QUEEN: 9819,
		KING: 9818,
		ROOK: 9820,
		KNIGHT: 9822,
		BISHOP: 9821,
		PAWN: 9823
	}
};


function box(bold, width, height) {
  var str = '', i, j, line = LINES[bold ? 'NORMAL' : 'BOLD'];
  height = height-2;
  width = width-2;
  // top
  str += '&#' + line.TOP_LEFT + ';';
  for (i=0; i<width; ++i) {
    str += '&#' + line.HORIZONTAL + ';'
  }
  str += '&#' + line.TOP_RIGHT + ';\n';
  //center
  for (i=0; i<height; ++i) {
    str += '&#' + line.VERTICAL + ';'
    for (j=0; j<width; ++j) {
       str += '&nbsp;';
    }
    str += '&#' + line.VERTICAL + ';\n'
  }
  str += '&#' + line.BOTTOM_LEFT + ';';
  for (i=0; i<width; ++i) {
    str += '&#' + line.HORIZONTAL + ';'
  }
  str += '&#' + line.BOTTOM_RIGHT + ';\n';
  return str;
}




board = function (n, width) {
  function repeat(str, n) {
     var result = '';
     for (var i=0; i<n; ++i) {
       result += str;
     }
     return result;
  }
  var str = '';
  var nbsp = repeat(' ', width);
  for (var i=0; i<n; ++i) {
    for (var j=0; j<n; ++j) {
      str += (i+j) % 2 == 0 ? '[[;;#aaa]'+nbsp+']' : nbsp;
    }
    str += '\n';
  }
  return str;
};
