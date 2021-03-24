function addBorder(picture) {
  row = picture.length;
  col = picture[0].length;
  star = "*";
  tops = star.repeat(col);

  picture.unshift(tops);
  picture.push(tops);

  picture = picture.map((str) => (str = star + str + star));

  return picture;
}
let picture = ["abc", "ded"];

console.log(addBorder(picture));
