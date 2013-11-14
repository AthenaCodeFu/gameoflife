class Generation():
    def __init__(self, cells):
        self.cells = cells

    def ascii_art(self):
        art = ""
        for cell in self.cells:
            art += "X"
        return art
