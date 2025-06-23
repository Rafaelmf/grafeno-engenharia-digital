
import { motion } from "framer-motion";
import { Shield, Award, Users, Clock } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Clock, number: "36", label: "Anos de Experiência", color: "text-grafeno-blue" },
    { icon: Shield, number: "100%", label: "Projetos Aprovados", color: "text-grafeno-green" },
    { icon: Users, number: "15+", label: "Clientes Atendidos", color: "text-grafeno-blue" },
    { icon: Award, number: "∞", label: "Normas Elaboradas", color: "text-grafeno-green" },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-grafeno-blue mb-6">
            Sobre a GRAFENO
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Fundada com base em décadas de experiência no setor elétrico, 
            a GRAFENO se destaca pela excelência técnica e profundo conhecimento 
            das normas e trâmites das concessionárias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-grafeno-blue mb-6">
              Experiência Incomparável
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nosso fundador trabalhou por <strong>36 anos na Eletropaulo</strong>, 
              participando ativamente da elaboração de normas técnicas que ainda 
              hoje são utilizadas no setor elétrico. Esta bagagem proporciona um 
              conhecimento único sobre:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-grafeno-green rounded-full mt-2 mr-3 flex-shrink-0" />
                Rede elétrica aérea e subterrânea
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-grafeno-green rounded-full mt-2 mr-3 flex-shrink-0" />
                Trâmites internos das concessionárias
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-grafeno-green rounded-full mt-2 mr-3 flex-shrink-0" />
                Normas técnicas vigentes
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-grafeno-green rounded-full mt-2 mr-3 flex-shrink-0" />
                Processos de aprovação e licenciamento
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-grafeno-lightGray p-6 rounded-lg text-center"
              >
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-grafeno-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
