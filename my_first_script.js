// Fonction1  "Awkward monkey" dans ToonBoom, test
function my_func() {

var bool = true
bool = true
MessageBox.information(bool)
} 

/* Fonction2 :  "This is fine" dans ToonBoom. Sert à tester les nouvelles notions de cours
à savoir  
- les booleans (my_var)
- les strings "Hello World" avec des guillemets \"
- les arrays
- les objets
*/


function my_func2() {

// Partie 1 : Booléens
var A = 10
var B = 30
var my_var = A < B 
// Partie 2 : String
var heart = "❤️" 
if (my_var) 
    { MessageBox.information("\"Hello World\"  ٩(◕‿◕｡)۶ "+ heart + heart ) }

var phrase = "Nouveau lancement"
var message = phrase + heart
message = message + heart //auto-référence
message += heart // simplification de l'opérateur. Ne pas remettre var
message += heart
message += heart
MessageLog.trace(message)

// Partie 3 : Array
var array = ["Oui ","Non ","Peut-être "]
MessageLog.trace(array[1]) // Attention!! l'index commence à 0 comme un ascenceur qui commence à 0 
var my_index = 2
my_string =  array[0] + array[my_index] 
MessageLog.trace(my_string)

//Ajouter des valeurs dans l'array
var array2 = []
array2.push("Head") // array2[0] = Head
array2.push("Torso") // array2[1] = Torso
array2.push("Arm L") // etc
array2.push("Arm R")
array2.push("Leg L")
array2.push("Leg R")
MessageLog.trace(array2)
//modifier une array
array2[0] = "Face" // remplacement de valeur à l'index 0
MessageLog.trace(array2)
MessageLog.trace(array2.length) //nb de valeur
array2.push("Tail")
MessageLog.trace(array2)
MessageLog.trace(array2.length) 


//plot twist : les strings sont des array, les synthaxes d'array s'appliquent donc de la même manière aux strings
var mots1 = "Camion"
  var mots2 = "Olive"
  var mots3 = "Original"
  var mots4 = "Long"

  var mots_cache = mots1[0] + mots2[0] + mots3[0] + mots4[0]
  MessageBox.information(mots_cache)

  var phrase = "the quick brown fox jumps over the lazy dog"
  var word_count = phrase.split(" ") // enlève les espaces
  var letters = word_count.join("") // recréer une string
  MessageLog.trace(letters)
  //peut être simplifiée par :
  var letters = phrase.split(" ").join("")
  MessageLog.trace(letters) 
  
  MessageLog.trace("the fox phrase has " + phrase.length + " characters, " + word_count.length + " words, " + "and " + letters.length + " letters")
  

  // Partie 3 : les objets
  var student_data = {
      "name" : "Marion" ,
      "max_brain_capacity" : 100 , 
      "damage_per_new_information" : 10 , 
      "learning score" : 20 , 
      "skill" : {
          "coding tools" : ["VSCODE", "TOONBOOM" , "Github Desktop"] ,
          "professional skills" : ["excel","production management","people skill"] ,
          
        }
    }
var current_braincapacity = student_data.max_brain_capacity 
current_braincapacity -= student_data.damage_per_new_information // dommages liés aux arrays
current_braincapacity -= student_data.damage_per_new_information // dommages liés aux objets
MessageBox.information("Marion's current brain capacity is : " + current_braincapacity + " /" + student_data.max_brain_capacity)
}
