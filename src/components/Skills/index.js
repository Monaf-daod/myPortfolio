import React, { useState, useEffect } from "react";
import { data } from "./data";
import Bounce from "react-reveal/Bounce";
import {
  SkillsMainContainer,
  SkillsContainer,
  SkillsTitle,
  SkillCard,
  FirstFace,
  SecondFace,
  SkillCardImage,
  SkillCardTitle,
  SkillFirstColumn,
  SkillFirstColumnItem,
  SkillSecondColumn,
  SkillSecondColumnItem,
  SkillThirdColumn,
  SkillThirdColumnItem,
} from "./Style.js";

const Skills = () => {
  const [skillsList, setSkillsList] = useState([]);
  useEffect(() => {
    setSkillsList([...data]);
  }, []);
  // function for handling services display as array of items,
  // each item is array of 2 items
  const handleSkillsItems = (skillsArr) => {
    let tempArrays = [];
    let temp = [...skillsArr];
    let counter = 0;
    while (temp.length) {
      switch (counter) {
        case 0:
        case 2:
        case 4:
          tempArrays.push(temp.splice(0, 3));
          break;
        case 1:
        case 3:
          tempArrays.push(temp.splice(0, 1));
          break;
        default:
          tempArrays.push(temp.splice(0, 3));
          break;
      } 
    counter++
  }
    return tempArrays;
  };

  /// render Skills section
  const renderSkillsList = (
    <SkillsContainer>
      {handleSkillsItems(skillsList).map((colSkills, index) => {
        if (index === 0)
          return (
            <SkillFirstColumn key={index} xs={12} md={3}>
              {colSkills.map((skillItem, ind) => (
                <SkillFirstColumnItem key={ind} position={ind}>
                  <SkillCard>
                    <FirstFace>
                      <SkillCardImage src={skillItem.image} />
                      <SkillCardTitle>{skillItem.title}</SkillCardTitle>
                    </FirstFace>
                    <SecondFace>
                      <SkillCardImage src={skillItem.image} />
                    </SecondFace>
                  </SkillCard>
                </SkillFirstColumnItem>
              ))}
            </SkillFirstColumn>
          );
        else if (index === 1 || index===2 || index===3)
          return (
            <SkillSecondColumn key={index} xs={12} md={2}>
              {colSkills.map((skillItem, ind) => (
                <SkillSecondColumnItem key={ind}>
                  <SkillCard>
                    <FirstFace>
                      <SkillCardImage src={skillItem.image} />
                      <SkillCardTitle>{skillItem.title}</SkillCardTitle>
                    </FirstFace>
                    <SecondFace>
                      <SkillCardImage src={skillItem.image} />
                    </SecondFace>
                  </SkillCard>
                </SkillSecondColumnItem>
              ))}
            </SkillSecondColumn>
          );
        else
          return (
            <SkillThirdColumn key={index} xs={12} md={3}>
              {colSkills.map((skillItem, ind) => (
                <SkillThirdColumnItem key={ind} position={ind}>
                  <SkillCard>
                    <FirstFace>
                      <SkillCardImage src={skillItem.image} />
                      <SkillCardTitle>{skillItem.title}</SkillCardTitle>
                    </FirstFace>
                    <SecondFace>
                      <SkillCardImage src={skillItem.image} />
                    </SecondFace>
                  </SkillCard>
                </SkillThirdColumnItem>
              ))}
            </SkillThirdColumn>
          );
      })}
    </SkillsContainer>
  );

  return (
    <Bounce>
      <SkillsMainContainer id="skills-section">
        <SkillsTitle>Skills</SkillsTitle>
        {renderSkillsList}
      </SkillsMainContainer>
    </Bounce>
  );
};

export default Skills;
