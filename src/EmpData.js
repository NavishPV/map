import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { UserAuth } from './Authentication/User.js'
import Pagination from "./Pagination.js"
import './app.css'
// GET Function
function EmpData() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://test-api-le5b.onrender.com/Employee", {
            method: "GET"
        }).then((res) => {
            return res.json()
        }).then((resp) => {
            setData(resp)
        })
    }, [])
    const [value, setValue] = useState("")
    const navigate = useNavigate()
    const chnageValue = ((e) => {
        setValue(e.target.value)
    })
    //Add to cart
    const [cart, setCart] = useState([])
    const addToCart = (id) => {
        fetch("https://test-api-le5b.onrender.com/Employee/" + id)
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                fetch("https://test-api-le5b.onrender.com/Data", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(resp)
                })
                    .then(() => {
                        alert("Added into Cart")
                    })
            })
    }
    useEffect(() => {
        fetch("https://test-api-le5b.onrender.com/Data")
            .then((res) => {
                return res.json()
            }).then((resp) => {
                setCart(resp)
            })
    })
    //pagenation Method
    const [page, setPage] = useState(1)
    const [record, setRecord] = useState(4)
    let lr = page * record  //4
    let fr = lr - record //0
    let mydata = data.slice(fr, lr)
    const change = (n) => {
        setPage(n)
    }
    const prev = () => {
        setPage(page - 1)
    }
    const le = Math.ceil(data.length/record)
    const next = () => {
        if(page<le){
        setPage(page + 1)
        }
        else
        {
            alert("last page")
        }

    }
    //Sort Method
    const option = ["name", "cost", "available"]
    const [sort, setSort] = useState([])
    const currentUser = UserAuth()
    const sortData = async (e) => {
        e.preventDefault()
        let value = e.target.value
        setSort(value)
        return await axios.get(`https://test-api-le5b.onrender.com/Employee?_sort=${value}&_order=asc`)
            .then((res) => {
                setData(res.data)
            })
    }
    //Search Function
    const FilterData = async (e) => {
        e.preventDefault()
        return await axios.get(`http://localhost:3006/Employee?q=${value}`)
            .then((res) => {
                setData(res.data)
            })
    }
    //reset method
    const resetData = async (e) => {
        e.preventDefault()
        return await axios.get(`https://test-api-le5b.onrender.com/Employee`)
            .then((res) => {
                setData(res.data)
            })
    }

    //Edit Method
    const changeeId = (id) => {
        navigate("/edit/" + id)
    }
    //Delete Method
    const changeDelete = (id) => {
        fetch("https://test-api-le5b.onrender.com/Employee/" + id, {
            method: "DELETE"
        }).then(() => {
            alert("delete successfully")
            window.location.reload()
        }).catch(() => {
            alert("Error")
        })
    }
    //cart Remove Method
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
                <nav className="navbar bg-body-tertiary" id="nav">
                    <div className="container-fluid">
                        <h1><span style={{ color: "orange" }}>MOBILE</span>&nbsp;<span style={{ color: "green" }}>SHOPPING</span></h1>
                        <button style={{ borderRadius: "100px" }}>{currentUser?.email}</button>
                        <div>
                        <label id="ham" for="inp">&#9776;</label>
                        <input type="checkbox" id="inp"/>
                        <form onSubmit={FilterData} className="d-flex" id="form10">
                            <input value={value} onChange={chnageValue} className="form-control" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            <button className="btn btn-outline-success" onClick={resetData}>Reset</button>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>

            <Link to='/form' className="btn btn-success">Add New</Link>
            <Link to='./add' className="btn btn-danger">Add Cart</Link>
             <div id="jana">
                <div>
                    <div className="card m-2 p-3 " style={{ backgroundColor: "grey" }}>
                        <select>
                            <option>View Mobiles</option>
                        </select><br />
                        <select>
                            <option>View Cost Type</option>
                        </select><br />
                        <select>
                            <option>Availble Mobiles</option>
                        </select><br />
                        <select>
                            <option>More</option>
                        </select>
                    </div>
                    <div className="card m-3 p-3">
                        <select value={sort} onChange={sortData}>
                            <option>---Choose---</option>
                            {option.map((i) => (
                                <option>{i}</option>
                            ))}
                        </select>
                    </div>
                    <div className="card m-2 p-2">
                        <label>Rs.0 to Rs.100</label>
                        <input type="range"></input>
                        <label>Price</label>
                    </div>
                    <div className="card m-2 p-2">
                        <label>0% to 100%</label>
                        <input type="range"></input>
                        <label>Offers%</label>
                    </div>
                </div>
                <div className="container text-center" id="jana1">
                    {mydata.map((item) => (
                        <div className="card  m-1 p-2" style={{ border: "1px solid blue", borderRadius: "2rem" }}>
                            <img src={item.url} alt="Mobile" style={{ widhth: "100px", height: "180px", borderRadius: "20px" }} />
                            <div className="card-body">
                                <p>Name:{item.name}</p>
                                <p>Cost:{item.cost}</p>
                                <p>Availble:{item.available}</p>
                                <a className="btn btn-success" onClick={() => { addToCart(item.id) }}>Add to Cart</a><br /><br />
                                <a onClick={() => { changeeId(item.id) }} className="btn btn-primary">
                                    Edit
                                </a>
                                <a onClick={() => { changeDelete(item.id) }} className="btn btn-danger">Delete</a>
                            </div>
                        </div>
                    ))}

                </div></div><br />
            <Pagination total={data.length} record={record} update={change} move={prev} move1={next} />
            <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "grey", color: "white", padding: "5px" }}>
                <div>
                    <h4>LOGO</h4>
                    <p>Subline</p>
                </div>
                <div>
                    <h4>Pages</h4>
                    <p>About us</p>
                    <p>Our Expertise</p>
                    <p>Testimonials</p>
                    <p>Skin&Hair</p>
                    <p>Shop</p>
                </div>
                <div>
                    <h4>Legal& Help</h4>
                    <p>FAQs</p>
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <i className="icofont-address">Address</i><br />
                    <i className="icofont-phone">Phone Numbers</i><br />
                    <i className="icofont-email">Email Id</i>
                </div>
                <div>
                    <h4>Social Links</h4>
                    &#xed7a;
                    <i className="icofont-linkedin"></i>
                    &#xed4d;
                </div>
            </div><br/>
            {/* <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Cart
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1 style={{ color: "green", textAlign: "center" }}>ADD TO CART</h1>
                            <h2>Cart Length is:{cart.length}</h2>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Cost</th>
                                        <th>Available</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="p-2">
                                    {cart && cart.map((i) => (
                                        <tr>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                            <td>{i.cost}</td>
                                            <td>{i.available}</td>
                                            <button className="btn btn-danger" onClick={changeDel}>Remove</button>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                         </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default EmpData;

