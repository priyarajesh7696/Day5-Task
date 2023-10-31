// Q1 : using for / for in / for of for json object
let json =[
   {
    "Name":"R.PRIYA",
    "Qualification":["10th","12th","B.Tech"],
    "Age":"30",
    "Gender":"Female",
    "Dateofbirth":"03-06-1992",
    "Address":"No.17,Adhiyasairam Apartment,Balji nagar,Kovur",
    "Pincode":"600128",
    "Blood-Group":"AB+",
    "Marital-Status":"Married",
    "Skills":"Fullstack Developer MERN"
}];

// using for loop
//console.log(json);
for(let i=0;i<json.length;i++)
{
    console.log(json[i]);
}  
// using for in loop
 for (let key in json) {
    console.log(json[key]);
 }
for (let value of json)
{
    console.log(`
    ${value.Name},
    ${value.Qualification},
    ${value.Gender},
    ${value.Address},
    ${value.Age}`);
}

//Q2 : CREATE YOUR OWN RESUME DATA in  JSON formate
let resume ={
    "Name":"R.PRIYA",
    "Qualification":["10th","12th","B.Tech"],
    "Age":"30",
    "Gender":"Female",
    "Date-of-birth":"03-06-1992",
    "Address":["No.17,Adhiyasairam Apartment,Balji nagar,Kovur"],
    "Pincode":"600128",
    "Blood-Group":"AB+",
    "Marital-Status":"Married",
    "Skills":"Fullstack Developer MERN"
}

console.log(`           *******   RESUME  ********     `);
console.log("-------------------------------------------------")
for (let key1 in resume) {
    console.log(`${key1} : ${resume[key1]}`)

}