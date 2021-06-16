var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("ddff5f327acde90153c092a2ec160d63.svg");
});
(v0.prototype._comparePickingInfo) = (function (v1, v2){
if((v1.distance) < (v2.distance)){
return - 1;
}else {
if((v1.distance) > (v2.distance)){
return 1;
}else {
return 0;
}
}
});
var v1 = (function (v1){
v1.extend(v1.summernote.lang, ({"ja-JP" : ({font : ({bold : "太字", italic : "斜体", underline : "下線", clear : "クリア", height : "文字高", name : "フォント", strikethrough : "取り消し線", size : "大きさ"}), image : ({image : "画像", insert : "画像挿入", resizeFull : "最大化", resizeHalf : "1/2", resizeQuarter : "1/4", floatLeft : "左寄せ", floatRight : "右寄せ", floatNone : "寄せ解除", dragImageHere : "ここに画像をドラッグしてください", selectFromFiles : "画像ファイルを選ぶ", url : "URLから画像を挿入する", remove : "画像を削除する"}), video : ({video : "動画", videoLink : "動画リンク", insert : "動画挿入", url : "動画のURL", providers : "(YouTube, Vimeo, Vine, Instagram, DailyMotion, Youku)"}), link : ({link : "リンク", insert : "リンク挿入", unlink : "リンク解除", edit : "編集", textToDisplay : "リンク文字列", url : "URLを入力してください", openInNewWindow : "新しいウィンドウで開く"}), table : ({table : "テーブル"}), hr : ({insert : "水平線の挿入"}), style : ({style : "スタイル", normal : "標準", blockquote : "引用", pre : "コード", h1 : "見出し1", h2 : "見出し2", h3 : "見出し3", h4 : "見出し4", h5 : "見出し5", h6 : "見出し6"}), lists : ({unordered : "通常リスト", ordered : "番号リスト"}), options : ({help : "ヘルプ", fullscreen : "フルスクリーン", codeview : "コード表示"}), paragraph : ({paragraph : "文章", outdent : "字上げ", indent : "字下げ", left : "左寄せ", center : "中央寄せ", right : "右寄せ", justify : "均等割付"}), color : ({recent : "現在の色", more : "もっと見る", background : "背景色", foreground : "文字色", transparent : "透過率", setTransparent : "透過率を設定", reset : "標準", resetToDefault : "標準に戻す"}), shortcut : ({shortcuts : "ショートカット", close : "閉じる", textFormatting : "文字フォーマット", action : "アクション", paragraphFormatting : "文章フォーマット", documentStyle : "ドキュメント形式"}), history : ({undo : "元に戻す", redo : "やり直す"})})}));
});
(v1.prototype) = [];
(v1.prototype.path) = (function v1(){
var v2, v3, v4, v5, v6, v7;
function v8(v6, v1){
if(v0(v1)){
for(((v4) = 0, (v5) = v1.length);(v4) < (v5);++v4){
v6.push(v1[v4]);
}
}else {
v6.push(v1);
}
}
if(! this.__current.path){
return null;
}
(v6) = [];
for(((v2) = 2, (v3) = this.__leavelist.length);(v2) < (v3);++v2){
(v7) = this.__leavelist[v2];
v8(v6, v7.path);
}
v8(v6, this.__current.path);
return v6;
});
(v0[0]) = 0;
(v1.prototype.update) = (function (v1){
return this._buffer.update(v1);
});
var v2 = Array.prototype.filter.call(v0, v1);
