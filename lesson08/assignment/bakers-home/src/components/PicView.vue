<!-- picture component built with props and a mixin to add border -->
<template>

    <div class="carousel-item" >
        <div class="d-flex justify-content-center">
            <img 
                :src="require('@/assets/' + picture)"  
                class="d-block w-75 picture" 
                :alt="altText" 
                @click="toggleShow"
                :class="{imgborder: isActive}"
            >
            <div class="carousel-caption d-none d-md-block">
                <h5>{{ imgTitle }}</h5>
            </div>
        </div>
    </div>
</template>
    
<script>
//toggle mixin
const toggle = {
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleShow() {
            this.isActive = !this.isActive;
        }
    }
};

export default {
    name: 'pictureView',
    mixins: [toggle],
    // props with validation
    props: {
        picture: {
            type: String,
            required: true
        },
        altText: {
            type: String
        },
        imgTitle: {
            type: String
        }
    }
}

</script>