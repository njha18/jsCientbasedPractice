//check if string is a valid identifier in js
// Starting character rules

// ✅ Allowed characters (a-z, A-Z, 0-9, $, _)

// ✅ Rejecting reserved keywords like let, for, etc.
function validIdentifier(input) {
  let first = input[0];
  let remaining = input.slice(1);
  const reservedWords = new Set([
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "null",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
    "let",
    "static",
    "implements",
    "interface",
    "package",
    "private",
    "protected",
    "public",
  ]);

  if (reservedWords.has(input)) return false;

  function isDigit(ch) {
    return ch >= "0" && ch <= "9";
  }
  function isAlphabet(ch) {
    return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
  }
  if (!(isAlphabet(first) || first === "$" || first === "_")) return false;
  for (let i = 0; i < remaining.length; i++) {
    if (
      !(
        isAlphabet(remaining[i]) ||
        isDigit(remaining[i]) ||
        remaining[i] === "$" ||
        remaining[i] === "_"
      )
    )
      return false;
  }
  return true;
}
console.log(validIdentifier("let"));
