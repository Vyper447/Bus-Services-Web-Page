//Function to take the values from the index and set them in the local storage
function myFunction() {
  
   var deptcityname = document.getElementById('CityNames').value;
   localStorage.setItem('CityNames', deptcityname);

   var destcityname = document.getElementById('CityNames2').value;
   localStorage.setItem('CityNames2', destcityname);

   var firstname = document.getElementById('fname').value;
   localStorage.setItem('fname', firstname);

   var lastname = document.getElementById('lname').value;
   localStorage.setItem('lname', lastname);

   var EmailAddress = document.getElementById('eaddress').value;
   localStorage.setItem('eaddress', EmailAddress);

   var Age = document.getElementById('age').value;
   localStorage.setItem('age', Age); 

   var TicketNumber = document.getElementById('TicketNumber').value;
   localStorage.setItem('TicketNumber', TicketNumber); 

   var DateOfTravel = document.getElementById('DateOfTravel').value;
   localStorage.setItem('DateOfTravel', DateOfTravel);

   var TotalAmmount = document.getElementById('totalammount').value;
   localStorage.setItem('totalammount', TotalAmmount);

   var bustype = document.querySelector('input[name="bus_services"]:checked').value;
   localStorage.setItem('lsbustype', bustype);

   var gender = document.querySelector('input[name="gender"]:checked').value;
   localStorage.setItem('gender', gender);
    
}

//Function to make the change of color for the time buttons
function colorchange() {
  document.querySelector(".button1").onclick = function() {
    
    document.getElementById('Button12').style.backgroundColor = "DodgerBlue";
    document.getElementById('Button2').style.backgroundColor = "GoldenRod";
    document.getElementById('Button4').style.backgroundColor = "GoldenRod";
    document.getElementById('Button8').style.backgroundColor = "GoldenRod";

   var button1230 = document.getElementById('Button12').value;
   localStorage.setItem('lsButton', button1230);

   localStorage.removeItem('Button2');
   localStorage.removeItem('Button4');
   localStorage.removeItem('Button8');
  }
 }

