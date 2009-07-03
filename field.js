var Field = function(bot, map) {
  this.c = $('canvas')[0].getContext('2d');
  this.map = map;
  this.botObj = bot;
};

Field.prototype = {
  protect: function(fn) {
    this.c.save();
    fn(this.c);
    this.c.restore();
  },
  blockSize: 30,
  drawAt: function(x, y, contents) {
    var size = this.blockSize;
    this.protect(function(c) {
      c.translate(x * size, y * size);
      contents(c, size);
    });
  },
  block: function(x, y) {
    this.drawAt(x, y, function(c, size) {
      c.fillStyle = '#00f';
      c.fillRect(0, 0, size - 2, size - 2);
      c.fillStyle = '#22f';
      c.fillRect(1, 1, size - 4, size - 4);
    });
  },
  bot: function(x, y) {
    this.drawAt(x, y, function(c, blockSize) {
      size = blockSize - 20;
      c.translate(blockSize / 2, blockSize / 2);
      c.fillStyle = '#f00';
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
  },
  goal: function(x, y) {
    this.drawAt(x, y, function(c, size) {
      c.fillStyle = '#0f0';
      c.fillRect(0, 0, size - 2, size - 2);
      c.fillStyle = '#2f2';
      c.fillRect(1, 1, size - 4, size - 4);        
    });
  },
  draw: function() {
    var self = this;
    $.each(this.map, function(i, row) {
      $.each(row, function(j, cell) {
        switch(cell) {
          case 0: break;
          case 1:  self.block(j, i); break;
          case 2:  self.goal (j, i); break;
          case 3:  self.block(j, i);
                   self.bot  (j, i); break;
          default: break;
        }
      });
    });
  }
};