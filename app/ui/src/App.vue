<template>
  <main id="app" class="col-xs col-sm col-md col-lg">
    <nav class="row">
      <router-link to="/">Home</router-link> | 
      <router-link to="/cards">Cards</router-link>
    </nav>
    <section class="row">
      <router-view />
    </section>
    <!-- <div class="main-viewport row center-xs center-md center-sm">
      <div class="col-xs-12 col-md-12 col-sm-12">
        
      </div>
    </div> -->
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