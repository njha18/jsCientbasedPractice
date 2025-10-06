//check one string is a rotation of other abc -cab
//You move characters from the beginning to the end, in the same order, and the string still makes sense as a "rearranged" version of the original.
function rotation(str, check) {
  return (str + str).includes(check);
}
console.log(rotation("abc", "cab"));

//If string B is a rotation of string A, then:
// B must be a substring of A + A
