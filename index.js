
// For Lopp
function writeCards(names, holiday) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);
    }
    return messages;
}
writeCards(["sean", "ashley", "dylan"], "birthday");

// While Loop
function countDown(number) {
let counter = 10;
while (counter >= 0) {
  console.log(counter--);
}
}
countDown(10);