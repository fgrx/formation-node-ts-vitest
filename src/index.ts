import { getFilesContentInJson, getFilesInFolder } from "./dataProvider";
import displayWelcomeMessage from "./presentation";

displayWelcomeMessage("Rapport de la société", "Ma petite boite de dev");

const folder = "employees";

const files = getFilesInFolder(folder);
const content = getFilesContentInJson(folder, files);

console.log(content);
