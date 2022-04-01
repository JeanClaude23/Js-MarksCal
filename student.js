let examGrade = function (total, exam) {
  if (exam && total > 90) {
    return true;
  } else if (total >= 89 && total <= 100) {
    return true;
  } else {
    return false;
  }
};

console.log(examGrade(89, " "));
console.log(examGrade(92, "true "));
console.log(examGrade(93, "true "));
