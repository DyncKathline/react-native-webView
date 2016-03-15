package com.app.modules;

import android.support.annotation.Nullable;
import android.util.Log;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by xiongxuesong-pc on 2016/3/1.
 */
public class ReactWebViewManager extends SimpleViewManager<WebView> {

    public static final String REACT_CLASS = "RNWebView";

    /**
     * 返回的名字会用于在JavaScript端引用这个原生视图类型。
     * @return
     */
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    /**
     * 返回我们需要使用的原生UI组件的实例，这里就是WebView。
     * @param reactContext
     * @return
     */
    @Override
    protected WebView createViewInstance(ThemedReactContext reactContext) {
        WebView webView = new MyWebView(reactContext);
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                Log.e("TAG", "shouldOverrideUrlLoading");
                view.loadUrl(url);
                return true;
            }
        });
        return webView;
    }

    /**
     * 属性的暴露是使用注解，将注解设置在对应的set方法上，之后再set方法中处理UI的更新。
     * @ReactProp注解必须包含一个字符串类型的参数name。这个参数指定了对应属性在JavaScript端的名字。
     * @param view
     * @param url
     */
    @ReactProp(name = "url")
    public void setUrl(WebView view, @Nullable String url) {
        Log.e("TAG", "setUrl");
        view.loadUrl(url);
    }

    @ReactProp(name = "html")
    public void setHtml(WebView view, @Nullable String html) {
        Log.e("TAG", "setHtml");
        view.loadData(html, "text/html; charset=utf-8", "UTF-8");
    }
}
