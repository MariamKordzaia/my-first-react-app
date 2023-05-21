import photo1 from '../images/anowar.jpg'
import photo2 from '../images/hossen.jpg'
import photo3 from '../images/atik.jpg'
import photo4 from '../images/mostofa.jpg'

const Team = () => {
    return (
<div>

<div class="support">

<h5>Support Team</h5> 
<h2>Our Dedicated Support Team</h2>
<h2>For Help You All Time</h2>


<div class="support-team">

<div>
<img src={photo1} alt=""/>
     <div class="name"> 
        <h3>Anowar Hossain</h3>
           <h6>DreamIT Support</h6></div>
</div>


<div>
<img src={photo2} alt=""/>
    <div class="name">
        <h3>Hossen Babu</h3>
         <h6>DreamIT Support</h6></div> 
</div>


<div>
<img src={photo3} alt=""/>
     <div class="name">
        <h3>Atikul Islam</h3>
        <h6> DreamIT Support</h6></div>
</div>

<div>
<img src={photo4} alt=""/>
     <div class="name"> 
        <h3>Mostofa Kamal</h3>
          <h6>DreamIT Support</h6></div>    
</div>

</div>
</div>

<br/><br/><br/><br/>
</div>
    );
};
export default Team;
