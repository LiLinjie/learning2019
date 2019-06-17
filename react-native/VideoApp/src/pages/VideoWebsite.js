import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  Platform,
  ProgressViewIOS,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';
import Link from '../components/Link';
import {WebViewLoading} from '../components/Loading';
import {NavigationEvents} from "react-navigation";
import * as services from '../services/video';
import {unitWidth} from '../utils/system';
import theme from '../constants/theme';

export default class VideoWebsite extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: '平台浏览',
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
        <View style={{ paddingRight: 40 }}/>
      )
    }
  }

  constructor (props) {
    super(props);
    this.state = {
      vLink: [],
      progress: 0,
      backButtonEnabled: false,
      url: ''
    }
    this.nav = this.props.navigation;
    this.addBackAndroidListener(this.nav);
  }

  componentDidMount() {
    this.props.navigation.setParams({//给导航中增加监听事件
      goBackPage: this._goBackPage,
    });
    this._getVLink();
  }

  async _getVLink () {
    const res = await services.getVLink();
    const vLink = [];
    for (let i in res.msg) {
      if (i.indexOf('url') === 0 && res.msg[i]) {
        vLink.push(res.msg[i]);
      }
    }
    console.log(vLink);
    this.setState({
      vLink
    })
  }

  //自定义返回事件
  _goBackPage = () => {
    //  官网中描述:backButtonEnabled: false,表示webView中没有返回事件，为true则表示该webView有回退事件
    if (this.state.backButtonEnabled) {
      this.refs['webView'].goBack();
    } else {//否则返回到上一个页面
      this.nav.goBack();
    }
  };

  onNavigationStateChange =  (navState) => {
    console.log(navState);
    this.setState({
      backButtonEnabled: navState.canGoBack,
      url: navState.url,
    });
  };

  // 监听原生返回键事件
  addBackAndroidListener (navigator) {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid = () => {
    if (this.state.backButtonEnabled) {
      this.refs['webView'].goBack();
      return true;
    } else {
      return false;
    }
  };

  handleMessage = (event) => {
    const { vLink } = this.state;
    const { url } = JSON.parse(event.nativeEvent.data);
    if (vLink.length) {
      this.props.navigation.navigate('VideoPlay', {url})
    }
  }

  render() {
    const { progress } = this.state;
    const { navigation } = this.props;
    const html = navigation.getParam('url', '');
    const injectScript = `
      (function () {
        var videoWrap = document.querySelector('.m-video-player-wrap') || document.querySelector('.player-box') || document.querySelector('.site_player') || document.querySelector('.video-area');
        console.log('videoWrap', videoWrap);
        var injectDom = '';
        if (videoWrap) {
          var timer = setInterval(function () {
            var video = document.querySelector('video');
            console.log('video', video)
            if (video && !injectDom) {
              video.pause();
              var videoWrap = document.querySelector('.m-video-player-wrap') || document.querySelector('.player-box') || document.querySelector('.site_player') || document.querySelector('.video-area');
              console.log('videoWrap', videoWrap);
              var injectDom = '<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1000" id="injectDom">' +
                '<img src="http://img-shop.kkkd.com/2019/connect.png" style="width: 100%"/></div>'
              videoWrap.innerHTML += injectDom;
              document.querySelector('#injectDom').addEventListener('click', function () {
                var url = window.location.href;
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  url: url
                }));
              })
            }
          }, 300)
        }
      }());
    `;

    return (
      <WebView
        javaScriptEnable={true}
        source={{ uri: html }}
        ref="webView"
        onMessage={this.handleMessage}
        injectedJavaScript={injectScript}
        allowsInlineMediaPlayback={true}
        startInLoadingState={true}
        renderLoading={() => <WebViewLoading progress={progress}/>}
        onNavigationStateChange={this.onNavigationStateChange}
        onLoadProgress={({nativeEvent}) => this.setState(
          {progress: nativeEvent.progress}
        )}
      />
    );
  }
}
