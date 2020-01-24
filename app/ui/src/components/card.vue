<template>
  <div class="card col-xs-5 col-sm-3 col-md-3 col-lg-2">
    <section class="row center-xs letters">
      <article class="capital col-xs-6 col-md-6">{{letter}}</article>
      <article class="lower col-xs-6 col-md-6">{{letter}}</article>
    </section>
    <section class="row center-xs image">
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
    min-width: 20em;
    min-height: 29em;
    border: 1px solid black;
    padding: 5px;

    
  
    .letters {
      font-size: 89px;
      height: 32%;
      //border: 1px dashed black;
      margin: 0px;

      .capital {
        text-align: center;
        text-transform: uppercase;
      }

      .lower {
        text-align: center;
      }

      
    }

    .image {
      height: 51%;
      //border: 1px dashed black;
      margin: 0px;
    
        img {
          border: 0px;
          max-height: 100%;
          max-width: 100%;
        }
    }

    .description {
      font-size: 30px;
      height: 16%;
      //border: 1px dashed black;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: 0px;
    }

    .uppercase {
      text-transform:uppercase;
    }
    
    .capitalise {
      text-transform: capitalize;
    }
  }
</style>
