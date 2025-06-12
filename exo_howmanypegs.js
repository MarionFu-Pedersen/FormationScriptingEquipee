// cet exercice simule un sanity check de rig

//but de l'exercice : on veut la liste des pegs dont la rotation n'est pas 0

include("C:/Users/Travail-4/Documents/Formation_TB_Scripting/FormationScriptingEquipee/useful_function.js")

// le préfixe BT signifie que la fonction est un bouton
function BT_show_how_many_pegs(){
    var peg_list = node.getNodes(["PEG"])
    var rotated_pegs = []

    for (var i in peg_list) {
      // for (var i in list_of_peg) = for( i = 0 ; i < list_of_peg.length ; i++)  
      current_peg = peg_list[i]
      MessageLog.trace("Currently analyzing : "+ current_peg)
      peg_rotation = get_rotation(current_peg)

        if (peg_rotation !=0){
            MessageLog.trace(current_peg + "'s rotation not egal to 0")
            MessageLog.trace(current_peg + "added to rotated peg list")
            rotated_pegs.push(current_peg)
            }
        }

if (rotated_pegs.length == 0){
    MessageBox.information("Congrats, your peg rotations are all good !")
}

else {
    rotated_pegs_string = rotated_pegs.join("\n")
    MessageBox.information ("You have " + rotated_pegs.length + " pegs that are rotated" + "\n" + rotated_pegs_string)
}
      
      }


function BT_rotate_peg_90degrees(){
    var selected_peg = selection.selectedNode(0)
    old_angle = get_rotation(selected_peg)
    new_angle = old_angle + 90
    set_rotation(selected_peg,new_angle)
   
}
        



