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

export { getFilesInFolder };
