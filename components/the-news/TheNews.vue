<template>
    <section class="news">
        <div class="news-wrapper">
            <div class="news__title">
                <h3>{{ title }}</h3>
            </div>
            <div class="news__wrapper">
                <div class="news-event__slider">
                    <div class="news-slider" v-for="items in news">
                        <img :src="require(`../../assets/images/${items.image}`)" alt="news image">
                        <span>Learning & Development | 2, Sept 2022</span>
                        <h5>{{ items.newstitle }}</h5>
                        <p>{{ items.description }}</p>
                        <a href="#">Read More <img src="../../assets/images/arrow.svg" alt="Arrow" class="arrow"> </a>
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
    },
    mounted() {
        $(function () {
            $('.news-event__slider').slick({
                dots: false,
                arrows: false,
                slidesToScroll: 1,
                slidesToShow: 4,
                centerPadding: '40px',
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 500,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToScroll: 1,
                            slidesToShow: 2,
                            centerPadding: '20px'
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToScroll: 1,
                            slidesToShow: 1,
                            centerPadding: 'px'
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToScroll: 1,
                            slidesToShow: 1,
                        },
                    },
                ],
            })
        })
    },
    data() {
        return {
            news: [
                {
                    image: 'news-img1.png',
                    newstitle: 'Featured Title here',
                    description: 'Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod.'
                },
                {
                    image: 'news-img2.png',
                    newstitle: 'Featured Title here',
                    description: 'Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod.'
                },
                {
                    image: 'news-img3.png',
                    newstitle: 'Featured Title here',
                    description: 'Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod.'
                },
                {
                    image: 'news-img4.png',
                    newstitle: 'Featured Title here',
                    description: 'Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod.'
                },
                {
                    image: 'news-img1.png',
                    newstitle: 'Featured Title here',
                    description: 'Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod.'
                },
                {
                    image: 'news-img2.png',
                    newstitle: 'Featured Title here',
                    description: 'Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod.'
                },
                {
                    image: 'news-img4.png',
                    newstitle: 'Featured Title here',
                    description: 'Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod.'
                },
                {
                    image: 'news-img3.png',
                    newstitle: 'Featured Title here',
                    description: 'Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod.'
                },
            ]
        }
    }
}
</script>
<style>
/* the slides */
.slick-slide {
    padding-right: 30px;
}

.news-event__slider .slick-slide img {
    opacity: .4;
}

.news-event__slider .slick-slide a {
    opacity: 0;
}

.news-event__slider .slick-current img {
    opacity: 1;
}

.news-event__slider .slick-current a {
    opacity: 1;
}

.news-event__slider .slick-current h5 {
    @apply text-orange
}
</style>