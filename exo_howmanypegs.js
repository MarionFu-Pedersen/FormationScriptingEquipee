// cet exercice simule un sanity check de rig

function show_how_many_pegs(){
    var peg_list = node.getNodes(["PEG"])
    MessageLog.trace(peg_list)
    var total_nb_peg = peg_list.length
    MessageLog.trace(total_nb_peg)

}


