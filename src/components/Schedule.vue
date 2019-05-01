<template>
    <v-content class="black">
        <v-container class="container">
        
        <v-card class="instagram" height="270" width="300">
            <v-img src="/assets/Insta_Panda.jpg">
            </v-img>
            <v-card-text>
            <a class="text" href="https://www.instagram.com/pandaprestigebarber/">@pandaprestigebarber</a>
                </v-card-text>
        </v-card>
        </v-container>
        <div class="space">
        </div>
    </v-content>
</template>
<script>
export default {
    name: "Schedule"
}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
}
.space {
    height: 350px;
}
.text {
    font-weight: bold;
    font-size: 20px;
}
.instagram {
    position: relative;
    top: 100px;
}

</style>
