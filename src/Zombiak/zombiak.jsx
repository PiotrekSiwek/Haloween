import Spritesheet from 'react-responsive-spritesheet'
import picture from './walkingdead.png'
import './zombiak.scss';

const Zombiak = () => {
    return (
        <Spritesheet
            image={picture}
            widthFrame={200}
            heightFrame={312}
            steps={9}
            classname={'zombiak'}
            backgroundSize={"cover"}
            fps={12}
            autoplay
            loop
            scale={10}
        />
    )
}

export default Zombiak