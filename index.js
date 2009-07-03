var field = new Field([[ 0, 0, 0, 0, 0 ],
                       [ 0, 3, 1, 1, 0 ],
                       [ 0, 1, 1, 1, 0 ],
                       [ 0, 1, 1, 2, 0 ]]);
field.bot = new Bot(Bot.right);

function left() {
  field.bot.direction -= Math.PI * 0.5;
}

function right() {
  field.bot.direction += Math.PI * 0.5;  
}

function move() {
  field.moveBot();
};

$(function() {
  right();
  field.draw();
});