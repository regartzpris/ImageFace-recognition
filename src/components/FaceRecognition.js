import  React from 'react';

import '../css/facerecognition.css'


const FaceRecognition=({ imageUrl,box})=>{
    return(
        <div className='container'>
            <div className='absolute mt2'>
                <img id='inputurl' alt='' src={imageUrl}
                widith='500px' height='auto' />

                <div className='bounding-box' style={{top:box.topRow,right:box.rightCol,bootom:box.bottomRow,left:box.leftCol}}>

                    </div>
                    

            </div>


            </div>


    )
}


export default FaceRecognition;