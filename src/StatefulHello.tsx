import * as React from 'react';

function getExclamationMarks ( numChars: number ) {
    return Array( numChars + 1 ).join( '!' );
}

interface IState {
    currentEnthusiasm: number
};

class Hello extends React.Component<IProps, IState> {
    constructor ( props: IProps ) {
        super( props );
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }

    public render () {
        const { name } = this.props;
        if ( this.state.currentEnthusiasm <= 0 ) {
            throw new Error( 'Be more enthusiastic!!!' );
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello { name + getExclamationMarks( this.state.currentEnthusiasm ) }
                </div>
                <button onClick={ this.onDecrement }>-</button>
                <button onClick={ this.onIncrement }>+</button>
            </div>
        )
    }

    private onIncrement = () => this.updateEnthusiasm( this.state.currentEnthusiasm + 1 );
    private onDecrement = () => this.updateEnthusiasm( this.state.currentEnthusiasm - 1 );
    private updateEnthusiasm ( currentEnthusiasm: number ) {
        this.setState( { currentEnthusiasm } );
    }

}

export interface IProps {
    name: string,
    enthusiasmLevel?: number
};

export default Hello;