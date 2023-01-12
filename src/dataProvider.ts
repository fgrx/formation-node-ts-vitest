import fs from "fs";

function getFilesInFolder(folder: string): string[] {
  try {
    const files = fs.readdirSync(`./${folder}`);
    return files;
  } catch (error) {
    console.error("Erreur : pas de dossier trouvé", error);
    return [];
  }
}

function getFilesContentInJson<T>(folder: string, files: string[]): T[] {
  const items: T[] = [];

  files.forEach((file) => {
    const path = completeFilePath(folder, file);

    try {
      const content = fs.readFileSync(path, "utf8");
      const contentInJSON = JSON.parse(content) as T;
      items.push(contentInJSON);
    } catch (error) {
      console.error(`${path} : Problème avec le fichier`, error);
    }
  });
  return items;
}

function getDataFromFolder<T>(folder: string): T[] {
  const files = getFilesInFolder(folder);
  const data = getFilesContentInJson<T>(folder, files);
  return data;
}

const completeFilePath = (folder: string, file: string) =>
  `./${folder}/${file}`;

export { getDataFromFolder };
