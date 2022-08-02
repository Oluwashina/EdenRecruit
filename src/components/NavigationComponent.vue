<template>
    <div class="container">
        <nav class="navbar">
            <div class="navbar_left">
                <a>
                    <img width="50" height="50" src="https://dog.ceo/img/dog-api-logo.svg" alt="logo" class="img-fluid" />
                 </a>
                <form class="search_bar">
                    <div class="search_container">
                        <vue-autosuggest
                                 v-model="query"
                                :suggestions="Breeds"
                                :input-props="{id:'autosuggest__input', placeholder:'Search for breeds of dogs'}"
                                @input="onInputChange"
                                @selected="onSelected"
                                :get-suggestion-value="getSuggestionValue"
                            >  
                        <template slot-scope="{suggestion}">
                            <span class="my-suggestion-item">{{suggestion.item}}</span>
                        </template>
                        </vue-autosuggest>
                         <!-- <input type="text" placeholder="Search for breeds of dogs" class="search_input" autocomplete="off" /> -->
                    </div>
                </form>

              
            </div>
            <div class="navbar_right">    
               <p class="nav_text">About us</p>    
               <p class="nav_text">Upload</p>    
               <p class="nav_text">Explore</p>    
               <p class="nav_text">Join us</p>    
                  <svg
                        class="d-lg-none d-sm-flex open_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
        </div>
        </nav>

    </div>
</template>


<script>
import { VueAutosuggest } from "vue-autosuggest";
export default {
     name: 'NavigationComponent',
     emits: ['search', 'fetchAll'],
     components:{
         VueAutosuggest
     },
     data(){
         return{
            query: ""
         }
     },
     computed:{
        Breeds() {
            return [
                {
                data: 
                 this.$store.state.home.breeds.filter((option) => {
                    return (
                        option.toLowerCase().indexOf(this.query.toLowerCase()) > -1
                    );
                 }), 
                },
            ];
        },
     },
     methods:{
        onSelected(item) {
            let selected = item.item
            // emit to home view page
            this.$emit('search', selected)
         },
        onInputChange(text) {
            // event fired when the input changes
            console.log(text);
            if(text === ""){
                this.$emit('fetchAll')
            }
        },
         getSuggestionValue(suggestion) {
            return suggestion.item;
         }
     },
     mounted(){
           // fetch the list of all dog breeds
        this.$store.dispatch("ListBreeds")
        .then(()=>{       
        })
        .catch(()=>{
        })
     }
}
</script>

<style>
    .navbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0rem;
    }
    .navbar_left{
        display: flex;
        align-items: center;
        flex: 1 1;
        margin-right: 50px;
    }

    .search_input{
        color: #7f7f7f;
        border-radius: 8px;
        width: 100%;
        padding: 15px 4px 15px 20px;
        border: 1px solid #f7f7f7;
        background: #f7f7f7;
    }

    .search_input:focus{
        outline: 0;
        background: #fff;
        border: 1px solid #dfdfe0;
    }

    .search_bar{
        position: relative;
        width: 100%;
        margin-left: 20px;
    }

    .search_bar input{
        color: #7f7f7f;
        border-radius: 8px;
        width: 100%;
        padding: 15px 4px 15px 20px;
        border: 1px solid #f7f7f7;
        background: #f7f7f7;
    }

    .search_bar input:focus{
         outline: 0;
        background: #fff;
        border: 1px solid #dfdfe0;
    }

    .search_container{
        width: 100%;
        height: 50px;
    }

    #autosuggest__input {
        position: relative;
        }

    .autosuggest__results-container {
        position: relative;
        width: 100%;
    }

    .autosuggest__results {
        font-weight: 300;
        margin: 0;
        position: absolute;
        top: 0px;
        z-index: 10000001;
        width: 100%;
        border-radius: 8px;
        background: white;
        max-height: 250px;
        overflow-y: auto;
         border: 1px solid #f7f7f7;
        /* border: 1px solid #e0e0e0; */
     }

    .autosuggest__results ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
        }

     .autosuggest__results li {
        margin: 0 0 0 0;
        border-radius: 5px;
        padding: 0.75rem 30px 0.75rem;
        display: flex;
        align-items: center;
      }
     .autosuggest__results li:hover {
        cursor: pointer;
        background-color: #ddd;
        }

     .autosuggest__results .autosuggest__results_item {
        cursor: pointer;
        padding: 15px;
      }

     .autosuggest__results .autosuggest__results_title {
        color: gray;
        font-size: 11px;
        margin-left: 0;
        padding: 15px 13px 5px;
        border-top: 1px solid lightgray;
      }

      .autosuggest__results .autosuggest__results_item:active,
     .autosuggest__results .autosuggest__results_item:hover,
    .autosuggest__results .autosuggest__results_item:focus,
    .autosuggest__results
     .autosuggest__results_item.autosuggest__results_item-highlighted {
        background-color: #ddd;
        }


    .navbar_right{
         display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav_text{
        color: #4a4a4a;
        font-size: 15px;
        margin-right: 20px;
        margin-bottom: 0px;
    }

    .nav_text:last-child{
        margin-right: 0px;
    }

    .open_icon {
        width: 1.5rem;
        height: 1.5rem;
        color: #000;
        cursor: pointer;
    }               

    @media (min-width: 0) and (max-width: 900px){
        .nav_text{
            display: none;
        }
        .navbar_left{
            margin-right: 20px;
        }
    }

</style>