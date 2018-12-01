// *********
//   看个例子 
// *********
// 可以先把返回的结果弄成变量，省劲
var direct  = "DIRECT";
var socks   = "SOCKS5 127.0.0.1080";
var proxy   = "PROXY 192.168.199.207:5555";

function FindProxyForURL(url, host) {
    return proxy;

// 如果域名匹配，直接连接
//     if (dnsDomainIs(host, "*.baidu.com/*") ||
 //        shExpMatch(host, "(*.abcdomain.com|abcdomain.com)"))
 //        return proxy;

// 如果 URL 或者 协议匹配，直接连接
 //    if (url.substring(0, 4)=="ftp:" ||
 //        shExpMatch(url, "http://abcdomain.com/folder/*"))
 //        return "DIRECT";

// 如果访问的链接是内网，直接连接
//     if (isPlainHostName(host) ||
//         shExpMatch(host, "*.local") ||
//         isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
//        isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
 //       isInNet(dnsResolve(host), "192.168.0.0",  "255.255.0.0") ||
 //       isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
 //       return "DIRECT";

// 如果访问的IP属于一个子网，则通过代理访问
//    if (isInNet(myIpAddress(), "10.10.5.0", "255.255.255.0"))
//       return "PROXY 1.2.3.4:8080";

// 默认返回值，按照顺序选择可执行的，第一无法连接就换第二个
 //   return "PROXY 4.5.6.7:8080; PROXY 7.8.9.10:8080";
}
