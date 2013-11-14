class Generation():
    def __init__(self, cells):
        self.cells = cells

    def gen_grid(self):
        minx = 1000;
        miny = 1000;
        maxx = -1000;
        maxy = -1000;
        for cell in self.cells:
            if (cell[0] < minx):
                minx = cell[0]
            if (cell[1] < miny):
                miny = cell[1]
            if (cell[0] > maxx):
                maxx = cell[0]
            if (cell[1] > maxy):
                maxy = cell[1]

    def ascii_art(self):
        art = ""
        minx 
        maxx 
        miny
        maxy
        for 
        for
        for cell in self.cells:
            art += "X"
        return art
