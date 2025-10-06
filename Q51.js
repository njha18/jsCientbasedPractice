//write a function to sort an array of objects by a specific key
//const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 }
// ]; output - if key is age then it should sort array on the bais of key else age
const people = [
  { name: "Alice", age: 30 },
  { name: "Cob", age: 25 },
  { name: "bharlie", age: 35 },
];
function sortByKey(arr, key) {
  return [...arr].sort((a, b) => {
    const valA = a[key];
    const valB = b[key];
    if (typeof valA === "number" && typeof valB === "number") {
      return valA - valB;
    }
    return String(valA).localeCompare(String(valB));
  });
}
console.log(sortByKey(people, "age"));
