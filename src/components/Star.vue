<template>
  <div class="container">
    <div class="waterfall">
      <div class="item masonry-brick" v-for="item in imagesList" :key="item.name">
        <a class="avatar-box text-center" @click="handleClick(item)">
          <div class="photo-frame">
            <img :src="item.url" :title="item.name" :alt="item.name"/>
          </div>
          <div class="photo-info">
            <span class="mleft">{{ item.name }}
              <button class="btn btn-xs btn-info">
                有碼
              </button>
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StarComp',
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      imagesList: [],
    }
  },
  mounted() {
    console.log(this.imagesList)
    this.getAvatarList()
  },
  methods: {
    handleClick(item) {
      console.log(item)
      this.$store.commit('setStarParams', item)
      this.$router.push({ name: 'StarList' })
    },
    getAvatarList() {
      this.imagesList = this.list.map((item) => {
        const origin = process.env.VUE_APP_PUBLIC
        return {
          name: item.name,
          url: item.url.includes('http') ? item.url : `${origin}/${item.url}`,
        }
      })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  .waterfall {
    margin: 10px;
    // height: 924px;
    // width: 1870px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: flex-start;
    justify-content: center;
    .item {
      &:last-child {
        margin-right: auto; // flex布局最后一行列表左对齐的方法
      }
      flex-basis: 10%;
      .avatar-box {
        display: block;
        background-color: #fff;
        overflow: hidden;
        margin: 10px;
        width: 167px;
        padding: 0px;
        font-size: 14px;
        border: none;
        border-radius: 0px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
      .avatar-box .photo-frame {
        margin: 21px;
      }
      .avatar-box img {
        height: 125px;
        width: 125px;
      }
      .avatar-box span {
        font-weight: bold;
        text-align: center;
        display: block;
        color: rgb(153, 153, 153);
      }
      .photo-info {
        word-wrap: break-word;
        display: block;
        padding: 10px;
        line-height: 23px;
        color: #333;
        background-color: #fafafa;
        border-top: 1px solid #f2f2f2;
      }
    }
    .btn-info {
      background-color: #2aabd2;
      border-color: #46b8da;
      color: #fff;
      box-shadow: none;
      opacity: 0.65;
      border: 1px solid transparent;
    }
    .btn-xs {
      padding: 1px 5px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
  }
}
</style>
