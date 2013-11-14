
function Board(width, height) {

	this.w = width;
	this.h = height;
	this.grid = new Array(this.h);
	for (var row = 0; row < this.h; ++row) {
		this.grid[row] = new Array(this.w);
		for (var col = 0; col < this.w; ++col) {
			this.grid[row][col] = 0;
		}
	}

	this.init = function(width, height) {
		this.h = height;
		this.w = width;
		this.grid = new Array(height);
		for (var row = 0; row < h; ++row) {
			result[i] = new Array(w);
			for (var j = 0; j < w; ++j) {
				result[i][j] = 0;
			}
		}
	
	}

	this.getCell = function(row, col) {
		return this.grid[row][col];
	}

	this.setCell = function(row, col, value) {
		this.grid[row][col] = value;
	}

	this.toggleCell = function(row, col, value) {
		this.setCell(row, col, !this.getCell(row, col));
	}

	this.countNeighbors = function(row, col) {
		var count = 0;
		if (row > 0                              && this.getCell(row - 1, col    )) { ++count; } // top
		if (row < this.h - 1                     && this.getCell(row + 1, col    )) { ++count; } // bottom
		if (                    col > 0          && this.getCell(row    , col - 1)) { ++count; } // left
		if (                    col < this.w - 1 && this.getCell(row    , col + 1)) { ++count; } // right
		if (row > 0          && col > 0          && this.getCell(row - 1, col - 1)) { ++count; } // top-left
		if (row > 0          && col < this.w - 1 && this.getCell(row - 1, col + 1)) { ++count; } // top-right
		if (row < this.h - 1 && col > 0          && this.getCell(row + 1, col - 1)) { ++count; } // bottom-left
		if (row < this.h - 1 && col < this.w - 1 && this.getCell(row + 1, col + 1)) { ++count; } // bottom-right
		return count;
	}

	this.getNextStateOfCell = function(row, col) {
		var cellState = this.getCell(row, col);
		var neighbors = this.countNeighbors(row, col);
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

	this.clone = function() {
		var clone = new Board(this.w, this.h);
		for (var row = 0; row < this.h; ++row) {
			for (var col = 0; col < this.w; ++col) {
				clone.setCell(row, col, this.getCell(row, col));
			}
		}
		return clone;
	}

	this.toString = function() {
		var result = "";
		for (var row = 0; row < this.h; ++row) {
			for (var col = 0; col < this.w; ++col) {
				result += this.getCell(row, col) ? 'X' : '.';
			}
			result += "\n";
		}
	}

	this.fromString = function(string) {
		var stringRows = string.split(/\n/);
		for (var row = 0; row < this.h; ++row) {
			for (var col = 0; col < this.w; ++col) {
				var value = (stringRows[row] && stringRows[row][col] == 'X') ? 1 : 0
				this.setCell(row, col, value);
			}
		}
	}

	return this;
}

function Game(width, height) {

	this.board = new Board(width, height);
	this.jqBoard = jQuery('#board');

	// initialize the board html
	var boardHtml = "";
	for (var row = 0; row < height; ++row) {
		boardHtml += "<tr>";
		for (var col = 0; col < width; ++col) {
			boardHtml += "<td class='off' onclick='game.cellClicked("+row+", "+col+")'>&nbsp;</td>";
		}
		boardHtml += "</tr>";
	} 
	this.jqBoard.append(boardHtml);

	this.updateCellUI = function(row, col) {
		this.jqBoard.find('tr').eq(row).find('td').eq(col).attr(
			'class',
			this.board.getCell(row, col) ? 'on' : 'off'
		);
	}

	this.updateUI = function() {
		var jqRows = this.jqBoard.find('tr');
		for (var row = 0; row < this.board.h; ++row) {
			var jqCols = jqRows.eq(row).find('td');
			for (var col = 0; col < this.board.w; ++col) {
				jqCols.eq(col).attr('class', this.board.getCell(row, col) ? 'on' : 'off');
			}
		}
	}

	this.cellClicked = function(row, col) {
		this.board.toggleCell(row, col);
		this.updateCellUI(row, col);
	}

	this.step = function() {
		var nextBoard = this.board.clone();

		for (var row = 0; row < this.board.h; ++row) {
			for (var col = 0; col < this.board.w; ++col) {
				nextBoard.setCell(row, col, this.board.getNextStateOfCell(row, col));
			}
		}

		this.board = nextBoard;
		this.updateUI();
	}

	this.clearBoard = function() {
		for (var row = 0; row < this.board.h; ++row) {
			for (var col = 0; col < this.board.w; ++col) {
				this.board.setCell(row, col, 0);
			}
		}
		this.updateUI();
	}

	this.loadGliderGun = function() {
		var gliderGun =
			"..........................................\n" +
			"..........................................\n" +
			"..........................................\n" +
			"...........................X..............\n" +
			".........................X.X..............\n" +
			"...............XX......XX............XX...\n" +
			"..............X...X....XX............XX...\n" +
			"...XX........X.....X...XX.................\n" +
			"...XX........X...X.XX....X.X..............\n" +
			".............X.....X.......X..............\n" +
			"..............X...X.......................\n" +
			"...............XX.........................\n" +
			"..........................................\n";
		this.board.fromString(gliderGun);
		this.updateUI();
	}

	return this;
}

var game;
jQuery(document).ready(function() {
	game = new Game(45, 30);
});
