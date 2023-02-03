<template>
    <section class="partners py-24 px-5 2xl:pl-10">
        <div class="partners__wrapper">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                <div class="partners--content">
                    <h2>{{ title }}</h2>
                    <p>{{ description }}</p>
                </div>
                <div class="partners--slider col-span-2 overflow-hidden">
                    <div class="partners-events__slider">
                        <div class="partners-slider" v-for="items in events">
                            <img :src="require(`../../assets/images/${items.image}`)" alt="event image">
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
        $(function () {
            $('.partners-events__slider').slick({
                dots: false,
                arrows: false,
                slidesToScroll: 1,
                slidesToShow: 4,
                centerPadding: '40px',
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
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
            events: [
                {
                    image: 'Linfox.svg'
                },
                {
                    image: 'alto-group 1.svg'
                },
                {
                    image: 'pentana.svg'
                },
                {
                    image: 'stockland.svg'
                },
                {
                    image: 'Linfox.svg'
                },
                {
                    image: 'alto-group 1.svg'
                },
                {
                    image: 'pentana.svg'
                },
                {
                    image: 'stockland.svg'
                },
            ]
        }
    }
}

</script>
<style>
.partners-slider img {
    width: 150px;
    height: 150px;
}

.slick-list {
    padding-left: 0px !important;
}
</style>