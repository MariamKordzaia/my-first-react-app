import img1 from '../images/html.png'
import img2 from '../images/css.png'
import img3 from '../images/jquery.png'


const NewFeatures = () => {
    return (
<div>
<div class="feature">

    <h5>CORE FEATURES</h5> <br/>
    <h2>Constantly update with</h2><br/>
    <h2>New Features.</h2>
    
    </div>


    <div className="row">
    
        <div className="single-content">
            <div>
                <img src={img1} alt="logo"/>
                <p>HTML5</p>
            </div>
           
        </div>

        
        <div className="single-content">
            <div>
                <img src={img2} alt="logo"/>
                <p>CSS</p>
            </div>
           
        </div>

        <div className="single-content">
            <div>
                <img src={img3} alt="logo"/>
                <p>jQuery</p>
            </div>
           
        </div>
   
        <div className="single-content">
            <div>
                <img src={img1} alt="logo"/>
                <p>HTML5</p>
            </div>
            
        </div>


        </div>




        <div className="row">
        <div className="single-content">
            <div>
                <img src={img2} alt="logo"/>
                <p>CSS</p>
            </div>
            </div>
        


        <div className="single-content">
            <div>
                <img src={img3} alt="logo"/>
                <p>jQuery</p>
            </div>
          
        </div>

        <div className="single-content">
            <div>
                <img src={img1} alt="logo"/>
                <p>HTML5</p>
            </div>
            
        </div>


        <div className="single-content">
            <div>
                <img src={img2} alt="logo"/>
                <p>CSS</p>
            </div>
            
        </div>

    </div>



    <div className="row">
        <div className="single-content">
            <div>
                <img src={img3} alt="logo"/>
                <p>jQuery</p>
            </div>
           
        </div>

        <div className="single-content">
            <div>
                <img src={img1} alt="logo"/>
                <p>HTML5</p>
            </div>
           
        </div>


        <div className="single-content">
            <div>
                <img src={img2} alt="logo"/>
                     <p>CSS</p>
            </div>
           
        </div>


        <div className="single-content">
            <div>
                <img src={img3} alt="logo"/>
                <p>jQuery</p>
            </div>
            
        </div>

    </div> 
</div>

    );
};
export default NewFeatures;

