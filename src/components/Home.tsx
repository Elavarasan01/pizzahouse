import { useEffect, useState } from "react";
import axios from "axios";

type Authuser = {
  storeName: string;
  profit: number;
  production: string;
  outlet: string;
};

const Home = () => {
  const [data, setData] = useState<Authuser>({} as Authuser);
  const getApi = () => {
    axios.get("http://localhost:2000/home").then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div>
      <img
        style={{ width: "100vw", height: "50vh" }}
        src="./assets/pizza-banner.jpg"
        alt="Pizza Images"
      />
      <h1 className="text-center text-danger blinkme">
        {data.storeName + " Order Here"}
      </h1>
      <div className="row">
        <div className="col-6">
          <img
            src="./assets/pizza.jfif"
            alt="pizza sub"
            style={{ height: "400px", width: "500px" }}
            className="form-control"
          />
        </div>
        <div className="col-6">
          <p className="text-left mt-5 text-info fw-bold">
            We are making {data.production}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 pt-5">
          <p className="text-left mt-5 text-info fw-bold">
            We are getting {data.profit} profit / day
          </p>
          <h2 className="text-success">
            We Have outlet in <span className="text-danger">{data.outlet}</span>{" "}
            also
          </h2>
        </div>
        <div className="col-6">
          <img
            src="./assets/pizza1.jpg"
            alt="pizza sub2"
            className="form-control"
            style={{ height: "400px", width: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
