import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function EmpForm() {
    const [id, setId] = useState("")
    const [url, setUrl] = useState("")
    const [name, setName] = useState("")
    const [cost, setCost] = useState("")
    const [available, setAvailable] = useState("")
    const changeId = (e) => [
        setId(e.target.value)
    ]

    const changeUrl = (e) => {
        setUrl(e.target.value)
    }
    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeCost = (e) => {
        setCost(e.target.value)
    }
    const changeAvailable = (e) => {
        setAvailable(e.target.value)
    }
    const navigate = useNavigate()
    const submitData = (e) => {
        e.preventDefault()
        const data = { id, url, name, cost, available }
        fetch("https://test-api-le5b.onrender.com/Employee", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                alert("saved successfully")
                navigate('/')
            })
            .catch(() => {
                alert("Some Error")
            })
    }
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <h1><span style={{ color: "orange" }}>MOBILE</span>&nbsp;<span style={{ color: "green" }}>SHOPPING</span></h1>
                         </div>
                </nav>
            <div className="container" style={{ width: "450px", padding: "20px" }}>
                <div className="card m-2" style={{ backgroundColor: "burlywood", color: "black" }}>
                    <div className="card-title">
                        <h1 style={{ textAlign: "center", color: "green" }}>ADD TO DATA</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitData}>
                            <div className="mb-3">
                                <label className="form-label">Id</label>
                                <input value={id} onChange={changeId} disabled="disabled" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">

                                <label className="form-label">Url</label>
                                <input value={url} onChange={changeUrl} required type="url" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input value={name} onChange={changeName} required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Cost</label>
                                <input value={cost} onChange={changeCost} required type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Avaialble</label>
                                <input value={available} onChange={changeAvailable} required type="number" className="form-control" id="exampleInputPassword1" />
                            </div>
<div style={{display:"flex",justifyContent:"space-between"}}>
                            <button type="submit" className="btn btn-primary">Add</button>
                            {/* <button  className="btn btn-danger">Back</button> */}
                            <Link to='/' className="btn btn-danger">Back</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmpForm;
