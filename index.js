$(function() {
  var bot = new Bot(Bot.right);
  var field = new Field(bot, [[ 0, 0, 0, 0, 0 ],
                              [ 0, 3, 1, 1, 0 ],
                              [ 0, 1, 1, 1, 0 ],
                              [ 0, 1, 1, 2, 0 ]]);
  field.draw();
});