function FindProxyForURL(url, host) {
    var PROXY_HK = "PROXY 10.33.1.254:8080; DIRECT";
    host = host.toLowerCase();

    // ktalk.ru и все поддомены (*.ktalk.ru)
    if (host === "ktalk.ru" || shExpMatch(host, "*.ktalk.ru")) {
        return PROXY_HK;
    }

    return "DIRECT";
}
