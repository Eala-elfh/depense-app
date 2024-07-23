import React from "react";
import line from '../icons/line.png';



function IncomeForm(){
return(
    <div>
        <form className="form1">
            <input type="text" placeholder="Amount MAD" className="input1"/> <br/>
            <img src={line} alt="gold line" className="line"/><br/>

<select className="input1">
    <option>Categorie</option>
    <option>Salary</option>
    <option>Cash</option>
    <option>By bank</option>
    <option>By cheqie</option>
    <option>Others</option>

</select><br/>
<img src={line} alt="gold line" className="line"/><br/>


            <input type="text" placeholder="Description" className="input1"/><br/>
            <img src={line} alt="gold line" className="line"/><br/>

<select>
    <option type="date"></option>
</select><br/>
<img src={line} alt="gold line" className="line"/><br/>
<button className='button' type="submit">Add</button>


        </form>
    </div>
);
}
export default IncomeForm;