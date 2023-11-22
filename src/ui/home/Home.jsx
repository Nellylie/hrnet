
function Home(){
    const handleSubmit = ()=>{
        
    }
    return (
        <form action="#" id="create-employee" onSubmit={handleSubmit}>
                
        <div className="section">
        <h2>Identity</h2>

        <label className="label" htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label className="label" htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label className="label" htmlFor="date-of-birth"/>
        <input type="date" id = "date-of-birth"/>
 
        <label className="label" htmlFor="date-start"/>
        <input type="date" id = "date-start"/>        </div>

        <div className="section">
            <h2>Address</h2>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label className="label" htmlFor="state">State</label>
            <input id="state" type="date"/>

            <label className="label" htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
        </div>

        <div className="section">
            <label className="label" htmlFor="department">Department</label>
            <input type ="select" id="department"/>
        </div>
        <button type="submit">Save</button>
    </form>
    )
}


export default Home;