import IEmployee from "./interfaces/iEmployee";

class Analyzer {
  constructor(public employees: IEmployee[]) {}

  getNumberOfEmployees(): number {
    return this.employees.length;
  }

  getGenderRepartition(): { nbGenderM: number; nbGenderF: number } {
    const getByGender = (gender: string) =>
      this.employees.filter((employee) => employee.gender === gender);

    const genderF = getByGender("f");
    const genderM = getByGender("m");
    return { nbGenderM: genderM.length, nbGenderF: genderF.length };
  }

  getTotalSalaries(): number {
    return this.employees.reduce(
      (salary: number, employee) => salary + employee.salary,
      0
    );
  }
}

export default Analyzer;
