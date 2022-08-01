<template>
    <div class="container">
        <nav class="navbar">
            <div class="navbar_left">
                <a>
                    <img width="50" height="50" src="https://dog.ceo/img/dog-api-logo.svg" alt="logo" class="img-fluid" />
                 </a>
                <form class="search_bar">
                    <div class="search_container">
                        <input type="text" placeholder="Search for breeds of dogs" class="search_input" autocomplete="off" />
                    </div>
                </form>
            </div>
            <div class="navbar_right">   
               <p class="nav_text">Partnership</p>    
               <p class="nav_text">License</p>    
               <p class="nav_text">Upload</p>    
               <p class="nav_text">Explore</p>    
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
export default {
     name: 'NavBar',
}
</script>

<style scoped>
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

    .search_container{
        width: 100%;
        height: 50px;
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