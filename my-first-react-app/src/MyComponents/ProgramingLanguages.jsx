import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import jqueryLogo from '../images/jquery.png'
import respLogo from '../images/rsp.png'

 const ProgramingLanguages = () => {
    return (
<div class="programing-languages">
<figure>
    <div><img src={htmlLogo} alt="logoHTML" />
        <h3>HTML5</h3>
    </div>
    <div><img src={cssLogo} alt="logoCSS"/>
        <h3>CSS</h3>
    </div>
    <div><img src={jqueryLogo} alt="logojquery" />
        <h3>jQuery</h3>
    </div>
    <div><img src={respLogo} alt="logorsp" />
        <h3>Fully Responsive</h3> 
    </div>
</figure>

</div>

    );
};

export default ProgramingLanguages;