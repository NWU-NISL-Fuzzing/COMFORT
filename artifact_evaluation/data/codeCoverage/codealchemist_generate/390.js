// GenBlkBrick
for(v0 in v1){
// GenBlkBrick
while((v0) < (0)){
var v0 = (function (v1){
return (((v1) >= ('0')) && ((v1) <= ('9'))) || ((v1) === ('.'));
});
}
var v1 = (function (){
return this.items;
});
}
var v2 = (function (v1, v2){
return v0.call(v1, v2);
});
for(var v3 in v1){
if(v1.hasOwnProperty(v3)){
(v2[v3]) = v1[v3];
}
}
(v3) += '</div>';
function v4(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v1(v3);
(v4) += v0(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
(v3["0"]) = 1;
var v5 = ({className : 'number', begin : v3, relevance : 0});
(v5['anychart']['themes']['wines']) = ({'palette' : ({'type' : 'distinct', 'items' : []}), 'defaultOrdinalColorScale' : ({'autoColors' : (function (v1){
return v5['anychart']['color']['blendedHueProgression']('#f1a122', '#a50b01', v1);
})}), 'defaultLinearColorScale' : ({'colors' : []}), 'defaultFontSettings' : ({'fontColor' : '#3e2723'}), 'defaultBackground' : ({'fill' : ({'src' : 'https://cdn.anychart.com/images/themes/brickwall.png', 'mode' : 'tile'}), 'stroke' : '#e3e3e3', 'cornerType' : 'round', 'corners' : 3}), 'defaultSeparator' : ({'fill' : '#CECECE'}), 'defaultTooltip' : ({'background' : ({'fill' : '#e3e3e3', 'stroke' : '#d4d4d4'}), 'padding' : ({'top' : 8, 'right' : 15, 'bottom' : 10, 'left' : 15})}), 'defaultColorRange' : ({'stroke' : '#bdbdbd', 'ticks' : ({'stroke' : '#bdbdbd', 'position' : 'outside', 'length' : 7, 'enabled' : true}), 'minorTicks' : ({'stroke' : '#bdbdbd', 'position' : 'outside', 'length' : 5, 'enabled' : true}), 'marker' : ({'padding' : ({'top' : 3, 'right' : 3, 'bottom' : 3, 'left' : 3}), 'fill' : '#37474f'})}), 'defaultScroller' : ({'fill' : '#e3e3e3', 'selectedFill' : '#d0d0d0', 'thumbs' : ({'fill' : '#F9FAFB', 'stroke' : '#bdc8ce', 'hovered' : ({'fill' : '#bdc8ce', 'stroke' : '#e9e4e4'})})}), 'defaultGridSettings' : ({'stroke' : '#9e9e9e 0.4'}), 'defaultMinorGridSettings' : ({'stroke' : '#bdbdbd 0.4'}), 'chart' : ({'padding' : ({'top' : 20, 'right' : 25, 'bottom' : 15, 'left' : 15}), 'defaultSeriesSettings' : ({'candlestick' : ({'normal' : ({'risingFill' : '#6f3448', 'risingStroke' : '#6f3448', 'fallingFill' : '#f1a122', 'fallingStroke' : '#f1a122'}), 'hovered' : ({'risingFill' : v4, 'risingStroke' : v0, 'fallingFill' : v4, 'fallingStroke' : v0}), 'selected' : ({'risingStroke' : '3 #6f3448', 'fallingStroke' : '3 #f1a122', 'risingFill' : '#333333 0.85', 'fallingFill' : '#333333 0.85'})}), 'ohlc' : ({'normal' : ({'risingStroke' : '#6f3448', 'fallingStroke' : '#f1a122'}), 'hovered' : ({'risingStroke' : v0, 'fallingStroke' : v0}), 'selected' : ({'risingStroke' : '3 #6f3448', 'fallingStroke' : '3 #f1a122'})})})}), 'map' : ({'unboundRegions' : ({'enabled' : true, 'fill' : '#e3e3e3', 'stroke' : '#bdbdbd'}), 'defaultSeriesSettings' : ({'base' : ({'normal' : ({'stroke' : v0, 'labels' : ({'fontColor' : '#212121'})})}), 'connector' : ({'normal' : ({'stroke' : '1.5 #6f3448', 'markers' : ({'stroke' : '1.5 #e3e3e3', 'fill' : '#857600'})}), 'hovered' : ({'stroke' : '1.5 #37474f', 'markers' : ({'fill' : '#857600'})}), 'selected' : ({'stroke' : '1.5 #000', 'markers' : ({'fill' : '#000'})})})})}), 'sparkline' : ({'padding' : 0, 'background' : ({'stroke' : '#e3e3e3'}), 'defaultSeriesSettings' : ({'area' : ({'stroke' : '1.5 #6f3448', 'fill' : '#6f3448 0.5'}), 'column' : ({'fill' : '#6f3448', 'negativeFill' : '#f1a122'}), 'line' : ({'stroke' : '1.5 #6f3448'}), 'winLoss' : ({'fill' : '#6f3448', 'negativeFill' : '#f1a122'})})}), 'bullet' : ({'background' : ({'stroke' : '#e3e3e3'}), 'defaultMarkerSettings' : ({'fill' : '#6f3448', 'stroke' : '2 #6f3448'}), 'padding' : ({'top' : 5, 'right' : 10, 'bottom' : 5, 'left' : 10}), 'margin' : ({'top' : 0, 'right' : 0, 'bottom' : 0, 'left' : 0}), 'rangePalette' : ({'items' : []})}), 'heatMap' : ({'normal' : ({'stroke' : '1 #e3e3e3', 'labels' : ({'fontColor' : '#212121'})}), 'hovered' : ({'stroke' : '1.5 #e3e3e3'}), 'selected' : ({'stroke' : '2 #e3e3e3'})}), 'treeMap' : ({'normal' : ({'headers' : ({'background' : ({'enabled' : true, 'fill' : '#e3e3e3', 'stroke' : '#bdbdbd', 'cornerType' : 'square', 'corners' : 0})}), 'labels' : ({'fontColor' : '#212121'}), 'stroke' : '#bdbdbd'}), 'hovered' : ({'headers' : ({'fontColor' : '#3e2723', 'background' : ({'fill' : '#bdbdbd', 'stroke' : '#bdbdbd', 'cornerType' : 'square', 'corners' : 0})})}), 'selected' : ({'labels' : ({'fontColor' : '#fafafa'}), 'stroke' : '2 #eceff1'})}), 'stock' : ({'padding' : [], 'defaultPlotSettings' : ({'xAxis' : ({'background' : ({'fill' : '#e3e3e3 0.5', 'stroke' : '#bdbdbd', 'cornerType' : 'square', 'corners' : 0})})}), 'scroller' : ({'fill' : 'none', 'selectedFill' : '#e3e3e3 0.5', 'outlineStroke' : '#bdbdbd', 'defaultSeriesSettings' : ({'base' : ({'selected' : ({'stroke' : v1})}), 'candlestick' : ({'normal' : ({'risingFill' : v3, 'risingStroke' : v3, 'fallingFill' : v3, 'fallingStroke' : v3}), 'selected' : ({'risingStroke' : v1, 'fallingStroke' : v1, 'risingFill' : v1, 'FallingFill' : v1})}), 'ohlc' : ({'normal' : ({'risingStroke' : v3, 'fallingStroke' : v3}), 'selected' : ({'risingStroke' : v1, 'fallingStroke' : v1})})})}), 'xAxis' : ({'background' : ({'enabled' : false})})})});
