import { shallowMount } from '@vue/test-utils'
import header1 from '@/components/home/header1.vue'

describe('header1', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Bienvenid@ a Burger Queen'
    const wrapper = shallowMount(header1, {
      propsData: { msg }
    })
    expect(wrapper.text()).toEqual("Bienvenid@ a Burger Queen \n    Estamos juntos, para la mejor atención y recepción de pedidos.")
  })
})

/* */