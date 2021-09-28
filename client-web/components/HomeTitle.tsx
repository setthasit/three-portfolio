interface HomeTitleProps {
  name: string;
  coverLetter: string;
}

const HomeTitle: React.FC<HomeTitleProps> = ({ name, coverLetter }) => {
    return (<div>
        <h1>{name}</h1>
        <div>
            {coverLetter}
        </div>
    </div>)
};

export default HomeTitle;
