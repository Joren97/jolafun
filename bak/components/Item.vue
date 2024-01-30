<template>
  <article>
    <a class="image" @click="showGallery"
      ><img :src="require(`~/assets/images/${image}`)" :alt="title" :title="title"
      
    /></a>
    <div class="inner">
      <h4>{{ title }}</h4>
      <slot></slot>
      <p v-if="price">Huurprijs: &euro; {{price}} per dag</p>
    </div>
  </article>
</template>
<script>
export default {
  props: ["image", "title", "price", " folder"],
  methods: {
      showGallery(){
          this.$emit('showGallery', this.folder)
      }
  }
};
</script>
