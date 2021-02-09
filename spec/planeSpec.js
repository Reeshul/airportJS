describe("Plane", () => {
  var plane;
	var airport;

  beforeEach(() => {
    plane = new Plane();
		airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });

  it("is an instance of plane", () => {
    expect(plane).toBeInstanceOf(Plane);
  });

  it("can land at an airport", () => {
		plane.land(airport)
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

});
