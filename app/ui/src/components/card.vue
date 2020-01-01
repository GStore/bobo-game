<template>
  <div class="card col-xs-6">
    <section class="letters row"><span class="capital col-xs">{{letter}}</span><span class="lower col-xs">{{letter}}</span></section>
    <section class="image row">
      <img :src="image" alt="Image of an apple">
    </section>
    <section class="description row">
      <div><span class="uppercase">{{letter}}</span> is for <span class="capitalise">{{description}}</span></div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "flexboxgrid";

@Component<AlphabetCards>({})
export default class AlphabetCards extends Vue {
  @Prop() private letter!: string;
  @Prop() private image!: string;
  @Prop() private description!: string;
}
</script>
<style lang="scss" scoped>
  .card {
    min-width: 266px;
    height: 395px;
    border: 1px solid black;
    padding: 5px;
  }
  .card .letters {
    font-size: 89px;
    height: 32%;
    //border: 1px dashed black;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
  }
  .card .letters .capital {
    width: 50%;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;
  }

  .card .letters .lower {
    width: 50%;
    flex-direction: column;
    text-align: center;
  }

  .card .image {
    height: 51%;
    //border: 1px dashed black;
    justify-content: center;
    margin: 0px;
  }
  .card .image img {
    border: 0px;
    max-height: 100%;
    max-width: 100%;
  }

  .card .description {
    font-size: 30px;
    height: 16%;
    //border: 1px dashed black;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0px;
  }

  .card .uppercase {
    text-transform:uppercase;
  }
  .card .capitalise {
    text-transform: capitalize;
  }
</style>
