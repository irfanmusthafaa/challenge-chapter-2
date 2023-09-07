const changeWord = (selectedText, changedText, text) => {
  return text.replaceAll(selectedText, changedText);
};

console.log(changeWord("apple", "banana", "i like apple"));
