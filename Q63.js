//write a function to deep clone an object.
// Cloning an object means making a copy so that the new object:
// 1.Has the same keys and values as the original.
// 2.But is completely independent — changes to the new object do not affect the original.Shallow clone → copies only the top-level properties.

// Shallow clone → copies only the top-level properties.

// Nested objects are still references.
// Example:
// const obj = { info: { name: "Neha" } };
// const copy = { ...obj };
// copy.info.name = "Anita";
// console.log(obj.info.name); // "Anita" ❌ original changed
// //deep clone
// const obj1 = { info: { name: "Neha" } };
// const copy = deepClone(obj1);
// copy.info.name = "Anita";
// console.log(obj1.info.name); // "Neha" ✅ original stays same
// coding part
