/*                                 Qno 2:

Personal Message: Store a person’s name in a variable, and print a message to that person.
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?
                                    Code:
let personName : string ="Eric";
console.log("Hello " + personName +"! would you like to learn some phyton today ?");*/
/*                                  Qno 3:
Name Cases: Store a person’s name in a variable, and then print that person’s name in
lowercase, uppercase,and titlecase.
                                     Code:
let personName: string ="Nida";
let lowercaseName: string = personName.toLowerCase(); //lowercase
let uppercaseName: string = personName.toUpperCase(); //uppercase
function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
let titlecaseName: string = toTitleCase(personName);
console.log("Lowercase: "+ lowercaseName);
console.log("Uppercase: "+ uppercaseName);
console.log("Titlecase: "+ titlecaseName);*/
/*                                   Qno 4:
Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
 Your output should look something like the following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new.”
                                    Code:
let quote: string = " A person who never made a mistake never tried anything new.";
let author:string = " Albert Einstien! ";
console.log( author + " once said " + quote );*/
/*                                   Qno 5:
Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called
famous_person. Then compose your message and store it in a new variable called message. Print your message.
                                       Code:
let famous_person: string = "Albert Einstien";
let  quote: string = " A person who never made a mistake never tried anything new.";
//let message: string = famous_person+ " once said "+quote;
console.log(message);*/
/*                                     Qno 6:
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and
end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print
the name once, so the whitespace around the name is displayed. Then print the name after striping
the white spaces.
                                        Code:
let personNamewithWhitespace: string =" \t\n Nida \n\t ";
console.log("Name with Whitespace: "+personNamewithWhitespace);
let strippedName: string =personNamewithWhitespace.trim();
console.log("Stripped Name: ",strippedName);*/
/*                                        Qno 7:
Number Eight: Write addition, subtraction, multiplication, and division operations that each result
in the number 8. Be sure to enclose your operations in print statements to see the results.
                                            Code:
console.log("Addition: ", 5+3);
console.log("Substraction:",10-2);
console.log("Multiplication:",4*2);
console.log("Division:",16/2);*/
/*                                          Qno 8:
You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.
                                           Code:
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);*/
/*                                      Qno 9:
Favorite Number: Store your favorite number in a variable. Then, using that variable,
 create a message that reveals your favorite number. Print that message.
                                        Code:
let favouriteNumber: number = 84;
let message: string = "My favourite number is " +favouriteNumber;
console.log(message);*/
/*                                       Qno 10:
Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
If you don’t have anything specific to write because your programs are too simple at this point,
just add your name and the current date at the top of each program file. Then write one sentence
describing what the program does.
                                         Code:
// Author [Nida]
// Date [15/02/2024]
// performing addition
console.log("Addition: ", 5+3);
//performing substraction
console.log("Substraction:",10-2);
//performing multiplication
console.log("Multiplication:",4*2);
//performing division
console.log("Division:",16/2);*/
/*                                   Qno 11:
Names: Store the names of a few of your friends in a array called names. Print each person’s name
by accessing each element in the list, one at a time.
                                      Code:
let names: string[] = ["Nida","Aliza","Ayesha","Sawaiba"];
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}*/
/*                                  Qno 12:
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be
personalized with the person’s name.
                                    Code:
let names: string[] = ["Nida","Sawaiba","Aliza","Ayesha"];
for (let i=0;i<names.length;i++)
{
    console.log("Hello! "+names[i]+" Have a Good Day.");
}*/
/*                               Qno 13:
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements
about these items, such as “I would like to own a Honda motorcycle.”
                                 Code:
let cars: string[] = ["Range Rover","Porsche","Land Cruiser"];
for(let i=0;i<cars.length;i++)
{
    console.log("I would like to own a "+cars[i]+" car");
}*/
/*                               Qno 14:
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner. Then use
your list to print a message to each person, inviting them to dinner.
                                Code:
let guestlist: string[] = ["Sawaiba","Aliza","Ayesha"];
for(let i=0;i<guestlist.length;i++)
{
    console.log("Hello!"+guestlist[i]+" I would like to invite you to the dinner:)");
} */
/*                            Qno 15:
Changing Guest List: You just heard that one of your guests can’t make the dinner, so
you need to send out a new set of invitations. You’ll have to think of someone else to invite.
                              Code:

let guestlistt: string[] = ["Sawaiba","Aliza","Ayesha"];
guestlistt[guestlistt.indexOf("Ayesha")] = "Mehak";
for (let i = 0; i < guestlistt.length; i++) {
    console.log("Hello!" +guestlistt[i] +" I would like to invite you to dinner:)");
}
                                                       
Start with your program from Exercise 14. Add a print statement at the end of your program
 stating the name of the guest who can’t make it.
                              Code:

let guestList: string[] = ["Sawaiba", "Aliza", "Mehak"];
let guestWhoCantMakeIt: string = "Ayesha";
guestList[guestList.indexOf(guestWhoCantMakeIt)] = "Ayesha";
for (let i = 0; i < guestList.length; i++) {
    console.log("Hello!"+guestList[i]+ " I would like to invite you to dinner:)");
}
console.log ("But "+guestWhoCantMakeIt+ " can't make it to dinner:(");

Modify your list, replacing the name of the guest who can’t make it with the name of the new
 person you are inviting.
                               Code:
let guestList: string[] = ["Sawaiba", "Aliza", "Ayesha"];
let guestWhoCantMakeIt: string = "Ayesha";
let newGuest: string = "Mehak";
let indexOfGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList[indexOfGuestWhoCantMakeIt] = newGuest;
}
for (let i = 0; i < guestList.length; i++) {
    console.log("Hello! " +guestList[i]+" I would like to invite you to dinner:)" );
}

Print a second set of invitation messages, one for each person who is still in your list.
                             Code:
let guestList: string[] = ["Sawaiba", "Aliza", "Ayesha"];
let guestWhoCantMakeIt: string = "Ayesha";
let newGuest: string ="Mehak";
let indexOfGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList[indexOfGuestWhoCantMakeIt] = newGuest;
}

// Printing first set of invitation messages
console.log("First set of invitation messages:");
for (let i = 0; i < guestList.length; i++) {
    console.log("Hello! "+guestList[i]+" I would like to invite you to dinner:)");
}

// Printing second set of invitation messages
console.log("\nSecond set of invitation messages:");
for (let i = 0; i < guestList.length; i++) {
    console.log("Hello! "+guestList[i]+" I would like to invite you to dinner:)");
}*/
/*                           Qno 16:
More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
                               Code:
let guestList: string[] = ["Sawaiba", "Aliza", "Ayesha"];
let guestWhoCantMakeIt: string = "Ayesha";
let newGuest: string ="Mehak";
let indexOfGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList[indexOfGuestWhoCantMakeIt] = newGuest;
}
guestList.push("Iqra", "Maha", "Ayat");
for (let i = 0; i < guestList.length; i++) {
    console.log("Hello! "+guestList[i]+" I would like to invite you to dinner:)");
}

 Start with your program from Exercise 15. Add a print statement to the end of your
 program informing people that you found a bigger dinner table.
                                 Code:
let guestlist: string[] = ["Sawaiba","Aliza","Ayesha"];
for(let i=0;i<guestlist.length;i++)
{
    console.log("Hello!"+guestlist[i]+" I would like to invite you to the dinner:)");
}
console.log("\nGood news! We found a bigger dinner table. There's more space available now.");

Add one new guest to the beginning of your array.
                                 Code:
let guestlist: string[] = ["Sawaiba","Aliza","Ayesha"];
for(let i=0;i<guestlist.length;i++)
{
    console.log("Hello!"+guestlist[i]+" I would like to invite you to the dinner:)");
}
console.log("\nGood news! We found a bigger dinner table. There's more space available now.");

Add one new guest to the middle of your array. • Use append() to add one new guest to the
end of your list. • Print a new set of invitation messages, one for each person in your list.
                              Code:
let guestlist: string[] = ["Sawaiba","Aliza","Ayesha"];
for(let i=0;i<guestlist.length;i++)
{
    console.log("Hello!"+guestlist[i]+" I would like to invite you to the dinner:)");
}
guestlist.unshift("Maha");
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Mahnoor");
guestlist.push("Javeria");
console.log("Invitation messages:");
for (let i = 0; i < guestlist.length; i++) {
    console.log("Hello! " +guestlist[i]+" I would like to invite you to dinner:)");
}*/
/*                                  Qno 17:
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
for the dinner, and you have space for only two guests.
                                  Code:
let guestlist: string[] = ["Sawaiba","Aliza","Ayesha"];
guestlist.splice(2);
console.log("Invitation messages for the remaining guests:");
for (let i = 0; i < guestlist.length; i++) {
    console.log("Hello! " +guestlist[i]+" I would like to invite you to dinner:)");
}

Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them
know you’re sorry you can’t invite them to dinner.
                              Code:
let guestlist: string[] = ["Sawaiba","Aliza","Ayesha","Anum","Hifza","Zainab"];
while (guestlist.length > 2) {
let removedGuest: string = guestlist.pop()!;
console.log("Sorry:( " +removedGuest+" I'm unable to invite you to dinner.");}
for (let i = 0; i < guestlist.length; i++) {
console.log("Hello! " +guestlist[i]+" I would like to invite you to dinner:)");}

Print a message to each of the two people still on your list, letting them know they’re still invited.
                                   Code:
let guestlist: string[] = ["Sawaiba","Aliza","Ayesha","Anum","Hifza","Zainab"];
 while (guestlist.length > 2) {
let removedGuest: string = guestlist.pop()!;
console.log("Sorry:( " +removedGuest+" I'm unable to invite you to dinner.");}
for (let i = 0; i < guestlist.length; i++) {
console.log("Hello! " +guestlist[i]+" I would like to invite you to dinner:)");}
console.log("Invitation messages for the remaining guests:");
for (let i = 0; i < guestlist.length; i++) {
console.log("Dear "+guestlist[i]+" you're still invited to dinner. We look forward to having you join us!");
}

Remove the last two names from your list, so you have an empty list. Print your list to
make sure you actually have an empty list at the end of your program.
                                code:
let guestlist: string[] = ["Sawaiba","Aliza","Ayesha","Anum","Hifza","Zainab"];
guestlist.pop();
guestlist.pop();
console.log("Guest list after removing the last two names:"+ guestlist);*/
/*                              Qno 18:
Seeing the World: Think of at least five places in the world you’d like to visit.

                               Code:
// Array storing places in the world to visit
let placesToVisit: string[] = ["Turkey", "Maldives", "Swizerland", "Greece", "America"];

// Print the array in its original order
console.log("Original order: "+placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical order: "+ placesToVisit.sort());

// Show that the array is still in its original order
console.log("Original order after sorting: "+placesToVisit);

// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order: "+ placesToVisit.sort().reverse());

// Show that the array is still in its original order
console.log("Original order after sorting in reverse: "+placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order: "+placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order: "+ placesToVisit);

// Sort the array in alphabetical order and print it
console.log("Sorted in alphabetical order: "+ placesToVisit.sort());

// Sort the array in reverse alphabetical order and print it
console.log("Sorted in reverse alphabetical order: "+placesToVisit.sort().reverse());*/
/*                                Qno 19:
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
indicating the number of people you are inviting to dinner.
                                    Code:
let guestlist: string[] = ["Sawaiba","Aliza","Ayesha"];
console.log("Number of people being invited to dinner:" +guestlist.length);*/
/*                              Qno 20:
Think of something you could store in a array. For example, you could make a list of mountains,
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates
a list containing these items.
                             Code:
let countries: string[] = ["United States","Canada","United Kingdom", "Australia","Germany", "France","Japan",
    "Brazil","Pakistan","China"];
console.log("List of countries...");
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}*/
/*                         Qno 21:
They think of something you could store in a TypeScript Object. Write a program that creates Objects
containing these items.
                          Code:
let car1 = { make: "Toyota",model: "Camry",year: 2020,color: "Red"};
let car2 = { make: "Honda",model: "Civic",year: 2018,color: "Blue"};
let car3 = {make: "Ford",model: "Mustang",year: 2019,color: "Yellow"};
let car4 = {make: "Tesla",model: "Model 3",year: 2021,color: "White"};
let cars = [car1, car2, car3, car4];
console.log("List of cars:");
for (let i = 0; i < cars.length; i++) {
    console.log("Car: " +i + 1);
    console.log("Make: " +cars[i].make);
    console.log("Model: " +cars[i].model);
    console.log("Year: " +cars[i].year);
    console.log("Color: " +cars[i].color);
    console.log();
}*/
/*                        Qno 22:
Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.
                           Code:
let countries: string[] = ["United States","Canada","United Kingdom","Australia","Germany","France",
"Japan","Brazil","Pakistan","China"];
console.log(countries[10]); */
/*                         Qno 23:
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
                        Code:
let number = 10;
// Test 1
console.log("Is number == 10? I predict True.");
console.log(number == 10);
// Test 2
console.log("Is number < 5? I predict False.");
console.log(number < 5);
// Test 3
console.log("Is number > 0? I predict True.");
console.log(number > 0);
// Test 4
console.log("Is number >= 10? I predict True.");
console.log(number >= 10);
// Test 5
console.log("Is number != 5? I predict True.");
console.log(number != 5);
// Test 6
console.log("Is number === '10'? I predict False.");
console.log(number === 10);
// Test 7
console.log("Is number !== '10'? I predict True.");
console.log(number !== 10);
// Test 8
console.log("Is number <= 8? I predict False.");
console.log(number <= 8);
// Test 9
console.log("Is number > 20? I predict False.");
console.log(number > 20);
// Test 10
console.log("Is number == -10? I predict False.");
console.log(number == -10);*/
/*                          Qno 24:
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one
False result for each of the following:
                            Code:
//• Tests for equality and inequality with strings
let fruit = 'apple';
// Test 1
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
// Test 2
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');
// Test 3
console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana');

//• Tests using the lower case function
let city = 'New York';
// Test 1
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');
// Test 2
console.log("Is city.toLowerCase() == 'new york'? I predict False.");
console.log(city.toLowerCase() == 'los angeles');

• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to
let number = 10;
// Test 1
console.log("Is number > 5? I predict True.");
console.log(number > 5);
// Test 2
console.log("Is number < 0? I predict False.");
console.log(number < 0);
// Test 3
console.log("Is number >= 10? I predict True.");
console.log(number >= 10);
// Test 4
console.log("Is number <= 5? I predict False.");
console.log(number <= 5);

• Tests using "and" and "or" operators
let age = 25;
// Test 1
console.log("Is age > 18 and age < 30? I predict True.");
console.log(age > 18 && age < 30);
// Test 12
console.log("Is age < 18 or age > 30? I predict False.");
console.log(age < 18 || age > 30);

//• Test whether an item is in a array
let fruits = ['apple', 'banana', 'orange'];
// Test 1
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes("banana"));
// Test 2
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes("grape"));

/• Test whether an item is not in a array
// Test 1
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
// Test 2
console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(!fruits.includes('apple'));*/
/*                                      Qno 25:
Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called
 alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a
 message that the player just earned 5 points.
                                         Code:
let alien_color: string = "green";
        if(alien_color== "green")
        {
            console.log( "Player earned 5 points:)");
        }
/• Write one version of this program that passes the if test and another that fails.
 //(The version that fails will have no output.)
                               Code:
let alien_color: string = "green";
if(alien_color== "green")
 {
  console.log("Player earned 5 points:)");
}
let alien_color: string = " red";
if(alien_color=="green")
{
    console.log("Player earned 5 points");
}*/
/*                             Qno 26:
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
                                    Code:
let alien_color: string = 'green';
if (alien_color === 'green') {

    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting down an alien that isn't green.");
}

let alien_color: string = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting down an alien that isn't green.");
}*/
/*                                    Qno 27:
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
Write three versions of this program, making sure each message is printed for the appropriate color alien.
                                 Code:
• If the alien is green, print a message that the player earned 5 points.
let alien_color: string = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting down the yellow alien.");
} else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting down the red alien.");
}

• If the alien is yellow, print a message that the player earned 10 points.
let alien_color: string = 'yellow';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting down the yellow alien.");
} else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting down the red alien.");
}
• If the alien is red, print a message that the player earned 15 points.
let alien_color: string = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down the green alien.");
} else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting down the yellow alien.");
} else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting down the red alien.");
}*/
/*                                Qno 28:
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
                                  Code:
let age: number = 30;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}*/
/*                           Qno 29:
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas!
                             Code:
let favorite_fruits: string[] = ['apple', 'banana', 'orange'];
if (favorite_fruits.indexOf('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.indexOf('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.indexOf('orange')) {
    console.log("You really like oranges!");
}
if (favorite_fruits.indexOf('grape')) {
    console.log("You really like grapes!");
} else {
    console.log("You don't like grapes!");
}
if (favorite_fruits.indexOf('kiwi')) {
    console.log("You really like kiwis!");
} else {
    console.log("You don't like kiwis!");
}*/
/*                              Qno30:

Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log
in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would
you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
                              Code:
let usernames: string[] = ['admin', 'Aliza', 'Nida', 'Sanila', 'Javeria'];
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello! "+username+" Thank you for logging in again.");
    }
}*/
/*                         Qno 31:
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
                          Code:
let usernames: string[] = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello! "+username+ " Thank you for logging in again.");
        }
    }
}*/
/*                        Qno 32:
Checking Usernames: Do the following to create a program that simulates how websites ensure
that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new
usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username. If a
username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
                             Code:
let current_users: string[] = ['javeria', 'aliza', 'benish', 'ayesha', 'sarah'];
let new_users: string[] = ['parii', 'Javeria', 'aliza', 'kainat', 'miral'];
let current_users_lowercase: string[] = current_users.map(username => username.toLowerCase());
for (let new_user of new_users) {
    let new_user_lowercase = new_user.toLowerCase();
    if (current_users_lowercase.indexOf(new_user_lowercase)) {
        console.log("Sorry, the username "+new_user+ " is already taken. Please enter a new username.");
    } else {
        console.log("Congratulations! The username " +new_user+ " is available.");
    }
}*/
/*                       Qno 33:
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
 Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
                            Code:
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(+number+" st");
    } else if (number === 2) {
        console.log(+number+" nd");
    } else if (number === 3) {
        console.log(+number+ " rd");
    } else {
        console.log(+number+" th");
    }
}*/
/*                     Qno 34:
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing
just the name of the pizza. For each pizza you should have one line of output containing a
simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like
pizza. The output should consist of three or more lines about the kinds of pizza you like
and then an additional sentence, such as I really love pizza!
                       Code:
let pizzas: string[] = ['Pepperoni', 'Fajita', 'BBQ Chicken'];
for (let i=0;i<pizzas.length;i++) {
    console.log("I like "+pizzas+ " pizza.");
}
console.log("I really love pizza!");*/
/*                     Qno 35:
Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a
sentence such as Any of these animals would make a great pet!
                        Code:
let animals: string[] = ['Dog', 'Cat', 'Rabbit'];
console.log(animals);
for (let animal of animals) {
    console.log("A "+animal+ " would make a great pet.");
}
console.log("Any of these animals would make a great pet!");*/
/*                        Qno 36:
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
should be printed on the shirt. The function should print a sentence summarizing the size of the
shirt and the message printed on it. Call the function.
                          Code:
function make_shirt(size: string, message: string): void {
    console.log("The shirt size is " +size+" and it has the message:" +message);
}
make_shirt("Medium", "Hello World!");*/
/*                       Qno 37:
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and
a shirt of any size with a different message.
                        Code:*
function make_shirt(size: string="large", message: string=" I love Typescript."): void {
    console.log("The shirt size is " +size+" and it has the message:" +message);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", " Hello World!");*/
