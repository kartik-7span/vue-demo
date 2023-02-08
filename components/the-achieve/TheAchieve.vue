<template>
    <section class="achieve" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="container m-auto">
            <div class="achieve__content">
                <h2>{{ title }}</h2>
                <p>{{ subtitle }}</p>
                <a href="#">Book a Strategy Call.</a>
            </div>
        </div>
    </section>
</template>
<script>
import backgroundUrl from '../../assets/images/achieve-bg.png'
export default {
    props: {
        title: String,
        subtitle: String,

    },
    data() {
        return { backgroundUrl }
    }
}
</script>