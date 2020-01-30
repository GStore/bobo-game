<template>
  <div class="card col-xs-5 col-sm-3 col-md-3 col-lg-2">
    <section class="row center-xs letters">
      <article class="capital col-xs-6 col-md-6">{{letter}}</article>
      <article class="lower col-xs-6 col-md-6">{{letter}}</article>
    </section>
    <section class="row center-xs image">
      <img :src="image" alt="Image of an apple">
    </section>
    <section class="description row">
      <div><span class="uppercase">{{letter}}</span> is for <span class="capitalise">{{description}}</span></div>
    </section>
  </div>
</template>

<script lang="ts" src="./card.ts"></script>
<style lang="scss" src="./card.scss" scoped></style>
