import enthusiasm from './enthusiasm';

it( 'adds 1 to enthusiasmLevel', () => {
  const nextState = enthusiasm( { enthusiasmLevel: 1, languageName: 'TypeScript' }, { type: 'INCREMENT_ENTHUSIASM' } );
  expect( nextState ).toEqual( { enthusiasmLevel: 2, languageName: 'TypeScript' } );
} );
it( 'subtracts 1 of enthusiasmLevel', () => {
  const nextState = enthusiasm( { enthusiasmLevel: 2, languageName: 'TypeScript' }, { type: 'DECREMENT_ENTHUSIASM' } );
  expect( nextState ).toEqual( { enthusiasmLevel: 1, languageName: 'TypeScript' } );
} );
it( 'does not permit decrementing enthusiasmLevel below 1', () => {
  const nextState = enthusiasm( { enthusiasmLevel: 1, languageName: 'TypeScript' }, { type: 'DECREMENT_ENTHUSIASM' } );
  expect( nextState ).toEqual( { enthusiasmLevel: 1, languageName: 'TypeScript' } );
} );