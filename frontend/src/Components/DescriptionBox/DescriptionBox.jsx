import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
            </div>
            <div className='descriptionbox-description'>
                <p>
                    This full-zip bomber jacket is a versatile and stylish addition to any wardrobe, offering a comfortable fit and classic design that pairs well
                    with both casual and semi-formal outfits. While the jacket is lightweight and perfect for spring and fall, it might not provide enough warmth for
                    colder winter months. I'm typically size M but a L fits me better for this product, so it does run small.</p>
            </div>
        </div>
    )
}

export default DescriptionBox