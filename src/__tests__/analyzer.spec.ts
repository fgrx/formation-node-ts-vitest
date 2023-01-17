import Analyzer from "../analyzer";
import IEmployee from "../interfaces/iEmployee";
import { describe, expect, beforeEach, it } from "vitest";

const datas: IEmployee[] = [
  {
    id: "ALf96FV",
    firstname: "Léa",
    lastname: "Dumond",
    salary: 58000,
    job: "CEO",
    gender: "f",
  },
  {
    id: "PO5fdII",
    firstname: "Romain",
    lastname: "Santos",
    salary: 48000,
    job: "commercial",
    gender: "m",
  },
];

describe(">>>>>>>>>>analyzer class", () => {
  let analyzer: Analyzer;

  beforeEach(() => {
    analyzer = new Analyzer(datas);
  });

  it("should return total salaries", () => {
    const expected = 106000;

    const result = analyzer.getTotalSalaries();

    expect(result).toBe(expected);
  });

  it("should return number of gender female and gender male", () => {
    const expected = { nbGenderM: 1, nbGenderF: 1 };

    const result = analyzer.getGenderRepartition();

    expect(result).toStrictEqual(expected); //pour les objets
  });
});
