import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { reset, start, stop } from './models/action';

type Props = {};
@connect(state => ({timer: state.timer}))
class Home extends Component<Props> {
  _onPressReset () {
    this.props.dispatch(reset());
  }

  _onPressStart () {
    this.props.dispatch(start());
  }

  _onPressStop () {
    this.props.dispatch(stop());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{this.props.timer.seconds}</Text>
        <TouchableOpacity style={styles.reset} onPress={()=>this._onPressReset()}>
          <Text>归零</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.start} onPress={()=>this._onPressStart()}>
          <Text>开始</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stop} onPress={()=>this._onPressStop()}>
          <Text>停止</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    fontSize: 70,
    marginBottom: 70,
    color: '#ff8500'
  },
  reset: {
    margin: 10,
    backgroundColor: 'yellow'
  },
  start: {
    margin: 10,
    backgroundColor: 'yellow'
  },
  stop: {
    margin: 10,
    backgroundColor: 'yellow'
  }
});

export default Home;
