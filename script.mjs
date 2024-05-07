// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

// PART ONE ----------------------------------------------------------------
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// - Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// - Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// - Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

// pseudo-code
// if growth capacity is > 80%
// then the plants need to be pruned

// if growth capacity is > 50% and less than 80%;
// then the plants need to be monitored;

// if growth capacity is less than 50%;
// then you can plant more plants.

// SET VARIABLES -----------------------------------------------------------
const pi = 3.1415;
const radius = 5 //meters
const area = pi * radius * radius;
const spacePerPlant = .8; //square meters
let plants = 20;
let weeklyGrowth = 2
let maxNumPlants = area / spacePerPlant;
console.log(`The max number of plants you can have is ${maxNumPlants}.`);
let highCapacity = maxNumPlants * .8
let lowCapacity = maxNumPlants * .5
let weeks = 3;
let totalPlants = plants * (weeklyGrowth ** weeks);

try {
    if (totalPlants > highCapacity) {
        console.log("The plants must be pruned.");
    } else if (totalPlants >= lowCapacity && totalPlants <= maxCapacity) {
        console.log("Simply monitor the plants.");
    } else if (totalPlants < lowCapacity) {
        console.log("You may plant more plants.");
    } else {
        console.log ("Please check with a professional.");
    }
} catch (error) {
    console.error("I'm not sure what I'm throwing an error for!");
}


switch (weeks) {
    case 1: console.log(`There would be ${totalPlants} plants after one week.`);
    break;
    case 2: console.log(`There would be ${totalPlants } plants after two weeks`);
    break;
    case 3: console.log(`There would be ${totalPlants} plants after three weeks.`);
    break;
    default: console.log(`I don't know.`);
    break;
}

// PART TWO ----------------------------------------------------------------
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?
let plants2 = 100;
let weeks2 = 10;
let totalPlants2 = plants * (weeklyGrowth ** weeks2);
console.log("There would be " + totalPlants2 + " plants after 10 weeks!");

let area2 = plants2 * spacePerPlant;
let radius2 = area2 / pi;
console.log("The radius of the expanded garden would be " + radius2 + " square feet.");

// PART THREE ----------------------------------------------------------------
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.
