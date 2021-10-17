import './Logout.css'
//Logs out customer by clearing the local storage of the bearer token
const Logout = () => {
    
    const handleClick = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    return ( 
        <div className='logout'>
            <a type="button" class="btn btn-dark btn-sm" onClick={handleClick}>Logout</a>
        </div>
            );
}
        
export default Logout;