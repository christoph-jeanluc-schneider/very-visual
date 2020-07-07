class Grid {

    constructor() {
        this.rows = rows;
        this.columns = columns;

        this.values = [];

        for( let r = 0; r < this.rows; r++ ) {

            let row = [];

            for( let c = 0; c < this.columns; c++ ) {
                row.push( 0 );
            }

            this.values.push( row );
        }

        this.draw_times = [];
    }

    draw() {
        let start = Date.now();

        for( let r = 0; r < this.rows; r++ ) {
            for( let c = 0; c < this.columns; c++ ) {
                this.values[ r ][ c ] -= 8;
                if( this.values[ r ][ c ] < 0 ) this.values[ r ][ c ] = 0;
                if( this.values[ r ][ c ] > 255 ) this.values[ r ][ c ] = 255;

                let char = toAscii( this.values[ r ][ c ] );

                textSize( 16 );
                fill( 200 );
                text( char, ( c * 10 ) + 4, ( r * 16 ) + 14 );

            }
        }

        this.draw_times.push( Date.now() - start );
    }

}
