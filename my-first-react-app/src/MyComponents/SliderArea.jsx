      import logo from '../images/logo.png'  

 

    const SliderArea = () => {
    return (
        <section className="text">
        <h2 className="text-center">
            The #1 Best Selling IT Solution And <br />
            Multi-Purpose HTML5 Template
        </h2>
        <p className="text-center">
            A high-performant Multi-Purpose WordPress theme<br/>
            Suitable for any kind of WordPress project
        </p>
        <div className="video-icon">
            <a data-vbtype="youtube" data-autoplay="true" 
            href="https://www.youtube.com/watch?v=Wx48y_fOfiY"> 
            <img src={logo} tag="logo"/> </a>
        </div>
    </section>
    );
};
export default SliderArea;

