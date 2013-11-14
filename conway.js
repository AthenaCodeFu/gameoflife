var width = 10;
var height = 10;

function Game() {

	var cells = [];
	var board = jQuery('#board');

	for (var i = 0; i < height; ++i) {
		cells[i] = new Array(width);
		var rowhtml = "<tr>";
		for (var j = 0; j < width; ++j) {
			rowhtml += "<td class='off' onclick='game.toggleCell("+i+", "+j+")'>&nbsp;</td>";
		}
		rowhtml += "</tr>";
		board.append(rowhtml);
	} 

	this.setCell = function (i, j, v) {
		cells[i][j] = v;
		var cell = board.find('tr').eq(i).find('td').eq(j);
		cell.removeClass();
		cell.addClass(v ? 'on' : 'off');
	}

	this.getCell = function(i, j) {
		return cells[i][j];
	}

	this.toggleCell = function(i, j) {
		this.setCell(i, j, !this.getCell(i, j));
	}				

	this.step = function() {
//			var tCells = clone(cells);
//			for(var i = 0; i < height; ++i) {
//				for (var j = 0; j < width; ++j) {
//					this.toggleCell(i, j);
//				}
//			}
	}

	return this;
}

var game;
function Init() {
	game = new Game();
}
