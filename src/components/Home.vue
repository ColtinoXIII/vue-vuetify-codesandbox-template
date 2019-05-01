<template>
<v-content class="black">
  <v-container>
    <v-img class="icon" height="200" width="200" src="assets/Icon.jpg"></v-img>
    <v-card>
      <v-carousel height="650">
        <v-carousel-item  v-for="(image,i) in images" :key="i" :src="image"></v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
  <v-btn class="appointment" href="https://www.instagram.com/pandaprestigebarber/">Click here to schedule your appointment</v-btn>
</v-content>
</template>


<script>
export default {
  name: "Home",
  data: () => ({
    images: [
      "/assets/Joe_Panda.jpg",
      "/assets/Aaron_Panda.jpg",
      "/assets/Nathan_Panda.jpg",
      "/assets/Shawn_Panda.jpg",
      "/assets/Unknown_Panda.jpg"
    ]
  })
};
</script>

<style scoped>
.icon {
  position: relative;
  bottom: 15px;
  left: 450px;
}
.background {
  color: black;
}
.appointment {
  
  position: relative;
  left: 575px;
}
</style>
