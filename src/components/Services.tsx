import axios from "axios";
import { useEffect, useState } from "react";

type Authuser = {
  ordernumber: number;
  customerName: string;
  Address: string;
};

function Services() {
  const [data, setData] = useState<Authuser>({} as Authuser);
  const getApi = () => {
    axios.get("http://localhost:2000/services").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h1 className="text-center text-secondary">Last Delivery Details</h1>
      <p>Order Number : {data.ordernumber}</p>
      <p>Customer Name : {data.customerName}</p>
      <p>Customer Address : {data.Address}</p>
    </div>
  );
}

export default Services;
