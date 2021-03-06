// ============================数据=============================
var STATIC_PATH = "../"; //图片资源
var materialData = [{ //图文素材数据
    id: 1,
    img: STATIC_PATH + 'img/01.png',
    title: '华中师范大学-外联部外联部外联部',
    inner: '新闻1新闻1新闻1新闻1新闻1新闻1新闻1'
}, {
    id: 2,
    img: STATIC_PATH + 'img/01.png',
    title: '华中师范大学-外联部外联部外联部',
    inner: '新闻2新闻2新闻2新闻2新闻2'
}];

var lis = [{ //平台数据
    id: 1,
    isDue: 1, //到期
    img: STATIC_PATH + 'img/01.png',
    title: '华中师范大学-外联部外联部外联部',
    total: '20'
}, {
    id: 2,
    isDue: 0,
    img: STATIC_PATH + 'img/01.png',
    title: '华中师范大学-外联部外联部外联部',
    total: '0'
}, {
    id: 3,
    isDue: 0,
    img: STATIC_PATH + 'img/01.png',
    title: '华中师范大学-外联部外联部外联部',
    total: '20'
}, {
    id: 4,
    isDue: 0,
    img: STATIC_PATH + 'img/01.png',
    title: '华中师范大学-外联部外联部外联部',
    total: '20'
}];

var resPublish = { //发布结果数据
    weixin: [{
        members: ['中国农业大学教务处'],
        detail: '以上微信号授权期限已到期',
        img: STATIC_PATH + 'img/01.png',
    }, {
        members: ['中国农业大学教务处'],
        detail: '以上微信号授权期限已到期',
        img: STATIC_PATH + 'img/01.png',
    }],
    material: [{
        members: ['中国农业大学教务处'],
        detail: '此条素材存在问题，未发送成功，请重新编辑',
        img: STATIC_PATH + 'img/01.png',
    }, {
        members: ['中国农业大学教务处'],
        detail: '此条素材存在问题，未发送成功，请重新编辑',
        img: STATIC_PATH + 'img/01.png',
    }]
}

// ============================组件=============================
// 弹窗中部
Vue.component('pop-bd', {
    template: '#lis—template',
    computed: {
        checkedArr() {
            return this.$store.state.checkedArr
        },
        lis() {
            return this.$store.state.lis
        },
        inputData() {
            return this.$store.state.inputData
        },
    },
    methods: {
        checkedOne(item) {
            let id = item.id;
            // 暗不可选
            if (((this.inputData.ctrl === 'weixin') && item.total == 0) || item.isDue && (this.inputData.ctrl != 'weixin')) {
                return false;
            }
            let temp = this.checkedArr;
            if (temp.indexOf(id) != -1) {
                temp = temp.filter((item) => {
                    return item != id;
                });
            } else {
                temp.push(id);
            }

            this.$store.commit('m_checkedArr', temp)
        },
    }




})
//图文素材弹窗
Vue.component('one-material', {
    template: '#material—template',
    data() {
        return {
            searchtext: '',
            searchResult: []
        }
    },
    watch: {
        isInit(newVal) {
            if (newVal) {
                this.searchResult = []
            }
        }
    },
    computed: {
        isInit() {
            return this.$store.state.isInit
        },
        materialData() {
            return this.$store.state.materialData
        },
        inputData() {
            return this.$store.state.inputData
        },
        checkedArr() {
            return this.$store.state.checkedArr
        },
    },
    methods: {
        checkedOne(item) {
            let id = item.id;
            let temp = this.checkedArr;
            if (temp.indexOf(id) != -1) {
                temp = temp.filter((item) => {
                    return item != id;
                });
            } else {
                temp.push(id);
            }
            this.$store.commit('m_checkedArr', temp)
        },
        search() {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            var self = this;
            this.timeout = setTimeout(function () {
                // $.ajax({
                //   url: '/path/to/file',
                //   type: 'default GET (Other values: POST)',
                //   dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                //   data: {param1: 'value1'}
                // })
                // .done(function() {
                // self.searchResult = res.data.d.department;
                self.searchResult = [{ //数据
                    id: 1,
                    img: STATIC_PATH + 'img/01.png',
                    title: '华中师范大学-外联部外联部外联部',
                }]
                // })
                // .fail(function() {
                //   console.log("error");
                // })

            }, 500);
        },

    }



})
// 弹窗头部
Vue.component('pop-hd', {
    template: '#popHd—template',
    props: ['width', 'height', 'title', 'closeMethod'],
    computed: {
        style() {
            return {
                width: this.width ? this.width : '100%',
                height: this.height ? this.height : '44px',
                lineHeight: this.height ? this.height : '44px',
            }
        },
    },
    methods: {
        close() {
            if (!this.closeMethod) {
                this.$store.commit('m_checkedArr', [])
                $('#pops').css('display', 'none');
            } else {
                this.closeMethod();
            }

        }

    }

})

