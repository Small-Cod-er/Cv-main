import "./App.scss";
import LiquidEther from "./componentBits/liquid-ether"; // import SplitText from "./componentBits/SplitText";
import SplitText from "./componentBits/splitText";
import SplitFlapText from "./componentBits/splitFlapText";
import ParticleText from "./componentBits/particleText";
import firstProject from "./images/Screenshot_2.png";
import secondProject from "./images/Screenshot_4.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <header>
          <a href="#preview">Abdulaziz Izzatulaev's CV</a>
          <div>
            {/* <p>Projects</p> */}
            <a href="#aboutMe">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#myProjects">My works</a>
          </div>
        </header>
        <main>
          <section id="preview" className="preview">
            <div style={{ width: "100%", height: 600, position: "relative" }}>
              <LiquidEther
                // colors={["#5227FF","#FF9FFC","#B497CF"]}
                colors={["#5227FF", "#FF9FFC", "#B497CF"]}
                mouseForce={20}
                cursorSize={100}
                persistence={0.75}
                autoDemo
                autoSpeed={0.5}
                autoIntensity={2.2}
                intensity={1}
                viscosity={0}
                resolution={0.5}
                clickBurst
                bounceEdges={false}
                intro
                lightMode={false}
              />
            </div>
            <div className="titleBox">
              <SplitText
                text="Building clean & functional digital experiences"
                effect="rise"
                splitType="chars"
                delay={50}
                duration={1.25}
                staggerFrom="start"
                trigger="view"
                hoverEffect="lift"
                loop={false}
                loopDelay={1.5}
                mask={false}
                threshold={0.1}
              />
              <br />
              <br />
              <SplitText
                text="Explore my work, skills, and background below."
                effect="rise"
                splitType="chars"
                delay={100}
                duration={1.25}
                staggerFrom="start"
                trigger="view"
                hoverEffect="lift"
                loop={false}
                loopDelay={1.5}
                mask={false}
                threshold={0.1}
              />
            </div>
          </section>
          <section id="aboutMe" className="aboutME">
            <div className="aboutmeTitle">
              <div>
                <div>
                  <SplitText
                    text="About me"
                    effect="wave"
                    splitType="chars"
                    delay={100}
                    duration={1.25}
                    staggerFrom="start"
                    trigger="view"
                    hoverEffect="wave"
                    loop={false}
                    loopDelay={1.5}
                    mask={false}
                    threshold={0.1}
                  />
                </div>
                <p>Who am I?</p>
              </div>
            </div>
            <div className="aboutmeContent">
              <div>
                <p>Personal info:</p>
                <span>Full name: Abdulaziz Izzatulayev</span>
                <span>Gender: male</span>
                <span>Date of birth: 2009.04.20</span>
              </div>
              <div>
                <p>Studied or Studying: </p>
                <span>191 School (graduated)</span>
                <span>"Najot talim" Fronted course (graduated)</span>
                <span>"TDTU" lyceum (studying)</span>
              </div>
            </div>
            <div className="aboutmeText">
              Hi i am Abdulaziz Izzatulayev!.I can help to create amazing sites
              with all types of animation and if you searching for freelancer i
              can help you with bugs or modernizing/creating something.I can use
              React Native and React with fraimework Vite and conduct it with
              both typesctipt and javascript .Also can use libraries like React
              Router,Tailwind css,React Bits,TanStack Query,React Hook Form and
              others.I made this site by using React vite typesctipt with scss
              for expanded style methods with Libraries: React Bits,React Router
            </div>
          </section>
          <section id="skills" className="skills">
            <div style={{ width: "100%", height: 360 }}>
              <ParticleText
                text="My skills"
                particleSize={2.2}
                density={4}
                color="white"
                highlightColor="#ff5a36"
                highlightMode="motion"
                shape="circle"
                intro="gather"
                scatter={190}
                gatherDuration={1600}
                stagger={420}
                clickBurst
                burstStrength={1}
                pointerRepel={42}
                repelRadius={120}
                idleDrift={0.8}
                trigger="mount"
                fontSize="clamp(3.5rem, 13vw, 9rem)"
                fontWeight={800}
                fontFamily="inherit"
                glow
              />
            </div>
            <div className="skillsContent">
              <div className="skillsContentcol-1">
                <p>Work in fields:</p>
                <div className="skillBox">React Native</div>
                <div className="skillBox">React with Vite</div>
              </div>
              <div className="skillsContentcol-1">
                <p>Libraries:</p>
                <div className="skillBox">React Router</div>
                <div className="skillBox">React Bits</div>
                <div className="skillBox">TanStack query</div>
                <div className="skillBox">React hook form</div>
                <div className="skillBox">And more</div>
              </div>
              <div className="skillsContentcol-1">
                <p>Programing languages</p>
                <div className="skillBox">Html</div>
                <div className="skillBox">Css/Scss/Sass</div>
                <div className="skillBox">Javascript/Typescript</div>
                <div className="skillBox">TSX,configs,gitignore</div>
              </div>
            </div>
          </section>
          <section className="myProjects" id="myProjects">
            <div className="titleBox2">
              <SplitText
                text="My Projects"
                className="text-2xl font-semibold text-center"
                effect="rise"
                splitType="chars"
                delay={50}
                duration={1.25}
                staggerFrom="start"
                trigger="view"
                hoverEffect="lift"
                loop={false}
                loopDelay={1.5}
                mask={false}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
            <div className="projectsContainer">
              <Link to={"https://input-tanstack-query.vercel.app/"}>
                <div className="project">
                  <p className="projectName">Input</p>
                  <p className="projectDescription">
                    Input which fetchs info into server <br /> which keeps
                    it,try it
                  </p>
                  <div className="projectPhoto">
                    <img src={firstProject} alt="" />
                  </div>
                </div>
              </Link>
              <Link to={"https://cards-jf8f.vercel.app"}>
                <div className="project">
                  <p className="projectName">Cards</p>
                  <p className="projectDescription">
                    Cards, you can chose one and see <br /> how dynamic router
                    works
                  </p>
                  <div className="projectPhoto">
                    <img src={secondProject} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </section>
          <footer id="contacts">
            <div className="splitFlapTextBox">
              <SplitFlapText
                words={["If you Interested", "Contacts below"]}
                flipDuration={0.12}
                stagger={0.06}
                cycleDelay={2400}
                charset="alphanumeric"
                flipsPerChar={8}
                order="left"
                align="left"
                tileStyle="board"
                tileColor="#111827"
                textColor="#f8fafc"
                glare={0}
                depth={0.5}
                tileRadius={8}
                gap={6}
                fontSize={52}
                loop
                padTo={9}
                intro
              />
            </div>
            <div className="contacts">
              <p>Phone number:+998 90 011 05 40</p>
              <a href="(https://t.me/Abdulaziz_i9">Telegram :@Abdulaziz_i9</a>
              <br />
              <a href="mailto:izzatulaevabdulaziz@gmail.com">
                izzatulaevabdulaziz@gmail.com
              </a>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
