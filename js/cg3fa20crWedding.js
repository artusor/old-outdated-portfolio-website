var guestNum = prompt("How many guests do you have?");
var tableNum = prompt("How many tables do you want?");

function banquetPlanner(guestNum, tableNum) {

  initPerTable = Math.floor(guestNum / tableNum);
  remainGuests = guestNum % tableNum;

  if (remainGuests == 0) {
    return ("Your " + guestNum + " guests will be seated as follows: " + tableNum + " tables of " + initPerTable);
  } else {
    if ((tableNum - remainGuests) == 1 && remainGuests == 1) {
      return ("Your " + guestNum + " guests will be seated as follows: " + (tableNum - remainGuests) + " table of " + initPerTable + " and " + remainGuests + " table of " + (initPerTable + 1));
    } else if ((tableNum - remainGuests) == 1) {
      return ("Your " + guestNum + " guests will be seated as follows: " + (tableNum - remainGuests) + " table of " + initPerTable + " and " + remainGuests + " tables of " + (initPerTable + 1));
    } else if (remainGuests == 1) {
      return ("Your " + guestNum + " guests will be seated as follows: " + (tableNum - remainGuests) + " tables of " + initPerTable + " and " + remainGuests + " table of " + (initPerTable + 1));
    } else {
      return ("Your " + guestNum + " guests will be seated as follows: " + (tableNum - remainGuests) + " tables of " + initPerTable + " and " + remainGuests + " tables of " + (initPerTable + 1));
    }
  }
}

alert(banquetPlanner(guestNum, tableNum));
