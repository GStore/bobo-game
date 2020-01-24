import { RouteConfig } from "vue-router";
import AlphabetCards from "@/views/cards.vue";

const alphabetCards: RouteConfig = {
  path: "/",
  name: "alphabet cards",
  component: AlphabetCards
};

export default alphabetCards;
