import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import RocketItem from '../components/RocketList';

const LocalRocket = () => (
  <Provider store={store}>
    <RocketItem />
  </Provider>
);

describe('The  Rocket Card should display the fetch data rocket name', () => {
  LocalRocket();
  test('check the first rocket name should not null', () => {
    const firstRocketName = screen.findByText('Falcon 1');
    expect(firstRocketName).not.toBeNull();
  });
  test('check the second  rocket name shout not null', () => {
    const secondRocketName = screen.findByText('Falcon 9');
    expect(secondRocketName).not.toBeNull();
  });
  test('check the third rocket name shout not null', () => {
    const thridRocketName = screen.findByText('Falcon Heavy');
    expect(thridRocketName).not.toBeNull();
  });
  test('check the fourth  rocket name shout not null', () => {
    const fourthRocketName = screen.findByText('Starship');
    expect(fourthRocketName).not.toBeNull();
  });
});

describe('The  Rocket Card should display the fetch data rocket description', () => {
  LocalRocket();
  test('check the first rocket description should not null', () => {
    const firstRocketDesc = screen.findByText(
      'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    );
    expect(firstRocketDesc).not.toBeNull();
  });
  test('check the second  rocket description should not null', () => {
    const secondRocketDesc = screen.findByText(
      'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
    );
    expect(secondRocketDesc).not.toBeNull();
  });
  test('check the third  rocket description should not null', () => {
    const thirdRocketDesc = screen.findByText(
      'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
    );
    expect(thirdRocketDesc).not.toBeNull();
  });
  test('check the fourth  rocket description should not null', () => {
    const fourthRocketDesc = screen.findByText(
      'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
    );
    expect(fourthRocketDesc).not.toBeNull();
  });
});
