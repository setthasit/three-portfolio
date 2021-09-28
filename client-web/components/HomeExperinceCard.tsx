interface HomeExperinceProps {
  title: string;
  company: string;
  description: string;
}

const HomeExperince: React.FC<HomeExperinceProps> = ({
  title,
  company,
  description,
}) => {
  return (
    <div
      style={{
        width: '100%',
        minWidth: '300px',
        padding: '10px 20px',
        margin: '3px',
        color: "black",
        borderRadius: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
      }}
    >
      <div>
        <h3>{title}, {company}</h3>
      </div>
      <div
        style={{ padding: '0 10px' }}
      >{description}</div>
    </div>
  );
};

export default HomeExperince;
