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
 * * Create a data object describing your favourite band
 * * Your data object should contain the following values:
 * * -the name of the band(string)
 * * -the year they formed(number)
 * * -are they still perfoming?(boolean)
 * * -a list of 3 songs from them, that you love(array of strings)
 * 
 * * Your data object should also contain a getter and a setter for whether they are performing
 * 
 * * Add a method that loops through your array of favourite songs.  The method must be in the data object.  
 * * For each place, console log a template literal in the following structure
 * * songName is great!  I sing it all the time!
 * 
 * * Call your method in your data structure
 */

/**
 * * 1B
 * * Create a datastructure describing your favourite book/story
 * * Your data object should contain the following values:
 * * -the number of books in the series(a number)
 * * -the name of the main character(a string)
 * * -2 different suporting characters and their description(an array of objects)
 * 
 * * Add this method to your data structure
 * * -a method that will loop through the supporting characters and console log the name and description for each one
 * 
 * * Call your method in your data structure
 */

/**
 * ! Section 2: Function Types
 * 
 * * Please answer 1 question from this section
 */

/**
 * * 2A
 * * Create a single line fat arrow function that:
 * * -takes in 4 parameters(1 string, 1 boolean, 1 object) and returns an array holding all 3
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
 * * Create an ES5 class for a trip that takes in data for
 * * -destination(string)
 * * -travellers(array of objects with first and last name)
 * *  
 * * Extend the trip class into a class for a cuise
 * * Add values for:
 * * -ship name(string)
 * * -number of decks on the ship(number)
 * * -features(array of 5 strings)
 * * -whether the cruise is captained by the Dread Pirate Plaidbeard(boolean)
 * 
 * 
 * * Add functions for:
 * * -walking the plank
 * *    -returns a string with the following structure 'random_traveller_from_array walks the plank!  Arrgh!'
 * * -is the passenger a pirate
 * *    -look through the array.  If the length of the passengers first name is greater than 5, console log the following
 * *        -"passenger_first_name beard is a fearsome pirate!"
 * 
 * * Create an instance of each class, and call each function
 */

/**
 * * 3B
 * * Create an es6 class describing a small animal(reptile, mammal, or moth)
 * * Add values for
 * * -height(number)
 * * -species(string)
 * * -favourite snack
 * * -is it carnivorous(boolean) 
 * 
 * * Add a method for eating a food
 * * -In your method, console log the sound munching on its favourite snack
 * 
 * * Extend your small animal class to a giant monster of your creation
 * * Pick 3 properties of that giant monster and add them to your class(ensure those properties come from parameters)
 * * 
 * * Create two methods in your extended class
 * * -The first method should write the all the properties of your giant monster to screen in an unordered list
 * * -The second method should console log the giant monster stomping through an imaginary location
 * 
 * * Create an instance of each Class and run all the methods on each.
 */

/**
 * ! Section 4:  JSON, Randomness and Intervals
 * 
 * * Answer 1 question from this section
 */

/**
 * * 4A(do not use a class in this question, no try/catch)
 * * 1. Create a JSON file with an array of five strings
 * * 2. Create a variable that holds the number 0
 * * 3. Create a function that will take in a string, console log it, then increase the variable in step 2 by 1. 
 * * 4. Load the JSON file
 * * 5. Once the JSON file is loaded start an interval that will run until 
 * * each string has been console logged.
 * * 6. Stop the interval. 
 */

/**
 * * 4B(do not use a class in this question, no try/catch)
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