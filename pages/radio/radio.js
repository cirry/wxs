// pages/radio/radio.js
Page({

  data: {
    gender:''
  },
  handleChange(e){
    let gender = e.detail.value;
    this.setData({gender})
  }
})