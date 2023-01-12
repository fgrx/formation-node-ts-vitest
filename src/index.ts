import { getFilesInFolder } from "./dataProvider";
import displayWelcomeMessage from "./presentation";

displayWelcomeMessage("Rapport de la société", "Ma petite boite de dev");

getFilesInFolder("employees");
