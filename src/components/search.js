import '../Search.css';

 export default function Search({movieFilter}){
    return(
<form className="form">
<input placeholder="Search ..." type="text" name="text" className="input" onChange={movieFilter}/>
</form>
    )
 }
