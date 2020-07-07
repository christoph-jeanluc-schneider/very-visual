var fs = require( "fs" );
var path = require( "path" );
var pug = require( "pug" );

const VIEWS_ROOT = path.join( __dirname, "../views" );

module.exports = ( req, res, next ) => {

    while( req.path != "/" && req.path.slice( -1 ) == "/" )
        req.path = req.path.substring( 0, req.path.length - 1 );
    req.path = req.path.replace( /../g, "." ).replace( /\/\//g, "/" );

    let file = `${VIEWS_ROOT}${req.path}.pug`;
    if( !fs.existsSync( file ) )
        if( req.path == "/" )
            file = `${VIEWS_ROOT}/index.pug`;
        else
            return res.send( "redirecting...", 302, { Location: "/" } );


    let locals = {
        basedir: VIEWS_ROOT,
        filename: file,
        params: req.params,
        query: req.query
    };

    let html = pug.renderFile( file, locals );
    res.end( html, 200 );  
};