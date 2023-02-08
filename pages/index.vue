<template>
  <div class="modules font-body">
    <!--TopBar : starts -->
    <TheHeaderTopBar />
    <!-- TopBar: Ends-->
    <!-- Header : Starts -->
    <TheHeader />
    <!-- Header : Ends -->
    <!-- Hero : Starts -->
    <TheHero title="Achieve More Together" />
    <!-- Hero : Ends -->
    <!-- Partners : Starts -->
    <ThePartners title="Our partners" description="Big or small - We’ve got you covered!" />
    <!-- Partners : Ends -->
    <!-- Training : Starts -->
    <TheTraining title="High-Performance Training" />
    <!-- Training : Ends -->
    <!-- growth : Starts -->
    <TheGrowth title="A Think Tank for People & Growth"
      description="Alexium recruits talent, activates performance behaviours and creates unique learning strategies for organisational growth. We challenge, innovate and disrupt markets to help individuals achieve excellence, position the organisation as an employer of choice and plug the gap between learning and performance." />
    <!-- growth : Ends -->
    <!-- Latest News : Starts -->
    <TheNews title="Our Latest News" />
    <!-- Latest News : Ends -->
    <!-- Testimonials : Starts -->
    <TheTestimonail title="What Are People Saying About Us" />
    <!-- Testimonials : Ends -->
    <!-- Achieve More : Starts-->
    <TheAchieve title="Achieve more now!" subtitle="Let’s chat and see how we can help" />
    <!-- Achieve More : Ends -->
    <!-- Footer : Starts-->
    <TheFooter />
    <!-- Footer : Ends-->
  </div>
</template>

<script>
import TheAchieve from '../components/the-achieve/TheAchieve.vue';
import ThePartners from '../components/the-partners/ThePartners.vue';
import TheTestimonail from '../components/the-testimonial/TheTestimonail.vue';

export default {
  name: "IndexPage",
  components: { ThePartners, TheTestimonail, TheAchieve }
}
</script>

<style>
:after,
:before {
  --tw-content: ""
}
</style>