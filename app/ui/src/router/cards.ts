import { RouteConfig } from "vue-router";
import AlphabetCards from "@/views/cards.vue";

const alphabetCards: RouteConfig = {
  path: "/cards",
  name: "alphabet cards",
  component: AlphabetCards
};

export default alphabetCards;