import React from 'react';
import enzyme from 'enzyme';
import HelloClass from './HelloClass';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<HelloClass name="Daniel" />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!")
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<HelloClass name="Daniel" enthusiasmLevel={1} />)
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
});

it('renders the correct text with an explicit enthusiasm of 5', () => {
  const hello = enzyme.shallow(<HelloClass name="Daniel" enthusiasmLevel={5} />)
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!!!!!");
});

it('throws when enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<HelloClass name="Daniel" enthusiasmLevel={0} />)
  }).toThrow();
});

it('throws when enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<HelloClass name="Daniel" enthusiasmLevel={-5} />)
  }).toThrow();
});