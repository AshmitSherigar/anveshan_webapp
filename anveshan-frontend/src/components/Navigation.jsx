import React from 'react'

const Navigation = () => {
    return (
        <>
            <div className="h-[10vh] bg-blue-500 flex justify-between items-center">
                <h1>Anveshan</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum minus</p>
                <div className='flex justify-center items-center gap-[1.5vw]'>
                    <div>Home</div>
                    <div>Let's Talk</div>
                    <div>Menu</div>
                </div>
            </div>
        </>
    )
}

export default Navigation