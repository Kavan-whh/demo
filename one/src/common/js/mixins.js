const mixins = {
  props: ['input', 'x', 'y'],
  computed: {
    styleData() {
      let temp = this.input
      let obj = {left: this.x + 'px', top: this.y + 'px'}
      temp = Object.assign(temp, obj)
      return temp
    }
  }
}
export default mixins
