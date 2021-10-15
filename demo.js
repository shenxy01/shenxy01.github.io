var shareConfig = {
    title: "互联网之子",
    desc: "在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",
    link: "http://movie.douban.com/subject/25785114/",
    imgUrl: "http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg",
    success: function(e) {
        alert("已分享")
    },
    cancel: function(e) {
        alert("已取消")
    },
    fail: function(e) {
        alert(JSON.stringify(e))
    }
}
  , images = {
    localId: [],
    serverId: []
}
  , voice = {
    localId: "",
    serverId: ""
};
wx.ready((function() {
    $("[data-type]").on("click", (function(e) {
        switch ($(e.target).attr("data-type")) {
        case "checkJsApi":
            wx.checkJsApi({
                jsApiList: ["getNetworkType", "previewImage", "onHistoryBack"],
                success: function(e) {
                    alert(JSON.stringify(e))
                }
            });
            break;
        case "shareToExternalContact":
                         alert("群发消息给客户11=======");

            wx.agentConfig({
                corpid: 'wwf861751e07fa2ed0', // 必填，企业微信的corpid，必须与当前登录的企业一致
                agentid: '1000007', // 必填，企业微信的应用id （e.g. 1000247）
                timestamp: 1634265193, // 必填，生成签名的时间戳
                nonceStr: 'AAA', // 必填，生成签名的随机串
                signature: '343d9b18c8278a17db6107c7f82a922262774d02',// 必填，签名，见附录-JS-SDK使用权限签名算法
                jsApiList: ['shareToExternalContact'], //必填，传入需要使用的接口名称
                success: function(res) {
                    alert("群发消息给客户2=======");

                    wx.invoke("shareToExternalContact", {
                        text: {
                              content:"你好",    // 文本内容
                        },
                        },function(res) {
                            alert(JSON.stringify(res))
                          if (res.err_msg == "shareToExternalContact:ok") {
                            alert("错误")
                          }
                      }
                  );
                },
                fail: function(res) {
                     alert("群发消息给客户失败");
                    if(res.errMsg.indexOf('function not exist') > -1){
                        alert('版本过低请升级')
                    }
                }
            });
            
            alert("群发消息给客户3=======");
            break;
          case "sendChatMessage":
                         alert("分享内容给客户1=======");

            wx.agentConfig({
                corpid: 'wwf861751e07fa2ed0', // 必填，企业微信的corpid，必须与当前登录的企业一致
                agentid: '1000007', // 必填，企业微信的应用id （e.g. 1000247）
                timestamp: 1634265193, // 必填，生成签名的时间戳
                nonceStr: 'AAA', // 必填，生成签名的随机串
                signature: '343d9b18c8278a17db6107c7f82a922262774d02',// 必填，签名，见附录-JS-SDK使用权限签名算法
                jsApiList: ['sendChatMessage'], //必填，传入需要使用的接口名称
                success: function(res) {
                    alert("分享内容给客户1=======");

                wx.invoke('sendChatMessage', {
                                msgtype:"text", //消息类型，必填
                                enterChat: true, //为true时表示发送完成之后顺便进入会话，仅移动端3.1.10及以上版本支持该字段
                                text: {
                                    content:"你好", //文本内容
                                },
                                news:
                                {
                                    link: "http://movie.douban.com/subject/25785114/", //H5消息页面url 必填
                                    title: "互联网之子", //H5消息标题
                                    desc: "在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所", //H5消息摘要
                                    imgUrl: "http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg", //H5消息封面图片URL
                                },
                            }, function(res) {
                                if (res.err_msg == 'sendChatMessage:ok') {
                                    //发送成功
                                }
                 })
                },
                fail: function(res) {
                     alert("分享内容给客户1失败");
                    if(res.errMsg.indexOf('function not exist') > -1){
                        alert('版本过低请升级')
                    }
                }
            });
            
            alert("分享内容给客户1=======");
            break;
        case "onMenuShareAppMessage":
            wx.onMenuShareAppMessage(shareConfig),
            alert("已注册获取“转发给同事”状态事件");
            break;
        case "onMenuShareWechat":
            wx.onMenuShareWechat(shareConfig),
            alert("已注册获取“微信分享给朋友”状态事件");
            break;
        case "onMenuShareTimeline":
            wx.onMenuShareTimeline(shareConfig),
            alert("已注册获取“分享到朋友圈”状态事件");
            break;
        case "shareAppMessage":
            wx.invoke("shareAppMessage", shareConfig, (function(e) {
                "shareAppMessage:ok" == e.err_msg && alert("已转发到会话"),
                "shareAppMessage:cancel" == e.err_msg && alert("已取消")
            }
            ));
            break;
        case "shareWechatMessage":
            wx.invoke("shareWechatMessage", shareConfig, (function(e) {
                "shareWechatMessage:ok" == e.err_msg && alert("已转发到微信"),
                "shareWechatMessage:cancel" == e.err_msg && alert("已取消")
            }
            ));
            break;
        case "chooseImage":
            wx.chooseImage({
                count: 1,
                sizeType: ["original", "compressed"],
                sourceType: ["album", "camera"],
                success: function(e) {
                    images.localId = e.localIds,
                    alert("已选择 " + e.localIds.length + " 张图片")
                }
            });
            break;
        case "previewImage":
            wx.previewImage({
                current: "http://img3.douban.com/view/photo/photo/public/p2152117150.jpg",
                urls: ["http://img3.douban.com/view/photo/photo/public/p2152117150.jpg", "http://img3.douban.com/view/photo/photo/public/p2152134700.jpg"]
            });
            break;
        case "uploadImage":
            if (0 == images.localId.length)
                return void alert("请先使用 chooseImage 接口选择图片");
            var a = 0
              , o = images.localId.length;
            images.serverId = [],
            function e() {
                wx.uploadImage({
                    localId: images.localId[a],
                    success: function(s) {
                        a++,
                        images.serverId.push(s.serverId),
                        a < o && e()
                    },
                    fail: function(e) {
                        alert(JSON.stringify(e))
                    }
                })
            }();
            break;
        case "downloadImage":
            if (0 === images.serverId.length)
                return void alert("请先使用 uploadImage 上传图片");
            a = 0,
            o = images.serverId.length;
            images.localId = [],
            function e() {
                wx.downloadImage({
                    serverId: images.serverId[a],
                    success: function(s) {
                        a++,
                        alert("已下载：" + a + "/" + o),
                        images.localId.push(s.localId),
                        a < o && e()
                    }
                })
            }();
            break;
        case "startRecord":
            wx.startRecord({
                cancel: function() {
                    alert("用户拒绝授权录音")
                }
            });
            break;
        case "stopRecord":
            wx.stopRecord({
                success: function(e) {
                    voice.localId = e.localId
                },
                fail: function(e) {
                    alert(JSON.stringify(e))
                }
            });
            break;
        case "playVoice":
            if ("" == voice.localId)
                return void alert("请先使用 startRecord 接口录制一段声音");
            wx.playVoice({
                localId: voice.localId
            });
            break;
        case "pauseVoice":
            wx.pauseVoice({
                localId: voice.localId
            });
            break;
        case "stopVoice":
            wx.stopVoice({
                localId: voice.localId
            });
            break;
        case "uploadVoice":
            if ("" == voice.localId)
                return void alert("请先使用 startRecord 接口录制一段声音");
            wx.uploadVoice({
                localId: voice.localId,
                success: function(e) {
                    alert("上传语音成功，serverId 为" + e.serverId),
                    voice.serverId = e.serverId
                }
            });
            break;
        case "downloadVoice":
            if ("" == voice.serverId)
                return void alert("请先使用 uploadVoice 上传声音");
            wx.downloadVoice({
                serverId: voice.serverId,
                success: function(e) {
                    alert("下载语音成功，localId 为" + e.localId),
                    voice.localId = e.localId
                }
            });
            break;
        case "getNetworkType":
            wx.getNetworkType({
                success: function(e) {
                    alert(e.networkType)
                },
                fail: function(e) {
                    alert(JSON.stringify(e))
                }
            });
            break;
        case "openLocation":
            wx.openLocation({
                latitude: 23.099994,
                longitude: 113.32452,
                name: "TIT 创意园",
                address: "广州市海珠区新港中路 397 号",
                scale: 14,
                infoUrl: "http://weixin.qq.com"
            });
            break;
        case "getLocation":
            wx.getLocation({
                success: function(e) {
                    alert(JSON.stringify(e))
                },
                cancel: function(e) {
                    alert("用户拒绝授权获取地理位置")
                }
            });
            break;
        case "hideOptionMenu":
            wx.hideOptionMenu();
            break;
        case "showOptionMenu":
            wx.showOptionMenu();
            break;
        case "closeWindow":
            wx.closeWindow();
            break;
        case "onHistoryBack":
            wx.onHistoryBack((function() {
                return confirm("确定要放弃当前页面的修改？")
            }
            )),
            alert("已注册获取“页面返回”状态事件");
            break;
        case "hideMenuItems":
            wx.hideMenuItems({
                menuList: ["menuItem:share:appMessage", "menuItem:share:wechat", "menuItem:favorite"],
                success: function(e) {
                    alert("已隐藏“转发”，“微信”，“收藏”按钮")
                },
                fail: function(e) {
                    alert(JSON.stringify(e))
                }
            });
            break;
        case "showMenuItems":
            wx.showMenuItems({
                menuList: ["menuItem:share:appMessage", "menuItem:share:wechat", "menuItem:favorite"]
            });
            break;
        case "hideAllNonBaseMenuItem":
            wx.hideAllNonBaseMenuItem({
                success: function() {
                    alert("已隐藏所有非基本菜单项")
                }
            });
            break;
        case "showAllNonBaseMenuItem":
            wx.showAllNonBaseMenuItem({
                success: function() {
                    alert("已显示所有非基本菜单项")
                }
            });
            break;
        case "scanQRCode0":
            wx.scanQRCode();
            break;
        case "scanQRCode1":
            wx.scanQRCode({
                needResult: 1,
                desc: "scanQRCode desc",
                success: function(e) {
                    alert(JSON.stringify(e))
                }
            });
            break;
        case "openEnterpriseChat":
            wx.invoke("openEnterpriseChat", {
                userIds: "warrenchen;jasonhzhang",
                groupName: "讨论组"
            }, (function(e) {
                e.errMsg.indexOf("function not exist") > -1 && alert("版本过低请升级")
            }
            ));
            break;
        case "selectEnterpriseContact":
            (wx.invoke || WeixinJSBridge.invoke)("selectEnterpriseContact", {
                fromDepartmentId: -1,
                mode: "single",
                type: ["department", "user"],
                selectedDepartmentIds: [],
                selectedUserIds: []
            }, (function(e) {
                if ("selectEnterpriseContact:ok" == e.err_msg) {
                    for (var a = e.result.departmentList, o = 0; o < a.length; o++) {
                        var s = a[o]
                          , r = (s.id,
                        s.name);
                        alert("部门名称:" + r)
                    }
                    var c = e.result.userList;
                    for (o = 0; o < c.length; o++) {
                        var t = c[o]
                          , n = (t.id,
                        t.name);
                        t.avatar;
                        alert("用户名称:" + n)
                    }
                }
            }
            ));
            break;
        case "previewFile":
            wx.previewFile({
                url: "http://open.work.weixin.qq.com/wwopen/downloadfile/wwapi.zip",
                name: "Android开发工具包集合",
                size: 22189
            });
            break;
        case "chooseInvoiceTitle":
            wx.invoke("chooseInvoiceTitle", {
                scene: "1"
            }, (function(e) {
                "chooseInvoiceTitle:ok" == e.err_msg && alert(e.choose_invoice_title_info),
                "chooseInvoiceTitle:fail" == e.err_msg && alert(e.err_msg),
                "chooseInvoiceTitle:cancel" == e.err_msg && alert(e.err_msg)
            }
            ));
            break;
        case "openDefaultBrowser":
            wx.invoke("openDefaultBrowser", {
                url: "https://open.work.weixin.qq.com"
            }, (function(e) {
                alert(e.err_msg)
            }
            ))
        }
    }
    ));
    var e = {
        title: "企业微信JS-SDK Demo",
        desc: "企业微信JS-SDK,帮助企业提供最优质的服务",
        link: "http://open.work.weixin.qq.com/wwopen/jsapidemo",
        imgUrl: "http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRt8Qia4lv7k3M9J1SKqKCImxJCt7j9rHYicKDI45jRPBxdzdyREWnk0ia0N5TMnMfth7SdxtzMvVgXg/0"
    };
    wx.onMenuShareAppMessage(e),
    wx.onMenuShareTimeline(e)
}
)),
wx.error((function(e) {
    alert(e.errMsg)
}
));
