Diary Code 2 Christian Bauer  

principles of object oriented design: 

Abstraktion (abstraction):  
breaking objects down into their relevant attributes and functions  

Kappselung (encapsulation):  
seperating objects from the main programm and making them do their own functionalities  

Vererbung (inheritance):  
superclasses passing down all their attributes and methods down to their subclasses  

Polymorphie (polymorphism):  



General:

for of loops, get the values of the Array  
for in loops, get the key/index of the Array 
hetero Array when it keeps all kinds of data  
homo when it keeps Data of the same type  

Ballerburg:  

Classes:  

Questions to ask when creating a class:  

what does it have?(attributes)  
what can it do?(methods)  
what does it know?(outside information)  
who holds it?  
what is it??  

Two commandments:

every object is as dumb as it can be
every object is as smart as it needs to be
Things to consider when creating classes:  

use one file per class and write export infront of the class in order for it to be used in other parts of the program  
name the files containing the classes the same as the class  
and refer to them in the html file (defer will work as well, use with all the scripts just to be safe)  
consider the order in which the scripts are listed when refering the classes to each other  
constructor:  




https://jirkadelloro.github.io/EIA2-Inverted/L09_Classes/  
put classes in seperate files with "export class ClassName"  
classes to be used in the same program must use the same namespace
properties declared in constructor can be given _property? to only use them if needed  
null: represents absence of any object value and is treated as falsy(https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

Creating Subclasses:(https://www.basedash.com/blog/how-to-create-a-subclass-in-javascript) and (https://jirkadelloro.github.io/EIA2-Inverted/L10_Inheritance/)  
use constructor when adding attributes in the subclass and utilise super in which you put in all the attributes previously used in the superclass and then add the new attribute with this.

Oldmacdonald:

when counting through an array < not <=  
when counting through an Array with < of for example 3 it counts 0, 1, 2 which are 3 numbers   
when counting with <= it counts 0, 1, 2, 3 and prints an error message because there are only three objects in the array  
call functions from subclasses in Superclass to utilise them when calling the Animals from the Array  



