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

    it("should return information about the ability to move to a given location", function() {
      var field = new Field([" b "]);
      expect(field.isValidLocation(1, 0)).to(equal, true);
      expect(field.isValidLocation(0, 0)).to(equal, false);
    });

    it("should know if any stars are present", function() {
      var fieldWithStars = new Field(["rGBr "]);
      var fieldWithoutStars = new Field(["rgbr "]);
      expect(fieldWithStars.hasStars()).to(equal, true);
      expect(fieldWithoutStars.hasStars()).to(equal, false);
    })
  });
});