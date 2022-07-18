export function importImagesArray(regex) {
  let images = [];
  regex.keys().forEach((item) => {
    images.push({
      data: regex(item),
      name: item.replace("./", "").split(".")[0],
    });
  });
  return images;
}

export function importImagesObject(regex) {
  let images = {};
  regex.keys().forEach((item) => {
    images[item.replace("./", "").split(".")[0]] = regex(item);
  });
  return images;
}
