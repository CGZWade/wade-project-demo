import {Theme} from "../../models/theme";
import {Banner} from "../../models/banner";
import {Category} from "../../models/category";
import {Activity} from "../../models/activity";


Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        gridC: [],
        activityD: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        this.initAllData()
    },

    /**
     * 初始化数据
     */
    async initAllData() {
        const theme = new Theme()
        await theme.getThemes()
        const themeA = theme.getHomeLocationA()
        const bannerB = await Banner.getHomeLocationB()
        const gridC = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD()

        this.setData({
            themeA,
            bannerB,
            gridC,
            activityD
        })
    },


    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})