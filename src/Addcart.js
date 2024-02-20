import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function AddCart() {
    const [data, setData] = useState("")
    useEffect(() => {
        fetch("https://test-api-le5b.onrender.com/Data")
            .then((res) => {
                return res.json()
            }).then((resp) => {
                setData(resp)
            })
    })
    const changeDel = (id) => {
        fetch("https://test-api-le5b.onrender.com/Data/" + id, {
            method: "DELETE"
        }).then(() => {
            alert("delete successfully")
            window.location.reload()
        }).catch(() => {
            alert("Error")
        })
    }
    return (
        <div>
            <div>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <h1><span style={{ color: "orange" }}>MOBILE</span>&nbsp;<span style={{ color: "green" }}>SHOPPING</span></h1>
                       <Link to='/' className="btn btn-primary">Back</Link>
                        </div>
                </nav>
            </div>
            <h1 style={{ color: "green", textAlign: "center" }}>ADD TO CART</h1>
            <h2 style={{textAlign:"center"}}>Cart Length is:{data.length}</h2>
            <center>
            <table className="table table-bordered" style={{width:"1000px"}}>
                <thead style={{textAlign:"center"}}>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:"center"}}>
                    {data && data.map((i) => (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.cost}</td>
                            <td>{i.available}</td>
                            <button className="btn btn-danger" onClick={()=>{changeDel(i.id)}}>Remove</button>
                        </tr>
                    ))}
                </tbody>
            </table>
            </center>
        </div>
    )
}
export default AddCart;