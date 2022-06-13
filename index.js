// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = (namesArray, string) =>
namesArray.filter((element) => element.toLowerCase() == string.toLowerCase());

const fuzzyMatch = (namesArray, string) =>
namesArray.filter((element)=> element.slice(0,2) == string.slice(0,2));

const matchName = (namesArray, string )=>
namesArray.filter((element) => element.name == string);