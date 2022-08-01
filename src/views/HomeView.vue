<template>
  <div class="home">
     <NavBar />
    <div class="container mt-5">

      <h3>Dog Images</h3>

      <div class="row mt-4">
      <template v-if="loading">
         <div
            v-for="n in 12"
                class="col-lg-3 col-6 mb-4"
                :key="n"
              >
            <VueSkeletonLoader
                type="rect"
                :width="300"
                :height="250"
                animation="wave"
              />
         </div>
      </template>

      <template v-else>
          <div v-for="(item, index) in DogImages" :key="index" class="col-lg-3 col-6 mb-4">
            <div class="dog_div" @click="handleRoute(index)">
                <img :src="item" alt="dogs" class="img-fluid" />
            </div>
          </div>
      </template>

      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import VueSkeletonLoader from "skeleton-loader-vue";

export default {
  name: 'HomeView',
  components: {
      NavBar,
      VueSkeletonLoader
  },
  data(){
    return{
      loading: false
    }
  },
  methods:{
    handleRoute(index){
      this.$router.push(`/dog/${index}`);
    }
  },
  computed: {
    DogImages(){
      return this.$store.state.home.dogImages
    }
  },
  mounted(){
    this.loading = true
    // fetch the list of all random dog images
     this.$store.dispatch("ListRandomImages")
    .then(()=>{
          this.loading = false 
      })
      .catch(()=>{
        this.loading = false
    })

  }
}
</script>

<style scoped>
  .dog_div img{
    border-radius: 5px;
    object-fit: contain;
    cursor: pointer;
  }

</style>
