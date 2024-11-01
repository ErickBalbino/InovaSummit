import { useState } from "react";
import { TwitterLogo, YoutubeLogo, InstagramLogo, List, Ticket, Buildings } from "phosphor-react";

import logo from "../../assets/logo.svg";
import meeting from "../../assets/meeting.svg";
import bg_1 from "../../assets/bg-1.svg";
import conffetti from "../../assets/conffetti.svg";

import amazon from "../../assets/brands/amazon.svg";
import american_express from "../../assets/brands/american_express.svg";
import cisco from "../../assets/brands/cisco.svg";
import dell from "../../assets/brands/dell.svg";
import european_comission from "../../assets/brands/european_comission.svg";
import huawei from "../../assets/brands/huawei.svg";
import ibm from "../../assets/brands/ibm.svg";
import jp_morgan from "../../assets/brands/jp_morgan.svg";
import kpmg from "../../assets/brands/kpmg.svg";
import meta from "../../assets/brands/meta.svg";
import fujitsu from "../../assets/brands/fujitisu.svg";
import nestle from "../../assets/brands/nestle.svg";
import novo_nordisk from "../../assets/brands/novo_nordisk.svg";
import pitch_book from "../../assets/brands/pitch_book.svg";
import pwc from "../../assets/brands/pwc.svg";
import qatar_airways from "../../assets/brands/qatar_airways.svg";
import salesforce from "../../assets/brands/salesforce.svg";
import sap from "../../assets/brands/sap.svg";

import pablo_marcal from "../../assets/speakers/pablo_marcal.svg";
import roberto_shinyashiki from "../../assets/speakers/roberto_shinyashiki.svg";
import fernando_seabra from "../../assets/speakers/fernando_seabra.svg";
import joao_kepler from "../../assets/speakers/joao_kleper.svg";
import carol_paiffer from "../../assets/speakers/carol_paiffer.svg";
import felipe_cintra from "../../assets/speakers/felipe_cintra.svg";

import renner_silva from "../../assets/speakers/renner_silva.svg";
import alessandra_andrade from "../../assets/speakers/alessandra_alves.svg";
import ricardo_nunes from "../../assets/speakers/ricardo_nunes.svg";
import felipe_martins from "../../assets/speakers/felipe_martins.svg";
import diogo_portugal from "../../assets/speakers/diogo_portugal.svg";
import nelson_neto from "../../assets/speakers/nelson_novaes.svg";
import sergio_zimmerman from "../../assets/speakers/sergio_zimerman.svg";
import monique_evelle from "../../assets/speakers/monique_evelle.svg";
import jose_carlos_semenzato from "../../assets/speakers/joao_carlos.svg";
import arianna_nutt from "../../assets/speakers/ariana_nutt.svg";
import carolina_diniz from "../../assets/speakers/carolina_diniz.svg";

import directions from "../../assets/icons/direction.svg";
import polygon from "../../assets/icons/polygon.svg";
import circle from "../../assets/icons/circle.svg";

