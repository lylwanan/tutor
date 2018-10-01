const app = getApp();

Page({
    data: {
        imgs: [{
            linkUrl: '',
            jumpType: '',
            content: '西北农林科技大学',
            desc: '100位教师参与评价',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s1125x690_jfs/t27859/211/376554744/162106/9e380d6d/5bb07e87N90150d82.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        }, {
            linkUrl: '',
            jumpType: '',
            title: '胡少军',
            content: '西北农林科技大学',
            desc: '信息工程学院 硕士研究生导师',
            imgUrl: 'https://m.360buyimg.com/mobilecms/jfs/t26023/245/1452794296/148972/993abc43/5bb085c6N6c54bfc8.jpg!cr_1125x549_0_72'
        }],
        navs: [{
            linkUrl: '',
            jumpType: '',
            title: '学校',
            imgUrl: 'https://img30.360buyimg.com/mweb/jfs/t26935/254/572903564/8597/fae70189/5bb1f0dbNccda0a14.jpg'
        }, {
            linkUrl: '',
            jumpType: '',
            title: '专业',
            imgUrl: 'https://img30.360buyimg.com/mweb/jfs/t27211/265/576890382/8047/3f1cacdb/5bb1f0ecN680e79c8.jpg'
        }, {
            linkUrl: '',
            jumpType: '',
            title: '研究方向',
            imgUrl: 'https://img30.360buyimg.com/mweb/jfs/t25822/14/1468351251/7700/e2b0bd0e/5bb1f10bN0fa7d2bd.jpg'
        }],
        habits: [{
            name: '吴磊',
            commons: '磊哥最帅，我爱死你了',
            acnt: 10,
            ccnt: 20,
            imgUrl: 'https://img30.360buyimg.com/mweb/jfs/t26704/362/589340410/113311/c5fda78b/5bb1e2e2N0acdff4b.jpg'
        }, {
            name: '乔峰',
            commons: '中国人名大学最年轻的教授，对学生特别好，真想再回去上一年，走进你的课堂，做你的学生，听你的课。',
            acnt: 37,
            ccnt: 20,
            imgUrl: 'https://img30.360buyimg.com/mweb/jfs/t26704/362/589340410/113311/c5fda78b/5bb1e2e2N0acdff4b.jpg'
        }, {
            name: '郭靖',
            commons: '我最喜欢的老师之一',
            acnt: 100,
            ccnt: 99,
            imgUrl: 'https://img30.360buyimg.com/mweb/jfs/t26704/362/589340410/113311/c5fda78b/5bb1e2e2N0acdff4b.jpg'
        }],
        interests: [{
            name: '吴磊',
            school: '西北农林科技大学',
            imgUrl: 'https://img30.360buyimg.com/mweb/jfs/t26704/362/589340410/113311/c5fda78b/5bb1e2e2N0acdff4b.jpg'
        }, {
            name: '乔峰',
            school: '中国人名大学',
            imgUrl: 'https://img30.360buyimg.com/mweb/jfs/t26704/362/589340410/113311/c5fda78b/5bb1e2e2N0acdff4b.jpg'
        }, {
            name: '郭靖',
            school: '西安科技大学',
            imgUrl: 'https://img30.360buyimg.com/mweb/jfs/t26704/362/589340410/113311/c5fda78b/5bb1e2e2N0acdff4b.jpg'
        }]
    },
    marqueeTouch: function () {
        return false;
    },
    getLocation: function() {
        wx.getLocation({
            //返回可以用于wx.openLocation的经纬度
            type: 'gcj02',
            success: function (res) {
                console.log(res);
            },
            fail: function () {}
        })
    }
});