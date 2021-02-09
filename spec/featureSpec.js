describe("featureTest", () => {
  var plane;
  var plane2;
  var airport;

  beforeEach(() => {
    plane = new Plane("plane");
    plane2 = new Plane("plane2");
    plane3 = new Plane("plane3");
    airport = new Airport();
  });

  it("planes can be instructed to land at an airport", () => {
    plane.land(airport);
    expect(airport.planes()).toContain(plane.name);
  });

  it("planes can be instructed to takeoff at an airport", () => {
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane.name);
  });

  it("multiple planes can land at the airport", () => {
    plane.land(airport);
    plane2.land(airport);
    expect(airport.planes().length).toEqual(2);
  });

  it("one plane can take off when there are multiple at the airport", () => {
    plane.land(airport);
    plane2.land(airport);
		plane3.land(airport);
    plane2.takeoff(airport);
    expect(airport.planes().length).toEqual(2);
    expect(airport.planes()).not.toContain(plane2.name);
    expect(airport.planes()).toContain(plane.name);
		expect(airport.planes()).toEqual(["plane", "plane3"])
  });
});
