<template>
  <div class="card col-xs-6 col-sm-3 col-md-3 col-lg-2 middle-sm-8 middle-md-8">
    <section class="row center-xs letters">
      <article class="capital col-xs-6 col-md-6">{{number}}</article>
    </section>
    <section class="row center-xs image" >
      <img class="col-xs" v-for="n in numbers" v-bind:key="n" :src="image" alt="Image of a number">
    </section>
  </div>
</template>

<script lang="ts" src="./numbercard.ts"></script>
<style lang="scss" src="./numbercard.scss" scoped></style>
