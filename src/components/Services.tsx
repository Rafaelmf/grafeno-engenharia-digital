import { motion } from "framer-motion";
import {
  Zap,
  Building,
  Lightbulb,
  Settings,
  Network,
  Power,
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Power,
      title: "Câmara Transformadora",
      description: "Projeto, Execução Civil e aprovação na concessionária.",
    },
    {
      icon: Settings,
      title: "Assessoria Técnica para Ligação",
      description:
        "Ligação de empreendimentos em Baixa e Média Tensão, com total conformidade às normas, orientando o cliente nas soluções dos problemas visando custo-benefício para o cliente.",
    },
    {
      icon: Building,
      title: "Centro de Meditação",
      description:
        "Projeto e execução completa de centros de medição para empreendimentos de todos os portes.",
    },
    {
      icon: Zap,
      title: "Cabine Primária",
      description:
        "Projeto e Execução de Cabine Primária em conformidade com as normas vigentes.",
    },
    {
      icon: Network,
      title: "Ligação Provisória de Obra",
      description:
        "Soluções rápidas e seguras para fornecimento de energia durante a fase de construção.",
    },
    {
      icon: Lightbulb,
      title: "Rede Elétrica de Condomínio",
      description:
        "Projeto, execução e incorporação de rede elétrica e civil com ligação aérea ou subterrânea.",
    },
  ];

  return (
    <section id="serviços" className="py-20 bg-grafeno-lightGray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-grafeno-blue mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oferecemos soluções completas em engenharia elétrica e civil, desde
            o projeto até a execução, sempre visando custo-beneficio para o
            cliente e em conformidade com as normas técnicas vigentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-grafeno-blue/10 p-3 rounded-lg mr-4">
                  <service.icon className="h-6 w-6 text-grafeno-blue" />
                </div>
                <h3 className="text-xl font-bold text-grafeno-blue">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-grafeno-blue mb-4 text-center">
            Especialização Adicional
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-grafeno-green mb-3">
                Câmara Transformadora
              </h4>
              <p className="text-gray-700">
                Projeto e execução de câmaras transformadoras com total
                conformidade às normas de segurança e eficiência energética.
                garantindo aprovação de projetos junto a concessionária e
                rapidez na execução.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-grafeno-green mb-3">
                Consultoria Especializada
              </h4>
              <p className="text-gray-700">
                Assessoria técnica baseada em décadas de experiência, garantindo
                soluções econômicas para a aprovação de projetos e ligação dos
                empreendimentos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
