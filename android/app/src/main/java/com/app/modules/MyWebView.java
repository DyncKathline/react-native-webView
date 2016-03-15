package com.app.modules;

import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.webkit.WebView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by xiongxuesong-pc on 2016/3/2.
 */
public class MyWebView extends WebView {

    private final String TAG = "MyWebView";
    private final String ScrollX = "ScrollX";
    private final String ScrollY = "ScrollY";

    public MyWebView(Context context) {
        super(context);
    }

    public MyWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public MyWebView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }



    @Override
    protected void onScrollChanged(int l, int t, int oldl, int oldt) {
        super.onScrollChanged(l, t, oldl, oldt);
        Log.e(TAG, "onScrollChanged");
        WritableMap event = Arguments.createMap();
        event.putInt(ScrollX, 1);
        event.putInt(ScrollY, 1);
        ReactContext reactContext = (ReactContext) getContext();
        //topChange对应着javascript层的onChange方法，这个映射关系在UIManagerModuleConstants类中。
        reactContext.getJSModule(RCTEventEmitter.class)
                .receiveEvent(getId(), "topChange", event);
    }
}
