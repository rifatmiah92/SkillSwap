import React from "react";

const SkillCard = ({ skillInfo }) => {
  return (
    <div>
      <div className="card bg-base-100 w-80 mx-auto shadow-sm">
        <figure>
          <img src={skillInfo.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {skillInfo.skillName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{skillInfo.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{skillInfo.price}$</div>
            <div className="badge badge-outline">{skillInfo.rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
