import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import styles from '../styles';

const Tech=() =>
{
        return (
                <div className='flex flex-row flex-wrap justify-center gap-10'>
                        <h3 className={ `${ styles.heroSubText } w-full text-center` }>Tech Stack</h3>
                        { technologies.map( ( technology ) => (
                                <div className="w-28 h-28" key={ technology.name }>
                                        <BallCanvas icon={ technology.icon } />
                                </div>
                        ) ) }
                </div>
        );
};

export default SectionWrapper( Tech, 'tech' );
