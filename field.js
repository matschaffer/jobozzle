var Field = function(map) {
  this.map = map;
};

$.extend(Field.prototype, CanvasHelpers, {
  block: function(x, y) {
    this.drawAt(x, y, function(c, size) {
      c.fillStyle = '#00f';
      c.fillRect(0, 0, size - 2, size - 2);
      c.fillStyle = '#22f';
      c.fillRect(1, 1, size - 4, size - 4);
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
          case 1:  self.block   (j, i); break;
          case 3:  self.goal    (j, i); break;
          case 2:  self.block   (j, i);
                   self.bot.draw(j, i); break;
          default: break;
        }
      });
    });
  }
});