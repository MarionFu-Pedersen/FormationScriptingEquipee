
// In TB Harmony, get the rotation value of a peg (on axis Z, simple rotation in 2D environment)
function get_rotation(peg){
    var rotation_string = node.getTextAttr(peg,frame.current(),"ROTATION.ANGLEZ")
    rotation = parseFloat(rotation_string)
    return rotation
}

// In TB Harmony, set the rotation value of a peg (on axis Z, simple rotation in 2D environment) on a set value
function set_rotation(peg,rotation){
    node.setTextAttr(peg,"ROTATION.ANGLEZ", frame.current(),rotation)
}