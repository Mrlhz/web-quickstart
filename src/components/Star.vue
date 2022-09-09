<template>
  <div class="container">
    <div class="waterfall">
      <div class="item masonry-brick" v-for="item in list" :key="item.key">
        <a class="avatar-box text-center" @click="handleClick(item)">
          <div class="photo-frame">
            <img :src="item.url" :title="item.name" :alt="item.name"/>
          </div>
          <div class="photo-info">
            <span class="mleft">{{ item.name }}
              <Button size="mini" type="info">有碼</Button>
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../../packages/button/Button'

export default {
  name: 'StarComp',
  components: {
    Button
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return { }
  },
  computed: { },
  mounted() { },
  methods: {
    handleClick(item) {
      this.$emit('handleClick', item)
    }
  }
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
  }
}
</style>
