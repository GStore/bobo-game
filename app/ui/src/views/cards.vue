<template>
  <div>
    Alphabet cards : {{ model.keyPress }}
    <div class="card-width">
      <Card v-if="model.keyPress" :letter="model.keyPress" :image="imageLocation" :description="description"/>    
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
        this.keyDown(event);
      });

      window.addEventListener('keyup', event => {
        this.keyUp(event);
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
  private keyMap: Map<string,{timestamp: number, keydown: boolean}>=new Map<string, {timestamp: number, keydown: boolean}>();
  private imgRoot: string = "images/prototypes";
  private cardImage: string = "apple.png";
  private description: string = "apple";
  
  get imageLocation() {
    return `${this.imgRoot}/${this.cardImage}`;
  }

  private clearTimeout = (): void => {
    window.clearTimeout(this.timer);
  }

  private keyDown = (event): void => {
    this.keyMap.set(event.key,{timestamp: Date.now(), keydown: true});
    this.clearTimeout();
    if(event.keyCode >= 48 && event.keyCode <= 90) {
      this.model.keyPress = event.key;
      event.stopPropagation();
    }    
  }

  private keyUp = (event): void => {
    this.keyMap.set(event.key,{timestamp: Date.now(), keydown: false});    
    const found = [ ...this.keyMap.values() ].find(f => f.keydown===true);
    
    if(found) {
      const arrayMap = [ ...this.keyMap.entries() ].filter(f => f[1].keydown === true);
      const sorted = arrayMap.sort((first, second) => {
        return first[1].timestamp > second[1].timestamp ? -1 : 1;
      });
      this.model.keyPress = sorted[0][0];
    }
    if(!found) {
      this.timer = setTimeout(() => {
        this.model.keyPress = "";
      }, this.timeout);
    }
  }
}

</script>

<style lang="scss" scoped>
  .card-width {
    width: 300px;
  }
</style>