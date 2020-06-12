function filterPersonsByAge(personList, age) {
  const filteredPersonList = [];
  for (let person of personList) {
    if (person.age > age) {
      filteredPersonList.push(person);
    }
  }
  return filteredPersonList;
}

// eks: search = 'e'
function filterByNameSearch(personList, searchText) {
  const filteredPersonList = [];
  for (let person of personList) {
    const name = person.name.toLowerCase();
    const search = searchText.toLowerCase();
    if (name.includes(search)) {
      filteredPersonList.push(person);
    }
  }
  return filteredPersonList;
}
