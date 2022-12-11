import imageBG from './background.jpg';
function Contact(){
    return <div>
        <h1 className="bg-text">Our Mission</h1>
        <p className="bg-text-paragraph">Special Dresses for Special People
        From classic simple, Timeless beauty wedding dresses to stylish lace dresses and extravagant hand-beaded gowns till undeniable fashion-forward look, unique signature styles to make our brides realise her dream.
        Using our trained eye, we seek out the most beautiful wedding dresses from highly talented contemporary designers around the world. We then edit from each collection to bring you only the very best. 
        When you visit us, our team of passionate and knowledgeable stylists will help you find your special dress. Once you’ve chosen your dress, one of our couture seamstresses will ensure your dress fits perfectly in every way. We want your experience with us to be personal, enjoyable and memorable. 
        </p>
        <img className="imgBG" src={imageBG} alt="background"/>
    </div>
}

export default Contact;