import * as enzyme from 'enzyme';
import * as React from 'react';
import Hello from './Hello';

it( 'renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow( <Hello name='Lucas' /> );
  expect( hello.find( '.greeting' ).text() ).toEqual( 'Hello Lucas!' );
} );

it( 'renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow( <Hello enthusiasmLevel={ 1 } name='Lucas' /> );
  expect( hello.find( '.greeting' ).text() ).toEqual( 'Hello Lucas!' );
} );

it( 'renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow( <Hello enthusiasmLevel={ 5 } name='Arroz' /> );
  expect( hello.find( '.greeting' ).text() ).toEqual( 'Hello Arroz!!!!!' );
} );

it( 'throws when the enthusiasm level is 0', () => {
  expect( () => enzyme.shallow( <Hello enthusiasmLevel={ 0 } name='Arroz' /> ) ).toThrow();
} );

it( 'throws when the enthusiasm level is negative', () => {
  expect( () => enzyme.shallow( <Hello enthusiasmLevel={ -1 } name='Arroz' /> ) ).toThrow();
} );

it( 'invokes "onIncrement" callback when increment button is clicked', () => {
  const onIncrement = jest.fn();
  const hello = enzyme.shallow( <Hello enthusiasmLevel={ 5 } name='Arroz' onIncrement={ onIncrement } /> );

  hello.find( '.hello-increment' ).simulate( 'click' );

  expect( onIncrement ).toHaveBeenCalled();
} );

it( 'invokes "onDecrement" callback when decrement button is clicked', () => {
  const onDecrement = jest.fn();
  const hello = enzyme.shallow( <Hello enthusiasmLevel={ 5 } name='Arroz' onDecrement={ onDecrement } /> );

  hello.find( '.hello-decrement' ).simulate( 'click' );

  expect( onDecrement ).toHaveBeenCalled();
} );