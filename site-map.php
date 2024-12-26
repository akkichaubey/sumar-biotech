<!DOCTYPE html>
<html lang="en">

<head>
    <?php include ("include/head.php"); ?>
</head>

<body>
    <!-- header section start -->
    <?php include ("include/header.php"); ?>
    <!-- header section end -->
    <style>
    ul.counter {
        counter-reset: count;
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
        row-gap: 30px;
    }

    ul.counter li {
        width: 33.3333%;
        padding: 0 15px;
        counter-increment: count;
        position: relative;
        display: flex;
        align-items: center;
        color: #242424;
    }

    ul.counter li a:hover {
        color: #da8d28;
    }

    ul.counter li a {
        font-size: 18px;
        line-height: 1;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        color: currentColor;
        transition: all 0.3s ease-in-out;
        text-transform: capitalize;
    }

    ul.counter li a:before {
        font-size: 16px;
        line-height: 1;
        display: grid;
        place-items: center;
        content: ""counter(count);
        width: 28px;
        height: 28px;
        border: 1px solid currentColor;
        margin-right: 10px;
        border-radius: 100%;
        transition: all 0.3s ease-in-out;
    }

    ul.counter li a:hover::before {
        color: #fff;
        background: #da8d28;
    }

    .sitemap {
        padding: 340px 0 130px;
    }
    </style>
    <!-- hero-banner -->
    <div class="banner inner-banner">
        <div class="banner-bg img-cover">
            <img src="./assets/images/inner-bg.jpg" alt="banner" width="" height="">
        </div>
        <div class="container">
            <div class="banner-info">
                <h1 class="h1 banner-title">Site Map</h1>
                <ul class="breadcrumb">
                    <li><a href="index.php">Home</a></li>
                    <li>Site Map</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- hero-banner -->
    <div class="section sitemap pt-180">
        <div class="container">
            <ul class="counter">
                <li>
                    <a href="index.php">Home</a>
                </li>

                <li>
                    <a href="about.php">about</a>
                </li>
                <li>
                    <a href="contact.php">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    <!--Footer Start-->
    <?php include("include/footer.php"); ?>
    <?php include("include/script.php"); ?>
    <!--Footer End-->
</body>

</html>