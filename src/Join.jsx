import React from 'react'

const Join = ({ fun }) => {
    return (
        <>
        <div className=''>
            <h1>Join Your Quiz</h1>
            <button  style={{
              width: '50%',
              padding: '15px 20px',
              paddingLeft: '38px',
              textAlign: 'center',
              marginLeft: '62px'
            }} onClick={fun}>Join</button>
        </div>
            </>
    )
}

export default Join