import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
} from 'react-native';
import qs from 'qs';
import * as service from '../services/cms';
import Banner from '../components/Cms/CmsBanner';
import Title from '../components/Cms/CmsTitleLink';
import Spacing from '../components/Cms/CmsSpacing';
import ImgGroup from '../components/Cms/CmsImgGroup';
import Product from '../components/Cms/CmsProduct';

const componentMap = {
  BANNER: Banner,
  TITLE_LINK: Title,
  SPACING: Spacing,
  IMG_GROUP: ImgGroup,
  LIST_PRO: Product,
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
      data: {},
      dataSearch: {
        hasMore: true
      },
      pIndex: 0,
      isRequesting: false
    }
  }
  componentWillMount () {
    this.getCms();
  }

  async getCms () {
    const { dataSearch } = this.state;
    const res = await service.getCms({ pageStatus: 'PUBLISH', pageType: 'HOMEPAGE'});
    if (res.status === 1) {
      this.setState({
        data: res.data
      }, () => {
        if (res.data && res.data.moduleList) {
          for (let i = 0, len = res.data.moduleList.length; i < len; i++) {
            let pItem = res.data.moduleList[i];
            switch (pItem.type) {
              case 'LIST_PRO': {
                if (pItem.jsonContent.source === 'URL_LIST') {
                  const query = qs.parse(pItem.datasourceQuery.query);
                  const ajaxData = {
                    page: 0,
                    size: 10,
                    title: query.keyword || void 0,
                    category: query.category ? query.category.split(',')[0] : void 0,
                    sortRule: query.sorts || void 0,
                    productType: pItem.jsonContent.productType || 0,
                    promotionPriceMin: typeof query.promotionPriceMin !== 'undefined' ? query.promotionPriceMin : void 0,
                    promotionPriceMax: typeof query.promotionPriceMax !== 'undefined' ? query.promotionPriceMax : void 0,
                  }
                  if (query.sources) {
                    ajaxData.sources = query.sources.split(',').map(i => i * 1);
                  } else {
                    ajaxData.source = query.source || void 0
                  }
                  this.setState({
                    dataSearch: {
                      ...dataSearch,
                      ...ajaxData
                    },
                    pIndex: i,
                  }, () => {
                    this.getProducts()
                  })
                }
              }
            }
          }
        }
      });
    }
  }

  getProducts () {
    const { dataSearch, data, pIndex, isRequesting } = this.state;
    if (isRequesting) {
      return;
    }
    if (!dataSearch.hasMore) {
      return;
    }
    const params = {
      ...dataSearch
    }
    delete params.hasMore;
    this.setState({
      isRequesting: true
    }, async () => {
      const res = await service.getProSearch(params);
      if (res.status === 1) {
        let list = data.moduleList && data.moduleList[pIndex].jsonContent.contents;
        list = list.concat(res.data.data);
        data.moduleList[pIndex].jsonContent.contents = list;
        this.setState({
          dataSearch: {
            ...dataSearch,
            page: res.data.page + 1,
            hasMore: res.data.page < res.data.totalPage
          },
          data,
          isRequesting: false
        })
      }
    })
  }

  handleSort () {

  }

  _contentViewScroll (e) {
    const { isRequesting } = this.state;
    const offsetY = e.nativeEvent.contentOffset.y; //滑动距离
    const contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
    const oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
    if (offsetY + oriageScrollHeight >= contentSizeHeight) {
      if (!isRequesting) {
        console.log('上传滑动到底部事件');
        this.getProducts();
      }
    }
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
      <ScrollView
        style={{flex:1}}
        onScroll = {(e) => this._contentViewScroll(e)}
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        scrollsToTop={true}>
        { componentNodes }
      </ScrollView>
    )
  }
}
