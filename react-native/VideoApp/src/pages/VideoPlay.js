import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  Platform,
  SafeAreaView,
} from 'react-native';
import WebView from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';
import Link from '../components/Link';
import Picker from '../components/VideoPlay/Picker';
import * as services from '../services/video';
import {unitWidth} from '../utils/system';

export default class VideoPlay extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: '正在播放',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 16,
      },
      headerLeft: (
        <Link
          onPress={() => {
            navigation.state.params.goBackPage();
          }}
        >
          <View style={{ paddingLeft: 10 }}>
            <Icon name="ios-arrow-back" size={30} style={{ color: 'black' }} />
          </View>
        </Link>
      ),
      headerRight: (
        <Link
          onPress={() => {
            navigation.state.params.switchLine();
          }}
        >
          <View style={{ paddingRight: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="ios-repeat" size={30} style={{ color: 'black' }} />
            <Text>线路</Text>
          </View>
        </Link>
      )
    }
  }

  constructor (props) {
    super(props);
    this.nav = this.props.navigation;
    this.state = {
      vLink: [],
      progress: 0,
      backButtonEnabled: false,
      url: '',
      index: 0,
      isShowPicker: false,
    }
  }

  componentWillMount() {
    this._getVLink();
  }

  componentDidMount() {
    this.props.navigation.setParams({//给导航中增加监听事件
      goBackPage: this._goBackPage,
      switchLine: this._switchLine,
    });
  }

  //自定义返回事件
  _goBackPage = () => {
    this.nav.goBack();
  };

  _switchLine = () => {
    this.setState({
      isShowPicker: true
    })
  }

  async _getVLink () {
    const res = await services.getVLink();
    const vLink = [];
    for (let i in res.msg) {
      if (i.indexOf('url') === 0 && res.msg[i]) {
        vLink.push(res.msg[i]);
      }
    }
    this.setState({
      vLink
    })
  }

  _selectItem = (index) => {
    this.setState({
      index,
      isShowPicker: false,
    });
  }

  _cancel = () => {
    // http://img-shop.kkkd.com/2019/video/loading_wrap.gif
    this.setState({
      isShowPicker: false
    })
  }

  render() {
    const { vLink, index, isShowPicker } = this.state;
    const { navigation } = this.props;
    const html = navigation.getParam('url', '');
    const uri = vLink[index] + html;
    const injectScript = `
    (function () {
        var videoWrap = document.querySelector('.content');
        videoWrap.addEventListener('DOMSubtreeModified', function (e){
          var video = document.querySelector('video');
          if (video) {
            video.setAttribute('poster', 'http://img-shop.kkkd.com/2019/video/loading_wrap.gif');
          }
        })
      }());
    `
    return (
      !!vLink.length && (
        <SafeAreaView style={{ flex: 1}}>
          <WebView
            javaScriptEnable={true}
            injectedJavaScript={injectScript}
            source={{ uri }}
            ref="webView"
          />
          <Picker
            datas={vLink}
            navigation={navigation}
            isShow={isShowPicker}
            _cancel={this._cancel}
            _selectItem={this._selectItem}
          />
        </SafeAreaView>
      )
    )
  }
}
