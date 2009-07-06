var Block = function(type) {
  this.color = Block[type];
  this.star = Boolean(type.match(/[A-Z]/));
};

Block.red   = Block.r = Block.R = [255, 0, 0];
Block.green = Block.g = Block.G = [0, 255, 0];
Block.blue  = Block.b = Block.B = [0, 0, 255];

Block.prototype = {
  toRGB: function(colorArray) {
    return 'rgb(' + colorArray.join(', ') + ')';
  },
  getColor: function() {
    return this.toRGB(this.color);
  },
  getLightColor: function() {
    return this.toRGB($.map(this.color, function(color) {
                        return color || color + 80;
                      }));
  },
  drawBlock: function(c, size) {
    var mainSize = size; highlightSize = mainSize - 4;
    c.fillStyle = this.getColor();
    c.fillRect(0, 0, mainSize, mainSize);
    c.fillStyle = this.getLightColor();
    c.fillRect(2, 2, highlightSize, highlightSize);
  },
  drawStar: function(c, size) {
    var rotation = (Math.PI * 2) / 10;
    var outerSize = (size - 12) / 2;
    var innerSize = outerSize - 5;

    c.fillStyle = '#fff';
    c.translate(size / 2, size / 2);
    c.beginPath();
    c.moveTo(outerSize, 0);
    for(i = 0; i < 10; i++) {
      c.rotate(rotation);
      c.lineTo((i % 2)?outerSize:innerSize, 0);
    }
    c.fill();
  },
  draw: function(c, size) {
    this.drawBlock(c, size);
    if (this.star) this.drawStar(c, size - 2);
  }
};