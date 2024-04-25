import './slider.scss'
import {useState} from "react";

const Slider = ({images}) => {
    const [imageIndex, setImageIndex] = useState(null)

    const changeSlide = (direction) => {
        if (direction === 'left') {
            setImageIndex(prev => {
                if (prev <= 0) {
                    return images.length - 1
                }
                return prev - 1
            })
        } else if (direction === 'right') {
            setImageIndex(prev => {
                if (prev === images.length - 1) {
                    return 0
                }
                return prev + 1
            })
        }
    }

    return (
        <div className={'slider'}>
            {
                imageIndex !== null && (
                    <div className={'fullSlider'}>
                        <div className={'arrow'}>
                            <img src={'/arrow.png'} alt={'previous'} onClick={() => changeSlide('left')}/>
                        </div>
                        <div className={'imgContainer'}>
                            <img src={images[imageIndex]}/>
                        </div>
                        <div className={'arrow'}>
                            <img src={'/arrow.png'} alt={'next'} className={'rightArrow'}  onClick={() => changeSlide('right')}/>
                        </div>
                        <div className={'close'} onClick={() => setImageIndex(null)}>X</div>
                    </div>
                )
            }
            <div className={'bigImage'}>
                <img src={images[0]} alt={'listing image'} onClick={() => setImageIndex(0)}/>
            </div>
            <div className={'smallImages'}>
                {
                    images.slice(1).map((img, idx) => (
                        <img key={`image-${idx}`} src={img} alt={`image-${idx}`} onClick={() => setImageIndex(idx + 1)}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider
