// from data.js
var tableData = data;

//d3.select("tbody").remove();
//*var tbody = d3.select("tbody");
//var list = d3.select(".summary");
//list.html("");
//d3.select("tbody").remove();
//*tableData.forEach((UFOsighting) => {
//   * var row = tbody.append("tr");
//*    Object.entries(UFOsighting).forEach(([key, value]) => {
//   *   var cell = row.append("td");
//*      cell.text(value);
//*    });
//*  });
// Select the filter table button 
var button = d3.select(".btn-default");
button.on("click", function() {
  
  // grab references to the input element 
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");
console.log(inputValue);
console.log(tableData);

//filtering the table
var filteredData = tableData.filter(date => date.datetime === inputValue);
console.log(filteredData);

});
var tbody = d3.select("tbody");
// remove any tbody from the html
tbody.html("");

// append the filter date array to table
filteredData.forEach((UFOsighting) => {
   var row = tbody.append("tr");
   Object.entries(UFOsighting).forEach(([key, value]) => {
   var cell = row.append("td");
   cell.text(value);
});
});