/*                     Qno 38:
Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter
for the country a default value. Call your function for three different cities, at least one of
which is not in the default country.
                     Code:
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("New York", "USA");
describe_city("Tokyo", "Japan");*/
/*                   Qno 39:
City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
                   Code:
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("New York", "USA");
let city3 = city_country("Tokyo", "Japan");
console.log(city1);
console.log(city2);
console.log(city3);*/
/*                  Qno 40:
Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a
Object containing these two pieces of information. Use the function to make three
dictionaries representing different albums. Print each return value to show that
Objects are storing the album information correctly. Add an optional parameter to
make_album() that allows you to store the number of tracks on an album. If the calling
line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.
                      Code:
function make_album(artist: string, title: string, tracks?: number):
{ artist: string, title: string, tracks?: number }
{
    let album: { artist: string, title: string, tracks?: number } = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Artist 1", "Album 1");
let album2 = make_album("Artist 2", "Album 2", 10);
let album3 = make_album("Artist 3", "Album 3");
console.log(album1);
console.log(album2);
console.log(album3);*/
/*                   Qno 41:
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.
                    Code:
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
show_magicians(magicians);*/
/*                    Qno 42:
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each
magician’s name. Call show_magicians() to see that the list has actually been modified.
                        Code:
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
make_great(magicians);
show_magicians(magicians);*/
/*                  Qno 43:
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to
each magician’s name.
                     Code:
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
let great_magicians: string[] = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);*/
/*                  Qno 44:
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call
provides, and it should print a summary of the sandwich that is being ordered. Call the
function three times, using a different number of arguments each time.
                     Code:
function sandwich_summary(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (let item of items) {
            console.log("- " + item);
        }
    }
    console.log("----------------------------------");
}
sandwich_summary("Ham", "Cheese", "Lettuce", "Tomato");
sandwich_summary("Turkey", "Swiss Cheese");
sandwich_summary();*/
/*                    Qno 45:
Cars: Write a function that stores information about a car in a Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an
optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
                     Code:*/
function car_info(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, details_1 = details; _a < details_1.length; _a++) {
        var _b = details_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var car = car_info("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
console.log(car);
