// Iteration 1: Names and Input

const hacker1 = "Soumia";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Joao";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals

if (hacker1 > hacker2) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2 > hacker1) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops

for (let letters of hacker1) {
  console.log(letters.toUpperCase());
}

for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
}

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis massa lacinia, rutrum arcu nec, tempor lectus. Vestibulum ex velit, euismod ut erat eget, vulputate sodales dui. Aliquam id risus a enim vestibulum rutrum eget vel nisl. Morbi gravida leo quis gravida vehicula. Vivamus ullamcorper leo mi, ut egestas elit porttitor lobortis. Etiam ullamcorper facilisis justo, eu luctus felis pellentesque ut. Pellentesque sed scelerisque augue, in fringilla dui.

Morbi fermentum rutrum sollicitudin. Pellentesque lobortis orci libero, eu congue purus mattis vel. Suspendisse ornare rhoncus dolor, eu ornare arcu varius at. Sed ut enim vel augue posuere feugiat mattis in sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent in turpis augue. Cras consectetur dapibus augue, sed semper neque sagittis non. Fusce facilisis sed justo nec efficitur. Donec egestas ligula bibendum rutrum hendrerit. Quisque semper vulputate commodo. Cras aliquam ullamcorper lorem, finibus malesuada quam hendrerit eu. Duis imperdiet pharetra porttitor.

Donec vitae elit vitae eros scelerisque porta. Nulla molestie lacinia quam et luctus. Vestibulum ultricies malesuada arcu, finibus ullamcorper ex pellentesque eu. Aliquam quis nunc ut ex dignissim vulputate et vel velit. Nulla luctus a neque id porta. Integer tempor mi ac libero finibus, eu viverra felis maximus. Nam non elit neque. Praesent non orci sit amet magna volutpat sollicitudin. Nunc sollicitudin neque ut dui hendrerit pellentesque. Sed porttitor porttitor tortor, id faucibus nisl finibus nec. Mauris quam urna, blandit eget porttitor dignissim, placerat sed mauris.`;

console.log(longText.length);

let countEt = 0;
let splittedText = longText.split(" ");
for (let i = 0; i < splittedText.length; i++) {
  if (splittedText[i] === "et" || splittedText[i] === "et.") {
    countEt++;
    console.log(countEt);
  }
}

//Bonus 2

let phraseToCheck = "Was it a car or a cat I saw?";
phraseToCheck = phraseToCheck.replace(/[ ?]/g, "").toLowerCase();
console.log(phraseToCheck);

let reversedPhrase = phraseToCheck.split("").reverse().join("");

if (phraseToCheck === reversedPhrase) {
  console.log("Yup, that´s a palindrome!");
} else console.log("Nah, that´s not a palindrome.");
