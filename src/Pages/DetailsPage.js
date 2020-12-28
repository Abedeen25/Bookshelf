import React from 'react';

import { Link } from 'react-router-dom';

import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter
} from "shards-react";

export default function DetailsPage(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <Card style={{ minWidth: '400px', maxWidth: '400px', margin: '2em', alignSelf: 'center' }}>
                {(props.info.imageLinks === undefined) ?
                    <CardImg
                        top
                        src="https://picsum.photos/450/650"
                        style={{ width: 400, height: 650 }}
                    /> : <CardImg
                        top
                        src={props.info.imageLinks.thumbnail}
                        style={{ width: 400, height: 650 }}
                    />}

                <CardBody>

                    <CardTitle>{props.info.title}</CardTitle>

                </CardBody>
                <CardFooter className='back'>
                    <Link to='/'>{'< Go back to home'}</Link>
                </CardFooter>
            </Card>

            <Card style={{ maxWidth: '750px', margin: '2em 2em 2em 0', width: 'auto', justifySelf: 'center', alignSelf: 'center', }}>
                <CardHeader>Book Details</CardHeader>
                <CardBody>

                    {(props.info.authors !== undefined) ?
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                            <h6>Authors: </h6>
                            {props.info.authors.map((author, i) => {
                                return (<p key={i}>{', ' + author} </p>)
                            })}

                        </div> : ''}

                    {(props.info.publisher !== undefined) ?
                        <div style={{ display: 'flex' }}>
                            <h6>Publisher </h6> <p>: {props.info.publisher}</p>
                        </div> : ''}

                    {(props.info.publishedDate !== undefined) ?
                        <div style={{ display: 'flex' }}>
                            <h6>Publishing Date: </h6> <p>: {props.info.publishedDate}</p>
                        </div> : ''}


                    <div style={{ display: 'flex' }}>
                        <h6>Details </h6>
                        <p>: {props.info.description}</p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}