// 发布结果
Vue.component('pop-publish', {
    template: '#publish—template',
    data() {
        return {
            // weixin: resPublish.weixin,
            // material: resPublish.material

        }
    },
    computed: {
        publishCtrl: function () {
            return this.$store.state.inputData.publishCtrl
        },
        STATIC_PATH: function () {
            console.log(this.$store.state.inputData.ctrl);
            return this.$store.state.inputData.STATIC_PATH
        },
        weixin(){
            return this.$store.state.inputData.resPublish.weixin
        },
        material(){
            return this.$store.state.inputData.resPublish.material
        }


    }


})


// ============================实例=============================
// 建vuex仓库
var storeOpt = {
    state: {
        inputData: { //调用插件者初始化数据
            ctrl: 'weixin', //'toutiao,weibo,weixin'，'material',
            publishCtrl: 'weixin', //weixin,material
            showSurplus: true,
            resPublish:resPublish
        },
        checkedArr: [], //选中的数组
        materialData: materialData,
        lis: lis,

    },
    mutations: {
        m_checkedArr(state, arr) {
            state.checkedArr = arr;
        },
        m_isInit(state, type) {
            state.m_isInit = type;
        }
    }
}
const store = new Vuex.Store(storeOpt)




class CreatePop {
    constructor(userOpt) {
        if (typeof userOpt.STATIC_PATH != 'undefined') {
            STATIC_PATH = userOpt.STATIC_PATH

        }
        // Object.assign(storeOpt.state.inputData, userOpt.storeOpt.inputData)
        var vueOpt = {
            el: '#pops',
            store,
            computed: {
                checkedArr() {
                    return this.$store.state.checkedArr
                },
                ctrl() {
                    return this.$store.state.inputData.ctrl
                },
                title() {
                    switch (this.ctrl) {
                        case 'weixin':
                            return '微信'
                            break;
                        case 'weibo':
                            return '微博'
                            break;
                        case 'toutiao':
                            return '头条'
                            break;
                        case 'material':
                            return '选择图文素材'
                            break;
                        default:
                            break;

                    }
                },
                outputData() { //插件使用者输出数据
                    var list = this.$store.state.lis;
                    let temp = [];
                    if (this.ctrl === 'material') {
                        list = this.$store.state.materialData
                    }
                    Object.values(list).forEach(item => {
                        if (this.checkedArr.indexOf(item.id) != -1) {
                            temp.push(item)
                        }
                    })
                    console.log(temp);
                    return temp
                }
            },
            methods: {
                close() {
                    this.$store.commit('m_checkedArr', [])
                    $('#pops').css('display', 'none')

                },
                save() {
                    // 初始化
                    this.$store.commit('m_checkedArr', [])
                },

            }

        }
        Object.assign(vueOpt.methods, userOpt.vueOpt.methods)
        this.vuePops = new Vue(vueOpt);
    }
    setInputData(obj) {
        Object.assign(this.vuePops.$store.state, obj)
    }

}



//  var userOpt={
//     STATIC_PATH:"./",//资源根目录:图片
//     vueOpt:{
//       methods:{//可写关闭close(),保存方法（）进行替换

//       }
//     }
//   }
  var userOpt = {
    STATIC_PATH: "./", //资源根目录:图片
    vueOpt: {
        methods: { //可写关闭close(),保存方法（）进行替换
            save: function save() {
                if (this.ctrl == 'material') {
                    if (this.outputData.length != 0) {
                        vm.present.material = this.outputData;
                        vm.typelist.news = vm.present.material[0];
                        ue.setContent(vm.present.material[0].inner);
                    } else {
                        vm.present.material = this.outputData;
                        vm.typelist.news = "";
                        ue.setContent("");
                    }
                } else {

                    vm.present.checkList = this.outputData;

                }
                Vue.nextTick(function () {
                    sendHeight();
                    $('.screen').width($('.sendlist').width() - $('.sendlist .left').width() - $('.sendlist .btn').width()-57 );
                });

                $('#pops').css('display', 'none');
                this.$store.commit('m_checkedArr', []);
                Vue.nextTick(function () {
                    upload();
                });
            },
            close: function close() {
                $('#pops').css('display', 'none');
                this.$store.commit('m_checkedArr', []);
            }
        }
    }
};
  vuepop = new CreatePop(userOpt);
