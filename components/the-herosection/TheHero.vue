<template>
    <!-- <section class="banner" :style="{ backgroundImage: `url('../../assets/images/banner-img.jpg')` }"> -->
    <section class="banner">
        <div class="container m-auto">
            <div class="banner__content">
                <img src="../../assets/images/lamp.png" alt="Lamp">
                <h1 class="banner__title">{{ title }}</h1>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        title: String
    },
}
</script>