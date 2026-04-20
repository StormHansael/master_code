import "./home.css";
import plank111 from "../../assets/plank111.png";
import chains from "../../assets/chainLong 5.png";
import longPaper from "../../assets/longpaper 1.png"

export default function Home() {
 
    return(
        <div className="menu_containter">
            <div className="menu_image1">
                <img src={plank111}></img>
                <h1>Kunnskap Info</h1>
            </div>

            <div className="chains1">
                <img src={chains} alt="" />
            </div>
            <div className="chains2">
                <img src={chains} alt="" />
            </div>

            <div className="Longpaper">
                <img src={longPaper} alt="w" />

                <div className="main_text">
                    <a href="/game"><h2 className="one">Start Spill</h2></a>
                    
                    <div className="spacer"></div>
                    <h2 className="two">Resultats Tavle</h2>
                    <div className="spacer"></div>
                    <h2 className="tree">Regler</h2>

                </div>
            </div>
        </div>
    )

}