import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateData() {
    const [id, setId] = useState("")
    const [url, setUrl] = useState("")
    const [name, setName] = useState("")
    const [cost, setCost] = useState("")
    const [available, setAvailable] = useState("")
    const { empid } = useParams()

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

    useEffect(() => {

        fetch("https://test-api-le5b.onrender.com/Employee/" + empid, {
            method: "GET"
        }).then((res) => {
            return res.json()
        }).then((resp) => {
            console.log(resp)
            setId(resp.id)
            setUrl(resp.url)
            setName(resp.name)
            setCost(resp.cost)
            setAvailable(resp.available)
        })
    },[])
    const navigate = useNavigate()
    const submitData = (e) => {
        e.preventDefault()
        const data = { id, url, name, cost, available }
        fetch("https://test-api-le5b.onrender.com/Employee/" + empid, {
            method: "PUT",
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
                <div className="card m-2">
                    <div className="card-title">
                        <h1 style={{ textAlign: "center", color: "green" }}>UPDATE DATA</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitData}>
                            <div className="mb-3">

                                <label className="form-label">Id</label>
                                <input value={id} onChange={changeId} disabled="disabled" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">

                                <label className="form-label">Url</label>
                                <input value={url} onChange={changeUrl} type="url" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input value={name} onChange={changeName} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Cost</label>
                                <input value={cost} onChange={changeCost} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Avaialble</label>
                                <input value={available} onChange={changeAvailable} type="number" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Update</button>
                           
                            <Link to='/' className="btn btn-danger">Back</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdateData;
