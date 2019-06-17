## 环境搭建

### 安装依赖
- macOS必须安装的依赖有：Node、Watchman 和 React Native 命令行工具以及 Xcode。
- windows必须安装的依赖有：Node、React Native 命令行工具、Python2 以及 JDK 和 Android Studio。

React Native 的命令行工具（react-native-cli）
```$xslt
npm install -g react-native-cli
```

> RN iOS 0.45以上版本开始需要依赖一些第三方编译库，需要手动下载，[参考网站](https://bbs.reactnative.cn/topic/4301/ios-rn-0-45%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E6%89%80%E9%9C%80%E7%9A%84%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BC%96%E8%AF%91%E5%BA%93-boost%E7%AD%89)

### 编译并运行 React Native 应用
ios:
```$xslt
react-native run-ios
```

android:
```$xslt
react-native run-android
```
