/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

var RNWebView = require('./AndroidWebView');

class WebViewProject extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            url: 'https://www.hao123.com',
        };
        width:Dimensions.get('window').width;
        height:Dimensions.get('window').height;
    }

    render() {
        //组件类只能包含一个顶层标签，不能出现两个及两个以上的标签
        return (
            <View style={{flex:1,backgroundColor: 'green'}}>
                <TouchableOpacity
                    style={styles.style_view_commit}
                    onPress={this._onPressButton.bind(this)}>
                    <Text style={{fontSize:16}}>点击此处访问百度首页</Text>
                </TouchableOpacity>
                <RNWebView ref="RNWebView" onScrollChange={this.onWebViewScroll} url={this.state.url}
                           style={{width:this.props.width,flex:1}}></RNWebView>
            </View>
        );
    }

    _onPressButton() {
        this.setState({url: 'https://www.baidu.com'});
        //this.state.url = 'https://www.baidu.com';
    }

    onWebViewScroll(event) {
        console.log(event);
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        //水平方向
        flexDirection: 'row',
        //
        justifyContent: 'center',
        //居中对齐
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    style_view_commit: {
        padding: 5,
        marginTop: 15,
        marginBottom: 15,
        width: 200,
        height: 100,
        backgroundColor: '#63B8FF',
        borderRadius: 5,
        //组件本身内容相当于android中的gravity="center_vertical"
        justifyContent: 'center',
        //组件基于父组件居中，相当于android中的layout_gravity="center"
        alignSelf: 'center',
        //组件本身内容相当于android中的gravity="center_horizontal"
        alignItems: 'center',
    },
});

AppRegistry.registerComponent('AppDemo', () => WebViewProject);
