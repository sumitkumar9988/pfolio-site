const fs = require("fs");
const snap = require("red-snapper");
snap({
  url: "https://stefivanov.com/",
  fullPage: true,
  // width: 1280,
  // height: 2000,
  delay: 2000,
  format: "png",
})
  .then((data) => {
    fs.writeFileSync("screenshot.png", Buffer.from(data, "base64"));
  })
  .catch((error) => {
    console.error(error);
  });
