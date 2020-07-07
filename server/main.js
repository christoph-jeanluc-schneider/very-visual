var path = require( "path" );
var restana = require( "restana" );
var bodyParser = require( "body-parser" );
var files = require( "serve-static" );

const PORT = 3535;

var service = restana();
service.use( bodyParser.json() );
service.use( files( path.join( __dirname, "../wwwroot" ) ) );

require( "./api.js" )( service );

service.use( require( "./view.js" ) );

service.start( PORT ).then( ( server ) => {
    console.log( `server running on: http://localhost:${PORT}` );
} );