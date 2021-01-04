class grid {
  constructor(w) {
    this.cells = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.cells.push(new cell(i, j, w));
      }
    }
    this.cellWidth = w;
  }

  draw() {
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i].draw();
    }
  }

  click() {
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i].click();
    }
    print(str(this.checkWin()));
  }

  checkWin() {
    for (let i = 0; i < 3; i++) { //Check rows
      if (this.cells[3 * i].contents != null && this.cells[3 * i].contents == this.cells[3 * i + 1].contents && this.cells[3 * i + 1].contents == this.cells[3 * i + 2].contents) {
        return true;
      }
    }
    for (let i = 0; i < 3; i++) { //Check columns
      if (this.cells[i].contents != null && this.cells[i].contents == this.cells[3 + i].contents && this.cells[3 + i].contents == this.cells[6 + i].contents) {
        return true;
      }
    }
    //Check downward diagonal
    if (this.cells[0].contents != null && this.cells[0].contents == this.cells[4].contents && this.cells[4].contents == this.cells[8].contents) {
      return true;
    }
    //Check upward diagonal
    if (this.cells[6].contents != null && this.cells[6].contents == this.cells[4].contents && this.cells[4].contents == this.cells[2].contents) {
      return true;
    }

    return false;
  }
}