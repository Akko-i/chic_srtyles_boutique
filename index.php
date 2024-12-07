<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chic Style Boutique</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>

</head>
<body>

    <?php include "header.html" ?>

    <main>
            <!-- kv -->
            <section class="kv">
                <div class="kv_text">
                    <p class="subtitle">Chic Style Boutique</p>
                    <h2>Summer Collection<br>2025</h2>
                    <button>View all items <span>→</span></button>
                </div>
            </section>

            <!-- Category -->
            <section class="category">
                <ul>
                    <li>
                        <a href="#">
                            <figure><img src="img/top/section1-1.png" alt="New Arrivals"></figure>
                            <p>New Arrivals</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure><img src="img/top/section1-2.png" alt="Collection"></figure>
                            <p>Collection</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure><img src="img/top/section1-3.png" alt="Dresses"></figure>
                            <p>Dresses</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure><img src="img/top/section1-4.png" alt="Accessories"></figure>
                            <p>Accessories</p>
                        </a>
                    </li>
                </ul>
            </section>

            <!-- Featured Item -->
            <section class="featureditem">
                <ul>
                    <li>
                        <p class="subtitle">Featured item</p>
                        <h2>Signature Dress</h2>
                        <p>Discover our most popular resort-style pieces<br class="pc_only">
                            that combine elegance with effortless charm.<br class="pc_only">
                            Shop the favorites that everyone loves!</p>
                        <button>View detail <span>→</span></button>
                    </li>
                    <li>
                        <img src="img/top/section2.png" alt="Signature Dress">
                    </li>
                </ul>
            </section>

            <!-- About Us -->
            <section class="aboutus">
                <ul>
                    <li>
                        <p class="subtitle">About Us</p>
                        <h2><img src="img/top/logo_white.png" alt="Chic Style Boutique"></h2>
                        <p>Learn about Chic Styles Boutique, our philosophy, 
                            and how we curate timeless resort-inspired fashion for sophisticated women.</p>
                        <button>View detail <span>→</span></button>
                    </li>
                    <li>
                        <img src="img/top/section3_pc.png" alt="Chic Style Boutique Necklace" class="pc_only">
                        <img src="img/top/section3_sp.png" alt="Chic Style Boutique Necklace" class="sp_only">
                    </li>
                </ul>
            </section>

            <!-- look Book & Blogs -->
            <section class="lookbook_blogs">
                <ul>
                    <li>
                        <p class="subtitle">Chic Style Boutique’s</p>
                        <h2>Look Book</h2>
                        <p>Explore our gallery of styled outfits<br class="pc_only">
                            to inspire your next vacation wardrobe.<br class="pc_only">
                            See how our pieces come together in real-life settings.</p>
                        <button>View our look book <span>→</span></button>
                    </li>
                    <li>            
                        <img src="img/top/section4-1.png" alt="Look Book">        
                    </li>
                </ul>
                <ul>
                    <li>
                        <p class="subtitle">Blogs</p>
                        <h2>Fashion Tips</h2>
                        <p>Get expert advice on styling resort wear,<br class="pc_only">
                            creating chic outfits, and embracing timeless elegance<br class="pc_only">
                            for any occasion.</p>
                        <button>View blogs <span>→</span></button>
                    </li>
                    <li>            
                        <img src="img/top/section4-2.png" alt="Look Book">  
                    </li>
                </ul>
            </section>
       
    </main>

    <?php include "footer.html" ?>

</body>
</html>