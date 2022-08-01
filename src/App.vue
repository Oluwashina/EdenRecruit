<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  font-family: "Roboto", sans-serif;
}
html{
  scroll-behavior: smooth;
}

@media (min-width: 901px) and (max-width: 1440px){
  .container {
    max-width: 1300px;
  }
}
</style>
