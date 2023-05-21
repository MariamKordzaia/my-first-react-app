  import img1 from '../images/b1.jpg'
  import img2 from '../images/b2.jpg'
  import img3 from '../images/b4.jpg'
  
  export const BloggingStyle = () => {
    return (
<div class="blog">
<h2>DIFFERENT BLOGGING STYLE !</h2>
<br/><br/>
   <div class="photoss">
    <figure>
    <img src={img1} alt="logo"/>  
    <img src={img2} alt="logo"/>        
    <img src={img3} alt="logo"/>         
</figure> </div>

</div>
    );
  } ;

