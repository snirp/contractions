import decontract from ".";

test("Empty string", () => {
  expect(decontract("")).toEqual("");
});

test("Word boundaries", () => {
  expect(decontract("gonnaaaa")).toEqual("gonnaaaa");
});

test("Decontract", () => {
  expect(decontract("you'll")).toEqual("you will");
});

test("Word boundaries", () => {
  expect(decontract("-he's.")).toEqual("-he is.");
});

test("Respresentative sentence", () => {
  expect(decontract("Btw, I've gotta run, we're late. Thx.")).toEqual(
    "by the way, I have got to run, we are late. thanks."
  );
});
