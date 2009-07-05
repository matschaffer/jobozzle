var Block = function(type) {
  this.color = Block[type];
};

Block.red   = Block.r = Block.R = '#f00';
Block.green = Block.g = Block.G = '#0f0';
Block.blue  = Block.b = Block.B = '#00f';

Block.prototype = {
  draw: function(c) {
    c.fillStyle = this.color;
    c.fillRect(0, 0, 30 - 2, 30 - 2);
    // c.fillRect(1, 1, size - 4, size - 4);
  }
}