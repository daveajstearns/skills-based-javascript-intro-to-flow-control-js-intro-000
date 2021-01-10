function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return console.log("You are a teenager!");
  };
};

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return console.log("You are a teenager!");
  }
  else {
    return console.log("You are not a teenager");
  }
};

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return console.log("You are a teenager!");
  }
  elseif (age < 13) {
    return console.log("You are a kid.");
  }
  elseif (age > 19) {
    return console.log("You are a grownup");
  }
};

function ternaryTeenager(age) {
  (age >= 13 && age <= 19) ? console.log("You are a teenager") : console.log("You are not a teenager")
};

function switchAge(age) {
  switch (age) {
    case (age >= 13 && age <= 19):
      return console.log("You are a teenager")
    default:
      return console.log("You have an age")
  }
};
