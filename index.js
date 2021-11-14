
// // For Lopp
// function writeCards(names, holiday) {
//     const messages = []
//     for (let i = 0; i < names.length; i++) {
//     messages.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);
//     }
//     return messages;
// }
// writeCards(["sean", "ashley", "dylan"], "birthday");

// // While Loop
// function countDown(number) {
// let counter = 10;
// while (counter >= 0) {
//   console.log(counter--);
// }
// }
// countDown(10);


////////////

const stringNames = [];

function writeCards(stringNames, eventNames) {
  let printStatements = [];
  for(let i = 0; i < stringNames.length; i++ ) {
    printStatements.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventNames} gift!`)
  }
  return printStatements;
}

////////////

function countDown() {
  let i = 10;
  while (i >= 0) {
    console.log(i --)
  }
}
