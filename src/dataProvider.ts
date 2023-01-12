import fs from "fs";

function getFilesInFolder(folder: string): string[] {
  try {
    const files = fs.readdirSync(`./${folder}`);
    console.log(files);
    return files;
  } catch (error) {
    console.error("Erreur : pas de dossier trouvé", error);
    return [];
  }
}

function getFilesContentInJson(folder: string, files: string[]): [] {
  const items: [] = [];

  files.forEach((file) => {
    const path = completeFilePath(folder, file);

    try {
      const content = fs.readFileSync(path, "utf8");
      const contentInJSON = JSON.parse(content);
      items.push(contentInJSON);
    } catch (error) {
      console.error(`${path} : Problème avec le fichier`, error);
    }
  });
  return items;
}

const completeFilePath = (folder: string, file: string) =>
  `./${folder}/${file}`;

export { getFilesInFolder, getFilesContentInJson };
