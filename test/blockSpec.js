Screw.Unit(function() {
  describe("A block", function() {
    it("should contain a star if created using an uppercase color type", function() {
      var star = new Block("R"), noStar = new Block("r");
      expect(star.star).to(equal, true);
      expect(noStar.star).to(equal, false);
    });
  });
});