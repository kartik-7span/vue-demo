<template>
    <section class="growth py-10 2xl:py-24">
        <div class="container m-auto px-4">
            <div class="grid grid-cols-2  items-center">
                <div class="growth-img">
                    <img src="../../assets/images/growth.svg" alt="">
                </div>
                <div class="growth-content">
                    <h4>{{ title }}</h4>
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        title: String,
        description: String
    },
}
</script>