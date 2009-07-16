Screw.Unit(function() {
  describe("A bot", function() {
    it("should change direction when turning", function() {
      var bot = new Bot(Bot.right);
      expect(bot.direction).to(equal, Bot.right);
      bot.right();
      expect(bot.direction).to(equal, Bot.down);
      bot.left();
      expect(bot.direction).to(equal, Bot.right);
    });

    describe("when moving", function() {
      var bot = new Bot(Bot.right), mockField = {}, oldLocation = {}, newLocation = {};

      before(function() {
        Screw.Stub.shouldReceive(mockField, 'location').withArguments(0, 0).andReturn(oldLocation);
        Screw.Stub.shouldReceive(mockField, 'location').withArguments(1, 0).andReturn(newLocation);
        bot.field = mockField;
        bot.setPosition(0, 0);
      });

      it("should move in the anticipated direction", function() {
        bot.move();
        expect(bot.position).to(equal, {x:1,y:0});
      });

      it("should collect any stars in the new location", function() {
        newLocation.star = true;
        bot.move();
        expect(newLocation.star).to(be_null);
      });

      it("should remove itself from the old location and add itself to the new location", function() {
        oldLocation.bot = bot;
        bot.move();
        expect(newLocation.bot).to(equal, bot);
        expect(oldLocation.bot).to(be_null);
      });
    });
  });
});