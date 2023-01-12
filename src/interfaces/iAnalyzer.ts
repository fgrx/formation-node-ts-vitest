import IEmployee from "./iEmployee";

interface IAnalyzer {
  employees: IEmployee[];
  getNumberOfEmployees(): number;
  getGenderRepartition(): { nbGenderM: number; nbGenderF: number };
  getTotalSalaries(): number;
}

export default IAnalyzer;
