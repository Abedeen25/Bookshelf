import React, { useState } from 'react';
import { Card, CardBody, CardImg, Tooltip } from "shards-react";
import './BookCardS.css'

const BookCard = (props) => {

    const [open, setopen] = useState(false)

    const Toggle = () => {
        setopen(!open);
    }

    return (
        <div className='cardArea'>
            <Card style={{ maxWidth: "250px" }}>
                {(props.info.imageLinks == undefined) ?
                    <CardImg
                        top
                        src="https://picsum.photos/250/350"
                        style={{ width: 250, height: 350 }}
                    /> : <CardImg
                        top
                        src={props.info.imageLinks.smallThumbnail}
                        style={{ width: 250, height: 350 }}
                    />}
                <CardBody>
                    <div className='Ellipsis'>
                        <h5>{props.info.title}</h5>
                    </div>
                </CardBody>
            </Card>

        </div>
    )
}

export default BookCard;