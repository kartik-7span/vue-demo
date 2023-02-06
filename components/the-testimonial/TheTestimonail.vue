<template>
    <section class="testimonial">
        <div class="testimonial__wrapper">
            <div class="grid grid-cols-3 lg:grid-cols-3 gap-4">
                <div class="testimonial--content">
                    <h2>{{ title }}</h2>
                    <span class="pagingInfo"></span>
                </div>
                <div class="testimonial--data col-span-2">
                    <div class="testimonial__slider--wrapper">
                        <div class="testimonail-slide">
                            <div class="testimonial--info__wrap">
                                <div class="testimonial--img">
                                    <img src="../../assets/images/profile.png" alt="">
                                </div>
                                <div class="testimonial--info">
                                    <h5>Aldo P.</h5>
                                </div>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                    officia consequat duis enim velit
                                    mollit.Exercitation veniam consequat sunt</p>
                            </div>
                        </div>
                        <div class="testimonail-slide">
                            <div class="testimonial--info__wrap">
                                <div class="testimonial--img">
                                    <img src="../../assets/images/profile.png" alt="">
                                </div>
                                <div class="testimonial--info">
                                    <h5>Aldo P.</h5>
                                </div>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                    officia consequat duis enim velit
                                    mollit.Exercitation veniam consequat sunt</p>
                            </div>
                        </div>
                        <div class="testimonail-slide">
                            <div class="testimonial--info__wrap">
                                <div class="testimonial--img">
                                    <img src="../../assets/images/profile.png" alt="">
                                </div>
                                <div class="testimonial--info">
                                    <h5>Aldo P.</h5>
                                </div>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                    officia consequat duis enim velit
                                    mollit.Exercitation veniam consequat sunt</p>
                            </div>
                        </div>
                        <div class="testimonail-slide">
                            <div class="testimonial--info__wrap">
                                <div class="testimonial--img">
                                    <img src="../../assets/images/profile.png" alt="">
                                </div>
                                <div class="testimonial--info">
                                    <h5>Aldo P.</h5>
                                </div>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                    officia consequat duis enim velit
                                    mollit.Exercitation veniam consequat sunt</p>
                            </div>
                        </div>
                        <div class="testimonail-slide">
                            <div class="testimonial--info__wrap">
                                <div class="testimonial--img">
                                    <img src="../../assets/images/profile.png" alt="">
                                </div>
                                <div class="testimonial--info">
                                    <h5>Aldo P.</h5>
                                </div>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                    officia consequat duis enim velit
                                    mollit.Exercitation veniam consequat sunt</p>
                            </div>
                        </div>
                    </div>
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
    mounted() {
        var $status = $('.pagingInfo');
        var $slickElement = $('.testimonial__slider--wrapper');

        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + '/' + slick.slideCount);
        });

        $slickElement.slick({
            autoplay: true,
            dots: false,
            slidesToScroll: 1,
            slidesToShow: 3,
        });
    }


}
</script>