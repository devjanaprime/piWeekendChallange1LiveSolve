console.log( 'salaries.js sourced' );
// employees array
var employees=[];
var verbose = true;

var addEmployee = function(){
  if( verbose ) console.log( 'in addEmployee' );
  // get user inputs and create a new employee object
  var newEmployee ={
    firstName: document.getElementById( 'firstNameIn' ).value,
    lastName: document.getElementById( 'lastNameIn' ).value,
    employeeId: document.getElementById( 'employeeIdIn' ).value,
    jobTitle: document.getElementById( 'jobTitleIn' ).value,
    salary: document.getElementById( 'salaryIn' ).value
  }; // end new employee object
  if( verbose ) console.log( 'newEmployee', newEmployee );
  // push this employee in to the array
  employees.push( newEmployee );
  if( verbose ) console.log( 'employees:', employees );
  // clear inputs
  clearInputs();
  /// - maybe move to another function? - ///
  calculateSalaryInformation();
}; // end addEmployee

var calculateSalaryInformation = function(){
  if( verbose ) console.log( 'in calculateSalaryInformation' );
  // calculate total salary and avg monthly salary
  var totalSalaries = 0;
  // for each employee add their salary on to the totalSalaries
  for (var i = 0; i < employees.length; i++) {
    // add this employee's salary to totalSalaries
    totalSalaries += Number( employees[i].salary );
  }
  if( verbose ) console.log( 'totalSalaries:', totalSalaries );
  var averageSalary = totalSalaries / employees.length;
  if( verbose ) console.log( 'averageSalary:', averageSalary );
  var monthlySalaryCost = totalSalaries / 12;
  if( verbose ) console.log( 'monthlySalaryCost:', monthlySalaryCost );
  // displayEmployees
  displayEmployees( averageSalary, monthlySalaryCost, totalSalaries );
}; // end calculateSalaryInformation

var clearInputs = function(){
  if( verbose ) console.log( 'in clearInputs' );
  document.getElementById( 'firstNameIn' ).value = '';
  document.getElementById( 'lastNameIn' ).value = '';
  document.getElementById( 'employeeIdIn' ).value = '';
  document.getElementById( 'jobTitleIn' ).value = '';
  document.getElementById( 'salaryIn' ).value = '';
}; // end clearInputs

var displayEmployees = function( avgSal, monthlySal, totalSal ){
  if( verbose ) console.log( 'in displayEmployees' );
  // display info on DOM
  // clear output
  var outputDiv = document.getElementById( 'outputDiv' );
  outputDiv.innerHTML = '';
  // each employee
  for (var i = 0; i < employees.length; i++) {
    var outputText = '<p>' + employees[i].lastName + ', ' + employees[i].firstName + ' (' + employees[i].employeeId + '): $' + Number( employees[i].salary ).toLocaleString( 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) + '<button onclick="terminateEmployee( ' + i + ' );">Goodbye</button></p>';
    outputDiv.innerHTML += outputText;
  }
  // totalSalaries
  outputText = '<p>Total salaries: $' + totalSal.toLocaleString( 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) + '</p>';
  outputDiv.innerHTML += outputText;
  // averageSalary
  outputText = '<p>Average Annual Salary: $' + avgSal.toLocaleString( 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) + '</p>';
  outputDiv.innerHTML += outputText;
  // monthlySalaryCost
  outputText = '<p>Monthly Salary Cost: $' + monthlySal.toLocaleString( 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) + '</p>';
  outputDiv.innerHTML += outputText;
}; // end displayEmployees

var terminateEmployee = function( index ){
  if( verbose ){
    console.log( 'in terminateEmployee:', index );
    console.log( '(ex)terminating:', employees[ index ] );
  } // end verbose
  // splice 1 from the employees array at our index
  employees.splice( index, 1 );
  // recalculate and update DOM
  calculateSalaryInformation();
}; // end terminateEmployee
