import { defineComponent, reactive, computed } from 'vue'
// import './index.scss'
import styles from './var.module.scss'

export default defineComponent({
  name: 'ImageCardItem',
  props: {
    imageItem: Object
  },
  setup(props, { emit }) {
    const className = computed(() => ['photo-title', styles['my-link']]).value
    const { imageItem } = reactive(props)
    const { title, screencap } = imageItem || { ...props.imageItem }
    const handleClick = (event) => {
      emit('handle-click', imageItem, event) // jsx接收用 onHandleClick
    }
    const photoTitle = () => (<div class={className} onClick={handleClick}>{ title }</div>)

    return () => (
      <div class="photo-frame">
        <div class="photo-box">
          <img src={screencap} alt={title} />
        </div>
        {/* <div class="photo-title" onClick={handleClick}>{ title }</div> */}
        { photoTitle() }
      </div>
    )
  }
})
