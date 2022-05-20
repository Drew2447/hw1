const exp = require("constants");
const { user2 } = require("./data");

const characters = [
  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      eye_color: 'blue',
      gender: 'male',
  },

];

let myListOfName = characters.map(user=> {
  let name = user.name;
  
  return name;}
)
let myListOfHeight = characters.map(user=> {
  return user.height;}
)
let myListOfNameHieght = characters.map(user=> {
    return user.name+user.height;}  
)
let myListOfFirstName= characters.map(user=> {
  return user.name.split(' ')[0];}
)
  //  console.log(myListOfName)
  //  console.log(myListOfHeight)
  //  console.log(myListOfNameHieght)
  //  console.log(myListOfFirstName)

let sum = 0;
characters.forEach((x) => {
  let massValue = parseInt(x.mass);
  sum += massValue;

  return sum

})

let myvar = characters.reduce((accum, current) =>{
  accum += parseInt( current.mass);
  return accum

},0)

let myHeight = characters.reduce((accum, current) =>{
  accum += parseInt( current.height);
  return accum
},0)

let totalCharacters = characters.reduce((accum, currentvalue) =>{
  accum += (currentvalue.name.split(' ').length -1);
  return accum
},0)
let totalCharactersEye = characters.reduce((accum, current) =>{
  let color= current.eye_color
  accum [color]+=1
  return accum
},{blue: 0, yellow: 0, brown: 0})


// console.log(totalCharacters)
// console.log(myHeight)  
// console.log(totalCharactersEye) 
// console.log(myvar) 


let massGreat = characters.filter((peop)=>{
  
  return peop.mass>=100
  
})
// Get characters with height less than 200
let massHeight = characters.filter((peop1)=>{
  
  return peop1.height<=200
  
})
//Get all male characters
//let male = gender.filter(male => gender.length < 5 );
const getMen =(list)=>{
  return list.filter(peop=>{
  return peop.gender == 'male'
  })
}

const getfeMale =(list)=>{
  return list.filter(peop=>{
  return peop.gender == 'female'
  })
}
//console.log(massGreat)
//console.log(massHeight)
// console.log(getMen(characters))
// console.log(getfeMale(characters))

//Sort by name
let massname = characters.sort((user,user2)=> {
  if (user.name < user2.name)
  {return -1}
  }
)

//Sort by mass

const sortMass = ()=>{
  return characters.sort((a,b)=>{
    return a.mass - b.mass

  })
}

//Sort by height
const sortHeight = ()=>{
  return characters.sort((a,b)=>{
    return a.height - b.height
  })
}

let sortGender = characters.sort((user,user2)=> {
  if (user.gender < user2.gender)
  {return -1}
  }
)

console.log(sortGender)
//console.log(sortHeight())
//console.log(sortMass())
// console.log(massname)



// MAP
// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names
// REDUCE OR FOREACH
// Get the total mass of all characters
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)
// FILTER
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters
// SORT
// Sort by name
// Sort by mass
// Sort by height
// Sort by gender
// EVERY
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?
// SOME
// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?
// Bonus
// Redo the filter and map functions challenges, but do them with reduce/forEach
// come up with your own and use different methods you have not used
// add tests