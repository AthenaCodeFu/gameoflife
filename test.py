import unittest
import gameoflife

class DisplayTestCase(unittest.TestCase):
    def test_empty_generation(self):
        generation = gameoflife.Generation([])
        self.assertEqual("   \n", generation.ascii_art())

    def test_one_cell(self):
        generation = gameoflife.Generation([(0, 0)])
        self.assertEqual("X\n", generation.ascii_art())
    
    def tenbyten(self):
        pass

        
    def test_two_cells_with_space(self):
        generation = gameoflife.Generation([(0, 0), (2, 0)])
        self.assertEqual("X X\n", generation.ascii_art())

if __name__ == '__main__':
    unittest.main()
