import {
  defineComponent,
  reactive,
} from 'vue'

import buttonProps from './prop'

export default defineComponent({
  name: 'v-button',
  props: buttonProps,
  emits: ['click'],
  setup(props, context) {
    const { emit, slots } = context
    console.log(props, context, Object.keys(context))
    const { tag, nativeType } = reactive(props)
    const classes = ['v-button', 'v-button--normal']
    const onClick = (event) => {
      emit('click', event)
    }

    const renderText = () => {
      const text = slots.default ? slots.default() : props.text
      if (text) {
        return <span class='v-button__text'>{text}</span>
      }
      return ''
    }

    return () => (
      <tag
        type={nativeType}
        class={classes}
        onClick={onClick}
      >
        {renderText()}
      </tag>
    )
  },
})
