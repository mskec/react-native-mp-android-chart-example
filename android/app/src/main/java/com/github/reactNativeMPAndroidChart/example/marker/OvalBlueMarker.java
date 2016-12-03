package com.github.reactNativeMPAndroidChart.example.marker;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Color;
import android.os.Build;
import com.github.reactNativeMPAndroidChart.markers.RNMarkerView;
import com.github.reactNativeMPAndroidChart.example.R;


/**
 * Simple example of custom oval marker.
 */
public class OvalBlueMarker extends RNMarkerView {
    public OvalBlueMarker(Context context) {
        super(context, R.layout.oval_blue_marker, R.id.oval_blue_markerContent, R.id.oval_blue_tvContent);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            getMarkerContent().setBackgroundTintList(ColorStateList.valueOf(Color.parseColor("#ff0099cc")));
        }
    }
}
