import '/src/components.css/Leo.css'
const Leo =()=>{
    return(
        <div>
            <div class="container">
        <div class="box">
            <div class="product__img">
                <img src="https://i.ibb.co/xSK7fcJ/oculus.png" alt="" />
            </div>

            <div class="product__video">
                <div class="video">
                    <i class="fas fa-play"></i>
                    <p>watch a review</p>
                </div>
            </div>

            <div class="product__disc">
                <div class="product__disc--content">
                    <div class="disc__content--about">
                        <h1>Chachy frase</h1>
                        <span>get ready to step into a new world</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur hic minus nihil
                            obcaecati, ratione repellendus saepe sint tenetur totam ullam. Accusantium aspernatur
                            ducimus impedit perferendis quisquam repellendus similique ullam vitae!</p>
                    </div>

                    
                </div>
            </div>

            <div class="product_buttons">
                <button class="btn wishlist">Know me more</button>
                <button class="btn buy">Podcasts</button>
            </div>
        </div>
    </div>

            
        </div>
    );
};
export default Leo;