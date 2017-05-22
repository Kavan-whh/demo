// 企业号组织架构数据
function pop1() {
    $('#pops').show();
    let corpDepartData = {
        "1": {
            "id": 1,
            "name": "长江云平台",
            "parentid": 0,
            "order": 200,
            "children": [{
                "id": 10,
                "name": "高校客户",
                "parentid": 1,
                "order": 200
            }, {
                "id": 11,
                "name": "技术中心",
                "parentid": 1,
                "order": 400
            }, {
                "id": 13,
                "name": "技术开发",
                "parentid": 1,
                "order": 800
            }, {
                "id": 14,
                "name": "测试部门",
                "parentid": 1,
                "order": 0,
                "children": [{
                    "id": 20,
                    "name": "123",
                    "parentid": 14,
                    "order": 0
                }]
            }, {
                "id": 15,
                "name": "技术开发",
                "parentid": 1,
                "order": 800
            }, {
                "id": 16,
                "name": "技术开发",
                "parentid": 1,
                "order": 800
            }, {
                "id": 17,
                "name": "技术开发",
                "parentid": 1,
                "order": 800
            }, {
                "id": 18,
                "name": "技术开发",
                "parentid": 1,
                "order": 800
            }, {
                "id": 19,
                "name": "技术开发",
                "parentid": 1,
                "order": 800
            }]
        }
    }
    let option = {
        type: 2, //1为简单型，2位复杂型-决定结构
        initData: corpDepartData, //初始数据
        color: 'corpDepart',
        params: { //决定保存按钮ajax
            uid: 1,
            type: 'corp',
            gid: 1,
            readable: [],
            manageable: [],
        },
        methods: {
            save: function(data) {
                $('#enter .test').html(JSON.stringify(this.params));
                  this.cancel();


            },
            cancel: function() {

            }
        }
    }

    createPop(option);
}

// 云校组织架构
function pop2() {
    $('#pops').show();
    let tempDepartData = [{
        "id": 188,
        "gid": 5,
        "pid": 0,
        "name": "长江云平台",
        "children": [{
            "id": 189,
            "gid": 5,
            "pid": 188,
            "name": "123",
            "children": [{
                "id": 190,
                "gid": 5,
                "pid": 189,
                "name": "234"
            }]
        }, {
            "id": 194,
            "gid": 5,
            "pid": 188,
            "name": "高校客户"
        }, {
            "id": 199,
            "gid": 5,
            "pid": 188,
            "name": "测试1",
            "children": [{
                "id": 200,
                "gid": 5,
                "pid": 199,
                "name": "测试子部门",
                "children": [{
                    "id": 201,
                    "gid": 5,
                    "pid": 200,
                    "name": "第三级部门"
                }, {
                    "id": 202,
                    "gid": 5,
                    "pid": 200,
                    "name": "第三级部门"
                }, {
                    "id": 203,
                    "gid": 5,
                    "pid": 200,
                    "name": "第三级部门"
                }, {
                    "id": 204,
                    "gid": 5,
                    "pid": 200,
                    "name": "第三级部门"
                }, {
                    "id": 205,
                    "gid": 5,
                    "pid": 200,
                    "name": "第三级部门"
                }, {
                    "id": 206,
                    "gid": 5,
                    "pid": 200,
                    "name": "第三级部门"
                }, {
                    "id": 207,
                    "gid": 5,
                    "pid": 200,
                    "name": "第三级部门"
                }, {
                    "id": 208,
                    "gid": 5,
                    "pid": 200,
                    "name": "第三级部门"
                }]
            }]
        }]
    }];
    let yunDepartData = {
        1: tempDepartData[0]
    };
    let option = {
        type: 2, //1为简单型，2位复杂型-决定结构
        initData: yunDepartData, //初始数据
        color: 'yunDepart',
        params: { //决定保存按钮ajax
            uid: 1,
            type: 'corp',
            gid: 1,
            readable: [],
            manageable: [],
        },
        methods: {
            save: function(data) {
                $('#enter .test').html(JSON.stringify(this.params));
                  this.cancel();
            },

        }
    }

    createPop(option);
}

// 云校标签
function pop3() {
    $('#pops').show();
    let tempTagData = [{
        "id": 191,
        "gid": 17,
        "pid": 0,
        "name": "标签",
        "children": [{
            "id": 192,
            "gid": 17,
            "pid": 191,
            "name": "aac",
            "children": [{
                "id": 193,
                "gid": 17,
                "pid": 192,
                "name": "f1"
            }]
        }, {
            "id": 195,
            "gid": 17,
            "pid": 191,
            "name": "2017",
            "children": [{
                "id": 196,
                "gid": 17,
                "pid": 195,
                "name": "计算机与信息技术学院(演示)",
                "children": [{
                    "id": 197,
                    "gid": 17,
                    "pid": 196,
                    "name": "软件工程(演示)",
                    "children": [{
                        "id": 198,
                        "gid": 17,
                        "pid": 197,
                        "name": "软件工程1701(演示)"
                    }, {
                        "id": 199,
                        "gid": 17,
                        "pid": 197,
                        "name": "软件工程1701(演示)"
                    }, {
                        "id": 200,
                        "gid": 17,
                        "pid": 197,
                        "name": "软件工程1701(演示)"
                    }, {
                        "id": 201,
                        "gid": 17,
                        "pid": 197,
                        "name": "软件工程1701(演示)"
                    }, {
                        "id": 202,
                        "gid": 17,
                        "pid": 197,
                        "name": "软件工程1701(演示)"
                    }]
                }]
            }]
        }]
    }]
    let yunTagData = {
        1: tempTagData[0]
    };
    let option = {
        type: 2, //1为简单型，2位复杂型-决定结构
        initData: yunTagData, //初始数据
        color: 'yunTag',
        params: { //决定保存按钮ajax
            uid: 1,
            type: 'corp',
            gid: 1,
            readable: [],
            manageable: [],
        },
        methods: {
            save: function(data) {
                $('#enter .test').html(JSON.stringify(this.params));
                this.cancel();

            },

        }
    }

    createPop(option);
}
// 企业号标签
function pop4() {
    $('#pops').show();
    let qyhTagData = [{
        "tagid": 1,
        "tagname": "测试"
    }, {
        "tagid": 2,
        "tagname": "测试标签"
    }, {
        "tagid": 3,
        "tagname": "研究生"
    }, {
        "tagid": 4,
        "tagname": "大学生"
    }, {
        "tagid": 5,
        "tagname": "高中生"
    }, {
        "tagid": 6,
        "tagname": "高中生"
    }, {
        "tagid": 7,
        "tagname": "高中生"
    }, {
        "tagid": 8,
        "tagname": "高中生"
    }, {
        "tagid": 9,
        "tagname": "高中生"
    }];
    let option = {
        type: 1, //1为简单型，2位复杂型-决定结构
        initData: qyhTagData, //初始数据
        color: 'qyhTag',
        params: { //决定保存按钮ajax
            uid: 1,
            type: 'corp',
            gid: 1,
            readable: [],
            manageable: [],
        },
        methods: {
            save: function(data) {
                $('#enter .test').html(JSON.stringify(this.params));
                  this.cancel();

            },

        }
    }

    createPop(option);
}
