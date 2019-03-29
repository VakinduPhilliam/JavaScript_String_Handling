
/*The following JavaScript function demonstrates how to identify the nth word in a given string sentence*/
/*Written in Vanilla JavaScript*/
/*Written by Vakindu Philliam*/

var n = function NthWord(sentence,nth){

//Split the sentence into individual words

var m = sentence.split(/\s/);

//Return unapplicable if n is greater than the length of the sentence

if(nth>m.length){

return document.write("Sorry!!! This sentence has only: "+m.length+" Words.");

}

//Else, iterate through the elements of string sentence

for(var i=0;i<m.length && i<nth+1;i++){

//Identify the nth word in a sentence

  if(i==nth){

  var nthWord=m[i];

   }
 }	

//Display nth word

return document.write("The "+nth+"th word in this Sentence is: "+nthWord);

}

var txt="In computer science a genetic algorithm (GA) is a Metaheuristic inspired by the process of natural selection that belongs to the larger class of evolutionary algorithms.";

//Display nth Word

document.write(n(txt,9));
