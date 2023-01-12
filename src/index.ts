import { getFilesContentInJson, getFilesInFolder } from "./dataProvider";
import displayWelcomeMessage from "./presentation";
import * as dotenv from "dotenv";
import Analyzer from "./analyzer";

dotenv.config();

const folder = process.env.FOLDER || "default";
const company = process.env.COMPANY || "Company";

displayWelcomeMessage("Rapport de la société", company);

const files = getFilesInFolder(folder);
const data = getFilesContentInJson(folder, files);

const analyzer = new Analyzer(data);
console.log(`-> Nombre d'employés :  ${analyzer.getNumberOfEmployees()}`);
const { nbGenderM, nbGenderF } = analyzer.getGenderRepartition();
console.log(`-> Répartition : ${nbGenderF} femmes et ${nbGenderM} hommes `);

console.log(`-> Total des salaires : ${analyzer.getTotalSalaries()}`);
