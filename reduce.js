  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */

// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator:", acc,
//     "CurrentValue:", curr,
//     "Total:", acc + curr
//   );
//   return acc + curr
// }, 20);
 let sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum)


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: "Mark",
    profession: "Manager",
    yrsExperience: 10
  }
];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); 
console.log(totalExperience);

// Grouping by a property, and totaling it too

// {Developer: 12, Designer: 4}    THIS IS THE RESULT WE WANT!
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession)

//CREATE THE FOLLOWING OBJECT
// {
//   Developer: ['Andrew', 'Ariel'],
//   Designer: ['Michael', 'Kelly'],
//   Manager: ['Mark']
// }

let namesOfTeamMembers = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = [curr.name];
  } else {
    acc[key].push(curr.name);
  }
  return acc
}, {});

console.log(namesOfTeamMembers)

// Create a function that will search for one specific proffesion and
// and then find the one employee with the most experience. 
// {
//   name: 'Ariel',
//   profession: 'Developer',
//   yrsExperience: 7
// },

let findingDeveloperWithMostExperience = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (curr[key] === "Developer") {
    return curr
  } 
  return acc += curr;
},);

console.log(findingDeveloperWithMostExperience)

  // filter(person => person.name === "Arial")