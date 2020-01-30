import { Component, Prop, Vue } from "vue-property-decorator";
import "flexboxgrid";

@Component<AlphabetCards>({})
export default class AlphabetCards extends Vue {
  @Prop() private letter!: string;
  @Prop() private image!: string;
  @Prop() private description!: string;
}
