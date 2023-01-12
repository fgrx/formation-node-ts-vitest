function displayWelcomeMessage(message: string, companyName: string) {
  const dateObject = new Date();
  const todayDate = dateObject.toLocaleDateString();

  console.log(`${message} ${companyName} !`);

  console.log(
    `--------------------------Rapport du ${todayDate}--------------------------`
  );
}

export default displayWelcomeMessage;
