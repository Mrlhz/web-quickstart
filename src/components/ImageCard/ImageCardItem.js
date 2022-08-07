import { defineComponent, reactive } from 'vue'
// import './index.scss'

export default defineComponent({
  name: 'ImageCardItem',
  props: {
    imageItem: Object,
  },
  setup(props, { emit }) {
    const { imageItem } = reactive(props)
    const { title, screencap } = imageItem || { ...props.imageItem }
    const handleClick = () => {
      emit('handleClick', imageItem)
    }
    const photoTitle = () => (<div class="photo-title" onClick={handleClick}>{ title }</div>)

    return () => (
      <div class="photo-frame">
        <div class="photo-box">
          <img src={screencap} alt={title} />
        </div>
        {/* <div class="photo-title" onClick={handleClick}>{ title }</div> */}
        { photoTitle() }
      </div>
    )
  },
})
