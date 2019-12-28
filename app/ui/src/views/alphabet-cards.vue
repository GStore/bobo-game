<template>
  <div>
    Alphabet cards
    {{keyPress}}
    <img src="images/apple.png" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component<AlphabetCards>({
  mounted:()=> {
    window.addEventListener('keyup', event => {
      this.$data.model.keyPress = event.keyCode;
    });
  }
})
export default class AlphabetCards extends Vue {
  private model: any = {
    keyPress: ""
  }
}

</script>}