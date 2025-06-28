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

  // Configurações para as formas animadas - versão mais visível
  const shapes = [
    { size: 80, delay: 0, duration: 6, color: "bg-grafeno-blue/20" },
    { size: 60, delay: 1, duration: 8, color: "bg-grafeno-green/25" },
    { size: 100, delay: 2, duration: 7, color: "bg-grafeno-blue/15" },
    { size: 40, delay: 0.5, duration: 9, color: "bg-grafeno-green/20" },
    { size: 70, delay: 1.5, duration: 5, color: "bg-grafeno-blue/25" },
    { size: 50, delay: 2.5, duration: 10, color: "bg-grafeno-green/18" },
  ];

  return (
    <section id="início" className="pt-24 pb-16 bg-white">
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
              <span className="text-grafeno-green block">
                Engenharia Elétrica
              </span>
              para Grandes Desafios
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-700 mb-8 leading-relaxed"
            >
              Soluções técnicas e econômicas para empreendimentos de todos os
              portes, baseadas em décadas de experiência no setor elétrico
              paulista.
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
                onClick={() =>
                  window.open("https://wa.me/5511950271422", "_blank")
                }
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
            className="flex justify-center relative"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Container das animações de fundo */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {shapes.map((shape, index) => (
                  <motion.div
                    key={`circle-${index}`}
                    className={`absolute rounded-full ${shape.color} shadow-lg`}
                    style={{
                      width: shape.size,
                      height: shape.size,
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: [0, 1, 0.8, 1.2, 1],
                      opacity: [0, 0.8, 0.5, 0.9, 0.6],
                      x: [0, 50, -30, 40, 0],
                      y: [0, -40, 60, -20, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: shape.duration,
                      delay: shape.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Triângulos animados */}
                <motion.div
                  className="absolute w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-grafeno-green/30 shadow-lg"
                  style={{ left: "15%", top: "30%" }}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: [0, 1, 0.7, 1.1, 0.9],
                    rotate: [0, 120, 240, 360],
                    x: [0, 60, -40, 80, 0],
                    y: [0, -50, 70, -30, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-grafeno-blue/25 shadow-lg"
                  style={{ right: "20%", top: "60%" }}
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{
                    scale: [0, 1.2, 0.6, 1, 0.8],
                    rotate: [180, 300, 60, 240, 180],
                    x: [0, -70, 50, -40, 0],
                    y: [0, 40, -60, 30, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                {/* Losangos adicionais */}
                <motion.div
                  className="absolute w-8 h-8  transform rotate-45 shadow-lg"
                  style={{ left: "70%", top: "20%" }}
                  initial={{ scale: 0, rotate: 45 }}
                  animate={{
                    scale: [0, 1, 0.5, 1.3, 1],
                    rotate: [45, 225, 405],
                    x: [0, -50, 30, -70, 0],
                    y: [0, 60, -40, 50, 0],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </div>

              {/* Imagem principal */}
              <img
                src="/lovable-uploads/0196213a-c0c6-4aa1-bcad-fe5231cdecf9.png"
                alt="GRAFENO Engenharia e Construção"
                className="max-w-full h-auto relative"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
