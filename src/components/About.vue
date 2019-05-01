<template>
<v-content class="black">
<v-container>
    <v-layout row wrap >
<v-img max-height="300" max-width="300" src="/assets/Icon.jpg"></v-img>
<v-spacer></v-spacer>
<v-img max-height="300" max-width="300" src="/assets/Michael_Panda.jpg"></v-img>
    </v-layout>
</v-container> 
<div class="writing">
<div class="paragraph">
<p>Panda Prestige started in 2017 during Michael Kahoun's freshman year at Mount Vernon Nazarene University.
</p>
<p>After cutting multiple students' hair, he decided to start a part-time business cutting hair on campus.</p>
<p>For only $10 you can't beat the quality that you get from Panda Prestige Barber</p>
<p>Schedule your next appointment at Panda Prestige today!</p>
<v-btn class="appointment" href="https://www.instagram.com/pandaprestigebarber/">Click here to schedule your appointment</v-btn>
</div>
</div>
</v-content>
</template>

<script>
export default {
    name: "About"
    
}
</script>

<style scoped>
.writing {
    display: flex;
    justify-content: center;
   
}
.paragraph {
    height: 300px;
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 20px;
}
p {
    display: flex;
    justify-content: center;
}
.appointment {
  
  position: relative;
  left: 0px;
}
</style>

