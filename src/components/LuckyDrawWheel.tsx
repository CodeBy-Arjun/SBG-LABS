import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Gift, Sparkles } from "lucide-react";

const DISCOUNTS = [10, 10.5, 11, 12, 15, 18, 20, 25, 30, 35, 40];

export const LuckyDrawWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonDiscount, setWonDiscount] = useState<number | null>(null);
  const [hasSpun, setHasSpun] = useState(false);

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    setWonDiscount(null);

    // Random number of full rotations plus a random position
    const randomIndex = Math.floor(Math.random() * DISCOUNTS.length);
    const segmentAngle = 360 / DISCOUNTS.length;
    const targetRotation = 360 * 5 + randomIndex * segmentAngle + segmentAngle / 2;

    setRotation(targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const selectedDiscount = DISCOUNTS[randomIndex];
      setWonDiscount(selectedDiscount);
      setHasSpun(true);
      toast.success(`🎉 You won ${selectedDiscount}% discount!`, {
        description: "Apply this discount on your next purchase!",
        duration: 5000,
      });
    }, 4000);
  };

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Lucky Draw Wheel
            </h2>
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground">
            Spin the wheel and win up to 40% discount on your next project!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Wheel Container */}
          <div className="relative">
            {/* Pointer Arrow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-primary drop-shadow-lg" />
            </div>

            {/* Wheel */}
            <motion.div
              className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
              animate={{ rotate: rotation }}
              transition={{
                duration: 4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                {/* Outer Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="98"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                />

                {/* Segments */}
                {DISCOUNTS.map((discount, index) => {
                  const angle = (360 / DISCOUNTS.length) * index;
                  const nextAngle = (360 / DISCOUNTS.length) * (index + 1);
                  
                  const startX = 100 + 90 * Math.cos((angle - 90) * (Math.PI / 180));
                  const startY = 100 + 90 * Math.sin((angle - 90) * (Math.PI / 180));
                  const endX = 100 + 90 * Math.cos((nextAngle - 90) * (Math.PI / 180));
                  const endY = 100 + 90 * Math.sin((nextAngle - 90) * (Math.PI / 180));

                  // Alternating colors
                  const colors = [
                    "hsl(var(--primary))",
                    "hsl(var(--accent))",
                    "hsl(var(--secondary))",
                  ];
                  const color = colors[index % colors.length];

                  return (
                    <g key={index}>
                      <path
                        d={`M 100 100 L ${startX} ${startY} A 90 90 0 0 1 ${endX} ${endY} Z`}
                        fill={color}
                        stroke="hsl(var(--background))"
                        strokeWidth="2"
                      />
                      <text
                        x={100 + 60 * Math.cos(((angle + nextAngle) / 2 - 90) * (Math.PI / 180))}
                        y={100 + 60 * Math.sin(((angle + nextAngle) / 2 - 90) * (Math.PI / 180))}
                        fill="hsl(var(--primary-foreground))"
                        fontSize="14"
                        fontWeight="bold"
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        {discount}%
                      </text>
                    </g>
                  );
                })}

                {/* Center Circle */}
                <circle cx="100" cy="100" r="30" fill="hsl(var(--background))" />
                <circle
                  cx="100"
                  cy="100"
                  r="28"
                  fill="hsl(var(--primary))"
                  className="animate-pulse"
                />
                <text
                  x="100"
                  y="100"
                  fill="hsl(var(--primary-foreground))"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  SPIN
                </text>
              </svg>
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          </div>

          {/* Info Panel */}
          <Card className="p-8 space-y-6 max-w-md">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Gift className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">How It Works</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">1.</span>
                  <span>Click the "Spin the Wheel" button below</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">2.</span>
                  <span>Wait for the wheel to stop spinning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">3.</span>
                  <span>Get your discount code instantly!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">4.</span>
                  <span>Apply it on your next project order</span>
                </li>
              </ul>
            </div>

            {wonDiscount && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border-2 border-primary/50 space-y-3"
              >
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    You Won!
                  </p>
                  <p className="text-4xl font-bold text-primary">
                    {wonDiscount}% OFF
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Use code: <span className="font-mono font-bold">LUCKY{wonDiscount}</span>
                  </p>
                </div>
              </motion.div>
            )}

            <Button
              onClick={spinWheel}
              disabled={isSpinning || hasSpun}
              className="w-full h-14 text-lg font-bold"
              size="lg"
            >
              {isSpinning ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <Sparkles className="h-5 w-5" />
                  </motion.div>
                  Spinning...
                </>
              ) : hasSpun ? (
                "Already Spun!"
              ) : (
                <>
                  <Gift className="mr-2 h-5 w-5" />
                  Spin the Wheel
                </>
              )}
            </Button>

            {hasSpun && (
              <p className="text-xs text-center text-muted-foreground">
                You can only spin once per session. Refresh to try again!
              </p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
