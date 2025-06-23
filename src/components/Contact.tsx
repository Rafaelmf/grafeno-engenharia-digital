
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511950271422", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-grafeno-lightGray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-grafeno-blue mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Solicite um orçamento ou tire suas dúvidas sobre nossos serviços. 
            Nossa equipe está pronta para atendê-lo com a excelência que você merece.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-grafeno-blue mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-grafeno-green mt-1" />
                  <div>
                    <h4 className="font-semibold text-grafeno-blue">Endereço</h4>
                    <p className="text-gray-700">
                      Rua Desembargador do Vale 589<br />
                      Perdizes – São Paulo – SP<br />
                      CEP: 05010-040
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-grafeno-green mt-1" />
                  <div>
                    <h4 className="font-semibold text-grafeno-blue">Telefone</h4>
                    <p className="text-gray-700">(11) 95027-1422</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-grafeno-green mt-1" />
                  <div>
                    <h4 className="font-semibold text-grafeno-blue">Email</h4>
                    <p className="text-gray-700">contato@grafeno.eng.br</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-grafeno-blue to-grafeno-green p-8 rounded-lg text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Atendimento Rápido via WhatsApp
              </h3>
              <p className="mb-6">
                Fale diretamente conosco e receba uma resposta rápida 
                para suas necessidades em engenharia elétrica.
              </p>
              <Button
                onClick={handleWhatsApp}
                className="bg-white text-grafeno-blue hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                Chamar no WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-grafeno-blue mb-6">
              Solicite um Orçamento
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-grafeno-blue focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-grafeno-blue focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-grafeno-blue focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de Interesse
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-grafeno-blue focus:border-transparent">
                  <option value="">Selecione um serviço</option>
                  <option value="ligacao-bt-mt-at">Ligação BT/MT/AT</option>
                  <option value="centro-medicao">Centro de Medição</option>
                  <option value="cabine-primaria">Cabine Primária</option>
                  <option value="ligacao-provisoria">Ligação Provisória</option>
                  <option value="rede-eletrica">Rede Elétrica</option>
                  <option value="iluminacao-publica">Iluminação Pública</option>
                  <option value="camara-transformadora">Câmara Transformadora</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-grafeno-blue focus:border-transparent"
                  placeholder="Descreva seu projeto ou necessidade..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-grafeno-blue hover:bg-grafeno-blue/90 text-white py-3 font-semibold"
              >
                Enviar Solicitação
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
