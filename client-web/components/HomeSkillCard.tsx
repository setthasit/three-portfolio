interface HomeHardSkillProps {
  title: string;
  confidenceLevel: string;
  description: string;
}

const HomeHardSkill: React.FC<HomeHardSkillProps> = ({
  title,
  confidenceLevel,
  description,
}) => {
  return (
    <div
      style={{
        width: '45%',
        minWidth: '300px',
        height: '130px',
        padding: '2px',
        margin: '3px',
        color: "black",
        borderRadius: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
      }}
    >
      <div>
        <h3>{title}, {confidenceLevel.toLocaleLowerCase()}</h3>
      </div>
      <div
        style={{ padding: '0 10px' }}
      >{description}</div>
    </div>
  );
};

export default HomeHardSkill;
