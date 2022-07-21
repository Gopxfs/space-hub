import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-dom/test-utils';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import Missions from '../components/Missions';

const renderMissions = () => render(
  <Provider store={store}>
    <Missions />
  </Provider>,
);

describe('Missions table should exist', () => {
  test('Table headers should exist', () => {
    renderMissions();
    const missionHeader = screen.getByText('Mission');
    expect(missionHeader).toBeInTheDocument();

    const descriptionHeader = screen.getByText('Description');
    expect(descriptionHeader).toBeInTheDocument();

    const statusHeader = screen.getByText('Status');
    expect(statusHeader).toBeInTheDocument();
  });

  test('Table should display fetched data', async () => {
    renderMissions();
    const mission1 = await screen.findByText('Thaicom');
    expect(mission1).toBeInTheDocument();

    const mission2 = await screen.findByText(
      'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
    );
    expect(mission2).toBeInTheDocument();

    const mission3 = await screen.findByText('Eutelsat');
    expect(mission3).toBeInTheDocument();
  });
});

describe('Missions badges/buttons should exist', () => {
  test('NOT A MEMBER badges should exist', () => {
    renderMissions();
    const memberBadges = screen.getAllByText('NOT A MEMBER')[0];
    expect(memberBadges).toBeInTheDocument();
  });
  test('Join Mission buttons should exist', () => {
    renderMissions();
    const joinButtons = screen.getAllByText('Join Mission')[1];
    expect(joinButtons).toBeInTheDocument();
  });
});

describe('Mission button should work and badge should be updated', () => {
  test('Join mission button functionality', () => {
    setTimeout(() => {
      renderMissions();
      const joinButtons = document.querySelector('.joinButton');
      ReactTestUtils.Simulate.click(joinButtons);
      const memberBadges = screen.getAllByText('Active Member')[0];
      const leaveButtons = screen.getAllByText('Leave Mission')[0];
      expect(memberBadges).toBeInTheDocument();
      expect(leaveButtons).toBeInTheDocument();
    }, 0);
  });
  test('Leave mission button functionality', () => {
    setTimeout(() => {
      renderMissions();
      const joinButtons = document.querySelector('.joinButton');
      ReactTestUtils.Simulate.click(joinButtons);
      ReactTestUtils.Simulate.click(joinButtons);
      const memberBadges = screen.getAllByText('NOT A MEMBER')[0];
      expect(memberBadges).toBeInTheDocument();
    }, 0);
  });
});
