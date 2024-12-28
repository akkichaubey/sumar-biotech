<!DOCTYPE html>
<html lang="en">

<head>
    <?php include ("include/head.php"); ?>
</head>

<body>
    <!-- header section start -->
    <?php include ("include/header.php"); ?>
    <!-- header section end -->

    <!-- hero-banner -->
    <div class="banner inner-banner">
        <div class="banner-bg img-cover">
            <img src="./assets/images/contact-inner.webp" alt="banner" width="" height="">
        </div>
        <div class="container">
            <div class="banner-info">
                <h1 class="h1 banner-title" data-aos="fade-up">Contact</h1>
                <ul class="breadcrumb" data-aos="fade-up">
                    <li><a href="index.php">Home</a></li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- hero-banner -->
    <div class="contact-wrap pt-140 pb-140">
        <div class="container">
            <div class="title-wrap text-center pb-90">
                <h2 class="h2" data-aos="fade-up">Are you looking to collaborate on cutting-edge pharmaceutical
                    solutions?</h2>
                <div class="sub-text" data-aos="fade-up">
                    <p>At SUMAR Biotech, we value communication and are here to assist you. Whether you have questions,
                        need
                        support, or want to explore collaboration opportunities, our team is ready to help.</p>
                </div>
            </div>
            <div class="row row-gap-30">
                <div class="col-lg-6">
                    <div class="custom-form" data-aos="fade-up">
                        <form class="wpcf7-form">
                            <div class="form-row">
                                <div class="input-box floating-input">
                                    <span class="wpcf7-form-control-wrap">
                                        <input type="text" class="form-control" id="name">
                                    </span>
                                    <label for="name">Name*</label>
                                </div>
                                <div class="input-box floating-input">
                                    <span class="wpcf7-form-control-wrap">
                                        <input type="text" class="form-control" id="phone">
                                    </span>
                                    <label for="phone">Phone*</label>
                                </div>
                                <div class="input-box floating-input">
                                    <span class="wpcf7-form-control-wrap">
                                        <input type="text" class="form-control" id="email">
                                    </span>
                                    <label for="email">Email*</label>
                                </div>
                                <div class="input-box floating-input">
                                    <span class="wpcf7-form-control-wrap">
                                        <input type="text" class="form-control" id="organization">
                                    </span>
                                    <label for="organization">Organization*</label>
                                </div>
                                <div class="input-box floating-input">
                                    <span class="wpcf7-form-control-wrap">
                                        <textarea class="form-control" id="message"></textarea>
                                    </span>
                                    <label for="message">Write your message</label>
                                </div>
                                <div class="input-box btn-wrap">
                                    <button type="submit" class="btn">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="contact-info" data-aos="fade-up">
                        <ul>
                            <li>
                                <h3>Address</h3>
                                <p>Plot No: 112,113,114,GIDC Estate Gozariya,
                                    Dist: Mehsana, 382825,Gujarat, India</p>
                            </li>
                            <li>
                                <h3>Phone</h3>
                                <p><a href="tel:+91-2763-264939">+91-2763-264939</a></p>
                            </li>
                            <li>
                                <h3>Email</h3>
                                <p><a href="mailto:info@sumarbiotech.com">info@sumarbiotech.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="map">
        <div class="img-cover" data-aos="fade-up">
            <img src="./assets/images/map.webp" alt="" width="1913" height="570">
        </div>
    </div>

    <!-- footer section start -->
    <?php include ("include/footer.php"); ?>
    <?php include ("include/script.php"); ?>
    <!-- footer section end -->
</body>

</html>