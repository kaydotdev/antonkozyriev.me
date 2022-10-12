import { motion } from "framer-motion";
import "../styles/widget.css";

const animation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (maxLength: number) => {
    return {
      pathLength: maxLength,
      opacity: 1,
      transition: {
        pathLength: { delay: 0, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: 0, duration: 0.01 },
      },
    };
  },
};

interface RadialProgressProps {
  size: number;
  width: number;
  color: string;
  pathLength: number;
  children: React.ReactNode
}

function RadialProgress(props: RadialProgressProps) {
  const { size, width, color, pathLength, children } = props;
  const center = size / 2.0;
  const r = center - width;

  return (
    <div className="radial">
      <div>{children}</div>

      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        initial="hidden"
        animate="visible"
      >
        <circle
          cx={center}
          cy={center}
          r={r}
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth={width}
        />
        <motion.circle
          cx={center}
          cy={center}
          r={r}
          stroke={color}
          strokeWidth={width}
          variants={animation}
          custom={pathLength}
        />
      </motion.svg>
    </div>
  );
}

export default RadialProgress;
