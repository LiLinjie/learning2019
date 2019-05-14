import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import imgParser from '../../../utils';

export default class TitleLink extends React.Component {
  _onPress () {
    console.log('onpress')
  }

  render () {
    const { component: { type, styleName, 
      jsonContent: { enableBtnMore, enableImg, imgUrl, linkType, objectId, targetUrl, text } } } = this.props;
      console.log(enableImg)
    return (
      <TouchableHighlight style={styles.cmsPanel} onPress={() => this._onPress()}>
        {
          enableImg ?
            <Image source={{uri: imgUrl}} />
            :
            <Text>{ text }</Text>
        }
        {
          enableBtnMore && (
            <Text style={styles.more}>more</Text>
          )
        }
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  cmsPanel: {
    flex: 1
  },
  more: {

  }
})