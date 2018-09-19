import * as React from 'react';

function getExclamationMarks ( numChars: number ) {
    return Array( numChars + 1 ).join( '!' );
}
export interface IProps {
    name: string,
    enthusiasmLevel?: number
};

export default function Hello ( { name, enthusiasmLevel = 1 }: IProps ) {
    if ( enthusiasmLevel <= 0 ) {
        throw new Error( 'You could be a little more enthusiastic. :bug:' );
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello { name + getExclamationMarks( enthusiasmLevel ) }
            </div>
        </div>
    )
};
