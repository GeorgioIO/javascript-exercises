const findTheOldest = function(arr) {
    const sortedPeople = arr.sort((personA , personB) => {
        if(!personA.yearOfDeath)
        {
            personA.yearOfDeath = new Date().getFullYear()
        }
        else if(!personB.yearOfDeath)
        {
            personB.yearOfDeath = new Date().getFullYear()
        }
        let personAAge = personA.yearOfDeath - personA.yearOfBirth;
        let personBAge = personB.yearOfDeath - personB.yearOfBirth;
        return personAAge > personBAge ? -1 : 1;
    })
    return sortedPeople[0]
    
};

// Do not edit below this line
module.exports = findTheOldest;


/*

    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

    GOAL is to find the oldest and return the whole person object

*/