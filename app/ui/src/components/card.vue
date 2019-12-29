<template>
  <div class="card col">
    <section class="letters row"><span class="capital col-xs">A</span><span class="lower col-xs">a</span></section>
    <section class="image row"><img alt="Image of an apple"></section>
    <section class="description row">
      <div>A is for apple</div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "flexboxgrid";

@Component<AlphabetCards>({})
export default class AlphabetCards extends Vue {
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
    border: 1px dashed black;
    justify-content: space-between;
    align-items: center;
  }
  .card .letters .capital {
    width: 50%;
    flex-direction: column;
    text-align: center;
  }

  .card .letters .lower {
    width: 50%;
    flex-direction: column;
    text-align: center;
  }

  .card .image {
    height: 51%;
    border: 1px dashed black;
    justify-content: center;
  }
  .card .image img {
    border: 0px;
  }

  .card .description {
    font-size: 30px;
    height: 16%;
    border: 1px dashed black;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
</style>
