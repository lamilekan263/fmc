import React from 'react'
import Spinner from './spinner.gif'

const SpinnerComponent = () => {
    return (
        <div className="flex justify-center items-center">
            <img src={Spinner} alt="a spinner loading" />
        </div>
    )
}

export default SpinnerComponent
