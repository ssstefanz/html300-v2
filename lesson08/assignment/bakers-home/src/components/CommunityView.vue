
<template>
  <div id="app">
    <main class="main">
      <!-- image carousel with three images and controls -->
      <h3>Community Bread Gallery</h3>
      <div id="carouselControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
          <!-- picture component, looping through array of images -->
          <Picture 
            v-for="(pic, index) in pics" 
            :key="pic.id" 
            :picture="pic.image" 
            :alt-text="pic.text"
            :img-title="pic.title"
            :class="{ active: index === 0}"
          >
          </Picture>
        </div>
          
        <!-- carousel controls -->
        <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </main>
  </div>
</template>

<script>
    import Picture from "./PicView.vue";

    export default {
    name: 'app',
    components: {
      Picture
    },
    data () {
      return {
        // pictures with alt text
        pics: [
          {
            image: "bread-2.jpeg",
            text: "a loaf of bread from above",
            title: "Seeded Rye Boule"
          },
          {
            image: "bread-3.jpeg",
            text: "the interior of a loaf of bread",
            title: "Caraway & Coriander Sourdough"
          },
          {
            image: "bread-4.jpeg",
            text: "a seeded loaf of bread",
            title: "Seeded Buckwheat Loaf"
          }
        ]
      }
    }
  }
</script>

