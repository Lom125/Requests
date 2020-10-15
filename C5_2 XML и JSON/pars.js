
// Задан XML
const parse = new DOMParser();

const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`
let listAttr = [];
let objTemp = {};

const xmlDOM = parse.parseFromString(xmlString, 'text/xml');
const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelectorAll('student');
let nameNode, firstNode, secondNode, langAttr, ageNode, profNode;

for (let student of studentNode) {
	nameNode = student.querySelector('name');
	firstNode = nameNode.querySelector('first');
	secondNode = nameNode.querySelector('second');
	langAttr = nameNode.getAttribute('lang');
	ageNode = student.querySelector('age');
	profNode = student.querySelector('prof');
	objTemp.name = firstNode.textContent + " " + secondNode.textContent;
	objTemp.age = +ageNode.textContent;
	objTemp.prof = profNode.textContent;
	objTemp.lang = langAttr;
	listAttr.push(objTemp);
	objTemp = {};
}

const resultXML = {list: listAttr};
console.log(resultXML);

// Задан JSON

const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`

const data = JSON.parse(jsonString);
const list = data.list;

let listAttr2 = [];
// let objTemp = {};

for (let member of list) {
	member.age = +member.age;
	listAttr2.push(member);
	// objTemp = {};
	}

const resultJSON = {list: listAttr2};

console.log(resultJSON);
