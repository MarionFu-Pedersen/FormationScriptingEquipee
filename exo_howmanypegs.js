// cet exercice simule un sanity check de rig

//but de l'exercice : on veut la liste des pegs dont la rotation n'est pas 0

function get_rotation(peg){
    var rotation = node.getTextAttr(peg,frame.current(),"ROTATION.ANGLEZ")
    return rotation
}



function show_how_many_pegs(){
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
        



