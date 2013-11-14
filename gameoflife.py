class Generation():
    def __init__(self, cells):
        self.cells = cells
        self.grid = []
        for x in range(1):
            self.grid.append([])
            for y in range(3):
                self.grid[x].append(False)

        
#    def gen_grid(self):
#        minx = 1000;
#        miny = 1000;
#        maxx = -1000;
#        maxy = -1000;
#        for cell in self.cells:
#            if (cell[0] < minx):
#                minx = cell[0]
#            if (cell[1] < miny):
#                miny = cell[1]
#            if (cell[0] > maxx):
#                maxx = cell[0]
#            if (cell[1] > maxy):
#                maxy = cell[1]
#
#        grid = []
#        for x in range(minx, maxx + 1)
#            for y in range(miny, maxy + 1)
#                grid[x][y] = false;
#


    def ascii_art(self):
        art = ""
        for row in self.grid:
            for y in row:
                if row[y]:
                    art += 'X'
                else:
                    art += ' '
            
            art += "\n"
        return art
