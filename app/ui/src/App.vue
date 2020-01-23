<template>
  <main id="app" class="col-xs col-sm col-md col-lg">
    <nav class="row">
      <router-link to="/">Home</router-link> | 
      <router-link to="/cards">Cards</router-link>
    </nav>
    <section class="row">
      <router-view />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "flexboxgrid";

@Component<App>({})
export default class App extends Vue {

}
</script>
<style lang="scss" scoped>

</style>