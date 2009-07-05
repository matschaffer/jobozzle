var Bot = function(field, direction) {
  this.field = field;
  this.direction = direction;
};

Bot.right = 0;
Bot.left  = Math.PI;
Bot.up    = Math.PI*1.5;
Bot.down  = Math.PI*0.5;

$.extend(Bot.prototype, CanvasHelper, {
  move: function() {
    var newY = this.position.y + Math.floor(Math.sin(this.direction));
    var newX = this.position.x + Math.floor(Math.cos(this.direction));
    if (this.field.map[newY][newX]) {
      this.field.map[newY][newX] += 1;
      this.field.map[this.position.y][this.position.x] -= 1;
    }
  },
  draw: function(x, y) {
    this.position = {x:x, y:y};
    var direction = this.direction;
    this.drawAt(x, y, function(c, blockSize) {
      size = blockSize - 20;
      c.translate(blockSize / 2, blockSize / 2);
      c.rotate(direction);
      c.fillStyle = '#e00';
      $.each([1, -1], function() {
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(size, 0);
        c.lineTo(-(size * 0.7), this * (size * 0.7));
        c.lineTo(-(size * 0.3), 0);
        c.closePath();
        c.fill();
      });
    });
  }
});