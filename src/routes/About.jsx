import React from "react";
import photo from "../assets/toutou.png";

export default function About() {
  return (
    <div className=" flex flex-col items-center w-screen px-12 xl:px-56 lg:py-44">
      <div>
        <p className="pb-8 text-emerald-500 font-mono">A propos de moi</p>
        <div class="flex gap-4 flex-col items-center md:items-start md:flex-row ">
          <div>
            <p className="text-sm md:text-base">
              Je suis une jeune médecin diplômée de la Faculté de Médecine de
              Constantine, actuellement en Master 1 de Santé Publique à
              l'Université Sorbonne Paris Nord. Mon parcours m'a permis
              d'acquérir une solide expérience clinique dans plusieurs
              spécialités, notamment en neurologie, pédiatrie et orthopédie, au
              sein du CHU de Constantine. Mon intérêt pour l'innovation médicale
              m'a également conduite à me former en informatique biomédicale (R,
              Python, SQL), avec pour objectif de contribuer à une médecine plus
              efficace et fondée sur les données.
              <br />
              <br />
              Mes compétences :
            </p>
            <ul class="py-8 grid grid-cols-2">
              <li class="flex items-center pt-2">
                <svg
                  class="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <p class="font-mono text-sm md:text-base">Linux</p>
              </li>
              <li class="flex items-center pt-2">
                <svg
                  class="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <p class="font-mono text-sm md:text-base">
                  Bases de données relationnelles
                </p>
              </li>
              <li class="flex items-center pt-2">
                <svg
                  class="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <p class="font-mono text-sm md:text-base">R</p>
              </li>
              <li class="flex items-center pt-2">
                <svg
                  class="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <p class="font-mono text-sm md:text-base">Python</p>
              </li>
              <li class="flex items-center pt-2">
                <svg
                  class="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <p class="font-mono text-sm md:text-base">JavaScript</p>
              </li>
              <li class="flex items-center pt-2">
                <svg
                  class="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
                <p class="font-mono text-sm md:text-base">React</p>
              </li>
            </ul>
          </div>

          <div class="relative w-56 min-w-56">
            <img src={photo} alt="Me" class="w-full block" />
            <div class="absolute inset-0 max-l-full bg-vscode-blue/50 hover:bg-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
