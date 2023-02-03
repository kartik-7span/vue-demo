<template>
    <header class="py-3 bg-dark">
        <div class="container m-auto">
            <div class="header">
                <div class="header__logo">
                    <a href="#"> <img src="@/assets/images/logo.svg" alt="Logo"></a>
                </div>
                <div class="header__nav">
                    <!-- Navigation Desktop : Starts -->
                    <ul class="header-navigation">
                        <li v-for="item in navDesktop" @click="item.check = !item.check">
                            <NuxtLink :to="item.href">
                                {{ item.label }}
                            </NuxtLink>
                            <div v-if="item.check" class="sub-menu">
                                <div v-if="item.Services" v-for="y in item.Services">
                                    <NuxtLink :to="y.href">{{ y.label }}</NuxtLink>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- Navigation Desktop : Ends -->
                </div>
                <div class="header__actions">
                    <TheButtonCommanButton />
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            navDesktop: [
                {
                    label: 'About Us',
                    href: '',
                },
                {
                    label: 'Services',
                    href: '',
                    Services: [{ label: 'service1', href: '/about' }, { label: 'service2', href: '/services' }, { label: 'service3', href: '/about' }],
                    check: false
                },
                {
                    label: 'Blogs',
                    href: '#',
                },
                {
                    label: 'Case Study',
                    href: '#'
                },
                {
                    label: 'Contact',
                    href: '#'
                }
            ],

            //   navMobile:[
            //     {
            //       label:'Lineup',
            //       href:'/artist-list'
            //     },
            //     {
            //       label:'Venue',
            //       href:'/event-venue'
            //     },
            //     {
            //       label:'Experience',
            //       href:'#'
            //     },
            //     {
            //       label:'About',
            //       href:'/event-about'
            //     },
            //     {
            //       label:'Partners',
            //       href:'/event-partners'
            //     },
            //     {
            //       label:"FAQ's",
            //       href:'/faqs'
            //     },
            //     {
            //       label:"Contact",
            //       href:'/contact-us'
            //     }
            //   ]
        }
    },
    methods: {

    }
}
</script>