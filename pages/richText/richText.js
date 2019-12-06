// pages/richText/richText.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html: [
      {
        //1 div标签 name属性来制定
        name:'div',
        //2 标签上有哪些属性
        attrs:{
          class:"my-div",
          style:"color:red;"
        },
        //3 子节点 children 要接收的数据类型和nodes 第二种渲染方式的数据类型意义昂
        children:[
          {
            name:'p',
            attrs:{},
            children:[{type:'text', text:'hello world!'}]
          }
        ]
      }
    ]
  }
})