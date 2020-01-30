import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import NumberCard from "@/components/numbercard/numbercard.vue";

describe("Given I have a NumberCard component", () => {
  describe("when I set the number prop", () => {
    it("then the correct number of images are displayed when the prop is set to 1", () => {
      const prop: number = 1;
      const wrapper = shallowMount(NumberCard);
      wrapper.setProps({ number: prop });
      const numbers = wrapper.findAll(".image img");
      expect(numbers.length).to.equal(prop);
    });

    it("then the correct number of images are displayed when the prop is set to 4", () => {
      const prop: number = 4;
      const wrapper = shallowMount(NumberCard);
      wrapper.setProps({ number: prop });
      const numbers = wrapper.findAll(".image img");
      expect(numbers.length).to.equal(prop);
    });

    it("then the correct number of images are displayed when the prop is set to 9", () => {
      const prop: number = 9;
      const wrapper = shallowMount(NumberCard);
      wrapper.setProps({ number: prop });
      const numbers = wrapper.findAll(".image img");
      expect(numbers.length).to.equal(prop);
    });
  });

  describe("when I set the image prop", () => {
    it("then the image url is set", () => {
      const prop: number = 1;
      const url: string = "/api/default/1";
      const wrapper = shallowMount(NumberCard);
      wrapper.setProps({ number: prop, image: url });
      const img = wrapper.findAll(".image img").at(0);
      expect(img.attributes("src")).to.equal(url);
    });
  });
});
