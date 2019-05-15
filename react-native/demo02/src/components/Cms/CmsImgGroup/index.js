import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import { unitWidth } from '../../../utils'

export default class ImgGroup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      imgs: []
    }
  }

  componentDidMount() {
    const { component: { styleName, jsonContent: { isShowLine, contents } } } = this.props;
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
    const { component: { styleName, jsonContent: { isShowLine, contents } } } = this.props;
    const { imgs } = this.state;

    return (
      <View style={styles.cmsPanel}>
        <View style={isShowLine ? styles.hasLine : styles.noLine}>
          {
            imgs.map((i, idx) => {
              const { id, imgUrl, linkType, objectId, targetUrl } = i;
              let className = '';
              if (+styleName === 3) {
                if (idx) {
                  className = 'right';
                } else {
                  className = 'left';
                }
              }
              return (
                <TouchableHighlight style={styles.imgItem} key={idx} onPress={() => this._onPress(i)}>
                  <Image source={{uri: i.imgUrl}} style={{ width: i.imgWidth, height: i.imgHeight }} />
                </TouchableHighlight>
              )
            })
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cmsPanel: {

  },
  hasLine: {
    width: unitWidth * 750,
    flexDirection: 'row',
  },
  noLine: {
    width: unitWidth * 750,
    flexDirection: 'row',
  },
  imgItem: {
    height: 100
  }
})
