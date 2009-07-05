var Field = function(map) {
  this.map = this.parse(map);
};

$.extend(Field.prototype, CanvasHelper, {
  parse: function(initialMap) {
    return $.map(initialMap, function(row, y) {
             return [$.map(row, function(cell, x) {
               return new Block(cell);
             })];
           });
  },
  location: function(x, y) {
    return this.map[y][x];
  },
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
    $.each(this.map, function(y, row) {
      $.each(row, function(x, block) {
        self.drawAt(x, y, function(c) { block.draw(c); });
      });
    });
  }
});