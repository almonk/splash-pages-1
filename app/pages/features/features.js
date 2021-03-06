import React from 'react';
import Page from '../../components/page/page';
import FeaturesEn from './features.en';
import FeaturesFr from './features.fr';

export default class Features extends React.Component {
  displayName = 'Features'

  render() {
    return (
      <Page>
        <FeaturesEn />
        <FeaturesFr />
      </Page>
    );
  }
}
