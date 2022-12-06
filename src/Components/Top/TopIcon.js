import '../../Sylesheets/TopIcon.css'

function TopIcon(props){
    const src = props.src;
    return(
        <div className="icon-holder">
            <img src={src} alt='logo' className='icon' />
        </div>
    );
}

export default TopIcon;