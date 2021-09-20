  var userNames = prompt("Hello! What is your userNames?");
  // creating prompt for userNames
  var userState = prompt("What state do you reside in?");
  // creating prompt for state
  var userTemp = number(prompt("What is the temperature outside?"));
  // creating prompt for temp
  const messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."];
  // creating array for output messages
  if (userTemp <= 32) {
    console.log(`${userNames}, ${messages[0]}`);
} else if (userTemp >= 32 && userTemp <= 50 && userState == ‘NE’) {
    console.log(`${userNames}, ${messages[1]}`);
} else if (userTemp >= 32 && userTemp <= 50 && userState == ‘FL’) {
    console.log(`${userNames}, ${messages[2]}`);
} else if (userTemp >= 50 && userTemp <= 70) 
    console.log(`${userNames}, ${messages[3]}`);
  else
    console.log(`${userNames}, have a nice day`)
  // Output message absed on Name, State, and Temperature
  switch (true) {
  case(userTemp <= 32):
    console.log(`${userNames}, ${messages[0]}`)
    break
  case (userTemp >= 32 && userTemp <= 50 && userState == ‘NE’):
    console.log(`${userNames}, ${messages[1]}`)
    break
 case (userTemp >= 32 && userTemp <= 50 && userState == ‘FL’):
    console.log(`${userNames}, ${messages[2]}`)
    break
 case (userTemp >= 50 && userTemp <= 70):
    console.log(`${userNames}, ${messages[3]}`)
    break
  default:
    console.log(`${userNames}, have a nice day`)
}
      // Outout message based on Name, State, and Temperature