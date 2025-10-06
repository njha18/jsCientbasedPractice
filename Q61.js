//write a function to merge two objects into one.
//what if objects has same key which one to take or both should be taken.
//what if its nested objected-const a = { info: { name: "Neha" } };
// const b = { info: { city: "Bengaluru" } }; for this ✅ It merges if keys are different.
// ❌ It overwrites if keys are the same.
// ❌ Shallow merge	{...a, ...b}	{ info: { city: "Bengaluru" } }
// ✅ Deep merge	{ info: { ...a.info, ...b.info } }	{ info: { name: "Neha", city: "Bengaluru" } }

//shallow merge
const a = { name: "Neha", age: 25 };
const b = { city: "Bengaluru", country: "India" };
const merge = { ...a, ...b };
console.log(merge);
//deep merge
const c = { info: { name: "Neha" } };
const d = { info: { city: "Bengaluru" } };
const merged = {
  info: {
    ...c.info,
    ...d.info,
  },
};
console.log(merged);
//in fn
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function deepMergeObjects(obj1, obj2) {
  return {
    info: {
      ...obj1.info,
      ...obj2.info,
    },
  };
}
