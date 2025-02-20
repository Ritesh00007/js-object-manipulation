# JavaScript Object Manipulation with Node.js

## Due Date
February 25, 2025, 3:00 PM [No extensions will be granted]

## Project Description
This project processes a list of sculpture objects and creates length measurements for each text property.

## Files Included
- `sculptureScript.js` - Contains the solution code
- `data.js` - Contains the input data (provided)
- `readme.md` - This file

## Solution Output
When running the script, it produces the following sculptureListLengths objects:

```javascript
Sculpture List Lengths:

Sculpture 1:
{
  name: 26,
  artist: 20,
  description: 198,
  url: 31,
  alt: 90
}

Sculpture 2:
{
  name: 18,
  artist: 17,
  description: 168,
  url: 33,
  alt: 89
}

// ... continues for all sculptures in the list
```

## Running the Solution
1. Ensure Node.js is installed
2. Navigate to the project directory
3. Run `node sculptureScript.js`

## Implementation Details
The solution uses:
- Object property iteration with for...in loops
- Array iteration with forEach
- String length measurements
- Object creation and manipulation