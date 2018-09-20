import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it( 'renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow( <Hello name='Lucas' /> );
  expect( hello.text() ).toEqual( 'Hello Lucas!' );
} );

it( 'renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow( <Hello enthusiasmLevel={ 1 } name='Lucas' /> );
  expect( hello.text() ).toEqual( 'Hello Lucas!' );
} );

it( 'renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow( <Hello name='Arroz' enthusiasmLevel={ 5 } /> );
  expect( hello.text() ).toEqual( 'Hello Arroz!!!!!' );
} );

it( 'throws when the enthusiasm level is 0', () => {
  expect( () => enzyme.shallow( <Hello enthusiasmLevel={ 0 } name='Arroz' /> ) ).toThrow();
} );

it( 'throws when the enthusiasm level is negative', () => {
  expect( () => enzyme.shallow( <Hello enthusiasmLevel={ -1 } name='Arroz' /> ) ).toThrow();
} );