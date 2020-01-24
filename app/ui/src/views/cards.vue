<template>
<article class="col-xs">
  Alphabet cards : {{ model.keyPress }}
    <div class="row center-xs display">
      <Card v-if="model.keyPress" :letter="model.keyPress" :image="imageLocation" :description="model.description"/>    
    </div>
    <div class="row center-xs">
      <div class="keys col-xs-8 col-sm-6 col-md-4 col-lg-2">
        <div class="row">
        <div class="col col-xs-1 key" v-for="n in keys" v-bind:key="n" @click="cardUpdate(n)">
          {{ String.fromCharCode(n) }}
        </div>
        </div>
      </div>
    </div>
</article>
  
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
  private keyStart: number = 97;
  private keyEnd: number = 122;

  get keys(): number[] {
    const keyArray: number[] = [];
    for(let n= this.keyStart; n <= this.keyEnd;n++) {
      keyArray.push(n);
    }
    return keyArray;
  }

  get imageLocation() {
    const response =  axios.get(`/api/${this.imgRoot}/${this.packName}/${this.model.keyPress}`).then(res => {
      this.model.description = res.headers["image-name"];
    });
    return `/api/${this.imgRoot}/${this.packName}/${this.model.keyPress}`;
  }

  private clearTimeout = (): void => {
    window.clearTimeout(this.timer);
  }

  private clearData = () => {
    this.model.keyPress = "";
    this.model.description = "";
  };

  private cardUpdate(charCode: number) {
    this.model.keyPress = String.fromCharCode(charCode);
  }

  private isKeyAllowed(keyCode: number) {
    return keyCode >= 48 && keyCode <= 90;
  }
  
  private keyDown = (event: KeyboardEvent): void => {
    if(this.isKeyAllowed(event.keyCode)) {
      this.keyMap.set(event.key.toLowerCase(),{timestamp: Date.now(), keydown: true});
      this.clearTimeout();
      this.model.keyPress = event.key.toLowerCase();
      event.stopPropagation();
    }    
  }

  private keyUp = (event: KeyboardEvent): void => {
    if(this.isKeyAllowed(event.keyCode)) {
      this.keyMap.set(event.key.toLowerCase(),{timestamp: Date.now(), keydown: false});    
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
}

</script>

<style lang="scss" scoped>
  .display {
    min-height: 29em;
  }

  .keys {
    margin-top:20px;
    min-width: 22em;
  }
  .key {
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: blue;
    }
  }
</style>