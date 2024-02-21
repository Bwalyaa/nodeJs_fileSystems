import fs from "fs"

fs.writeFile("./blog1.txt", "Hallo Welt", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("ich habe eine datei geschrieben");
})

fs.writeFile("./blog1.txt", "Ich bin ein Webdeveloper", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("ich habe eine datei geschrieben");
})

fs.writeFile("./blog2.txt", "Manchester", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("ich habe eine datei geschrieben");
})

//neuen ordner erstellen
fs.mkdir("./assets", (err) => {
    if (err) {
        console.log(err);
        return;
    }
})





fs.writeFile("./delete.txt", "delete", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("ich habe eine datei geschrieben");
})

fs.writeFile("./HelloWorld.txt", "nike kappe umgekehrt", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("ich habe eine datei geschrieben");
})

//überprüfen ob eine datei/ordner existiert

fs.access("./delete.txt", fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Die Datei existiert nicht.');
    } else {
      console.log('Die Datei existiert.');
    }
  })