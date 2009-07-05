var CanvasHelper = {
  blockSize: 30,
  drawAt: function(x, y, contents) {
    var size = this.blockSize;
    this.protect(function(c) {
      c.translate(x * size, y * size);
      contents(c, size);
    });
  },
  c: function() {
    return $('canvas')[0].getContext('2d');
  },
  protect: function(fn) {
    this.c().save();
    fn(this.c());
    this.c().restore();
  }
};