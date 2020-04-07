import { mount } from '@vue/test-utils'
import chooseNumberTable from '@/components/waitress/selec-table/choose-number-table.vue'

describe('chooseNumberTable', () => {
  const wrapper = mount(chooseNumberTable)
  it('establece los datos correctos por defecto', () => {
    expect(typeof(wrapper.vm.$data)).toBe('object')
  })
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
})