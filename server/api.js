module.exports = ( service ) => {

    service.get( "/routing", ( req, res ) => {
        res.send( {
            foo: "bar"
        } );
    } );
    
};