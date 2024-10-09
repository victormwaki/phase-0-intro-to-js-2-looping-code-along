function writeCards(names, event) {
    let messages = []; // Create a new, empty array to hold the messages
  
    for (let i = 0; i < names.length; i++) {
      // Create a custom message for each name
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  
      // Add the message to the new array
      messages.push(message);
    }
  
    // Return the array of messages after the loop finishes
    return messages;
  }  

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--; // Decrease the number by 1 in each iteration
    }
  }
 countDown(10);  