/*
Faire un bouton qui déplace les lunettes sur le nez du chien. L'information est cachée dans les nodes. 
*/

include ("C:/Users/Travail-4/Documents/Formation_TB_Scripting/FormationScriptingEquipee/useful_function.js")

function glasses(){
    var node_name = "GLASSES_X12_Y7"
    var coords = find_coord_in_string(node_name)
    var position_x = coords.x
   var position_y = coords.y
   var node_list = node.getNodes(["PEG"])
    MessageLog.trace("list of pegs : " + node_list)
   for ( var i in node_list ){
    current_peg = node_list[i]
    if (current_peg.indexOf("GLASSES") != false){
        MessageLog.trace("This peg has glasses")
        node.setCoord(current_peg,position_x,position_y)
    }
    
   }
    MessageBox.information(JSON.stringify(coords))
}


function is_number(){
    if("0123456789".indexOf(second_char)==-1){
        return false
    }
    return true
}

function is_coord(_string){
    var frist_char = _string[0]
    if( (frist_char=="Y" || frist_char=="X") == false ){
        return false
    }
    var split_first_char = _string.split(frist_char)
    var after_first = split_first_char[1]
    if(isNaN(parseInt(after_first))==true){
        return false
    }
    return true
}

function extract_number(_string){
    var frist_char = _string[0]
    var split_first_char = _string.split(frist_char)
    var after_first = split_first_char[1]
    return parseInt(after_first)
}

function find_coord_in_string(_string){
    
    var split_underscore = _string.split("_") // ["GLASSES","X12","Y7"]
    var coords ={
        "x":0,
        "y":0
    }

    for ( var i in split_underscore){
        var current_split = split_underscore[i]
        if(is_coord(current_split)==false){
            continue
        }
        var frist_char = current_split[0]
        var number = extract_number(current_split)
        if(frist_char=="X"){
            coords.x = number
            continue
        }        
        if(frist_char=="Y"){
            coords.y = number
            continue            
        }
    }

    return coords

}
