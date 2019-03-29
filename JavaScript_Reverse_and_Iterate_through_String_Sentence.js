
/*The following JavaScript function demonstrates how to reverse the words of a string sentence and iterate through them.*/
/*Written in Vanilla JavaScript*/
/*Written by Vakindu Philliam*/

var n = function reverseSentence(words){

//Split the words in the string

var m = words.split(/\s/);

//Variable to store reversed words

var reversed=[];

//Iterate through the elements of string sentence

for(var i=m.length;i>-1;i--){

//Store words in reverse array

reversed.push(m[i]);

  }


for(var j=0;j<reversed.length;j++){

//Display reversed sentence and iterate through them

document.write(reversed[j]+"<p>");

  }
}

var sentence="In computer science and operations research, a genetic algorithm (GA) is a Metaheuristic inspired by the process of natural selection that belongs to the larger class of evolutionary algorithms (EA).";

//Display reversed sentence

n(sentence);
