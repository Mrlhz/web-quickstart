<template>
  <div :class="cardClass">
    <div class="card">
      <div class="title_wrapper">
        <div class="favicon">
          <img :src="`http://localhost:3005/image/${item.img}`" :alt="item.title">
          <img src="../assets/image/favicon.ico" :alt="item.title">
          <!-- <img :src="require(`./assets/image/${item.img}`)" :alt="item.title"> -->
        </div>
        <div class="title">{{ item.title }}</div>
      </div>
      <!-- 加图标 -->
      <div class="desc ellipsis" :title="item.desc">{{ item.desc }}</div>
      <div class="type_wrapper">
        <div :class="['type_icon', item.color ? `bg-${item.color}` : 'bg-cyan']">{{ item.type }}</div>
        <div class="type_desc ellipsis" :title="msg">{{ msg }}</div>
        <div class="cube"></div>
      </div>
      <div class="operation">
        <div class="like item">点赞</div>
        <div class="icon item">投币</div>
        <div class="collect">收藏</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  components: {},
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    cardClass() {
      // 1 2 3 4
      // 24 12 8 6
      return ['col-xs-24', 'col-sm-12', 'col-md-8', 'col-lg-8', 'col-xl-6']
    },
  },
  data() {
    return {
      msg: '逆水行舟，不进则退。意指顶着水流行船。比喻不努力前进就要被其他竞争者超过，从而相对位移会往后退，置自己于更不利的地位。',
    }
  },
  created() {

  },
  mounted() {},
}
</script>
<style lang="scss">
$blue:    #007bff !default;
$indigo:  #6610f2 !default;
$purple:  #6f42c1 !default;
$pink:    #e83e8c !default;
$red:     #dc3545 !default;
$orange:  #fd7e14 !default;
$yellow:  #ffc107 !default;
$green:   #28a745 !default;
$teal:    #20c997 !default;
$cyan:    #17a2b8 !default;

$colors: (
  blue:    $blue,
  indigo:  $indigo,
  purple:  $purple,
  pink:    $pink,
  red:     $red,
  orange:  $orange,
  yellow:  $yellow,
  green:   $green,
  teal:    $teal,
  cyan:    $cyan,
);

.card {
  margin: 6px;
  padding: 6px 10px;
  border-radius: 5px;
  background-color: #fff;
  text-align: initial;
  .desc,
  .title {
    padding-top: 12px;
  }
  .desc {
    color: grey;
    font-size: 12px;
  }
  .title_wrapper {
    display: flex;
    height: 40px;
    .favicon {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 5px;
    }
    .favicon img {
      width: 100%;
      height: 100%;
    }
    .title {
      font-weight: 700;
      font-size: 14px;
      color: #3273dc;
    }
  }
  .type_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    .type_icon {
      margin-right: 5px;
      width: 60px;
      height: 24px;
      line-height: 24px;
      border-radius: 5px;
      text-align: center;
      font-size: 14px;
      color: #fff;
    }
    .type_desc {
      width: calc(100% - 60px - 5px - 24px);
    }
    .cube {
      width: 24px;
      height: 24px;
      background-color: $green;
    }
  }
  .operation {
    margin-left: calc(60px + 5px);
    margin-bottom: 12px;
    padding-top: 10px;
    display: flex;
    font-size: 12px;
    color: #00a1d6;
    .item {
      margin-right: 10px;
    }
  }
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@each $name in map-keys($map: $colors) {
  .bg-#{$name} {
    background-color: map-get($colors, $name);
  }
}
</style>
