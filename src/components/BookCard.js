import React, { useState } from 'react';
import { Card, CardBody, CardImg, CardFooter } from "shards-react";
import { Link } from 'react-router-dom'
import './BookCard.css'

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
                        <Link
                            to='/book_details'
                            onClick={() => {
                                props.bookSetter(props.info)
                                console.log(props.info)
                            }}
                        >See Details</Link>
                    </div>
                </CardBody>
            </Card>

        </div>
    )
}

export default BookCard;