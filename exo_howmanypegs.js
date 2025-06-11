// cet exercice simule un sanity check de rig

function show_how_many_pegs(){
    var peg_list = node.getNodes(["PEG"])
    MessageLog.trace("The following pegs are created in the scene : " + peg_list)
    var total_nb_peg = peg_list.length
    MessageLog.trace("Number of pegs in the scene : " + total_nb_peg)

}


