
/*The following script demonstrates how to iterate through a string sentence of words*/
/*Written in Vanilla JavaScript*/
/*Written by Vakindu Philliam*/

var words="In computer science and operations research, a genetic algorithm (GA) is a Metaheuristic inspired by the process of natural selection that belongs to the larger class of evolutionary algorithms (EA). ";

//Split the words in the string

var m = words.split(/\s/);

//Iterate through the elements of string

for(var i=0;i<m.length;i++){

//Display each word

document.write(m[i]+"<p>");

}
