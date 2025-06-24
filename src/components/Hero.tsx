
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

  // Configurações para as formas animadas
  const shapes = [
    { size: 60, delay: 0, duration: 8, color: "bg-grafeno-blue/10" },
    { size: 40, delay: 2, duration: 12, color: "bg-grafeno-green/15" },
    { size: 80, delay: 4, duration: 10, color: "bg-grafeno-blue/8" },
    { size: 30, delay: 1, duration: 15, color: "bg-grafeno-green/12" },
    { size: 50, delay: 3, duration: 9, color: "bg-grafeno-blue/12" },
  ];

  return (
    <section
      id="início"
      className="pt-24 pb-16 bg-gradient-to-br from-grafeno-lightGray to-white"
    >
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
              Soluções técnicas para empreendimentos de todos os portes,
              baseadas em décadas de experiência no setor elétrico paulista.
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
            <div className="relative">
              {/* Formas geométricas animadas de fundo */}
              <div className="absolute inset-0 overflow-hidden">
                {shapes.map((shape, index) => (
                  <motion.div
                    key={index}
                    className={`absolute rounded-full ${shape.color}`}
                    style={{
                      width: shape.size,
                      height: shape.size,
                    }}
                    initial={{
                      x: Math.random() * 400 - 200,
                      y: Math.random() * 400 - 200,
                      scale: 0,
                    }}
                    animate={{
                      x: [
                        Math.random() * 400 - 200,
                        Math.random() * 400 - 200,
                        Math.random() * 400 - 200,
                        Math.random() * 400 - 200,
                      ],
                      y: [
                        Math.random() * 400 - 200,
                        Math.random() * 400 - 200,
                        Math.random() * 400 - 200,
                        Math.random() * 400 - 200,
                      ],
                      scale: [0, 1, 0.8, 1],
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

                {/* Formas triangulares adicionais */}
                <motion.div
                  className="absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-grafeno-green/20"
                  initial={{ x: -100, y: 50, rotate: 0 }}
                  animate={{
                    x: [100, -50, 150, -100],
                    y: [50, 200, -50, 100],
                    rotate: [0, 120, 240, 360],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-grafeno-blue/15"
                  initial={{ x: 200, y: -50, rotate: 180 }}
                  animate={{
                    x: [-80, 180, -120, 200],
                    y: [-50, 150, 80, -50],
                    rotate: [180, 300, 60, 180],
                  }}
                  transition={{
                    duration: 11,
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
                className="max-w-full h-auto relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
