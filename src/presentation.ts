import Analyzer from "./analyzer";

function displayWelcomeMessage(message: string, companyName: string) {
  const dateObject = new Date();
  const todayDate = dateObject.toLocaleDateString();

  console.log(`${message} ${companyName} !`);

  console.log(
    `--------------------------Rapport du ${todayDate}--------------------------`
  );
}

function displayAnalytics(analyzer: Analyzer) {
  console.log("-> Nombre d'employés : " + analyzer.getNumberOfEmployees());

  const { nbGenderM, nbGenderF } = analyzer.getGenderRepartition();
  console.log(`-> Répartition : ${nbGenderF} femmes et ${nbGenderM} hommes `);

  console.log(`-> Total des salaires : ${analyzer.getTotalSalaries()}`);
}

export { displayWelcomeMessage, displayAnalytics };
