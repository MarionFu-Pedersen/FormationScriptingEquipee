function show_nb_of_pegs(){
    var list_node_types = ["PEG"]
    var list_node = node.getNodes(list_node_types)
    nb_peg = list_node.length
    MessageBox.information("Nb of Peg in your scene : " + nb_peg)
    MessageBox.information(list_node[0])
}