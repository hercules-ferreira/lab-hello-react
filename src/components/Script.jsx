import "./Section.css";
import iconeLogo from "../images/ironhacklogoxs.png"
import menuForm from "../images/menutopxs.png";
import icone1 from "../images/icon1.png";
import icone2 from "../images/icon2.png";
import icone3 from "../images/icon3.png";
import icone4 from "../images/icon4.png";


function Script() {
    return (
 
<div>

    <div className="Section">
      <nav className="nav-bar">
            <img src={iconeLogo} alt="logo" className="logo" />
            <img src={menuForm} alt="menu" className="menu" />

</nav>


<section className="card">
  
  <img src={icone1} alt="menu" className="menu" />
      <img src={icone2} alt="menu" className="menu" />
      <img src={icone3} alt="menu" className="menu" />
      <img src={icone4} alt="menu" className="menu" />
</section>


        </div>
  
    

        </div>
                  
      /* </nav>
<div className="div2">
      <nav className="nav-bar2">
        <img src={icone1} alt="icone1" className="icone1" />
        <img src={icone2} alt="icone2" className="icone2" />
        <img src={icone3} alt="icone3" className="icone3" />
        <img src={icone4} alt="icone4" className="icone4" />

       </nav>
     
       </div>
         </div>  
 
</div>   */  
    
    ) 
    }

        export default Script;