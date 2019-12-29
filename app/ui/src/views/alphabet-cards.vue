<template>
  <div>
    Alphabet cards
    <div class="card-width">
      <Card v-if="model.keyPress" />    
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "@/components/card.vue";

@Component<AlphabetCards>({
  components: {
    Card
  },
  mounted(){
    this.$nextTick(() => {
      window.addEventListener('keydown', event => {
        this.clearTimeout();
        if(event.keyCode >= 48 &&  event.keyCode <= 90) {
          this.model.keyPress = event.key;
          event.stopPropagation();
        }
        
      });

      window.addEventListener('keyup', event => {
        this.timer = setTimeout(() => {
          this.clearTimeout();
          this.model.keyPress = "";
        }, this.timeout);        
      });
    });
    
  }
})
export default class AlphabetCards extends Vue {
  private model: any = {
    keyPress: ""
  }
  private timeout: number = 700;
  private timer: any;
  private clearTimeout = (): void => {
    clearTimeout(this.timer);
    this.model.keyPress = "";
  }
}

</script>

<style lang="scss" scoped>
  .card-width {
    width: 300px;
  }
</style>