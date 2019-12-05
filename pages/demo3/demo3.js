// pages/demo3/demo3.js
Page({
  data: {
    num: 0
  },
  //输入框input事件
  plusNum(e) {
    console.log(e.detail.value);
    this.setData({
      num: e.detail.value
    });
  },
  // 加减按钮的事件
  handleTap(e) {
    console.log(e);
    //1 获取自定义的属性operation
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num + operation
    })
  }
})