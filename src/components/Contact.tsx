import axios from "axios";
import { useEffect, useState } from "react";
interface Authprod {
  id: number;
  name: string;
  price: number;
  val: string;
}

function Contact() {
  const [pizza, setPizza] = useState<Authprod[]>([]);
  const [pizzaName, setPizzaName] = useState("");
  const [pizzaPrice, setPizzaPrice] = useState("");
  const [isedit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchPizza, setSearchPizza] = useState("");
  const getData = () => {
    axios.get("http://localhost:2000/contact").then((res) => {
      setPizza(res.data);
      console.log(res.data);
    });
  };

  const addpizza = (e: any) => {
    e.preventDefault();
    let payload = {
      name: pizzaName,
      price: pizzaPrice,
    };
    axios.post("http://localhost:2000/contact", payload).then(() => {
      console.log("pizza added");
      getData();
    });
    setPizzaName("");
    setPizzaPrice("");
  };

  const editpizza = (info: any) => {
    setIsEdit(true);
    setEditId(info.id);
    setPizzaName(info.name);
    setPizzaPrice(info.price);
  };

  const savepizza = () => {
    let payload = {
      id: editId,
      name: pizzaName,
      price: pizzaPrice,
    };

    axios.put("http://localhost:2000/contact/" + editId, payload).then(() => {
      getData();
    });
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearchPizza(e.target.value);
  };

  const deleteData = (id: number) => {
    axios.delete("http://localhost:2000/contact/" + id).then(() => {
      console.log("deleted" + id + "this");
      getData();
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="row rowAdjust">
      <div className="col-8"></div>
      <div className="col-2 mt-4">
        <input
          type="search"
          className="form-control form-control-sm"
          placeholder="search here..."
          onChange={handleChange}
        />
      </div>
      <div className="col-2"></div>
      <div className="col-8 offset-2 mt-4">
        <h2>Pizza Records</h2>
        <div className="tableDiv">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <td>
                <b>Id</b>
              </td>
              <td>
                <b>Name</b>
              </td>
              <td>
                <b>Price</b>
              </td>
              <td>
                <b>Action</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {pizza
              .filter((val: Authprod) => {
                if (searchPizza === "") {
                  return val;
                } else if (searchPizza !== "") {
                  return val.name.toLowerCase().includes(searchPizza);
                }
                return "";
              })
              .map((info: Authprod) => (
                <tr key={info.name}>
                  <td>{info.id}</td>
                  <td>{info.name}</td>
                  <td>{info.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-success m-1"
                      onClick={() => editpizza(info)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteData(info.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        </div>
      </div>
      <div className="col-8 offset-4">
        <h1 className="text-success">
          <u>Add your favorite pizza here</u>
        </h1>
        <label className="m-2">Pizza Name</label>
        <input
          placeholder="Enter pizza Name"
          className="form-control-sm"
          value={pizzaName}
          onChange={(e) => setPizzaName(e.target.value)}
        />
        <label className="m-2">Pizza-Price</label>
        <input
          className="form-control-sm"
          placeholder="Min price"
          value={pizzaPrice}
          onChange={(e) => setPizzaPrice(e.target.value)}
        />
        <div className="text-center">
          {isedit ? (
            <button className="btn btn-success" onClick={savepizza}>
              Save
            </button>
          ) : (
            <button className="btn btn-success" onClick={addpizza}>
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
