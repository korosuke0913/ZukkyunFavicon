var target_li = document.getElementsByClassName('r');
for (var i = 0; i < target_li.length; ++i) {
    var a_item = target_li[i].firstChild;  
    var domain = a_item.getAttribute("href");　//URLを取得しますよ。
    var domain2 = domain.match(/^[httpsfile]+:\/{2,3}([0-9a-zA-Z\.\-:]+?):?[0-9]*?\//i);　//取得したURLのドメイン部分だけ取り出しますよ。
    var favget = "//www.google.com/s2/favicons?domain="+domain2[1];　//Googleさんのファビコン取得APIのURLを入れますよ。
    var element = document.createElement('img');
    element.setAttribute('src', favget);
    element.setAttribute('style', 'margin-right: 10px;');
    element.setAttribute('class', 'favi');
    target_li[i].insertBefore(element,a_item); //タイトルの前に上記のタグを挿入しますよ。
}

if (location.href.indexOf("%E7%A7%8B%E5%85%83") > 0　|| location.href.indexOf("%E7%9C%9F%E5%A4%8F") > 0　) {
	alert("ずっきゅん♡");
};

if (location.href.indexOf("%E8%A5%BF%E9%87%8E") > 0　|| location.href.indexOf("%E4%B8%83%E7%80%AC") > 0　) {
    alert("ん〜〜〜〜〜！ななせまる！！");
};

if (location.href.indexOf("%E6%A9%8B%E6%9C%AC") > 0　|| location.href.indexOf("%E5%A5%88%E3%80%85%E6%9C%AA") > 0　) {
    alert("(´_ゝ｀)");
};