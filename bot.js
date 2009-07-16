var Bot = function(direction) {
  this.direction = direction;
};

Bot.right = 0;
Bot.left  = Math.PI;
Bot.up    = Math.PI*1.5;
Bot.down  = Math.PI*0.5;

$.extend(Bot.prototype, CanvasHelper, {
  setPosition: function(x, y) {
    this.position = {x:x,y:y};
  },
  left: function() {
    this.direction -= Math.PI * 0.5;
  },
  right: function() {
    this.direction += Math.PI * 0.5;
  },
  move: function() {
    var currentLocation = this.field.location(this.position.x, this.position.y);
    var newY = this.position.y + Math.floor(Math.sin(this.direction));
    var newX = this.position.x + Math.floor(Math.cos(this.direction));
    var newLocation = this.field.location(newX, newY);
    if (newLocation) {
      this.position = {x:newX, y:newY};
      newLocation.bot = this;
      currentLocation.bot = null;
      newLocation.star = null;
    }
  },
  draw: function(c) {
    var self = this;
    var size = this.blockSize - 20;
    this.protect(function() {
      c.translate(self.blockSize / 2, self.blockSize / 2);
      c.rotate(self.direction);
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