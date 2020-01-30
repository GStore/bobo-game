<template>
<article class="col-xs">
    <div class="row center-xs display">
      <Card v-if="model.keyPress && model.letter" :letter="model.keyPress" :image="imageLocation" :description="model.description"/>    
      <NumberCard v-if="model.keyPress && model.number" :number="model.keyPress" :image="imageLocation" />
    </div>
    <div class="row center-xs">
      <div class="keys col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="row">
          <div class="col col-xs-1 key" v-for="n in numbers" v-bind:key="n" @click="cardUpdate(n,'number')">
            {{ n }}
          </div>
        </div>
        <div class="row">
          <div class="col col-xs-1 key" v-for="n in keys" v-bind:key="n" @click="cardUpdate(n,'letter')">
            {{ n }}
          </div>
        </div>
      </div>
      
    </div>
</article>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "@/components/card.vue";
import NumberCard from "@/components/numbercard/numbercard.vue";
import axios from "axios";

@Component<AlphabetCards>({
  components: {
    Card,
    NumberCard
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
    description: "",
    letter: false,
    number: false
  }
  private timeout: number = 700;
  private timer: any;
  private keyMap: Map<string,{timestamp: number, keydown: boolean}>=new Map<string, {timestamp: number, keydown: boolean}>();
  private imgRoot: string = "packs";
  private packName: string = "default";
  private keyStart: number = 97;
  private keyEnd: number = 122;
  private numberStart: number =49;
  private numberEnd:  number =57;

  get keys(): string[] {
    return this.GenerateKeys(this.keyStart, this.keyEnd);
  }

  get numbers(): string[] {
    return this.GenerateKeys(this.numberStart, this.numberEnd);
  }

  private GenerateKeys(start: number, end: number): string[] {
    const keyArray: string[] = [];
    for(let n= start; n <= end;n++) {
      keyArray.push(String.fromCharCode(n));
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

  private cardUpdate(key: string, type:string) {
    this.model.letter=type === "letter";
    this.model.number=type === "number"
    this.model.keyPress = key;
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
    max-width: 39em;
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