import React from 'react'

const Input = () => {
    return (
        <div className='input'>
            <input type="text" placeholder='Type something...' />
            <div className="send">
                <img src="../img/attach.png" alt="attach" />
                <input type="file" id="file" />
                <label htmlFor="file">
                    <img src="../img/img.png" alt="img" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input