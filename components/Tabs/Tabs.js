// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   * 里面存放的是从父组件接收的数据
   */
  properties: {
    // 要接收的数据的名称
    // aaa:{
    //   //type 要接收的数据类型
    //   type: String, 
    //   // value 默认值，如果没有传值，默认是空字符串
    //   value:''
    // }

    tabs:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 1 获取点击事件，需要在methods中绑定
     * 2 获取被点击的索引
     * 3 获取原数组
     * 4 对数组循环
     *    1 给每一个循环项 选中属性设置为false
     *    2 给当前的索引项 添加激活属性
     * 
     * 5 修改为父组件向自子组件传值之后，
     *    触发父组件中的自定义事件，同时传递数据给父组件，不在做上面的那些步骤了
     *    this.triggerEvent("父组件自定义事件的名称",要传递的参数)
     */
    handleItemTap(e) {
      // 2 获取索引
      const {index} = e.currentTarget.dataset;

      // 5 触发父组件中的自定义事件
      this.triggerEvent("itemChange",{index});
      // 3 获取data中的数组
      // 解构，对复杂类型进行解构的时候，复制了一份变量的引用而已
      // 最严谨的做法 重新拷贝一份数组，再对这个数组的备份进行处理
      // 不要直接修改，this.data.数据，小程序不推荐这么修改
      // let {tabs} = this.data;
      //上述才做方法等同于 let tabs = this.data.tabs;

      // 4 循环数组
      // [].foreach 遍历数组，遍历数组的时候，源数据会被修改
      // tabs.forEach((item ,idx) => idx === index?item.isActive=true:item.isActive=false);

      // this.setData({tabs});
    }
  }
})