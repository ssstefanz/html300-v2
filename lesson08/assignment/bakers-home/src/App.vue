<template>
  <div class="app">
    <Header>
      <LoginButton>Login</LoginButton>
    </Header>

    <!-- route in the different pages components -->
    <router-view />
    
    <Footer></Footer>
  </div>

</template>

<script>
  import Header from "./components/HeaderView.vue";
  import LoginButton from "./components/HeaderView.vue";
  import Footer from "./components/FooterView.vue";

  export default {
    name: "app",
    components: {
      Header,
      Footer,
      LoginButton
    }
  }
</script>

<style></style>
