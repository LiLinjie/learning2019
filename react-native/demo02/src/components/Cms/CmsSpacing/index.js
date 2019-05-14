import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { unitWidth } from '../../../utils';

export default class Spacing extends React.Component {
  render () {
    const { component: { jsonContent: { height, color } } } = this.props;
    const styleSpacing = {
      height: unitWidth * height,
      backgroundColor: color
    };

    return (
      <View style={styles.cmsPanel}>
        <View style={styleSpacing}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cmsPanel: {

  }
})