const app = getApp();

Page({
    data: {
        nav: 0,
        affix: 0,
        active: 0,
        windowHeight: 0,
        canScroll: false,
        commons: [1,2,3,4],
        writeBox: {
            x: 0,
            y: 0
        }
    },
    onShow: function () {
        this.init();
    },
    init: function () {
        var me = this;
        wx.getSystemInfo({
            success: function (res) {
                me.setData({
                    writeBox: {
                        x: res.windowWidth - 70,
                        y: res.windowHeight - 80
                    },
                    windowHeight: res.windowHeight
                });
            }
        });

        var query = wx.createSelectorQuery();
        query.select('#nav').boundingClientRect().exec(function (res) {
            me.setData({
                nav: res[0].height
            })
        });

        query = wx.createSelectorQuery();
        query.select('#affix').boundingClientRect().exec(function (res) {
            me.setData({
                affix: res[0].height
            })
        });
    },
    // 监听页面滚动距离scrollTop
    onPageScroll: function (scroll) {
        let canScroll = scroll.scrollTop >= this.data.affix - this.data.nav;
        if (this.data.canScroll === canScroll) return;
        // 当页面滚动距离scrollTop > menuTop菜单栏距离文档顶部的距离时，菜单栏固定定位
        this.setData({ canScroll: canScroll });
    },
    // 铅笔被拖动事件
    onMoveWriteBox (e) {
        this.setData({
            writeBox: {
                x: e.detail.x,
                y: e.detail.y
            }
        });
    },
    // 导航点击事件
    handleBarClick: function (e) {
        var key = e.currentTarget.dataset.key;
        if (key != '') {
            this.setData({ active: key });
        }
    },
    // 点击发布评论事件
    handleWriteCommonClick: function (e) {

    },
    bindChange: function (e) {
        this.setData({ active: e.detail.current });
    }
});