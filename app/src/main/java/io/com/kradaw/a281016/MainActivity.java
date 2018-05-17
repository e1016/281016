package io.com.kradaw.a281016;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    private WebView mWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mWebView = (WebView) findViewById(R.id.activity_main_webview);

        //WebSettings webSettings = mWebView.getSettings();
        //webSettings.setJavaScriptEnabled(true);

        mWebView.getSettings().setJavaScriptEnabled(true);
        mWebView.getSettings().setDomStorageEnabled(true);

        // código de stackoverflow para activar el JavaScript
        mWebView.setWebChromeClient(new WebChromeClient() {
            public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
                return super.onJsAlert(view, url, message, result);
            }});

        //mWebView.loadUrl("http://rigosfishing.com/houdule/");
        // Note: To detect when a URL has started and finished loading, use WebViewClient.onPageStarted and WebViewClient.onPageFinished.
        mWebView.loadUrl("file:///android_asset/index.html");

        // Force links and redirects to open in the WebView instead of in a browser
        mWebView.setWebViewClient(new WebViewClient());
        //mWebView.setWebViewClient(new MyAppWebViewClient());
    }
}
