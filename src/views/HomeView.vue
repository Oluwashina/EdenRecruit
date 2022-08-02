<template>
  <div class="home">
     <NavBar @search="handleSearch" @fetchAll="fetchRandomImages" />
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
            <div class="dog_div" @click="handleRoute(index,item)">
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
import NavBar from '../components/NavBar';
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
    handleRoute(index, item){
      this.$store.commit("filterDogs", item)
      this.$router.push(`/dog/${index}`);
    },
    handleSearch(val){
      this.loading = true
      // fetch the list of all random dog images
      this.$store.dispatch("ListDogsByBreeds", val)
      .then(()=>{
            this.loading = false 
        })
        .catch(()=>{
          this.loading = false
      })  
    },
    fetchRandomImages(){
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
  },
  computed: {
    DogImages(){
      return this.$store.state.home.dogImages
    }
  },
  mounted(){
    this.fetchRandomImages()
  }
}
</script>

<style scoped>
  .dog_div{
    display: flex;
    height: 300px;
    background-color: #fff;
    overflow: hidden;
  }
  .dog_div img{
    border-radius: 5px;
    cursor: pointer;
      margin: 0 auto;
    width: 100%;
    object-fit: cover;
    visibility: visible;
    opacity: 1;
    transition: opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s;
  }

   @media (min-width: 0) and (max-width: 900px){
       .dog_div{
          display: flex;
          height: 200px;
          background-color: #fff;
          border-radius: 2px;
          overflow: hidden;
          padding: 0px;
          margin: 0px;
          border: none;
        }
        .dog_div img{
          width: 100%;
        }
    }

</style>
