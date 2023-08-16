import React from 'react'
import { FaStar } from 'react-icons/fa'
import { reviews } from '../utils/data.js'
import styled from 'styled-components'

export const Wrapper = styled.div`
     margin-bottom: 20px;
     background-color: white;
     padding: 1rem;
     border-radius: 6px;
     -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
`

const ReviewsComponent = () => {
    return (
        <div>
            {reviews.map((review, index) => (
                <Wrapper key={index}>
                    <h3>{review.name}</h3>
                    <div  className='stars'>
                        {[...Array(5)].map((_, starIndex) => (
                            <FaStar key={starIndex} size={20} />
                        ))}
                    </div>
                    <div style={{ marginTop: '10px', overflow: 'auto', fontWeight: '200px' }}>
                        {review.text}
                    </div>
                </Wrapper>
            ))}
        </div>
    )
}

export default ReviewsComponent
