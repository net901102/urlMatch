function urlMatch (url) {
	var regUrl = '(http:\/\/)?(www\.)[A-z0-9]+\-?[A-z0-9]+\.[A-z]{2,}(\/.*)*\/?',//正则匹配url
		re = new RegExp(regUrl,"g");
		urlMatchStr = url.match(re);
	if (urlMatchStr.length) {
		for (var i = 0; i < urlMatchStr.length; i++) {
			url = url.replace(urlMatchStr[i],'<a href="http://www.' + urlMatchStr[i] + '">' + urlMatchStr[i] + '</a>');//替换url
		}
	}
	return url;
}
