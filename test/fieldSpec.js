Screw.Unit(function() {
  describe("A field", function() {
    it("should parse it's map from a set of strings", function() {
      var field = new Field(["     ",
                             " bbr ",
                             " bbg "]);
      expect(field.location(1,1).color).to(equal, Block.blue);
      expect(field.location(3,1).color).to(equal, Block.red);
      expect(field.location(3,2).color).to(equal, Block.green);
    });
  });
});