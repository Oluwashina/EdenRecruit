<template>
  <div class="home">
     <NavBar />
    <div class="container mt-4">
      <h6>Popular Breeds</h6>

      <div class="row mt-3">
        <div class="col-lg-3">
          <div class="dog_div">
              <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="dogs" class="img-fluid" />
          </div>
        </div>

         <div class="col-lg-3">
          <div class="dog_div">
              <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="dogs" class="img-fluid" />
          </div>
        </div>

         <div class="col-lg-3">
          <div class="dog_div">
              <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="dogs" class="img-fluid" />
          </div>
        </div>

         <div class="col-lg-3">
          <div class="dog_div">
              <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" alt="dogs" class="img-fluid" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
      NavBar
  }
}
</script>

<style scoped>
  .dog_div img{
    border-radius: 5px;
    
  }

 @media (min-width: 901px) and (max-width: 1440px){
  .container {
    max-width: 1300px;
  }
}
</style>
