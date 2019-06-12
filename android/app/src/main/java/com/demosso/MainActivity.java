package com.demosso;

import com.facebook.react.ReactFragmentActivity;
import android.os.Bundle;

// imports for react-native-gesture-handler
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

// extend ReactFragmentActivity instead of ReactActivity for using
// support from react-native-screens in react-navigation
public class MainActivity extends ReactFragmentActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "DemoSSO";
    }

    // for react-native-screens
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
    }

    // override for react-native-gesture-handler
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
          return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
      };
    }
}
