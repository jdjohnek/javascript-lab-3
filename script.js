// Declare a variable named submissions that is initialized to an array with the following objects:
const submissions = [{
        name: 'Jane',
        score: 95,
        date: '2020-01-24',
        passed: true,
    },
    {
        name: 'Joe',
        score: 77,
        date: '2020-01-24',
        passed: true,
    },
    {
        name: 'Jack',
        score: 59,
        date: '2020-01-24',
        passed: false,
    },
    {
        name: 'Jill',
        score: 88,
        date: '2020-01-24',
        passed: true,
    },
];

// console.log(names[1], scores[1], date[1], passed[1])

// Declare a function named addSubmission
// Parameter(s): array, newName, newScore, newDate
// Functionality: construct an object and push it into the array. 
// The object must have the same properties as the objects already in the array. 
// Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

function addSubmission(array, newName, newScore, newDate) {
    array.push({
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60 ? true : false,
    })
};
addSubmission(submissions, "Jarod", 100, "2021-11-05")
    //console.log(submissions)
    // Declare a function named deleteSubmissionByIndex
    // Parameter(s): array, index
    // Functionality: remove the object from the array at the specified index using the splice method.

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);

}
deleteSubmissionByIndex(submissions, 3)
    //console.log(submissions)
    // Declare a function named deleteSubmissionByName
    // Parameter(s): array, name
    // Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.

function deleteSubmissionByName(array, name) {
    let index = array.findIndex(array => array.name === name);
    array.splice(index, 1);

}
//deleteSubmissionByName(submissions, "Jack")
// console.log(submissions)
//Declare a function named editSubmission
// Parameter(s): array, index, score
// Functionality: update an object’s score in the array at the specified index. 
// Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

function editSubmission(array, index, score) {
    array[index].score = score,
        array[index].passed = score >= 60 ? true : false;


}
editSubmission(submissions, 3, 70)
    //console.log(submissions)
    // Declare a function named findSubmissionByName
    // Parameter(s): array, name
    // Functionality: return the object in the array that has the provided name. Use the find method.
function findSubmission(array, name) {
    let findName = array.find(array => array.name === name);
    return findName
}
//console.log(findSubmission(submissions, "Joe"))
// Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.
function findLowestScore(array) {
    let lowest = array[0];
    array.forEach(submission => {
        if (lowest.score > submission.score) {
            lowest = submission
        }
    })
    return lowest
}
//console.log(findLowestScore(submissions))
//Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.

function findAverageScore(array) {
    let total = 0;
    for (let submission of array) {
        total += submission.score;
    }
    let average = total / array.length;
    return average
}
// console.log(findAverageScore(submissions))
// Declare a function named filterPassing
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores. 

function filterPassing(array) {
    let filter = array.filter(array => array.passed === true);
    return filter
}
// console.log(filterPassing(submissions))

// Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.

function filter90AndAbove(array) {
    let filter = array.filter(array => array.score >= 90);
    return filter
}
// console.log(filter90AndAbove(submissions))