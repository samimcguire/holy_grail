import PlusMinus from "./plusminus";
import Data from "./data";

function Footer(props){
    return (<>
        <footer> 
            <PlusMinus section="footer" handle={props.handle}/>
            <div className="section">Footer:{props.data.footer}</div>
            <Data data={props.data}/> 
        </footer> 
    </>);
}

export default Footer;