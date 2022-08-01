<template>
    <div class="container">
        <div class="mt-4">
            <img :src="Info" class="img-fluid" alt="dog" />
        </div>
    </div>
</template>


<script>
export default {
    name: 'DogInfo',
    data(){
        return{

        }
    },
    computed:{
        Info(){
            return this.$store.state.home.filteredDog
        }
    },
    methods:{

    }
}
</script>