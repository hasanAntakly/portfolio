import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <color args={["#241a1a"]} attach="background" />
      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        damping={0.1}
        snap
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <div
                style={{
                  width: "1024px",
                  height: "670px",
                  background:
                    "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  padding: "40px",
                  boxSizing: "border-box",
                  color: "#2a2a2a",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  overflowY: "auto",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  position: "relative",
                }}
              >
                {/* Decorative elements */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "200px",
                    height: "200px",
                    background:
                      "radial-gradient(circle, rgba(115,103,240,0.1) 0%, rgba(115,103,240,0) 70%)",
                    zIndex: 0,
                  }}
                ></div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "-50px",
                    left: "-50px",
                    width: "300px",
                    height: "300px",
                    background:
                      "radial-gradient(circle, rgba(115,103,240,0.1) 0%, rgba(115,103,240,0) 70%)",
                    zIndex: 0,
                  }}
                ></div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Header with animated gradient */}
                  <header
                    style={{
                      marginBottom: "40px",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <h1
                      style={{
                        color: "#7367F0",
                        marginBottom: "10px",
                        fontSize: "48px",
                        fontFamily: "'Bangers', cursive",
                        letterSpacing: "2px",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                        background: "linear-gradient(90deg, #7367F0, #9E95F5)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                      }}
                    >
                      HASAN ANTAKLY
                    </h1>
                    <div
                      style={{
                        height: "4px",
                        width: "100px",
                        background: "linear-gradient(90deg, #7367F0, #9E95F5)",
                        margin: "0 auto",
                        borderRadius: "2px",
                      }}
                    ></div>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "18px",
                        marginTop: "15px",
                        fontFamily: "'Bangers', cursive",
                        letterSpacing: "1px",
                      }}
                    >
                      ANGULAR SPECIALIST | 3D WEB DEVELOPER
                    </p>
                  </header>

                  {/* About Me with icon */}
                  <section
                    style={{
                      marginBottom: "30px",
                      background: "white",
                      padding: "25px",
                      borderRadius: "15px",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "5px",
                        height: "100%",
                        background:
                          "linear-gradient(to bottom, #7367F0, #9E95F5)",
                      }}
                    ></div>
                    <h2
                      style={{
                        color: "#7367F0",
                        fontSize: "24px",
                        marginBottom: "15px",
                        fontFamily: "'Bangers', cursive",
                        letterSpacing: "1px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span>ABOUT ME</span>
                    </h2>
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.6",
                        marginLeft: "15px",
                      }}
                    >
                      Informatics Engineering graduate from Aleppo University
                      (2015-2018). Passionate Angular developer with 3 years of
                      freelance experience building immersive web applications.
                      I combine technical skills with creative problem-solving
                      to deliver exceptional user experiences.
                    </p>
                  </section>

                  {/* Skills with animated cards */}
                  <section style={{ marginBottom: "30px" }}>
                    <h2
                      style={{
                        color: "#7367F0",
                        fontSize: "24px",
                        marginBottom: "20px",
                        fontFamily: "'Bangers', cursive",
                        letterSpacing: "1px",
                        textAlign: "center",
                      }}
                    >
                      MY SKILLS
                    </h2>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(120px, 1fr))",
                        gap: "15px",
                      }}
                    >
                      {[
                        "Angular",
                        "JavaScript",
                        "TypeScript",
                        "CSS",
                        "HTML",
                        "Tailwind",
                        "Bootstrap",
                        "Git",
                        "Three.js",
                        "WebGL",
                        "C#",
                      ].map((skill) => (
                        <div
                          key={skill}
                          style={{
                            background: "white",
                            padding: "15px 10px",
                            borderRadius: "10px",
                            textAlign: "center",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                            transition: "all 0.3s ease",
                            cursor: "default",
                            ":hover": {
                              transform: "translateY(-5px)",
                              boxShadow: "0 8px 25px rgba(115,103,240,0.2)",
                            },
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              background:
                                "linear-gradient(135deg, #7367F0, #9E95F5)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              margin: "0 auto 10px",
                              color: "white",
                              fontSize: "16px",
                              fontFamily: "'Bangers', cursive",
                            }}
                          >
                            {skill.charAt(0)}
                          </div>
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "#555",
                            }}
                          >
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Experience timeline */}
                  <section
                    style={{
                      marginBottom: "30px",
                      background: "white",
                      padding: "25px",
                      borderRadius: "15px",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                    }}
                  >
                    <h2
                      style={{
                        color: "#7367F0",
                        fontSize: "24px",
                        marginBottom: "20px",
                        fontFamily: "'Bangers', cursive",
                        letterSpacing: "1px",
                      }}
                    >
                      EXPERIENCE
                    </h2>

                    <div
                      style={{
                        position: "relative",
                        paddingLeft: "30px",
                        borderLeft: "2px dashed #7367F0",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: "-11px",
                          top: "0",
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "#7367F0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "10px",
                        }}
                      >
                        →
                      </div>

                      <div style={{ marginBottom: "30px" }}>
                        <h3
                          style={{
                            marginBottom: "5px",
                            fontSize: "18px",
                            color: "#333",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <span
                            style={{
                              background: "#7367F0",
                              color: "white",
                              padding: "5px 10px",
                              borderRadius: "20px",
                              fontSize: "12px",
                            }}
                          >
                            2022 - NOW
                          </span>
                          <span>Freelance Web Developer</span>
                        </h3>
                        <ul
                          style={{
                            fontSize: "15px",
                            paddingLeft: "20px",
                            listStyleType: "none",
                          }}
                        >
                          <li
                            style={{
                              position: "relative",
                              paddingLeft: "20px",
                              marginBottom: "8px",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: "0",
                                top: "8px",
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#7367F0",
                              }}
                            ></span>
                            Completed 8 projects (4 eCommerce, 2 online courses,
                            2 training centers)
                          </li>
                          <li
                            style={{
                              position: "relative",
                              paddingLeft: "20px",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: "0",
                                top: "8px",
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#7367F0",
                              }}
                            ></span>
                            Frontend Team Leader for training center project (7
                            months)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Contact with social buttons */}
                  <section>
                    <h2
                      style={{
                        color: "#7367F0",
                        fontSize: "24px",
                        marginBottom: "20px",
                        fontFamily: "'Bangers', cursive",
                        letterSpacing: "1px",
                        textAlign: "center",
                      }}
                    >
                      GET IN TOUCH
                    </h2>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                        marginBottom: "30px",
                      }}
                    >
                      <a
                        href="mailto:hasan@example.com"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          background:
                            "linear-gradient(135deg, #7367F0, #9E95F5)",
                          color: "white",
                          padding: "12px 25px",
                          borderRadius: "30px",
                          textDecoration: "none",
                          fontSize: "16px",
                          fontWeight: "600",
                          boxShadow: "0 5px 15px rgba(115,103,240,0.3)",
                          transition: "all 0.3s ease",
                          ":hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 8px 25px rgba(115,103,240,0.4)",
                          },
                        }}
                      >
                        <span>✉️</span> Email Me
                      </a>

                      <a
                        href="https://linkedin.com/in/hasan-antakly"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "white",
                          color: "#7367F0",
                          padding: "12px 25px",
                          borderRadius: "30px",
                          textDecoration: "none",
                          fontSize: "16px",
                          fontWeight: "600",
                          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                          border: "1px solid #7367F0",
                          transition: "all 0.3s ease",
                          ":hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 8px 25px rgba(115,103,240,0.2)",
                            background: "#7367F0",
                            color: "white",
                          },
                        }}
                      >
                        <span>🔗</span> LinkedIn
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </Html>
          </primitive>

          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            HASAN ANTAKLY
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
