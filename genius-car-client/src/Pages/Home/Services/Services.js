import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center my-12">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h1 className="text-5xl font-semibold my-5">Our Service Area</h1>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div>
        <h1>Services : {services.length}</h1>
      </div>
    </div>
  );
};

export default Services;
