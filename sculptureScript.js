const sculptureList = require('./data.js');

// Create an array to store the length measurements for each sculpture
const sculptureListLengths = [];

// Loop through each sculpture in the list
sculptureList.forEach(sculpture => {
    // Create a new object for storing the lengths
    const lengthsObj = {};
    
    // Loop through each property of the sculpture
    for (const key in sculpture) {
        // Calculate and store the length of each value
        lengthsObj[key] = sculpture[key].length;
    }
    
    // Add the lengths object to our array
    sculptureListLengths.push(lengthsObj);
});

// Log the entire array of length measurements
console.log('Sculpture List Lengths:');
sculptureListLengths.forEach((lengths, index) => {
    console.log(`\nSculpture ${index + 1}:`);
    console.log(lengths);
});