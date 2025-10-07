function FindProxyForURL(url, host) {
    // ktalk.ru и все поддомены (*.ktalk.ru)
    if (host === "ktalk.ru" || shExpMatch(host, "*.ktalk.ru")) {
        return "PROXY 10.33.1.254:8080";
    }

    return "DIRECT";
}
