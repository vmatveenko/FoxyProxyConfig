function FindProxyForURL(url, host) {
    var PROXY_HK = "PROXY 10.33.1.254:8080; DIRECT";
    host = host.toLowerCase();

    // www.hnyzxt.hnga.gov.cn и все поддомены *.gov.cn
    if (host === "www.hnyzxt.hnga.gov.cn" || shExpMatch(host, "*.gov.cn")) {
        return PROXY_HK;
    }

    // www.findbiz.nat.gov.tw и все поддомены *.gov.tw
    if (host === "www.findbiz.nat.gov.tw" || shExpMatch(host, "*.gov.tw")) {
        return PROXY_HK;
    }

    // www.e-services.cr.gov.hk и все поддомены *.gov.hk
    if (host === "www.e-services.cr.gov.hk" || shExpMatch(host, "*.gov.hk")) {
        return PROXY_HK;
    }

    // www.g6.globalwits.cn и все поддомены *.globalwits.cn
    if (host === "www.g6.globalwits.cn" || shExpMatch(host, "*.globalwits.cn")) {
        return PROXY_HK;
    }

    // Всё остальное идёт напрямую
    return "DIRECT";
}
