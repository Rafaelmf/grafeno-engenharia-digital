
import { motion } from "framer-motion";

export const Clients = () => {
  const clients = [
    "Arquiplan", "BRZ Engenharia", "Citycon", "Camargo Corrêa",
    "Construcompany Engenharia", "Cyrela", "Ekko Group", "Gafisa",
    "Helbor", "P4 Engenharia", "Rocontec", "Toledo Ferrari",
    "Vitacon", "You.", "Youny", "Rezec"
  ];

  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-grafeno-blue mb-6">
            Clientes que Confiam
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Trabalhamos com as principais empresas do setor de construção e 
            engenharia, entregando projetos de excelência e cumprindo 
            rigorosamente os prazos estabelecidos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-grafeno-lightGray p-4 rounded-lg text-center hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <p className="text-grafeno-blue font-semibold text-sm">
                {client}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-grafeno-blue to-grafeno-green p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">
              Sua Empresa Pode Ser a Próxima
            </h3>
            <p className="text-lg mb-6">
              Junte-se aos nossos clientes satisfeitos e experimente 
              a qualidade e confiabilidade dos nossos serviços.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("contato");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-grafeno-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Solicitar Orçamento
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
