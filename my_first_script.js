// Fonction1  "Awkward monkey" dans ToonBoom, test
function my_func() {

var bool = true
bool = true
MessageBox.information(bool)
}function 

/* Fonction2 :  "This is fine" dans ToonBoom. Sert à tester les nouvelles notions de cours
à savoir  
- les booleans (my_var)
- les strings "Hello World" avec des guillemets \"
- les arrays

*/

my_func2() {

//Partie 1 : Booléens
var A = 10
var B = 30
var my_var = A < B 
//Partie 2 : String
var heart = "❤️" 
if (my_var) 
    { MessageBox.information("\"Hello World\"  ٩(◕‿◕｡)۶ "+ heart + heart ) }

var phrase = "hi"
var message = phrase + heart
message = message + heart //auto-référence
message += heart // simplification de l'opérateur. Ne pas remettre var
message += heart
message += heart
MessageBox.information(message)

//Partie 3 : Array
var array = ["Oui ","Non ","Peut-être "]
MessageLog.trace(array[1]) // Attention!! l'index commence à 0 comme un ascenceur qui commence à 0 
var my_index = 2
my_string =  array[0] + array[my_index] 
MessageLog.trace(my_string)

}
