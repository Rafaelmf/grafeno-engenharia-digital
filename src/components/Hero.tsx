
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="início" className="pt-24 pb-16 bg-gradient-to-br from-grafeno-lightGray to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-grafeno-blue mb-6"
            >
              Excelência em
              <span className="text-grafeno-green block">
                Engenharia Elétrica
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-700 mb-8 leading-relaxed"
            >
              Com mais de <strong>36 anos de experiência</strong> na Eletropaulo, 
              oferecemos soluções completas em engenharia elétrica para 
              empreendimentos de todos os portes em São Paulo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={scrollToContact}
                className="bg-grafeno-blue hover:bg-grafeno-blue/90 text-white px-8 py-6 text-lg"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => window.open("https://wa.me/5511950271422", "_blank")}
                className="border-grafeno-green text-grafeno-green hover:bg-grafeno-green hover:text-white px-8 py-6 text-lg"
              >
                WhatsApp: (11) 95027-1422
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-grafeno-green/20 rounded-full"
              />
              <img
                src="/lovable-uploads/0196213a-c0c6-4aa1-bcad-fe5231cdecf9.png"
                alt="GRAFENO Engenharia e Construção"
                className="max-w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
