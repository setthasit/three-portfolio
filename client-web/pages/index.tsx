import { useEffect, useRef } from "react";
import HomeExperince from "../components/HomeExperinceCard";
import HomeSkillCard from "../components/HomeSkillCard";
import HomeSkillGrid from "../components/HomeSkillGrid";
import HomeTitle from "../components/HomeTitle";
import initialThree from "../libs/three/init";
import { initializeApollo } from "../services/apollo";
import {
  ProfileDocument,
  useProfileQuery,
} from "../services/profile/profile.document.graphql";

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const { profile } = useProfileQuery({ variables: { profileID: 1 } }).data;

  useEffect(() => {
    if (canvasRef && profile) {
      initialThree(canvasRef, { profile });
    }
  }, []);

  return (
    <>
      <canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
        }}
        ref={canvasRef}
      ></canvas>

      <div
        style={{
          width: "100%",
          minHeight: "100%",
          position: "absolute",
          color: "white",
          display: "flex",
          textAlign: "justify",
          textAlignLast: 'center',
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "20px"
        }}
      >
        <div style={{
          maxWidth: '800px',
          width: "80%",
        }}>
          <HomeTitle
            name={`${profile.firstName} ${profile.lastName}`}
            coverLetter={profile.coverLetter}
          />

          <h2>Technical Skills</h2>
          <HomeSkillGrid>
            {profile.hardSkills.map((skill) => (
              <HomeSkillCard
                title={skill.title}
                confidenceLevel={skill.confidenceLevel}
                description={skill.description}
              />
            ))}
          </HomeSkillGrid>

          <h2>Soft Skills</h2>
          <HomeSkillGrid>
            {profile.softSkills.map((skill) => (
              <HomeSkillCard
                title={skill.title}
                confidenceLevel={skill.confidenceLevel}
                description={skill.description}
              />
            ))}
          </HomeSkillGrid>

          <h2>Language Skills</h2>
          <HomeSkillGrid>
            {profile.languageSkills.map((skill) => (
              <HomeSkillCard
                title={skill.title}
                confidenceLevel={skill.confidenceLevel}
                description={skill.description}
              />
            ))}
          </HomeSkillGrid>

          {/* Work experinces */}
          <h2>Experinces</h2>
          <div>
            {profile.experinces.map((exp) => (
              <HomeExperince
                title={exp.title}
                company={exp.company}
                description={exp.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ProfileDocument,
    variables: {
      profileID: 1,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
