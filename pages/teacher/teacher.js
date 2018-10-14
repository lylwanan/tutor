const app = getApp();

Page({
    data: {
        active: 0,
        commons: [1,2,3,4]
    },
    handleBarClick: function (e) {
        var key = e.currentTarget.dataset.key;
        if (key != '') {
            this.setData({ active: key });
        }
    }
});