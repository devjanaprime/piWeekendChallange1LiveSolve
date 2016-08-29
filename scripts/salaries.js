console.log( 'salaries.js sourced' );
// employees array
var employees=[];

var addEmployee = function(){
  console.log( 'in addEmployee' );
  // get user inputs and create a new employee object
  var newEmployee ={
    firstName: document.getElementById( 'firstNameIn' ).value,
    lastName: document.getElementById( 'lastNameIn' ).value,
    employeeId: document.getElementById( 'employeeIdIn' ).value,
    jobTitle: document.getElementById( 'jobTitleIn' ).value,
    salary: document.getElementById( 'salaryIn' ).value
  }; // end new employee object
  // clear inputs
  document.getElementById( 'firstNameIn' ).value = '';
  document.getElementById( 'lastNameIn' ).value = '';
  document.getElementById( 'employeeIdIn' ).value = '';
  document.getElementById( 'jobTitleIn' ).value = '';
  document.getElementById( 'salaryIn' ).value = '';
  console.log( 'newEmployee', newEmployee );
  // push this employee in to the array
  employees.push( newEmployee );
  console.log( 'employees:', employees );
  // calculate total salary and avg monthly salary
  var totalSalaries = 0;
  // for each employee add their salary on to the totalSalaries
  for (var i = 0; i < employees.length; i++) {
    // add this employee's salary to totalSalaries
    totalSalaries += Number( employees[i].salary );
  }
  console.log( 'totalSalaries:', totalSalaries );
  var averageSalary = totalSalaries / employees.length;
  console.log( 'averageSalary:', averageSalary );
  var monthlySalaryCost = totalSalaries / 12;
  console.log( 'monthlySalaryCost:', monthlySalaryCost );
  // display info on DOM
  // clear output
  var outputDiv = document.getElementById( 'outputDiv' );
  outputDiv.innerHTML = '';
  // each employee
  for (var i = 0; i < employees.length; i++) {
    var outputText = '<p>' + employees[i].lastName + ', ' + employees[i].firstName + ' (' + employees[i].employeeId + '): $' + employees[i].salary + '</p>';
    outputDiv.innerHTML += outputText;
  }
  // totalSalaries
  outputText = '<p>Total salaries: $' + totalSalaries + '</p>';
  outputDiv.innerHTML += outputText;
  // averageSalary
  outputText = '<p>Average Annual Salary: $' + averageSalary + '</p>';
  outputDiv.innerHTML += outputText;
  // monthlySalaryCost
  outputText = '<p>Monthly Salary Cost: $' + monthlySalaryCost + '</p>';
  outputDiv.innerHTML += outputText;
}; // end addEmployee
