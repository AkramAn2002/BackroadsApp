import React from "react";
import Title from "./Title";
import { services } from "../data";
import Service from "./Service";

const Services = (props) => {
  return (
    <>
      <section className="section services" id="services">
        <Title title="our" subtitle="services" />
        <div className="section-center services-center">
          {services.map((links) => {
            return <Service key={links.id} {...links} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
