import * as React from 'react';

function getExclamationMarks ( numChars: number ) {
    return Array( numChars + 1 ).join( '!' );
}
export interface IProps {
    name: string,
    enthusiasmLevel?: number,
    onIncrement?: () => void,
    onDecrement?: () => void
};

export default function Hello ( { name, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps ) {
    if ( enthusiasmLevel <= 0 ) {
        throw new Error( 'You could be a little more enthusiastic. :bug:' );
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello { name + getExclamationMarks( enthusiasmLevel ) }
            </div>
            <div>
                <button className="hello-increment" onClick={ onIncrement }>+</button>
                <button className="hello-decrement" onClick={ onDecrement }>-</button>
            </div>
        </div>
    )
};
