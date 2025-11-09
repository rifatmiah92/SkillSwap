import React, { useEffect, useState } from "react";
import SkillCard from "../Components/SkillCard/SkillCard";

const SkillsOutlet = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  console.log(skills);

  return (
    <>
      <div className="grid grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.skillId} skillInfo={skill}></SkillCard>
        ))}
      </div>
    </>
  );
};

export default SkillsOutlet;
