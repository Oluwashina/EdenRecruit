<template>
    <div class="container">
        <div class="mt-5 dog_info">
            <img :src="Info" class="img-fluid" alt="dog" />
        </div>

        <div class="mt-5">
            <h4>More Like this</h4>
        </div>
        <!-- Other Images for the same breed selected -->
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
                    <div class="dog_div">
                        <img :src="item" alt="dogs" class="img-fluid" />
                    </div>
                </div>
             </template>
        </div>

    </div>
</template>


<script>
import VueSkeletonLoader from "skeleton-loader-vue";

export default {
    name: 'DogInfo',
    components: {
        VueSkeletonLoader
    },
    data(){
        return{
            loading: false
        }
    },
    computed:{
        Info(){
            return this.$store.state.home.filteredDog
        },
        DogImages(){
            return this.$store.state.home.dogImages
        }
    },
    methods:{

    },
    mounted(){
        let breed = this.$route.params.breed
        console.log(breed)
          this.loading = true
      // fetch the list of all random dog images
        this.$store.dispatch("ListDogsByBreeds", breed)
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
    .dog_info{
         display: flex;
         height: 500px;
         justify-content: center;
    }
    .dog_info img{
        border-radius: 5px;
        width: 100%;
        object-fit: cover;
    }
</style>