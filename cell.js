class cell {
  constructor(x, y, w) {
    this.width = w;
    this.x = x * w / 3;
    this.y = y * w / 3;
    this.contents = null;
  }

  draw() {
    rect(this.x, this.y, this.width / 3);
    if (this.contents != null) {
      textSize(this.width / 3);
      textAlign(CENTER, CENTER);
      text(this.contents, this.x + this.width / 6, this.y + this.width / 6);
    }
  }

  click() {
    if (mouseX >= this.x && mouseX < this.x + this.width / 3 && mouseY >= this.y && mouseY < this.y + this.width / 3) {
      if (this.contents == null) {
        this.contents = currentPlayer;
        if (currentPlayer == 'x') {
          currentPlayer = 'o';
        } else {
          currentPlayer = 'x';
        }
      }
    }
  }

}