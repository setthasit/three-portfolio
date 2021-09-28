import { useEffect, useRef } from "react";
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
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{
          width: "80%",
        }}>
          <h1>{`${profile.firstName} ${profile.lastName}`}</h1>
          {/* Intro */}
          <div>{profile.coverLetter}</div>

          {/* you can find me */}
          <h2>Where you can find me</h2>
          <div>
            <div>
              Github: {profile.github}
            </div>
            <div>
              Email: {profile.email}
            </div>
          </div>

          {/* Technical skills */}
          <h2>Technical Skills</h2>
          <div>
            {profile.hardSkills.map((skill) => (
              <div>
                {`${skill.title}, ${skill.confidenceLevel}`}
                <div>{skill.description}</div>
              </div>
            ))}
          </div>

          {/* Work experinces */}
          <h2>Experinces</h2>
          <div>
            {profile.experinces.map((exp) => (
              <div>
                {`${exp.title}, ${exp.company}`}
                <div>{exp.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
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
