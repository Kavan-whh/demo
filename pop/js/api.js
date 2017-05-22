const store = new Vuex.Store({
    state: {
        data: { //发ajax的数据
            readable: ['1', '2'],
            manageable: ['1', '2'],
            uid: 2,
            type: 'corp1',
            gid: 2
        },
        count: 0,
        qyhTagData: '',
    },
    mutations: {
        readable(state, obj) {
            state.data.readable = obj;
        },
        manageable(state, obj) {
            state.data.manageable = obj;
        },
        count(state, obj) {
            state.count = obj;
        },
        qyhTagData(state, obj) {
            state.qyhTagData = obj;
        }

    }
})



function createPop(option) {
    var myVue = '<div class="div_scroll"><div><section><qyh-tag v-if="this.type==1"></qyh-tag><my-digui v-if="this.type==2" :cls="color" :curr=checked  v-on:ckdepart="pick" :lists=initData :level="1" ></my-digui></section></div></div>';
    $("#pops .my-vue").html(myVue);

    var p_title = '设置通讯录权限<span class="modal_dele" @click="cancel"></span>';
    $('#pops .p_title').html(p_title);

    var modal_footer = '<div class="btn_sure" @click="save"><a href="javascript:void(0)">保存</a></div><div class="btn_cancel" @click="cancel"><a href="javascript:void(0)">取消</a></div>';
    $('#pops .modal_footer div').html(modal_footer);

    var vueGlobalOption = {
            store,
            el: '#pops',
            data: {
                type: "", //控制组件结构
                initData: '',
                color: '',
                checked: 0
            },
            created() {
                this.$store.commit('qyhTagData', this.initData); //将路口的数据传入vuejs
            },
            methods: {
                cancel: function() {
                    this.$store.commit('count', 0);
                    $('#pops').hide();
                },
                pick: function(id) {
                    this.checked = id;
                }
            },
            computed: {
                params() {
                    let readable = this.readable;
                    let manageable = this.manageable;
                    let uid = this.$store.state.data.uid;
                    let type = this.$store.state.data.type;
                    let gid = this.$store.state.data.gid;
                    let temp = { uid, type, gid, readable, manageable }
                    return temp;
                },
                readable() {
                    return this.$store.state.data.readable;
                },
                manageable() {
                    return this.$store.state.data.manageable;
                },
            },
        }
        // 对传入的参数进行设定
    for (x of['type', 'initData', 'color']) {
        if (typeof option[x] !== 'undefined') {
            vueGlobalOption.data[x] = option[x];
        }
    }
    for (x of['readable', 'manageable', 'uid', 'type', 'gid']) {
        if (typeof option.params[x] !== 'undefined') {
            vueGlobalOption.store.state.data[x] = option.params[x];
        }
    }
    vueGlobalOption.methods = Object.assign({}, option.methods, vueGlobalOption.methods);
    var pops = new Vue(vueGlobalOption);
}
