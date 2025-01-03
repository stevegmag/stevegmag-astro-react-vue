// src/components/__tests__/VueProjectDetail.test.js
import { mount } from '@vue/test-utils';
import VueProjectDetail from '../VueProjectDetail.vue';

test('displays project details in modal', () => {
  const project = { title: 'Project 1', description: 'Description of Project 1' };
  const wrapper = mount(VueProjectDetail, {
    props: { project },
  });

  expect(wrapper.text()).toContain('Project 1');
  expect(wrapper.text()).toContain('Description of Project 1');
});

test('closes modal when close button is clicked', async () => {
  const project = { title: 'Project 1', description: 'Description of Project 1' };
  const wrapper = mount(VueProjectDetail, {
    props: { project },
  });

  await wrapper.find('button').trigger('click');
  expect(wrapper.vm.show).toBe(false);
});
