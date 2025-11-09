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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-14 gap-12 mx-auto md:mx-10 lg:mx-20">
        {skills.map((skill) => (
          <SkillCard key={skill.skillId} skillInfo={skill}></SkillCard>
        ))}
      </div>
    </>
  );
};

export default SkillsOutlet;
