var field = new Field(["     ",
                       " bRbb ",
                       " bBbb ",
                       " bbGb ",
                       " rrRb "]);
var bot = new Bot(Bot.right);
field.place(bot, 3, 3);

function left() {
  bot.left();
  field.draw();
}

function right() {
  bot.right();
  field.draw();
}

function move() {
  bot.move();
  field.draw();
};

$(function() {
  field.draw();
});