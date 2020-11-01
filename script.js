/**
 * ! Welcome to test #1
 * * Answer 1 question from each section
 * * Each section is worth 25%
 */

/**
 * ! Section 1: Variables and Data Structures
 * 
 * * Please answer 1 question from this section
 */

/**
 * * 1A
 * * Create a data object describing a trip
 * * Your data object should contain the following values:
 * * -country to travel to(string)
 * * -length of stay(number)
 * * -whether it is warm or cold(boolean)
 * * -a list of 3 places to see(array of strings)
 * 
 * * Your data object should also contain a getter and a setter for length of stay
 * 
 * * Add a method that loops through your array of places to see.  
 * * For each place, console log a template literal in the following structure
 * * placeName is great!  I bought a t-shirt!
 * 
 * * Call your method in your data structure
 */

/**
 * * 1B
 * * Create a datastructure describing video game
 * * Your data object should contain the following values:
 * * -the number of players(a number)
 * * -the name of the game(a string)
 * * -3 different kinds of enemies and their strength(an array of objects)
 * * -An object declaring the the heroes name(string), hit points or shield points(number), and tools/upgrades(array)
 * * 
 * * Create the following methods(functions) in your data object
 * * -a function that accepts a parameter(number) and takes off that many point from the hero
 * * -a function that will loop through the tools/upgrades and console log each one
 * 
 * * Call each of your methods in your data structure
 */

/**
 * ! Section 2: Function Types
 * 
 * * Please answer 1 question from this section
 */

/**
 * * 2A
 * * Create a single line fat arrow function that:
 * * -takes in 3 parameters(1 number, 1 string, 1 boolean) and returns an array holding all 3
 * 
 * * run your function and console log the result
 */

/**
 * * 2B
 * * Correct the code below so that:
 * * -when you call person.greetings, it calls person.salutations then console logs the first and last names
 * * 
 * * Run your solution
 * 
 * * Do not move the functions or the console logs.  Make use of console.logs and leave in your logs once you find the solution.
 * *
 * * Finally, describe why your solution works in comments
 */
let person = {
    firstName: "Bob",
    lastName: "Dobbs",
    salutations: ()=>{
        console.log(firstName, lastName)
    },
    greetings: ()=>{
        this.salutations();
    }
}

/**
 * ! Section 3: Classes and Extensions
 * 
 * * Answer 1 question from this section
 */

/**
 * * 3A
 * * Create an ES5 class for a hut that takes in data for
 * * -Roof type(string)
 * * -occupants(array of objects with first and last name)
 * *  
 * * Extend the hut class into a class for a hotel, motel, or resort
 * * Add values for:
 * * -location(string)
 * * -number of rooms(number)
 * * -features(array of 5 strings)
 * * -whether the class has a pool(boolean)
 * 
 * 
 * * Add functions for:
 * * -checking in
 * *    -takes in a name
 * *    -returns a string with a room number and the name of the guest
 * * -advertise
 * *    -adds an unordered list of the features to the html page
 * 
 * * Create an instance of each class, and call each function
 */

/**
 * * 3B
 * * Create an es6 class describing a bicycle
 * * Add values for
 * * -number of passengers
 * * -make
 * * -speed
 * 
 * * Add a method for ringing the bell
 * * -In your method, console log the sound of the bell
 * 
 * * Extend your bicycle method to a vehicle of your choice
 * * Pick 3 properties of that vehicle and add them to your class
 * * 
 * * Create two methods in your extended class
 * * -The first method should write the all the properties of your vehicle to screen in an unordered list
 * * -The second method should console log honking the horn
 * 
 * * Create an instance of each Class and run all the methods on each.
 */

/**
 * ! Section 4:  JSON, Randomness and Intervals
 * 
 * * Answer 1 question from this section
 */

/**
 * * 4A
 * * 1. Create a JSON file with an array of five strings
 * * 2. Create a variable that holds the number 0
 * * 3. Create a function that will take in a string, console log it, then increase the variable in step 2 by 1. 
 * * 4. Load the JSON file
 * * 5. Once the JSON file is loaded start an interval that will run until 
 * * each string has been console logged.
 * * 6. Stop the interval. 
 */

/**
 * * 4B
 * * 1. Create a json file with an array of the following strings
 As I see it, yes.
 Ask again later.
 Better not tell you now.
 Cannot predict now.
 Concentrate and ask again.
 Don’t count on it.
 It is certain.
 It is decidedly so.
 Most likely.
 My reply is no.
 My sources say no.
 Outlook not so good.
 Outlook good.
 Reply hazy, try again.
 Signs point to yes.
 Very doubtful.
 Without a doubt.
 Yes.
 Yes – definitely.
 You may rely on it.
 * * 2. Load the json file
 * * 3. Using JavaScript, add an h3 tag to the screen with the text "Click for your fortune"
 * * 4. Create a function that will append a p tag to the screen with a random phrase from your json file.
 * * 5. Using JavaScript, add a listener to your h3 tag that will call your fortune telling function
 */