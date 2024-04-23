"use strict";
/*
strippingn Names: Store a person's name, and incude some whitespace characters at the
beginning and end of the name. Make sure you use each character combination, "\t" and "\n",
at least once. Print the name once, so the whitespace around the name is displayed.
then print the name after stripping the white spaces.
*/
let personName = "\t\n  john Doe  \n\t";
console.log("original:", personName);
console.log("stripped:", personName.trim());
