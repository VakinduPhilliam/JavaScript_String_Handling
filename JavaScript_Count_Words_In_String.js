
/*The following script demonstrates how to count the number of words in a string sentence*/
/*Written in Vanilla JavaScript*/
/*Written by Vakindu Philliam*/

var words="In computer science and operations research, a genetic algorithm (GA) is a Metaheuristic inspired by the process of natural selection that belongs to the larger class of evolutionary algorithms (EA). ";

//Split the words in the string

var m = words.split(/\s/);

//Display the results of the count

document.write(m.length);