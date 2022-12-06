import '../../Sylesheets/LeftButton.css'

function LeftButton(props){
    const text = props.text;
    const target = props.target;

    return(
        <div className='left-button'>
            <form action={target} className={'left-button-form'}>
            <input type='submit' value={text} className={'left-button-input'} />
            </form>
        </div>
    );
}

export default LeftButton;