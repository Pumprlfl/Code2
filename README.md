Diary Code 2 Christian Bauer  

principles of object oriented design: 

Abstraktion (abstraction):  
breaking objects down into their relevant attributes and functions  

Kappselung (encapsulation):  
seperating objects from the main programm and making them do their own functionalities  

Vererbung (inheritance):  
superclasses passing down all their attributes and methods down to their subclasses  

Polymorphie (polymorphism):  
one thing can take different forms, Subclasses can take the form of their Superclass when you for example put the subclasses in an Array of the of your superclass  



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
pop takes something out of an array for example  
a scope is what is inside of {}   
this.... means that it refers to the variable in this class  
_ is to be used as a variable within the function to avoid mistakes  


Classes:  

new ... creates a new Instance of a class  

L11 Inverted classroom (refer to : https://jirkadelloro.github.io/EIA2-Inverted/L11_Advanced/)

abstract Classes:
when a Class doesnt initialize any objects its an abtract class like Animal in oldmcdonald  
abstract method is when you have to call a method from the subclass in the superclass but actually create it in the superclass(L11)  

static:  
it is somthing that lives in the class and not within the instance of the class  
a static is always called when creating an instance of that class it lives within the class and not within the Instance, for example when the size is supposed to always be the same,   
this saves memory because this doesnt have to be saved in the instance but is saved in the class(L11)(underline it in diagrams)  

public: everything can access this information(L11)(write + in diagrams)  

private: only the class that this is declared in can use this Information(L11)(write - in diagrams)  

protected: only this class and its subclasses can use this(L11)(write # in diagrmas)  

readonly can be used in conjunction with the others and is basically an equivalent to const as it declares that this variable can only be read but not changed(L11)  

with set you can access a private variable by creating a method (which you are able to access outside of the class) that changes that for example value(L11) 

with get you can return the value of calculation, that you can later call as what seems to be a variable, but is actually a method that is called when you use it in other parts of your code(L11)  

with get and set 

with enum you can create datatypes that only have a very limited amount of values they process and you can declare yourself, close to what boolean does which only processes true and false(L11)  



Questions to ask when creating a class:  

what does it have?(attributes)  
what can it do?(methods)  
what does it know?(outside information)  
who holds it?(the variable you use to instance it "let...")  
what is it?(Type of)  

Two commandments:  

every object is as dumb as it can be  
every object is as smart as it needs to be(as much functionality as it needs to have to fulfill the task)  

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
when new info is created it is writte in upppercase

Programming patterns (refer to https://felix.hs-furtwangen.de/auth/RepositoryEntry/53903508/CourseNode/110701493389494):

Flyweight: try to use as little Data as possible, so share Data as much as possible between objects and bury the Data in the Code so create seperate Dataobjects (and Files with the Data like .json(JavaScriptObjectNotation)) that you can access with your Code instead of implementing the Data straight into the Code  

Observer: Ask about this? maybe it talks about parent child relations where changes that affect the parent also in reaction affect the child  

Object Pool: have a fixed pool of objects that you can reuse in order to just call them and not everytime without creating a new one all the time, to save up on storage and processing effort  
creating and deleting objects takes time, so reuse created objects to reduce load on the memory so that no new object has to be created and take up memory  

Game Loop: seperate the progression of game time from the actual processing to avoid slowdowns, the Game Loop tracks the passage of Time, the Inputs of the player, updates the Gamestate and renders the game   
-fixed: ask about this? maybe it gives every Frame that is supposed to be rendered a fixed amount of time causing slowdowns instead of framedrops  
-variable: ask? the opposite of fixed where it asigns an action to take a fixed amount of time and the frames are drawn as is possible (framedrops)  

Update Method: tell seperate objects to update/animate/simulate in their own way, maybe they need to run independantly in fixed or variable ways  

Entity Component System: allow things to span multiple domains (function, Class, Namespace...) not by couplin (ask?) the domains but by refering directly to each other, the state of Entity or sending messages with the Entity(maybe declearing global variables is something like this?ask)

Architecture,Performance,Games:  






