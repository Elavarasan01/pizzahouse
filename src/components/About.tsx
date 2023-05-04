import axios from "axios";
import { useEffect, useState } from "react";
type Authuser = {
  Branches: string[];
  delivarypartners: string[];
};

function About() {
  const [data, setData] = useState<Authuser>({} as Authuser);
  const getApi = () => {
    axios.get("http://localhost:2000/about").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <img src="./assets/chennai.jpg" alt="chennai" />
      <img src="./assets/bangalore.jpg" alt="bangalore" />
      <img src="./assets/Hyderabad.jfif" alt="Hyderabad" />

      <h2 className="text-success mt-5">We have Branches in </h2>
      <p>{data.Branches}</p>

      <h2 className="text-success">Our Delivery Partners</h2>
      <p>{data.delivarypartners}</p>
    </div>
  );
}

export default About;
