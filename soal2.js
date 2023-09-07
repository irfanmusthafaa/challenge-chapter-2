const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber != "number") {
    return "Error: Invalid data type";
  } else if (givenNumber % 2 == 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
};

console.log(checkTypeNumber(2));
