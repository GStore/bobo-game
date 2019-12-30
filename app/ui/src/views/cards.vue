<template>
  <div>
    Alphabet cards : {{ model.keyPress }}
    <div class="card-width">
      <Card v-if="model.keyPress" :letter="model.keyPress" />    
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
        this.keyMap.set(event.key,true);
        this.clearTimeout();
        if(event.keyCode >= 48 && event.keyCode <= 90) {
          this.model.keyPress = event.key;
          event.stopPropagation();
        }        
      });

      window.addEventListener('keyup', event => {
        this.keyMap.set(event.key,false);
        
        const found = [ ...this.keyMap.values() ].find(f => f===true);
        console.debug("found", found);
        if(!found) {
          this.timer = setTimeout(() => {
            this.model.keyPress = "";
          }, this.timeout);
        }
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
  private keyMap: Map<string,boolean>=new Map<string, boolean>();
  private clearTimeout = (): void => {
    window.clearTimeout(this.timer);
  }
}

</script>

<style lang="scss" scoped>
  .card-width {
    width: 300px;
  }
</style>