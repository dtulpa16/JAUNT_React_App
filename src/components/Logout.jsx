
//Logs out customer by clearing the local storage of the bearer token
const Logout = () => {
    
    const handleClick = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    return ( 
            <button class="nav-link active" onClick={handleClick}>Logout</button>
        );
}
        
export default Logout;