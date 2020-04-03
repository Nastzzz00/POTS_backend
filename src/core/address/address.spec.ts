import { makeAddress } from "./";

describe("Address", () => {
  it("must have a building", () => {
    //givens
    const addressInput = {
      building_name: "",
      street: "street",
      city: "city",
      state: "state",
      zip_code: "123"
    };
    expect(() => makeAddress(addressInput)).toThrow("Building is required.");
  });
  it("must have a city", () => {
    //givens
    const addressInput = {
      building_name: "building",
      street: "street",
      city: "",
      state: "state",
      zip_code: "123"
    };
    expect(() => makeAddress(addressInput)).toThrow("City is required.");
  });

  it("must have a street", () => {
    //givens
    const addressInput = {
      building_name: "building",
      street: "",
      city: "city",
      state: "state",
      zip_code: "123"
    };
    expect(() => makeAddress(addressInput)).toThrow("Street is required.");
  });

  it("must have a state", () => {
    //givens
    const addressInput = {
      building_name: "building",
      street: "street",
      city: "city",
      state: "",
      zip_code: "123"
    };
    expect(() => makeAddress(addressInput)).toThrow("State is required.");
  });

  it("must have a zip_code", () => {
    //givens
    const addressInput = {
      building_name: "building",
      street: "street",
      city: "city",
      state: "state",
      zip_code: ""
    };
    expect(() => makeAddress(addressInput)).toThrow("zip_code is required.");
  });

  it("will return the address", () => {
    //givens
    const addressInput = {
      building_name: "building",
      street: "street",
      city: "city",
      state: "state",
      zip_code: "123"
    };
    const a = makeAddress(addressInput);
    expect(a).toMatchObject(addressInput);
  });
});
