<template>
  <v-container>
    <v-card>
      <v-carousel>
        <v-carousel-item v-for="(image,i) in images" :key="i" :src="image"></v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
</template>


<script>
export default {
  name: "Home",
  data: () => ({
    images: [
      "https://pbs.twimg.com/media/Dfx5xUjW0AAXuWV.jpg",
      "https://pbs.twimg.com/media/DKBqtCjWkAUatba.jpg",
      "https://pbs.twimg.com/media/DLPYVWoVoAAlIKb.jpg",
      "https://pbs.twimg.com/media/DyA3rlqVAAArzzJ.jpg"
    ]
  })
};
</script>

<style>
</style>
