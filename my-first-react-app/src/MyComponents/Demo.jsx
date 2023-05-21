import img from '../images/itnew.jpg'

const Demo = () => {
    return (
<div>
    <figure className="demo">
       <div> 
        <img src={img} alt="logo" />
        <h4>Main Home</h4>
        <p>Main Home, IT Solution, Business</p> 
    </div>

<div>
        <img src={img} alt="logo"/>
        <h4>New IT Solution 01</h4>
        <p>New IT Solution, Digital IT, Software IT</p>
        </div>

<div>
    <img src={img} alt="logo"/>    
        <h4>New SEO Marketing</h4>
        <p>Digital Marketing, Digital Agency, SEO Marketing</p>
        </div>  

<div>
        <img src={img} alt="logo" />
        <h4>Finance 01</h4>
        <p>Business, Finance, Revolution Slider</p> 
        </div>

<div>
        <img src={img} alt="logo" />
        <h4>Finance 02</h4>
        <p>Business, Finance, Consulting</p>
        </div>

<div>
        <img src={img} alt="logo" />  
        <h4>IT Solution 01</h4>
        <p>IT Solution, Business, Consulting</p>
        </div> 

    </figure>
    </div>

    );
};

export default Demo;

