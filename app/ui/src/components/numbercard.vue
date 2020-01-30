<template>
  <div class="card col-xs-6 col-sm-3 col-md-3 col-lg-2 middle-sm-8 middle-md-8">
    <section class="row center-xs letters">
      <article class="capital col-xs-6 col-md-6">{{number}}</article>
    </section>
    <section class="row center-xs image" >
      <img class="col-xs" v-for="n in numbers" v-bind:key="n" :src="image" alt="Image of a number">
    </section>
    <section v-if="false" class="description row">
      <div><span class="uppercase">{{letter}}</span> is for <span class="capitalise">{{description}}</span></div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "flexboxgrid";

@Component<AlphabetCards>({})
export default class AlphabetCards extends Vue {
  @Prop() private number!: number;
  @Prop() private image!: string;
  @Prop() private description!: string;

  get numbers(): number[] {
    return Array.apply(null, { length: this.number});
  }
}
</script>
<style lang="scss" scoped>
  .card {
    min-width: 266px;
    height: 395px;
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
