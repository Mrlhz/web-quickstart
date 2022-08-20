import {
  defineComponent,
  getCurrentInstance,
} from 'vue'

import ImageCardItem from './ImageCardItem'

export default defineComponent({
  name: 'ImageCardList',
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
  emits: ['handleItemClick'],
  setup(props) {
    const { ctx } = getCurrentInstance()
    const renderItem = (item) => {
      const onClick = (_, e) => {
        ctx.$emit('handleItemClick', item, e)
      }
      return (<ImageCardItem imageItem={item} onHandleClick={onClick} />)
    }
    const renderList = () => props.list.map((item) => renderItem(item))

    return () => renderList()
  },
})
