import React, {useState, useEffect} from "react";
import chatbot from '../../assets/chat-bot.png';

import './styles.css';

import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../../common/AnimatedText";

const Avatar = props => {
    // const [hovered, setHovered] = useState(false)

    const [isTextAnimationStart, setIsTextAnimationStart] = useState(false);
    // const sectionInfoHeadingCtrl = useAnimationControls();
    const sectionAppCtrl = useAnimationControls();
    const imageCtrl = useAnimationControls();

    const animationSequence = async () => {
        await imageCtrl.start({ opacity: 1, scale: 1 }) 
        .then(setIsTextAnimationStart(true));
        return;
    };

    const animationProps = {
        initial: { opacity: 0, scale: 0 },
        transition: {
        duration: 1,
        },
    };

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
        animationSequence();
        }
    }, [inView]);

    return (
        <div ref={ref}
            className="avatar-area"
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
            onClick={() => props.onClick && props.onClick()}
        >
            <div className='transition-3 '>
                <p className='avatar-text'>
                    <AnimatedText isTextAnimationStart={isTextAnimationStart}>
                        Hey, I am minibot, your AI assistant. Click here to place an order
                    </AnimatedText>
                </p>
                
            </div>

            <div className="avatar">   
                <motion.img animate={imageCtrl} {...animationProps} src={chatbot} style={{width:"80%"}} alt="chatbot"/>
            </div>
        </div>
    )
}

export default Avatar;