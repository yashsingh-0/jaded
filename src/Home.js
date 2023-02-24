import { Link } from "react-router-dom";
function Home() {
    return (
      <div className="home-main">
            <div class="main-banner" id="top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>We Are JADED</h4>
                                        <span>Awesome, clean &amp; creative HTML5 Template</span>
                                        <div class="main-border-button">
                                            <a href="#">Purchase Now!</a>
                                        </div>
                                    </div>
                                    <img src="assets/images/left-banner-image.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Women</h4>
                                                    <span>Best Clothes For Women</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Women</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="assets/images/baner-right-image-01.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Men</h4>
                                                    <span>Best Clothes For Men</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Men</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="assets/images/baner-right-image-02.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Kids</h4>
                                                    <span>Best Clothes For Kids</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Kids</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="assets/images/baner-right-image-03.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Accessories</h4>
                                                    <span>Best Trend Accessories</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Accessories</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="assets/images/baner-right-image-04.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <section class="section" id="men">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <h2>Men's Latest</h2>
                                <span>Details to details is what makes JADED different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="men-item-carousel">
                                <div class="owl-men-item owl-carousel">
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/men-01.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Classic Spring</h4>
                                            <span>$120.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/men-02.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Air Force 1 X</h4>
                                            <span>$90.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/men-03.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Love Nana ‘20</h4>
                                            <span>$150.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/men-01.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Classic Spring</h4>
                                            <span>$120.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            <section class="section" id="women">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <h2>Women's Latest</h2>
                                <span>Details to details is what makes JADED different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="women-item-carousel">
                                <div class="owl-women-item owl-carousel">
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/women-01.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>New Green Jacket</h4>
                                            <span>$75.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/women-02.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Classic Dress</h4>
                                            <span>$45.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/women-03.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Spring Collection</h4>
                                            <span>$130.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/women-01.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Classic Spring</h4>
                                            <span>$120.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            <section class="section" id="kids">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <h2>Kid's Latest</h2>
                                <span>Details to details is what makes JADED different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="kid-item-carousel">
                                <div class="owl-kid-item owl-carousel">
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/kid-01.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>School Collection</h4>
                                            <span>$80.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}>><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/kid-02.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Summer Cap</h4>
                                            <span>$12.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/kid-03.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Classic Kid</h4>
                                            <span>$30.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-eye"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-star"></i></Link></li>
                                                    <li><Link to={{ pathname: "/single-product"}}><i class="fa fa-shopping-cart"></i></Link></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/kid-01.jpg" alt="" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Classic Spring</h4>
                                            <span>$120.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         
            <section class="section" id="explore">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content">
                                <h2>Explore Our Products</h2>
                                <span>lorem Ipsum textgjn asdi sadklasidio skfj asdjasiod asiasi ioasio</span>
                                <div class="quote">
                                    <i class="fa fa-quote-left"></i><p>HELLO WORLD</p>
                                </div>
                                <p>HELLO Leather</p>
                                <p>dbhasdbasjkdbaskjdasjkdajk asdjk asjkdh asjkdh asjkdh asjkhasdjkh kjashd kjashd </p>
                                <div class="main-border-button">
                                    <a href="products.html">Discover More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="leather">
                                            <h4>Leather Bags</h4>
                                            <span>Latest Collection</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="first-image">
                                            <img src="assets/images/explore-image-01.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="second-image">
                                            <img src="assets/images/explore-image-02.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="types">
                                            <h4>Different Types</h4>
                                            <span>Over 304 Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         
            <section class="section" id="social">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>Social Media</h2>
                                <span>Details to details is what makes JADED different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row images">
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com"></a>
                                        <h6>Fashion</h6>
                                        <i class="fa fa-instagram"></i>
                                    
                                </div>
                                <img src="assets/images/instagram-01.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com"></a>
                                        <h6>New</h6>
                                        <i class="fa fa-instagram"></i>
                                    
                                </div>
                                <img src="assets/images/instagram-02.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com"></a>
                                        <h6>Brand</h6>
                                        <i class="fa fa-instagram"></i>
                                    
                                </div>
                                <img src="assets/images/instagram-03.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com"></a>
                                        <h6>Makeup</h6>
                                        <i class="fa fa-instagram"></i>
                                    
                                </div>
                                <img src="assets/images/instagram-04.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com"></a>
                                        <h6>Leather</h6>
                                        <i class="fa fa-instagram"></i>
                                    
                                </div>
                                <img src="assets/images/instagram-05.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com"></a>
                                        <h6>Bag</h6>
                                        <i class="fa fa-instagram"></i>
                                    
                                </div>
                                <img src="assets/images/instagram-06.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <div class="subscribe">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="section-heading">
                                <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                                <span>Details to details is what makes JADED different from the other themes.</span>
                            </div>
                            <form id="subscribe" action="" method="get">
                                <div class="row">
                                <div class="col-lg-5">
                                    <fieldset>
                                    <input name="name" type="text" id="name" placeholder="Your Name" required="" />
                                    </fieldset>
                                </div>
                                <div class="col-lg-5">
                                    <fieldset>
                                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required="" />
                                    </fieldset>
                                </div>
                                <div class="col-lg-2">
                                    <fieldset>
                                    <button type="submit" id="form-submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                                    </fieldset>
                                </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-4">
                            <div class="row">
                                <div class="col-6">
                                    <ul>
                                        <li>Store Location:<br /><span>Ludhiana Punjab</span></li>
                                        <li>Phone:<br /><span>12345678910</span></li>
                                        <li>Office Location:<br /><span>North Miami Beach</span></li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul>
                                        <li>Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></li>
                                        <li>Email:<br /><span>info@company.com</span></li>
                                        <li>Social Media:<br /><span><a href="#">Facebook,</a> <a href="#">Instagram,</a> <a href="#">Behance,</a> <a href="#">Linkedin</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;