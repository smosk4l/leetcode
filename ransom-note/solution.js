const canConstruct = function (ransomNote, magazine) {
  for (let letter of [...ransomNote]) {
    if (!magazine.includes(letter)) return false;
    else magazine = magazine.replace(letter, "");
  }
  return true;
};
