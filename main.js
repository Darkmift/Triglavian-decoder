var cl = console.log.bind(console);

function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}
// cl(genCharArray('a', 'z'));
var ABC = genCharArray('a', 'z');

ABC.forEach((element) => {
  cl('element: ', element);
  let list = document.getElementsByTagName("ol")[0];
  // cl('ol: ', list1);
  //create li container
  var letter = document.createElement("li");
  //text nodes
  var node = document.createTextNode(element.toUpperCase() + ',' + element);
  var node1 = document.createTextNode(element.toUpperCase() + ',' + element);
  var dash = document.createTextNode(" | ");
  //normal span ABC
  var spanNormal = document.createElement("span");
  spanNormal.classList.add("normal");
  //Triglavian span ABC
  var spanTriglavian = document.createElement("span");
  spanTriglavian.classList.add("triglavian");

  spanNormal.appendChild(node1);
  spanNormal.appendChild(dash);
  letter.appendChild(spanNormal);

  spanTriglavian.appendChild(node);
  letter.appendChild(spanTriglavian);
  list.appendChild(letter);
});