var field = new Field([[ 0, 0, 0, 0, 0 ],
                       [ 0, 2, 1, 1, 0 ],
                       [ 0, 1, 1, 1, 0 ],
                       [ 0, 1, 1, 3, 0 ]]);
field.bot = new Bot(field, Bot.right);

function left() {
  field.bot.direction -= Math.PI * 0.5;
  field.draw();
}

function right() {
  field.bot.direction += Math.PI * 0.5;  
  field.draw();
}

function move() {
  field.bot.move();
  field.draw();
};

$(function() {
  right();
  move();
  move();
  left();
  move();
});