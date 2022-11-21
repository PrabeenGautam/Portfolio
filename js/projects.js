const projectContainer = document.querySelector(".projects");

const projectArray = [
  {
    filter: "html-css js",
    github: "https://github.com/PrabeenGautam/Virtual-Keyboard",
    preview: "https://prabeengautam.github.io/Virtual-Keyboard/",
    title: "Virtual Keyboard",
    subtitle: "Virtual Keyboard",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    filter: "react",
    github:
      "https://github.com/PrabeenGautam/GeetSunam-Nepali-Music-Streaming-Platform",
    preview: "",
    title: "Nepali Music Streaming",
    subtitle:
      "GeetSunam is a Nepali Music Streaming Platform with a focus on genre based music classification and genre based music recommendation.",
    technologies: ["HTML", "CSS", "JavaScript", "JSX", "React"],
  },
  {
    filter: "html-css js",
    github: "https://github.com/PrabeenGautam/Calculator-App",
    preview: "https://prabeengautam.github.io/Calculator-App",
    title: "Calculator",
    subtitle: "Windows 11 Basic Calculator ",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    filter: "react",
    github: "https://github.com/PrabeenGautam/Class-Management-System",
    preview: "",
    title: "Class Management System",
    subtitle:
      "A web app built with React and django as the class management system for any academic institution with the features for administration, teachers and students.",
    technologies: ["HTML", "CSS", "JavaScript", "JSX", "React"],
  },
  {
    filter: "html-css",
    github: "https://github.com/PrabeenGautam/MultipleTextTyping",
    preview: "https://prabeengautam.github.io/MultipleTextTyping/",
    title: "MultipleTextTyping",
    subtitle: "Basic Multi Text Typing Type Writer Effects",
    technologies: ["HTML", "CSS"],
  },
  {
    filter: "html-css js",
    github: "https://github.com/PrabeenGautam/Color-Slider",
    preview: "https://prabeengautam.github.io/Color-Slider/",
    title: "Color-Slider",
    subtitle: "Basic RGBA Color Slider and Hex Code",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    filter: "html-css js",
    github: "https://github.com/PrabeenGautam/Password-Generator",
    preview: "https://prabeengautam.github.io/Password-Generator/",
    title: "Password Generator",
    subtitle:
      "A basic class based Password Generator with 4 different options (weak, medium, strong, and super strong) and given length.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    filter: "html-css js",
    github: "https://github.com/PrabeenGautam/WeatherApp",
    preview: "https://prabeengautam.github.io/WeatherApp/",
    title: "WeatherApp",
    subtitle: "Basic JS Weather App",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    filter: "html-css",
    github: "https://github.com/PrabeenGautam/AnalogClock",
    preview: "https://prabeengautam.github.io/AnalogClock/",
    title: "Analog Clock",
    subtitle: "Analog Clock Using HTML and CSS only",
    technologies: ["HTML", "CSS"],
  },
];

projectArray.forEach((project) => {
  const html = `
  <div class="project-item ${project.filter}">
              <div class="files">
                <div class="folder">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-folder"
                    viewBox="0 0 16 16">
                    <path
                      d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                  </svg>
                </div>
                <div class="links">
                 ${
                   project?.github &&
                   ` <div class="github" title="Github Link">
                       <a href="${project.github}" target='_blank'>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="currentColor"
                           class="bi bi-github"
                           viewBox="0 0 16 16">
                           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                         </svg>
                       </a>
                     </div>`
                 }
                  ${
                    project.preview &&
                    `<div class="external" title="Preview Projects">
                        <a href=${project?.preview} target='_blank'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-box-arrow-up-right"
                            viewBox="0 0 16 16">
                            <path
                              fill-rule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                            />
                          </svg>
                        </a>
                      </div>`
                  }
                </div>
              </div>
              <div class="project-content">
                <h2 class="project-title">
             ${
               project.preview
                 ? `<a target='_blank' href="${project.preview}">${project.title}</a>`
                 : project.title
             }
                </h2>
                <div class="project-subtitle">${project.subtitle}</div>
                <div class="technologies">
                 ${(function tech() {
                   let technology = "";
                   project.technologies &&
                     project.technologies.forEach(
                       (tech) => (technology += `<li>${tech}</li>`)
                     );
                   return technology;
                 })()}
                </div>
              </div>

            </div>`;
  projectContainer.insertAdjacentHTML("beforeend", html);
  projectContainer.style.height = "auto";
});