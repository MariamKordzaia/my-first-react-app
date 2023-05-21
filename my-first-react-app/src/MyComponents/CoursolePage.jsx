import logo from '../images/photo.jpg'
const CoursolePage = () => {
    return (

        <div className="fullbox">
        <div>
            <div class="box1">
                <h5>BEST UI/UX</h5><br/>
                <h2>No Compromising</h2>
                <h2>With Quality</h2><br/>
                
            </div><br/>
            
            <div className="box2">
                <h5>Effective UX Design</h5>
                <p>All Demos are made with clear, concise, useful,<br/>
                    minimal and modern design pattern
                </p>
            </div><br/>
            <div className="box3">
                <h5>Effective UX Design</h5>
                <p>All Demos are made with clear, concise, useful,<br/>
                    minimal and modern design pattern</p>
            </div>
        
            </div>
        <img src={logo} alt="logo"/>
        </div>
    );
};
export default CoursolePage;