<template>
<div class="container" v-if="refresh">
  <div class="select-wrapper shadow-level3">
    <div class="overflow-hidden">
      <div class="search-bar"></div>
      <div class="content scrollbar-hide">
        <template v-for="(tags, index) in tagList" :key="tags.name">
          <div :class="['full', index !== 0 ? 'pt-3': '' ]">
            <div class="tag-name">
              <span>{{ tags.transName }}</span>
            </div>
            <div class="tag-list">
              <template v-for="item in tags.tagRelation" :key="item.questionNum">
                <span class="tag transition-all">
                  {{ item.tag.nameTranslated }}
                </span>
              </template>
            </div>
          </div>
        </template>
      </div>
      <hr class="hr">
      <div class="footer"></div>
    </div>
  </div>
</div>
</template>
<script>
import tagList from './tag.json'

export default {
  name: 'Select',
  data() {
    return {
      refresh: true,
      tagList: tagList.data.questionTagTypeWithTags,
    }
  },
  created() {
    console.log('created')
  },
  updated() {
    console.log('updated ')
  },
  methods: {
    async reload() {
      this.refresh = false
      await this.$nextTick()
      this.refresh = true
    },
  },
};
</script>
<style lang="scss" scoped>
@import url('../assets/stylesheets/select.scss');
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  position: relative;
  background-color: #fff;
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none
  }
  .pt-3 {
    padding-top: 12px;
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
  }
  .shadow-level3 {
    --tw-shadow: 0px 1px 2px rgba(0,0,0,0.1),0px 6px 16px rgba(0,0,0,0.12);
    box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
  }
}
.select-wrapper {
  width: max-content;
  max-width: 300px;
  padding: 10px;
  border-radius: 8px;
  position: absolute;
  .overflow-hidden {
    overflow: hidden;
    .search-bar {
      padding-bottom: 8px;
      height: 40px;
      background-color: #a9f3d0;
    }
    .content {
      padding-top: 4px;
      padding-bottom: 8px;
      overflow: scroll;
      max-height: 376px;
      display: flex;
      flex-wrap: wrap;
      .full {
        width: 100%;
      }
      .tag-name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 14px;
          color: rgba(33,40,53,.75);
        }
      }
      .tag-list {
        display: flex;
        flex-wrap: wrap;
        padding-top: 4px;
        .tag {
          display: inline-flex;
          align-items: center;
          margin: 4px;
          color: rgba(60,60,67,.6);
          line-height: 24px;
          font-size: 12px;
          padding: 0 ;
          border-radius: 10002px;
        }
      }
    }
    .hr {
      border-top-width: 1px;
      border-color: rgba(0,10,32,.11);
    }
  }
}
</style>
