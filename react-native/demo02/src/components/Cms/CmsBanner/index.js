import React from 'react';
import Swiper from 'react-native-swiper';
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { unitWidth } from '../../../utils';

export default class Banner extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      imgs: []
    }
  }

  componentDidMount() {
    const { component: { jsonContent: { contents } } } = this.props;
    const imgs = [];
    contents.map((i, idx) => {
      const { imgUrl } = i;
      Image.getSize(imgUrl, (width, height) => {
        i.imgWidth = unitWidth * width;
        i.imgHeight = unitWidth * height;
        imgs[idx] = i;
        this.setState({
          imgs
        })
      })
    })
  }

  _onPress (item) {
    this.props.navigation.navigate('Detail');
  }

  render () {
    const { imgs } = this.state;

    return (
      <View style={{ width: !!imgs.length && imgs[0].imgWidth, height: !!imgs.length && imgs[0].imgHeight }}>
        <Swiper>
        {
          imgs.map((i, idx) => {
            return (
              <TouchableHighlight style={{flex: 1}} key={idx} onPress={() => this._onPress(i)}>
                <Image source={{uri: i.imgUrl}} style={{ width: i.imgWidth, height: i.imgHeight }} />
              </TouchableHighlight>
            )
          })
        }
      </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
