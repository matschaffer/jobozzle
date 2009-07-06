var Field = function(map) {
  this.map = this.parse(map);
};

$.extend(Field.prototype, CanvasHelper, {
  parse: function(initialMap) {
    return $.map(initialMap, function(row, y) {
             return [$.map(row, function(cell, x) {
               return (cell == ' ') ? false : new Block(cell);
             })];
           });
  },
  isValidLocation: function(x, y) {
    return (this.location(x, y) instanceof Block);
  },
  location: function(x, y) {
    return this.map[y][x];
  },
  hasStars: function() {
    var hasStars = false;
    $.each(this.map, function(y, row) {
      $.each(row, function(x, block) {
        if (block.star) {
          hasStars = true;
          return false; //break
        }
      });
      if (hasStars) return false; //break
    });
    return hasStars;
  },
  draw: function() {
    var self = this;
    $.each(this.map, function(y, row) {
      $.each(row, function(x, block) {
        if (block) self.drawAt(x, y, function(c, size) { block.draw(c, size); });
      });
    });
  }
});