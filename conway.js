var width = 10;
var height = 10;

function Game() {

	var cells;
	var board = jQuery('#board');

	this.createCellsGrid = function(h, w) {
		var result = new Array(h);
		for (var i = 0; i < h; ++i) {
			result[i] = new Array(w);
			for (var j = 0; j < w; ++j) {
				result[i][j] = 0;
			}
		}
		return result;
	}

	this.setCell = function(i, j, v) {
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
		//console.log(""+i+","+j+": " + this.countNeighbors(i, j));
	}				

	this.countNeighbors = function(i, j) {
		var count = 0;
		if (i > 0                           && this.getCell(i - 1, j    )) { ++count; } // top
		if (i < height - 1                  && this.getCell(i + 1, j    )) { ++count; } // bottom
		if (                  j > 0         && this.getCell(i    , j - 1)) { ++count; } // left
		if (                  j < width - 1 && this.getCell(i    , j + 1)) { ++count; } // right
		if (i > 0          && j > 0         && this.getCell(i - 1, j - 1)) { ++count; } // top-left
		if (i > 0          && j < width - 1 && this.getCell(i - 1, j + 1)) { ++count; } // top-right
		if (i < height - 1 && j > 0         && this.getCell(i + 1, j - 1)) { ++count; } // bottom-left
		if (i < height - 1 && j < width - 1 && this.getCell(i + 1, j + 1)) { ++count; } // bottom-right
		return count;
	}

	this.getNextStateOfCell = function(i, j) {
		var cellState = this.getCell(i, j);
		var neighbors = this.countNeighbors(i, j);
		if (cellState) {
			if (neighbors < 2)  { return 0; } // any live cell with fewer than two live neighbors dies
			if (neighbors > 3)  { return 0; } // any live cell with more than three live neighbors dies
			return 1;                         // any live cell with two or three nighbors stays alive
		}
		else {
			if (neighbors == 3) { return 1; } // any dead cell with exactly three live neighbors becomes alive
			return 0;                         // otherwise, it remains dead
		}
	}

	this.step = function() {
		// var  = this.createCellsGrid(height, width);
		// for (var i = 0; i < height; ++i) {
		// 	for (var j = 0; j < width; ++j) {
		// 		nextCells[i][j] = this.getNextStateOfCell(i, j);
		// 	}
		// }
		// cells = nextCells;
	}


	cells = this.createCellsGrid(height, width);

	// initialize the board html
	var boardhtml = "";
	for (var i = 0; i < height; ++i) {
		boardhtml += "<tr>";
		for (var j = 0; j < width; ++j) {
			boardhtml += "<td class='off' onclick='game.toggleCell("+i+", "+j+")'>&nbsp;</td>";
		}
		boardhtml += "</tr>";
	} 
	board.append(boardhtml);

	return this;
}

var game;
function Init() {
	game = new Game();
}
