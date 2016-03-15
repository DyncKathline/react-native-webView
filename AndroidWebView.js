/**
 * Created by xiongxuesong-pc on 2016/3/1.
 */
'use strict';

import React, {
    Component,
    PropTypes,
    View,
    StyleSheet,
    requireNativeComponent,
} from 'react-native';

class AndroidWebView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this._onChange = this._onChange.bind(this);
    }

    //用来在调试信息中显示
    //name: 'WebView',
    //限定该组件属性的，加上“...View.propTypes,” ，可以省略写继承View父类的所有属性限定
    /**
     * 省略了以下属性
     * testID: PropTypes.string,
     accessibilityComponentType: PropTypes.string,
     accessibilityLabel: PropTypes.string,
     accessibilityLiveRegion: PropTypes.string,
     importantForAccessibility: PropTypes.string,
     renderToHardwareTextureAndroid: PropTypes.string,
     onLayout: PropTypes.bool,
     */
    static propTypes = {
        ...View.propTypes,
        url: PropTypes.string,
        html: PropTypes.string,
        onScrollChange: PropTypes.func
    };

    _onChange(event:Event) {
        if (!this.props.onScrollChange) {
            return;
        }
        this.props.onScrollChange({ScrollX: event.nativeEvent.ScrollX, ScrollY: event.nativeEvent.ScrollY});
    }

    render() {
        /*... 操作符（也被叫做延展操作符 － spread operator）
         1.{...this.props}这样会把 AndroidWebView 所有的 props 复制到 RNWebView

         2.<FancyCheckbox checked={true} onClick={console.log.bind(console)}>
         Hello world!
         </FancyCheckbox>
         3.{ checked, ...other }`other` 包含 { onClick: console.log } 但 checked 属性除外
         组件需要使用一个属性往下传递,使用checked={checked}
         */
        return <RNWebView {...this.props} onChange={this._onChange}/>;
    };
}

/**
 * requireNativeComponent通常接受两个参数，
 *
 * 第一个参数是原生视图的名字，即ReactWebViewManager类中的getName()方法的返回值。
 *
 * 而第二个参数是一个描述组件接口的对象。
 *
 * 组件接口应当声明一个友好的name，用
 * 来在调试信息中显示；组件接口还必须声明propTypes字段，用来对应到原生视图
 * 上。这个propTypes还可以用来检查用户使用View的方式是否正确。
 *
 * 第三个参数是有时候有一些特殊的属性，想从原生组件中导出，但是又不希望它们成为对应React封装组件的属性。
 */
module.exports = requireNativeComponent('RNWebView', AndroidWebView, {
    nativeOnly: {onChange: true}
});