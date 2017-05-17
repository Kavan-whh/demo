<template>
<div class="search searchBox">
  <div class="search_input">
    <span></span>
    <input placeholder="请输入搜索的标签" v-model="searchtext" @input="search">
  </div>
  <section v-if="isShow">
    <div class="search_result" v-if="searchlist.length!=0 || searchUserList.length!=0">
      <ul>
        <li v-for="(list,index) in searchlist">
          <router-link tag="div" :to="'/depart/'+list.id" v-on:click.native="isShow=false">
            <span></span>{{list.name}}
          </router-link>
        </li>
        <li v-for="(list,index) in searchUserList" @click="getUser(list.uid)">
          <img v-if="list.avatar" :src="list.avatar" alt="">
          <i v-else class="ion-person"></i>
          {{list.name}}
        </li>
      </ul>
    </div>
    <div v-else class="nodata">
      <img :src="STATIC_PATH+'img/nodata.png'" alt="">
      <p>没有您要搜索的内容</p>
    </div>
  </section>

</div>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  name: '',
  data() {
    return {
      searchtext: "",
      searchlist: [],
      searchUserList: [],
      timeout: null, // 搜索延时
      STATIC_PATH,
      isShow:false
    }
  },
  created: function() {
    var self = this;
    $(document).click(function(e) {
      if ($(e.target).closest('.searchBox').length == 0) {
        self.isShow=false;
      }
    });
  },
  computed: {
    ...mapState(['users'])
  },
  methods: {
    ...mapMutations(['M_USERS']),
    search: function() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var self = this;
      this.timeout = setTimeout(function() {
        self.$http.get('/wechat/backend/corp-contact/search-api?type=department&name=' + self.searchtext, ).then((res) => {
          console.log(res.data.d);
          self.searchlist = res.data.d.department;
          self.searchUserList = res.data.d.users;
          self.isShow=true;
        })
      }, 500);
    },
    getUser(id) {
      let self = this;
      this.$http.get('/wechat/backend/corp-contact/search-api', {
          params: {
            uid: id
          }
        })
        .then(function(res) {
          console.log(res.data.d.users);
          self.M_USERS(res.data.d.users);
          self.isShow=false;
        })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$backcolor: #ECEFF4;
$bordercolor: #E5E5E5;
$eColour: #00C79C;
$eColourhover: #F2FCFB;

$icon_search: "../../static/img/icon_search.png";
$icon_label: "../../static/img/file.png";
@mixin btn_box() {
    margin: 8px;
    border: 8px solid $backcolor;
    line-height: 30px;
}
@mixin ul() {
    height: 400px;
    width: 200%;
    overflow-y: auto;
    li {
        a {
            width: 100%;
            height: 100%;
            display: block;
        }
        position: relative;
        width: 50%;
        box-sizing: border-box;
        line-height: 36px;
        font-size: 13px;
        text-align: left;
        padding-left: 10px;
        border-bottom: 1px solid $backcolor;
        background-color: #ffffff;
        cursor: pointer;
        span {
            width: 16px;
            height: 16px;
            padding-right: 10px;
            display: inline-block;
            vertical-align: middle;
            background: url($icon_label) no-repeat;
        }
    }
    li:hover {
        background-color: $eColourhover;
    }
}
.search_input {
    @include btn_box;
    span {
        margin: 8px;
        float: left;
        width: 14px;
        height: 14px;
        display: block;
        position: absolute;
        background: url($icon_search) no-repeat;
    }
    input {
        font-size: 13px;
        width: 100%;
        padding: 8px 0 8px 30px;
        box-sizing: border-box;
        display: block;

    }
}

.search_result {
    margin: -15px 8px 16px;
    position: relative;
    ul {
        @include ul;
        height: auto;
        //width: inherit;
        position: absolute;
        z-index: 10;
        li {
            border: 1px solid $bordercolor;
            border-top: 0;
            span{
              margin: 8px;
            }
            img {
                margin: 8px;
                float: left;
                width: 16px;
                height: 16px;
                display: block;
            }
        }
    }
    ul::-webkit-scrollbar {
        width: 0;
    }
}

// 王灿调试

.search {
    background: none;
    height: initial;
    padding: 0;
}
.search_input {
    margin: 0;
    input {
        padding: 0 0 0 30px;
    }
}
.nodata {
    img {
        width: 25%;
        margin-top: 20px;
        margin-bottom: 5px;
    }
    background: #FFFFFF;
    border: 1px solid #F4F6FA;
    box-shadow: 0 2px 4px 0 #CCCCCC;
    width: 97%;
    margin-left: 2%;
    position: absolute;
    top: 48px;
    left: 0;
    z-index: 9999;
    box-sizing: border-box;
}
</style>
