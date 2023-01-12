const message = "Rapports de l'entreprise";
const companyName = "companyName";

const dateObject = new Date();
const todayDate = dateObject.toLocaleDateString();

console.log(`${message} ${companyName} !`);

console.log(
  `--------------------------Rapport du ${todayDate}--------------------------`
);
