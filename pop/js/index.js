// 简单标签组件
// obj.
var anyMixin = {
    methods: {
        read(id) {
            if (this.readable.indexOf(id) == -1) { //选中
                this.readable.push(id);
                this.$store.commit('readable', this.readable);
            } else { //取消
                if (this.manageable.indexOf(id) != -1) {
                    return;
                }
                let temp = [];
                for (var i = 0; i < this.readable.length; i++) {
                    if (this.readable[i] != id) {
                        temp.push(this.readable[i]);
                    }
                }
                this.$store.commit('readable', temp);
            }
        },
        manage(id) {
            if (this.manageable.indexOf(id) == -1) { //选中
                if (this.readable.indexOf(id) == -1) {
                    this.readable.push(id);
                    this.$store.commit('readable', this.readable);
                }
                this.manageable.push(id);
                this.$store.commit('manageable', this.manageable);
                console.log('亮');
            } else { //取消
                console.log('灭');
                let temp = [];
                this.manageable.forEach(item => {
                    if (item != id) {
                        temp.push(item);
                    }
                })
                this.$store.commit('manageable', temp);
            }

        }
    }
}

// 简单标签
Vue.component('qyh-tag', {
    template: '#qyh-tag-template',
    mixins: [anyMixin],
    computed: {
        qyhTagData() {
            return this.$store.state.qyhTagData;
        },
        readable() {
            return this.$store.state.data.readable;
        },
        manageable() {
            return this.$store.state.data.manageable;
        }
    }
});

//递归组件

Vue.component('my-digui', {
    name: 'my-digui',
    template: '#my-digui-template',
    mixins: [anyMixin],
    props: [
        'cls', 'lists', 'level', 'ids', 'curr'
    ],
    data: function() {
        return {
            iconCls: [
                'jstree-no', 'jstree-icon-sq', ''
            ], //指下，指向右,没有
            root: '1',
            expand: ''
        };
    },
    created() {
        this.getRoot();
        this.changeExpand();
    },
    computed: {
        readable() {
            return this.$store.state.data.readable;
        },
        manageable() {
            return this.$store.state.data.manageable;
        },
        count() {
            return this.$store.state.count;
        },

        // ckallS() {//控制class
        //   if (this.readable.length == this.ids.length-1) {
        //     return true;
        //   } else { //输出错误
        //     console.log(this.readable.length);
        //     console.log(this.ids.length);
        //     return false;
        //   }
        // },
        // ckallM() {//控制class
        //   if (this.manageable.length == this.ids.length-1) {
        //     return true;
        //   } else { //输出错误
        //     return false;
        //   }
        // }
    },
    methods: {
        // 冒泡事件到vm
        changeExpand() {
            let expand = {};
            Object.values(this.lists).forEach(item => {
                expand[item.id] = item.children
                    ? item.id == this.root || item.tagid == this.root
                        ? 2
                        : 1
                    : 0;
            })
            this.expand = expand;
        },
        getRoot() { //得到根节点
            if (this.count != 0) {
                return;
            } else {
                if (Object.values(this.lists)[0].id) {
                    this.root = Object.values(this.lists)[0].id;
                    this.$store.commit('count', 1);
                } else {
                    this.root = Object.values(this.lists)[0].tagid;
                    this.$store.commit('count', 1);
                }
            }
        },
        bubble(id) {
            this.$emit('ckdepart', id);
        },
        chageClass(item) {
            if (this.expand[item.id] != 0) { //存在子集
                this.expand[item.id] = 3 - this.expand[item.id];
            }
        },
        read(id) {
            if (this.readable.indexOf(id) == -1) { //选中
                this.readable.push(id);
                let temp = this.readable;
                this.$store.commit('readable', temp);
            } else { //取消
                if (this.manageable.indexOf(id) != -1) {
                    return;
                }
                let temp = [];
                for (var i = 0; i < this.readable.length; i++) {
                    if (this.readable[i] != id) {
                        temp.push(this.readable[i]);
                    }
                }
                this.readable = temp;
                this.$store.commit('readable', temp);
            }
            console.log(this.readable);
        },
        manage(id) {
            if (this.manageable.indexOf(id) == -1) { //选中
                if (this.readable.indexOf(id) == -1) {
                    this.readable.push(id);
                    let temp = this.readable;
                    this.$store.commit('readable', temp);
                }
                this.manageable.push(id);
                console.log('亮');
            } else { //取消
                console.log('灭');
                let temp = [];
                this.manageable.forEach(item => {
                    if (item != id) {
                        temp.push(item);
                    }
                })
                this.manageable = temp;
                this.$store.commit('manageable', temp);

            }

        },
        //    readCheckAll(ev) {
        //     var typ = typeof ev;
        //     if (this.readable.length != this.ids.length-1) { //全选
        //       this.$store.commit('readable',this.ids);
        //     } else { //反选
        //         this.$store.commit('readable','[]');
        //     }
        //   },
        //   manageCheckAll(ev) {
        //    var typ = typeof ev;
        //    if (this.manageable.length != this.ids.length-1) { //全选
        //      this.$store.commit('manageable',this.ids);
        //        this.$store.commit('readable',this.ids);
        //    } else { //反选
        //        this.$store.commit('manageable','[]');
        //    }
        //  },

    }
})
