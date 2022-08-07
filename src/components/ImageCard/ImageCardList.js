import { defineComponent, reactive } from 'vue'
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
  setup(props, { emit }) {
    const { list } = reactive(props)
    const renderItem = (item) => {
      const onClick = (currentItem) => {
        console.log({ ...currentItem, item })
        emit('handleItemClick', item)
      }
      return (<ImageCardItem imageItem={item} onClick={onClick} />)
    }
    const renderList = () => {
      console.log(list)
      return list.map((item) => renderItem(item))
    }

    return () => renderList()
  },
})
