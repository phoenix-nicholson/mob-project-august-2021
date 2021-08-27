// import functions
const nounOneInput = document.getElementById('noun-one-input');
const nounTwoInput = document.getElementById('noun-two-input');
const nounThreeInput = document.getElementById('noun-three-input');
const nounFourInput = document.getElementById('noun-four-input');
const nounFiveInput = document.getElementById('noun-five-input');
const nounSixInput = document.getElementById('noun-six-input');
const nounSevenInput = document.getElementById('noun-seven-input');
const nounEightInput = document.getElementById('noun-eight-input');

const adjectiveOneInput = document.getElementById('adjective-one-input');

const conjuctionInput = document.getElementById('conjunction-input');

const verbOneInput = document.getElementById('verb-one-input');
const verbTwoInput = document.getElementById('verb-two-input');
const verbThreeInput = document.getElementById('verb-three-input');
const verbFourInput = document.getElementById('verb-four-input');

const prepositionOneInput = document.getElementById('preposition-one-input');
const prepositionTwoInput = document.getElementById('preposition-two-input');

const commandOneInput = document.getElementById('command-one-input');
const commandTwoInput = document.getElementById('command-two-input');

// Span
const nounOne = document.getElementById('noun-one');
const nounTwo = document.getElementById('noun-two');
const nounThree = document.getElementById('noun-three');
const nounFour = document.getElementById('noun-four');
const nounFive = document.getElementById('noun-five');
const nounSix = document.getElementById('noun-six');
const nounSeven = document.getElementById('noun-seven');
const nounEight = document.getElementById('noun-eight');

const adjectiveOne = document.getElementById('adjective-one');

const conjuction = document.getElementById('conjunction');

const verbOne = document.getElementById('verb-one');
const verbTwo = document.getElementById('verb-two');
const verbThree = document.getElementById('verb-three');
const verbFour = document.getElementById('verb-four');

const prepositionOne = document.getElementById('preposition-one');
const prepositionTwo = document.getElementById('preposition-two');

const button = document.getElementById('button');

const commandOne = document.getElementById('command-one');
const commandTwo = document.getElementById('command-two');
// reference needed DOM elements


// set event listeners 
button.addEventListener('click', () => {
    commandOne.textContent = commandOneInput.value;
});
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
