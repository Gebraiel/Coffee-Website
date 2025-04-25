"use client"
import {motion} from "motion/react"
export default function MotionComponent({as:Tag="div",props,classname,children}) {
    const MotionTag = motion(Tag);

    return (
        <MotionTag {...props} className={classname}>
            {children}
        </MotionTag>
    );

}
