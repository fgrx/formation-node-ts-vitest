import { getDataFromFolder } from "./dataProvider";
import * as dotenv from "dotenv";
import Analyzer from "./analyzer";
import { displayAnalytics, displayWelcomeMessage } from "./presentation";

dotenv.config();

const folder = process.env.FOLDER || "default";
const company = process.env.COMPANY || "Company";

displayWelcomeMessage("Rapport de la société", company);

const data = getDataFromFolder(folder);

const analyzer = new Analyzer(data);

displayAnalytics(analyzer);
