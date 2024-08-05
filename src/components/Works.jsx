import React from 'react';
import styles from '../styles';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectCard=( { index, name, description, tags, image, source_code_link } ) => (
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className='relative w-full h-[230px]'>
                        <img src={ image } alt={ name } className='w-full h-full object-cover rounded-2xl' />
                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                                <div onClick={ () => window.open( source_code_link, "_blank" ) } className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                                        <img src={ github } className='w-1/2 h-1/2 object-contain' />
                                </div>
                        </div>
                </div>
                <div className="mt-5">
                        <h3 className='text-white font-bold text-[24px]'>{ name }</h3>
                        <p className='mt-2 text-secondary text-[14px]'>{ description }</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                        { tags.map( tag => (
                                <p key={ tag.name } className={ `text-[14px] ${ tag.color }` }>
                                        #{ tag.name }
                                </p>
                        ) ) }
                </div>
        </div>
);

const swiperStyles={
        slide: {
                transform: 'scale(0.85)',
                transition: 'transform 0.3s',
        },
        activeSlide: {
                transform: 'scale(1)',
        },
};

const Works=() =>
{
        return (
                <>
                        <motion.div variants={ textVariant() }>
                                <p className={ `${ styles.sectionSubText }` }>My Work</p>
                                <h3 className={ `${ styles.sectionHeadText }` }>Projects</h3>
                        </motion.div>
                        <div>
                                <motion.p variants={ fadeIn( '', '', 0.1, 1 ) } className={ `${ styles.sectionSubText } mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]` }>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eaque quaerat atque sint, dolorum aspernatur nostrum perferendis beatae pariatur. Suscipit dicta nobis saepe.
                                </motion.p>
                        </div>

                        <div className='mt-20'>
                                <Swiper
                                        grabCursor={ true }
                                        centeredSlides={ true }
                                        slidesPerView={ 3 }
                                        loop={ true }
                                        loopedSlides={ 2 }  // Ensures smooth looping
                                        spaceBetween={ 30 }  // Adds space between slides
                                        pagination={ true }
                                        navigation={ true }
                                        modules={ [ Pagination, Navigation ] }
                                        className="mySwiper"
                                        slideToClickedSlide={ true }
                                >
                                        { projects.map( ( project, index ) => (
                                                <SwiperSlide key={ `project-${ index }` }>
                                                        <div className="swiper-slide-content" style={ swiperStyles.slide }>
                                                                <ProjectCard index={ index } { ...project } />
                                                        </div>
                                                </SwiperSlide>
                                        ) ) }
                                </Swiper>
                        </div>
                </>
        );
};

export default SectionWrapper( Works, 'projects' );
