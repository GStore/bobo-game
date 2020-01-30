import { expect } from "chai";
import { shallowMount, Wrapper } from "@vue/test-utils";
import Card from "@/components/card/card.vue";
import { CombinedVueInstance } from "vue/types/vue";

describe("Give a Card component", () => {
  let wrapper: Wrapper<Vue>;

  before(() => {
    wrapper = shallowMount(Card);
  });

  describe("When the letter prop is set", () => {
    let letterToDisplay = "a";

    before(() => {
      wrapper.setProps({ letter: letterToDisplay });
    });

    it("Should display the letter within the capital class", () => {
      const letter = wrapper.find(".capital");
      expect(letter.text()).to.equal(letterToDisplay);
    });

    it("Should display the letter within the lower class", () => {
      const letter = wrapper.find(".lower");
      expect(letter.text()).to.equal(letterToDisplay);
    });

    it("Should not display a different letter within the capital class", () => {
      const letter = wrapper.find(".capital");
      expect(letter.text()).to.not.equal("b");
    });

    it("Should not display a different letter within the capital class", () => {
      const letter = wrapper.find(".lower");
      expect(letter.text()).to.not.equal("b");
    });
  });

  describe("When the image prop is set", () => {
    let img: string = "/api/packs/default/a";

    before(() => {
      wrapper.setProps({ image: img });
    });

    it("Should set the image src of the image", () => {
      const image = wrapper.find("img");
      expect(image.attributes("src")).to.equal(img);
    });
  });

  describe("When the description prop is set", () => {
    let description: string = "apple";
    let letterToDisplay = "a";
    before(() => {
      wrapper.setProps({ description: description, letter: letterToDisplay });
    });

    it("Should set the image src of the image", () => {
      const desc = wrapper.find(".description");
      expect(desc.text()).to.equal("a is for apple");
    });
  });
});
