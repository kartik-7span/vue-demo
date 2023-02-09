<template>
    <footer class="footer">
        <div class="container m-auto">
            <div class="grid grid-cols-1 2xl:grid-cols-4">
                <div class="footer__logo">
                    <a href="#"><img src="../../assets/images/logo.svg" alt="Footer Logo"></a>
                    <ul>
                        <li><a href="#"><img src="../../assets/images/facebook.svg" alt="Facebook"></a></li>
                        <li><a href="#"><img src="../../assets/images/linkedin.svg" alt="Linkdin"></a></li>
                        <li><a href="#"><img src="../../assets/images/youtube.svg" alt="Youtube"></a></li>
                    </ul>
                    <p>Copyright © 2022. Alexium. All rights reserved.</p>
                </div>
                <div class="footer__getintouch">
                    <h3>Get in Touch</h3>
                    <address><img src="../../assets/images/Pin_alt_light.svg" alt=""> 10a Bluff Road, Black Rock,
                        Victoria, 3193</address>
                    <a href="mailto:info@alexium.com.au"><img src="../../assets/images/Message_alt_fill.svg"
                            alt="">info@alexium.com.au</a>
                    <a href="tel:+61 3 9070 9055"><img src="../../assets/images/Phone_fill.svg" alt=""> +61 3 9070
                        9055</a>
                </div>
                <div class="footer__newslatter">
                    <h4>Subscribe to our newsletter.</h4>
                    <form action="#">
                        <div class="footer-email">
                            <input type="email" placeholder="Enter Your Email">
                            <button class="footer--btn" type="submit" required><img src="../../assets/images/arrow.svg"
                                    alt=""></button>
                        </div>
                    </form>
                </div>
                <div class="footer__top">
                    <a href="#" id="button"><img src="../../assets/images/uparrow.png" alt=""></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    mounted() {
        var btn = $('#button');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });
    }
}
</script>