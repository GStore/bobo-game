import { Component, Prop, Vue } from "vue-property-decorator";
import "flexboxgrid";

@Component<NumberCard>({})
export default class NumberCard extends Vue {
  @Prop() private number!: number;
  @Prop() private image!: string;

  get numbers() {
    const opts = new Array<Number>(this.number);
    return opts;
  }
}
