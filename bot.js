var Bot = function(direction) {
  this.direction = direction;
};

Bot.right = 0;
Bot.left  = Math.PI;
Bot.up    = Math.PI*1.5;
Bot.down  = Math.PI*0.5;

$.extend(Bot.prototype, CanvasHelpers, {
  draw: function(x, y) {
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