
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-grafeno-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/lovable-uploads/59c10998-0965-4c18-8782-079cd7e9a3c3.png"
                alt="GRAFENO Logo"
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl font-bold">GRAFENO</h3>
                <p className="text-sm text-gray-300">Engenharia e Construção</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Grafeno Comércio, Engenharia e Construção Ltda. ME oferece 
              soluções especializadas em engenharia elétrica com mais de 
              36 anos de experiência no setor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Ligação BT/MT/AT</li>
              <li>Centro de Medição</li>
              <li>Cabine Primária</li>
              <li>Rede Elétrica</li>
              <li>Iluminação Pública</li>
              <li>Câmara Transformadora</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-grafeno-green mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Rua Desembargador do Vale 589</p>
                  <p>Perdizes – São Paulo – SP</p>
                  <p>CEP: 05010-040</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-grafeno-green" />
                <span className="text-gray-300">(11) 95027-1422</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-grafeno-green" />
                <span className="text-gray-300">contato@grafeno.eng.br</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-600 mt-12 pt-8 text-center"
        >
          <p className="text-gray-300">
            © {new Date().getFullYear()} Grafeno Comércio, Engenharia e Construção Ltda. ME. 
            Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
