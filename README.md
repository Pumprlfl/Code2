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
parse analyse a sequence of symbols and interpret them (Json.parse)
Json.stringify turn something into a string  
"!" means that the Object to be selected is definitly there, without checking for it  
"window." accesses the html file/website, "window.addeventlistener("load", functiontoexecuteafterloading)" waits for the window to load  
variables declared in function cant be used outside of them they create their own namespace  



Ballerburg:  

Classes:  

L11 Inverted classroom (refer to : https://jirkadelloro.github.io/EIA2-Inverted/L11_Advanced/)

abstract Classes:
when a Class doesnt initialize any objects its an abtract class like Animal in oldmcdonald  
abstract method is when you have to call a method from the subclass in the superclass but actually create it in the superclass(L11)  

static:  
is used when a method is not used when initializing an Object, for example when calculating something used in another method later on(L11)  

public: everything can access this information(L11)  

private: only the class that this is declared in can use this Information(L11)  

protected: only this class and its subclasses can use this(L11)  

readonly can be used in conjunction with the others and is basically an equivalent to const as it declares that this variable can only be read but not changed(L11)  

with set you can access a private variable by creating a method (which you are able to access outside of the class) that changes that for example value(L11) 

with get you can return the value of calculation, that you can later call as what seems to be a variable, but is actually a method that is called when you use it in other parts of your code(L11) 

with enum you can create datatypes that only have a very limited amount of values they process and you can declare yourself, close to what boolean does which only processes true and false(L11)  



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

Fudge:  

Viewport a 2D Plane to display the Image  
Camera an Object to be placed in 3D object  
WebGl only renders triangles  
near and far plane define the space that is rendered this space is called frustum  
Identity Matrix is the Matrix that does nothing 1000/0100/0010/0001  
Node: joins components and builds parent child relationships
Graph: builds a connection of nodes (structure)
Branch: part of the Graph
mtx: Matrix
resource: Information to access 
Coordinates: z is forward and back, y is up down, x is left right  
mtxWorld: relative to the world
mtxLocal: relative to parent

