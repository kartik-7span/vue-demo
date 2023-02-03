<template>
    <section class="training overflow-hidden">
        <div class="grid 2xl:grid-cols-3 items-center sm:grid-cols-2">
            <div class="training-content 2xl:pl-10 ">
                <h2>{{ title }}</h2>
                <TheButtonCommanButton />
            </div>
            <div class="training-image col-span-2 relative pt-60 pb-60 ">
                <img src="../../assets/images/training-bg.png" alt="" class="w-full">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        title: String,
    },
}
</script>