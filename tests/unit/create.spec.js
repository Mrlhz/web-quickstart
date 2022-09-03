import { createBEM } from '../../packages/utils/create'

describe('create.js', () => {
  it('bem', () => {
    const bem = createBEM('button')
    expect(bem()).toMatch('button')
  })
})
