export function importImages(regex) {
  let images = [];
  regex.keys().forEach((item) => {
    images.push({
      data: regex(item),
      name: item.replace("./", "").split(".")[0],
    });
  });
  return images;
}
