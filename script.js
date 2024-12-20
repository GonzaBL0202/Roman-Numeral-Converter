const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output-text");
const outputContainer = document.getElementById("output");

const values = [
  { num: 1, rom: "I" },
  { num: 4, rom: "IV" },
  { num: 5, rom: "V" },
  { num: 9, rom: "IX" },
  { num: 10, rom: "X" },
  { num: 40, rom: "XL" },
  { num: 50, rom: "L" },
  { num: 90, rom: "XC" },
  { num: 100, rom: "C" },
  { num: 400, rom: "CD" },
  { num: 500, rom: "D" },
  { num: 900, rom: "CM" },
  { num: 1000, rom: "M" },
];

// Validate and process user input
const checkUserInput = () => {
  const number = Number(input.value.trim()); // Trim whitespace and convert to number

   if (!number) {
    // If the input is empty
    output.textContent = "Please enter a valid number.";
   } else if (isNaN(number)) {
    output.textContent = "Please enter a valid number.";
  } else if (number < 1) {
    output.textContent = "Please enter a number greater than or equal to 1.";
  } else if (number > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999.";
  } else {
    output.textContent = arabicToRoman(number);
  }
  outputContainer.classList.remove("hidden");
};

// Convert Arabic number to Roman numeral
function arabicToRoman(input) {
  let result = "";
  let number = input;

  // Reverse values array for descending order
  const reversedValues = [...values].reverse();

  reversedValues.forEach(({ num, rom }) => {
    while (number >= num) {
      result += rom;
      number -= num;
    }
  });

  return result;
}

// Attach event listeners
convertBtn.addEventListener("click", checkUserInput);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
