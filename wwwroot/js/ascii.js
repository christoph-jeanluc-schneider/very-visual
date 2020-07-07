var ascii_characters = " ,-~:;=!*#$@";

function toAscii( value ) {
    if( typeof value != "number" || value < 0 ) return ",";
    if( value > 255 ) return "@";
    return ascii_characters[ Math.floor( value / 23 ) ];
}