import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import * as service from '../services/cms';
import Banner from '../components/Cms/CmsBanner';
import Title from '../components/Cms/CmsTitleLink';
import Spacing from '../components/Cms/CmsSpacing';
import ImgGroup from '../components/Cms/CmsImgGroup';

const componentMap = {
  BANNER: Banner,
  TITLE_LINK: Title,
  SPACING: Spacing,
  IMG_GROUP: ImgGroup,
};

export default class Index extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('pageTitle')
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  componentWillMount () {
    this.getCms();
  }

  async getCms () {
    const res = await service.getCms({ pageStatus: 'PUBLISH', pageType: 'HOMEPAGE'});
    console.log(res);
    this.setState({
      data: res.data
    });
  }

  handleSort () {

  }

  render () {
    const { data } = this.state;
    const { navigation } = this.props;
    let componentNodes = void 0;
    if (data.moduleList) {
      componentNodes = data.moduleList.map((component, pIndex) => {
        const { id, type } = component;
        const CmsComponent = componentMap[type] || null;

        if (CmsComponent) {
          return <CmsComponent
           key={id}
           pIndex={pIndex}
           component={component}
           handleSort={this.handleSort}
           navigation={navigation}
          />;
        } else {
          return void 0;
        }
      });
    }

    return (
      <View>
        { componentNodes }
      </View>
    )
  }
}
