<template>
    <div id="hed">
        <!-- the site's general header and nav bar -->
        <header class="hed">
        <div class="hed__container">
            <h1 class="hed__title">BAKER'S HOME</h1>
            <h2 class="hed__subtitle">helping you rise from your desk</h2>
        </div>
        <nav class="hed__nav navbar navbar-expand-md navbar-light bg-lighter">
            <button class="navbar-toggler hed__nav-button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul id="navbarNav" class="collapse navbar-collapse hed__navbar">
                <router-link class="hed__navlink" to="/">Home</router-link>
                <router-link class="hed__navlink" to="/RecipesView">Recipes</router-link>
                <router-link class="hed__navlink" to="/CommunityView">Community</router-link>
                <router-link class="hed__navlink" to="/FaqView">FAQ</router-link>
            </ul>
            <!-- login button using slot -->
            <div class=" hed__navlogin">
                <LoginButton>Login</LoginButton>
            </div>
        </nav>
        </header>
    </div>  
</template>

<script >
// import and name LoginButton
import LoginButton from "./LoginButton.vue";

  export default {
    components: {
      LoginButton
    }
  }
</script>