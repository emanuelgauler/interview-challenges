import { expect, describe, it } from "bun:test";

import esIsograma from ".";

describe("esIsograma", () => {
  it("debería devolver true si es un isograma", () => {
    expect(esIsograma("gato")).toBe(true);
  });

  it("debería ignorar acentos", () => {
    expect(esIsograma("Murciélago")).toBe(true);
  });

  [{
     word: "Casa", expected: false
  }, {
     word: "PeRrO", expected: false
  }, {
     word: "GaTo", expected: true
  }].forEach(({ word, expected }) => {
     describe(`con ${word}`, () => {
	it("debería ignorar mayúsculas", () => {
	   expect(esIsograma(word)).toBe(expected);
	});
     })
  });
});
