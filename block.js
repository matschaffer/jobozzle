var Block = function(type) {
  this.color = Block[type];
  this.star = !!type.match(/[A-Z]/);
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
    var lighter = $.map(this.color, function(color) {
                    if (color == 255) {
                      return color;
                    } else {
                      return color + 80;
                    }
                  });
    return this.toRGB(lighter);
  },
  draw: function(c, size) {
    c.fillStyle = this.getColor();
    c.fillRect(0, 0, size - 2, size - 2);
    c.fillStyle = this.getLightColor();
    c.fillRect(2, 2, size - 6, size - 6);
  }
};