// http://pac.itzmx.com

var proxy = "PROXY 192.168.199.207:555;";

var domains = {
  "zyzc9.com": 1
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    if (host == "www.so.com") {
        return "PROXY 360.itzmx.com:80";
    }

    var suffix;
    var pos = host.lastIndexOf('.');
    while(1) {
        suffix = host.substring(pos + 1);
        if (suffix == "360.cn")
            if (url.indexOf('http://') == 0)
                return "PROXY 360.itzmx.com:80";
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        if (pos <= 0) {
            break;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
    return direct;
}