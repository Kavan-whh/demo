const mixins = {
  props: ['input', 'x', 'y'],
  computed: {
    styleData() {
      let temp = this.input
      let obj = {left: this.x + 'px', top: this.y + 'px'}
      temp = Object.assign(temp, obj)
      return temp
    }
  },
  mounted() {
    var params = { // 容器
      left: 0,
      top: 0,
      currentX: 0,
      currentY: 0,
      flag: false,
      ele: null
    }
    const self = this
    $('.huabu').delegate('.box', 'mousedown', function(event) {
      params.ele = $(this)
      const target = params.ele
      const e = event
      // 初始化
      params.flag = true
      if (self.getCss(target, 'left') !== 'auto') {
        params.left = self.getCss(target, 'left')
      }
      if (self.getCss(target, 'top') !== 'auto') {
        params.top = self.getCss(target, 'top')
      }
      params.currentX = e.clientX
      params.currentY = e.clientY
    })
    $(document).delegate('.box', 'mouseup', function() {
      const target = params.ele
      if (self.getCss(target, 'left') !== 'auto') {
        params.left = self.getCss(target, 'left')
      }
      if (self.getCss(target, 'top') !== 'auto') {
        params.top = self.getCss(target, 'top')
      }
      params.flag = false
      params.ele = null
      console.log(params)
    })
    $('.huabu').mousemove(function() {
      if (!params.flag) {
        return
      }
      const target = params.ele
      const e = event || window.event
      const nowX = e.clientX
      const nowY = e.clientY
      const disX = nowX - params.currentX
      const disY = nowY - params.currentY
      target.css('left', parseInt(params.left) + disX + 'px')
      target.css('top', parseInt(params.top) + disY + 'px')
    })
  },
  methods: {
    getCss(o, key) {
      return o.css(key)
    }
  }
}
export default mixins
