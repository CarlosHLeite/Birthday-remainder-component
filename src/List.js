import React from 'react';
import styled from 'styled-components';

function List({people}) {
  return (
    <>
        {people.map(person => {
            const { id, name, age, image } = person;
            return (
                <Article key={id}>
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                </Article>
            )
        })}
    </>
  )
}

const Article = styled.article`

    display: flex;
    align-items: center;
    margin: 22px 0px;

    h4 {
        font-size: 16px;
        font-weight: 600;
    }

    p {
        font-size: 14px;
        font-weight: 500;
        color: #585858
    }

    img {
        width: 75px;
        height: 75px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 10px;
    }
`

export default List