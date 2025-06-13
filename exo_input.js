include("C:/Users/Travail-4/Documents/Formation_TB_Scripting/FormationScriptingEquipee/useful_function.js")


function rappel_aide_cours (){
    var my_dialog = new Dialog(); //créer une nouvelle instance de la classe dialogue
    my_dialog.title = "Test box de l'enfer ❤️"; // titre de la fenêtre

    var input1 = new LineEdit(); //génère une instance d'input Line
    input1.label = "Phrase"; // label = text qu'il y a avant l'input
    my_dialog.add( input1 ); // ajoute inputL dans la classe my_dialog  
    
    var input2 = new NumberEdit(); // un autre type existe : NumberEdit qui bloque les lettres et oblige l'user a entrer des chiffres
    input2.label = "N° de lettre recherchée "; 
    my_dialog.add( input2 ); 

    if ( my_dialog.exec() )   //sorte de sanity check, s'assure que tous les éléments peuvent être afficher sans problème.
    {
        // tout ce qui arrive après ce code est executé après que le user appuie sur 'ok'
        var text = input1.text  
        var index = input2.value - 1
        var numero_lettre = text[index]
        MessageBox.information( "la " + input2.value + "eme lettre de " + text + " est " + numero_lettre + "!!!")
    }
}


//In TB get the name of a node, by isolating the last element oof the path
function get_node_name(_node){
    if(_node==undefined){
        MessageLog.trace ("GET NODE NAME "+_node)

    }
    var node_path = _node.split("/")
    var last_array = node_path.length - 1
    var node_name = node_path[last_array]
    MessageLog.trace ("Current node name : " + node_name)
    return node_name
    
}

function  request_user_input(){
    var dial = new Dialog()
    dial.title = "Add input to node name"
    var input = new LineEdit()
    input.label = "Add prefix :"
    dial.add(input)
    if (dial.exec()){
        MessageLog.trace ("User input : " + input.text)
        return input.text
    }

}

function add_input_to_node_name(_node){
    var input = request_user_input()
    MessageLog.trace("Adding input to node name")
    var node_name = get_node_name(_node)
    MessageLog.trace(node_name)
    var result =  input + node_name
    return result
}

function rename_node_with_prefix(){
    var  current_node = selection.selectedNode(0)
    MessageLog.trace("TEST"+current_node)
    var new_name = add_input_to_node_name(current_node)
    node.rename(current_node,new_name)
}