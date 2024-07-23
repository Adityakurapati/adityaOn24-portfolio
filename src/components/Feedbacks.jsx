import { SectionWrapper } from "../hoc"
import styles from "../styles"
import { testimonials } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { motion } from 'framer-motion'
const Feedbacks=() =>
{
        return (
                <div className="mt-12 bg-black-100 rounded-[20px]">
                        <div className="bg-tertiery rounded-2xl min-h-[300px]">
                                <motion.div variants={ textVariant() } >
                                        <p className={ styles.sectionSubText }>What Others Say</p>
                                        <h2 className={ styles.sectionHeadText }>Testimonials</h2>
                                </motion.div>
                        </div>
                </div>
        )
}

export default SectionWrapper( Feedbacks, 'testmonials' )