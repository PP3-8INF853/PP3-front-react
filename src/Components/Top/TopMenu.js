import Title from "./Title";
import TopIcon from "./TopIcon";
import bell from "../../assets/bell.png"
import single from "../../assets/single.png"
import '../../Sylesheets/TopMenu.css'

function TopMenu(props){
    const name = props.name;
    return(
        <div className='top-menu'>
        <Title />
        <div className='icon-list'>
            <TopIcon src={bell}/>
            <TopIcon src={single}/>
        </div>
            <div className='user-name'>
                {name ?? "Eduardo Mendes"}
            </div>
        </div>
    );
}

export default TopMenu;