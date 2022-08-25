import {
  defineComponent,
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
  setup(props, context) {
    const renderItem = (item) => {
      const onClick = (_, e) => {
        context.emit('handleItemClick', item, e)
      }
      return (<ImageCardItem imageItem={item} onHandleClick={onClick} />)
    }
    const renderList = () => props.list.map((item) => renderItem(item))

    return () => renderList()
  },
})
