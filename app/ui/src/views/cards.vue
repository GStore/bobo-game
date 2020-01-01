<template>
  <div>
    Alphabet cards : {{ model.keyPress }}
    <div class="card-width">
      <Card v-if="model.keyPress" :letter="model.keyPress" :image="imageLocation" :description="model.description"/>    
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "@/components/card.vue";
import axios from "axios";

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
    keyPress: "",
    description: ""
  }
  private timeout: number = 700;
  private timer: any;
  private keyMap: Map<string,{timestamp: number, keydown: boolean}>=new Map<string, {timestamp: number, keydown: boolean}>();
  private imgRoot: string = "packs";
  private packName: string = "default";

  get imageLocation() {
    const response =  axios.get(`${this.imgRoot}/${this.packName}/${this.model.keyPress}`).then(res => {
      this.model.description = res.headers["image-name"];
    });
    return `${this.imgRoot}/${this.packName}/${this.model.keyPress}`;
  }

  private clearTimeout = (): void => {
    window.clearTimeout(this.timer);
  }

  private clearData = () => {
    this.model.keyPress = "";
    this.model.description = "";
  };
  
  private keyDown = (event: KeyboardEvent): void => {
    this.keyMap.set(event.key,{timestamp: Date.now(), keydown: true});
    this.clearTimeout();
    if(event.keyCode >= 48 && event.keyCode <= 90) {
      this.model.keyPress = event.key;
      event.stopPropagation();
    }    
  }

  private keyUp = (event: KeyboardEvent): void => {
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
        this.clearData();
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