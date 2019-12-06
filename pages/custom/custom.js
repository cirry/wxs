// pages/custom/custom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      id: 0,
      name: '首页',
      isActive: true
    }, {
      id: 1,
      name: '新闻',
      isActive: false
    }, {
      id: 2,
      name: '我的',
      isActive: false
    }]
  },
  //自定义事件，用来接收子组件传递来的数据
  handleItemChange(e){
    // 接收传递过来的参数
    const {index} = e.detail;
    let {tabs} = this.data;

    tabs.forEach((item, idx) => idx === index?item.isActive=true:item.isActive=false);
    this.setData({tabs});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})