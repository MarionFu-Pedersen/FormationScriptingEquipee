
// In TB Harmony, get the rotation value of a peg (on axis Z, simple rotation in 2D environment)
function get_rotation(peg){
    var rotation_string = node.getTextAttr(peg,frame.current(),"ROTATION.ANGLEZ") //!! getTextAttr always returns a string
    rotation = parseFloat(rotation_string)
    return rotation
}

// In TB Harmony, set the rotation value of a peg (on axis Z, simple rotation in 2D environment) on a set value
function set_rotation(_node,rotation){
    node.setTextAttr(_node,"ROTATION.ANGLEZ", frame.current(),rotation)
}

// In TB Harmony, set x to input value
function set_x(_node,position_x){
    node.setTextAttr(_node,"POSITION.X", frame.current(),position_x)
}

// In TB Harmony, set x to input value
function set_y(_node,position_y){
    node.setTextAttr(_node,"POSITION.Y", frame.current(),position_y)
}  

//In TB, sets coordinate with x and y value
function set_position(_node, position_x , position_y){
    set_x(_node,position_x)
    set_y(_node, position_y)
}