const Landing = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#0A1445] text-white">
      <header className="bg-white">
        <div className="max-w-[95%] md:max-w-[95%] mx-auto flex justify-between items-center p-4 md:px-8">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="InovaSummit Logo" className="w-100 h-100" />
          </div>
          <div className="hidden md:flex space-x-4">
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 font-medium flex items-center"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=5511913185849",
                  "_blank"
                )
              }
            >
              <Ticket weight="fill" className="mr-2" /> Comprar Ticket
            </button>
            <button
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 font-medium flex items-center"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=5511913185849",
                  "_blank"
                )
              }
            >
              <Buildings weight="fill" className="mr-1" /> Torne-se um Parceiro
            </button>
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <List size={32} />
          </button>
        </div>

        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <div className="relative bg-white w-64 h-full flex flex-col p-4">
              <button
                className="self-end text-black mb-4"
                onClick={() => setSidebarOpen(false)}
              >
                ✕
              </button>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 font-medium mb-4"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=5511913185849",
                    "_blank"
                  )
                }
              >
                Comprar Ticket
              </button>
              <button
                className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 font-medium"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=5511913185849",
                    "_blank"
                  )
                }
              >
                Torne-se um Parceiro
              </button>
            </div>
          </div>
        )}
      </header>

      <section>
        <div className="max-w-[95%] md:max-w-[95%] mx-auto flex flex-col md:flex-row items-center px-4 md:px-8 py-12 md:py-20">
          <div className="flex-1 text-center md:text-left space-y-6 pr-10 max-sm:pr-0">
            <h2
              className="text-xl md:text-5xl font-medium max-sm:text-center"
              style={{ lineHeight: 1.15 }}
            >
              “Um Evento que é uma Janela para o Futuro”{" "}
              <span className="text-blue-300">
                14 e 15 de fevereiro - São Paulo
              </span>
            </h2>
            <div className="flex justify-center md:justify-start space-x-5">
              <img src={directions} alt="Directions" className="h-16 w-16" />
              <img src={polygon} alt="Polygon" className="h-16 w-16" />
              <img src={circle} alt="Circle" className="h-16 w-16" />
            </div>
            <div className="flex space-x-4 justify-center md:justify-start max-sm:flex-col max-sm:space-x-0">
              <button
                className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 font-medium max-sm:mb-4"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=5511913185849",
                    "_blank"
                  )
                }
              >
                Comprar Ticket
              </button>
              <button
                className="bg-white text-black px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=5511913185849",
                    "_blank"
                  )
                }
              >
                Torne-se um Parceiro
              </button>
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <img
              src={meeting}
              alt="Evento"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden">
        <img
          src={bg_1}
          alt="Local do Evento"
          className="w-full h-[350px] md:h-[500px] object-cover"
        />
      </section>

      <section>
        <div className="max-w-[95%] md:max-w-[95%] mx-auto flex flex-col md:flex-row items-center px-4 md:px-8 py-12 md:py-20">
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              A Janela para o Futuro da Humanidade
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              O Inova Summit reúne líderes influentes, empreendedores e empresas
              visionárias para discutir e moldar o futuro da humanidade. Com
              foco na inovação que coloca o ser humano no centro, o evento cria
              uma plataforma para debates sobre o impacto da tecnologia,
              criatividade e sustentabilidade nas nossas vidas.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              A primeira edição, que acontecerá em São Paulo, terá como tema a{" "}
              <strong>Economia Criativa</strong>. Exploraremos como essa nova
              economia está transformando a forma como educamos, comunicamos e
              inovamos, afetando influenciadores, marcas, consumidores e a
              sociedade como um todo.
            </p>
          </div>
          <div className="flex-1 mt-8 md:mt-0 flex justify-end">
            <img
              src={conffetti}
              alt="Evento com Confetes"
              className="w-[1/2] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Palestrantes e Parceiros */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-400 to-orange-500">
        <section className="px-4 md:px-8 py-12">
          <div className="max-w-[95%] md:max-w-[95%] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-left">
              Palestrantes e Parceiros
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="col-span-2 md:col-span-1 md:row-span-2">
                <div className="relative w-full h-[300px] md:h-[500px]">
                  <img
                    src={pablo_marcal}
                    alt="Pablo Marçal"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-black p-4 rounded-b-lg">
                    <h3 className="text-lg font-semibold">Pablo Marçal</h3>
                    <p className="text-sm">Multiempreendedor</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-5 col-span-2 md:col-span-1">
                {[roberto_shinyashiki, fernando_seabra].map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[150px] md:h-[240px]"
                  >
                    <img
                      src={image}
                      alt={`Palestrante ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-black p-2 rounded-b-lg">
                      <h3 className="text-md font-semibold">
                        {index === 0
                          ? "Roberto Shinyashiki"
                          : "Fernando Seabra"}
                      </h3>
                      <p className="text-xs">
                        {index === 0
                          ? "O mentor dos mentores"
                          : "Idealizador do BoraFazer"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-6 col-span-2 md:col-span-1">
                {[joao_kepler, carol_paiffer].map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[150px] md:h-[240px]"
                  >
                    <img
                      src={image}
                      alt={`Palestrante ${index + 3}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-black p-2 rounded-b-lg">
                      <h3 className="text-md font-semibold">
                        {index === 0 ? "João Kepler" : "Carol Paiffer"}
                      </h3>
                      <p className="text-xs">
                        {index === 0
                          ? "O anjo investidor"
                          : "Shark Tank Brasil | CEO da Atom"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-end col-span-2 md:col-span-1">
                <div className="relative w-full h-[200px] max-sm:h-[250px] md:h-[240px]">
                  <img
                    src={felipe_cintra}
                    alt="Felipe Cintra"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-black p-2 rounded-b-lg">
                    <h3 className="text-md font-semibold">Felipe Cintra</h3>
                    <p className="text-xs">
                      CEO do Grupo Multiplicador Empresarial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 md:px-8 ">
          <div className="max-w-[95%] md:max-w-[95%] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
              {[
                {
                  img: renner_silva,
                  name: "Renner Silva",
                  title: "Empresário",
                },
                {
                  img: alessandra_andrade,
                  name: "Alessandra Andrade",
                  title: "Empresária",
                },
                {
                  img: ricardo_nunes,
                  name: "Ricardo Nunes",
                  title: "Prefeito de São Paulo",
                },
                {
                  img: felipe_martins,
                  name: "Felipe Martins",
                  title: "Empresário",
                },
                {
                  img: diogo_portugal,
                  name: "Diogo Portugal",
                  title: "Humorista",
                },
              ].map((speaker, index) => (
                <div key={index} className="relative w-full h-40 md:h-48">
                  <img
                    src={speaker.img}
                    alt={speaker.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-black p-2 rounded-b-lg">
                    <h3 className="text-md font-semibold">{speaker.name}</h3>
                    <p className="text-xs">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pb-20">
              <div className="flex flex-col col-span-2 md:col-span-1">
                <div className="relative w-full h-40 h-[200px] max-sm:h-[250px] md:h-48">
                  <img
                    src={nelson_neto}
                    alt="Nelson Novaes Neto"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-black p-2 rounded-b-lg">
                    <h3 className="text-md font-semibold">
                      Nelson Novaes Neto
                    </h3>
                    <p className="text-xs">CTO e sócio do C6 Bank</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-6 col-span-2 md:col-span-1">
                {[sergio_zimmerman, monique_evelle].map((image, index) => (
                  <div key={index} className="relative w-full h-40 md:h-48">
                    <img
                      src={image}
                      alt={`Palestrante ${index + 6}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-black p-2 rounded-b-lg">
                      <h3 className="text-md font-semibold">
                        {index === 0 ? "Sérgio Zimerman" : "Monique Evelle"}
                      </h3>
                      <p className="text-xs">
                        {index === 0
                          ? "CEO da Petz"
                          : "Fundadora @inventivos.co"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-span-2 md:col-span-2 row-span-2">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <img
                    src={jose_carlos_semenzato}
                    alt="José Carlos Semenzato"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-black p-4 rounded-b-lg">
                    <h3 className="text-lg font-semibold">
                      José Carlos Semenzato
                    </h3>
                    <p className="text-sm">Presidente | SMZTO</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-6 col-span-2 md:col-span-1">
                {[arianna_nutt, carolina_diniz].map((image, index) => (
                  <div key={index} className="relative w-full h-40 md:h-48">
                    <img
                      src={image}
                      alt={`Palestrante ${index + 8}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-black p-2 rounded-b-lg">
                      <h3 className="text-md font-semibold">
                        {index === 0 ? "Arianna Nutt" : "Carolina Diniz"}
                      </h3>
                      <p className="text-xs">
                        {index === 0
                          ? "Atriz, Comediante e Apresentadora"
                          : "Teacher dos Famosos"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#6BA6D8] px-4 md:px-8 py-12">
        <div className="max-w-[95%] md:max-w-[95%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-left text-black mb-8">
            Patrocinadores e Parceiros
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              amazon,
              american_express,
              cisco,
              dell,
              european_comission,
              huawei,
              ibm,
              jp_morgan,
              kpmg,
              meta,
              fujitsu,
              nestle,
              novo_nordisk,
              pitch_book,
              pwc,
              qatar_airways,
              salesforce,
              sap,
            ].map((logo, index) => (
              <div
                key={index}
                className="bg-white flex items-center justify-center h-24 sm:h-28 md:h-32 lg:h-36 rounded-lg shadow-md"
              >
                <img
                  src={logo}
                  alt={`Patrocinador ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white text-gray-600 py-4 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[95%] md:max-w-[95%] mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="InovaSummit Logo" className="w-100 h-100" />
          </div>

          <nav className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-base">
              Contato
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-base">
              Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-base">
              Blog
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-base">
              Loja
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-base">
              Carreira
            </a>
          </nav>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <TwitterLogo size={24} weight="fill" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <YoutubeLogo size={24} weight="fill" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <InstagramLogo size={24} weight="fill" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
