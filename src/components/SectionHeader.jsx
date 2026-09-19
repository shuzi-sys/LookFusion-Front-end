import { useScroll, useTransform, motion} from "framer-motion";
import { useRef } from "react";

export default function SectionHeader({children}){
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start 60%", "start 20%"],
    });


  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scale = useTransform(scrollYProgress, [0,1], [0.1,1]);

    return(
        <div ref={ref}>
        <motion.h2
        className="SectionHeader"
        style={{opacity, y, scale}}
        >
        {children}
        </motion.h2>
        </div>
    );
}