//Function to make the change of color for the time buttons
 function colorchange2() {
  document.querySelector(".button2").onclick = function() {
    
    document.getElementById('Button2').style.backgroundColor = "DodgerBlue";
    document.getElementById('Button12').style.backgroundColor = "GoldenRod";
    document.getElementById('Button4').style.backgroundColor = "GoldenRod";
    document.getElementById('Button8').style.backgroundColor = "GoldenRod";

   var button200 = document.getElementById('Button2').value;
   localStorage.setItem('lsButton', button200);

   localStorage.removeItem('Button12');
   localStorage.removeItem('Button4');
   localStorage.removeItem('Button8');
  }
 }

 //Function to make the change of color for the time buttons
 function colorchange3() {
  document.querySelector(".button3").onclick = function() {
    
    document.getElementById('Button4').style.backgroundColor = "DodgerBlue";
    document.getElementById('Button2').style.backgroundColor = "GoldenRod";
    document.getElementById('Button12').style.backgroundColor = "GoldenRod";
    document.getElementById('Button8').style.backgroundColor = "GoldenRod";

   var button400 = document.getElementById('Button4').value;
   localStorage.setItem('lsButton', button400);

   localStorage.removeItem('Button12');
   localStorage.removeItem('Button2');
   localStorage.removeItem('Button8');
  }
 }

 //Function to make the change of color for the time buttons
 function colorchange4() {
  document.querySelector(".button4").onclick = function() {

    document.getElementById('Button8').style.backgroundColor = "DodgerBlue";
    document.getElementById('Button2').style.backgroundColor = "GoldenRod";
    document.getElementById('Button12').style.backgroundColor = "GoldenRod";
    document.getElementById('Button4').style.backgroundColor = "GoldenRod";

   var button800 = document.getElementById('Button8').value;
   localStorage.setItem('lsButton', button800);

   localStorage.removeItem('Button12');
   localStorage.removeItem('Button2');
   localStorage.removeItem('Button4');
  }
 }

 //Function to display the data on the second page
 function displayData() {

  document.getElementById('para').innerHTML = "Departure City Name: -----  " + localStorage.getItem('CityNames');

  document.getElementById('para2').innerHTML = "Destination City Name: -----  " + localStorage.getItem('CityNames2');

  document.getElementById('para3').innerHTML = "First Name: -----  " + localStorage.getItem('fname');
 
  document.getElementById('para4').innerHTML = "Last Name: -----  " + localStorage.getItem('lname');

  document.getElementById('para5').innerHTML = "Email Address: -----  " + localStorage.getItem('eaddress');

  document.getElementById('para6').innerHTML = "Gender: -----  " + localStorage.getItem('gender');
  
  document.getElementById('para7').innerHTML = "Age: -----  " + localStorage.getItem('age');

  document.getElementById('para8').innerHTML = "Number of Tickets: -----  " + localStorage.getItem('TicketNumber');

  document.getElementById('para9').innerHTML = "Date Of Travel: -----  " + localStorage.getItem('DateOfTravel');

  document.getElementById('para10').innerHTML = "Bus type: -----  " + localStorage.getItem('lsbustype');

  document.getElementById('para11').innerHTML = "Time: -----  " + localStorage.getItem('lsButton');

  document.getElementById('para12').innerHTML = "Total Ammount: -----  " + localStorage.getItem('totalammount');
 }
 
 var tickets = 0;

 //Function to add the amount of tickets using the increment button
 function addTicket() {

  tickets = tickets + 1;

  if (tickets > 10) {
    tickets = 10
    alert("You cannot purchase more than 10 tickets");
  }

  document.getElementById('TicketNumber').value = "" + tickets;
 }

 //Function to subtract the amount of tickets using the decrement button
 function subtractTicket() {

  tickets = tickets - 1;

  if (tickets < 1) {
    tickets = 1
    alert("You cannot purchase less than 1 ticket");
  }

  document.getElementById('TicketNumber').value = "" + tickets;
 }

 //Calculate function that calculates the total amount the user owes
 //This function all checkes to see that all the feilds have been selected/filled out
 function calculate() {
  var totalAmmount = tickets * 10;
  document.getElementById('totalammount').value = "" + totalAmmount;

  var ButtonSubmit = document.getElementById('ButtonSubmit');

  if (document.getElementById('age').value < 20) {
      alert("Age is not valid to be riding public transit")
      document.getElementById('age').style.backgroundColor = "red";
      ButtonSubmit.disabled = true;
  }

  if (document.getElementById('age').value >= 20) {
    document.getElementById('age').style.backgroundColor = "white";
    ButtonSubmit.disabled = false;
  }

// The if statments below check to see if the bus service radio buttons have been pressed
  if (document.getElementById('Megabus').checked) {
    if (! document.getElementById('Minibus').checked) {
      if (! document.getElementById('Coachbus').checked) {
        if (! document.getElementById('Trolleybus').checked) {
          ButtonSubmit.disabled = false;
        }
      }
    }
}

  if (document.getElementById('Minibus').checked) {
    if (! document.getElementById('Megabus').checked) {
      if (! document.getElementById('Coachbus').checked) {
        if (! document.getElementById('Trolleybus').checked) {
          ButtonSubmit.disabled = false;
        }
      }
    }
}

  if (document.getElementById('Coachbus').checked) {
    if (! document.getElementById('Megabus').checked) {
      if (! document.getElementById('Minibus').checked) {
        if (! document.getElementById('Trolleybus').checked) {
          ButtonSubmit.disabled = false;
        }
      }
    }
}

  if (document.getElementById('Trolleybus').checked) {
    if (! document.getElementById('Megabus').checked) {
      if (! document.getElementById('Minibus').checked) {
        if (! document.getElementById('Coachbus').checked) {
          ButtonSubmit.disabled = false;
        }
      }
    }
}

if (! document.getElementById('Trolleybus').checked) {
  if (! document.getElementById('Megabus').checked) {
    if (! document.getElementById('Minibus').checked) {
      if (! document.getElementById('Coachbus').checked) {
        alert("You Did not select a Bus Service");
        ButtonSubmit.disabled = true;
      }
    }
  }
}

//Checking to see if the text feilds have values provided in them
if (document.getElementById('TicketNumber').value == null || document.getElementById('TicketNumber').value == "") {
  alert("Please Input the ammount of Tickets that you would like to purchase.");
  ButtonSubmit.disabled = true;
}

if (document.getElementById('fname').value == null || document.getElementById('fname').value == "") {
  alert("Please Input a First Name.");
  ButtonSubmit.disabled = true;
}

if (document.getElementById('lname').value == null || document.getElementById('lname').value == "") {
  alert("Please Input a Last Name.");
  ButtonSubmit.disabled = true;
}

if (document.getElementById('eaddress').value == null || document.getElementById('eaddress').value == "") {
  alert("Please Input an Email Address.");
  ButtonSubmit.disabled = true;
}

//Checking if the gender radio boxes have been selected 
if (document.getElementById('Male').checked) {
  if (! document.getElementById('Female').checked) {
    if (! document.getElementById('Other').checked) {
        ButtonSubmit.disabled = false;
    }
  }
}

if (document.getElementById('Female').checked) {
  if (! document.getElementById('Male').checked) {
    if (! document.getElementById('Other').checked) {
        ButtonSubmit.disabled = false;
    }
  }
}

if (document.getElementById('Other').checked) {
  if (! document.getElementById('Female').checked) {
    if (! document.getElementById('Male').checked) {
        ButtonSubmit.disabled = false;
    }
  }
}

if (! document.getElementById('Other').checked) {
  if (! document.getElementById('Female').checked) {
    if (! document.getElementById('Male').checked) {
        alert("You Did not select a Gender");
        ButtonSubmit.disabled = true;
    }
  }
}

//Checking to see if the date of travel has a value inputed
if (document.getElementById('DateOfTravel').value == null || document.getElementById('DateOfTravel').value == "") {
  alert("Please Input a Date.");
  ButtonSubmit.disabled = true;
}
}


 
 