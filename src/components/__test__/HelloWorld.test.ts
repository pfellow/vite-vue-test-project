import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';
import { expect, it } from 'vitest';

it('Hello', async () => {
  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      msg: 'Hello world',
    },
  });

  const button = wrapper.find("[data-test='counter-button']");

  expect(button.exists()).toBe(true);
  expect(button.text()).toContain(0);

  await button.trigger('click');

  expect(button.text()).toContain(1);
});
