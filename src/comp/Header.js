import React from 'react'

export default function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={()=> props.handaleshow(false)} style={{cursor:"pointer"}}>Shoping cart app</div>
            <div onClick={()=> props.handaleshow(true)} style={{cursor:"pointer"}}>cart
                <sup>{props.count}</sup>
            </div>
        </div>
    )
}
