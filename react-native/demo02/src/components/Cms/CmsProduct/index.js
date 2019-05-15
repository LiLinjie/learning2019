import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ModSort from '../ModSort';
import List from './List';

export default class Products extends React.Component {
  handSort () {

  }

  render() {
    const { component, } = this.props;
    let { styleName, sortType, jsonContent: { contents, isShowSort = true, displayStyle }} = component;
    const hasSort = !!contents.length && isShowSort;

    return (
      <View style={styles.cmsPanel}>
        {
          hasSort && (
            <ModSort
              sortType={sortType}
              handSort={() => this.handSort()}
            />
          )
        }
        <List
          list={contents}
          displayStyle={displayStyle}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cmsPanel: {

  }
})
