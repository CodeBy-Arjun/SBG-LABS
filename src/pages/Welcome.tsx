import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  // Redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => navigate("/home"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">

      {/* 🔵 Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[ 
          "top-1/4 left-1/4 bg-primary/10",
          "bottom-1/4 right-1/4 bg-secondary/10"
        ].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute w-64 h-64 rounded-full blur-3xl ${pos}`}
            animate={{
              scale: i === 0 ? [1, 1.2, 1] : [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🔷 Main Content */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 text-center"
      >
        {/* Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center justify-center w-24 h-24 mx-auto mb-8 rounded-2xl gradient-primary shadow-xl"
        >
          <Code2 className="w-12 h-12 text-primary-foreground" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-3 text-5xl font-bold md:text-6xl text-gradient"
        >
          Welcome to
        </motion.h1>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 text-4xl font-extrabold tracking-wide md:text-5xl"
        >
          SBG LABS
        </motion.h2>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 rounded-full bg-primary"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Welcome;