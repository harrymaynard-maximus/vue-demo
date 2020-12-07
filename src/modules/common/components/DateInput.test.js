import { mount } from "@vue/test-utils";
import DateInput from "./DateInput.vue";

describe("DateInput component", () => {
  test("matches the primary snapshot", () => {
    const wrapper = mount(DateInput, {
      propsData: {
        value: new Date('2020-01-01'),
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
