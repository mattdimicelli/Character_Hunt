import { ImArrowRight, ImArrowLeft } from 'react-icons/im';

const OverlayElement = (props, contentElement) => {
    return (
        <div {...props}>
            {contentElement}
            <div style={{
                display: 'flex',
                alignItems:'center', 
                color: 'white',
                flexDirection: 'column',
            }}>
                <h1>Character <span style={{color: '#9f0715'}}>Hunt</span></h1>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                    <button style={{all: 'unset', display: 'flex', alignItems: 'center'}}>
                        <ImArrowLeft />
                    </button>
                    <span>Choose Map</span>
                    <button style={{all: 'unset', display: 'flex', alignItems: 'center'}}>
                        <ImArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default OverlayElement;