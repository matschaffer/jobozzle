var field = new Field(["     ",
                       " bbb ",
                       " bbb ",
                       " bbg "]);
                       
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