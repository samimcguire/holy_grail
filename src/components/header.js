import PlusMinus from "./plusminus";
import Data from "./data";

function Header(props){
    return (<>
        <header>
            <PlusMinus section="header" handle={props.handle}/>
            <div className="section">Header:{props.data.header}</div>
            <Data data={props.data}/>
        </header>
    </>);
}


export default Header;