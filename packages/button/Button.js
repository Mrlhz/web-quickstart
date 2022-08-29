import {
  defineComponent,
  reactive,
} from 'vue'

import buttonProps from './prop'
import { createNamespace } from '../utils/create'

const [name, bem] = createNamespace('button')

export default defineComponent({
  name,
  props: buttonProps,
  emits: ['click'],
  setup(props, context) {
    const { emit, slots } = context
    console.log(props, context, Object.keys(context))
    const {
      tag,
      type,
      size,
      nativeType,
      disabled,
    } = reactive(props)
    const classes = [
      bem([
        type, // 'v-button', 'v-button--default'
        size, // 'v-button--normal'
        {
          disabled,
        },
      ]),
    ]
    const onClick = (event) => {
      if (disabled) {
        return
      }
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
        disabled={disabled}
        onClick={onClick}
      >
        {renderText()}
      </tag>
    )
  },
})
