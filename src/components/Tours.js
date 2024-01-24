import React from "react";
import Title from "./Title";
import { tours } from "../data";

const Tours = (props) => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="featured" subtitle="tours" />
        <div className="section-center featured-center">
          {tours.map((links) => {
            return (
              <article className="tour-card">
                <div className="tour-img-container">
                  <img src={links.img} className="tour-img" alt="" />
                  <p className="tour-date">{links.date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{links.title}</h4>
                  </div>
                  <p>{links.text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className={links.icon}></i>
                      </span>
                      {links.pays}
                    </p>
                    <p>{links.days} days</p>
                    <p>from ${links.price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
