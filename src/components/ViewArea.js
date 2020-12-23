import React from 'react';
import { Card, CardBody, CardImg } from "shards-react";

const ViewArea = (props) => {
    return (
        <div>
            <Card style={{ maxWidth: "300px" }}>
                <CardImg top src="https://place-hold.it/300x200" />
                <CardBody>
                    <p>This is the body of the card. bla bla jijjjjjjjjjjjjjjjjdssssssssssssssssssssssss</p>
                </CardBody>
            </Card>

            <Card style={{ maxWidth: "300px" }}>
                <CardImg top src="https://place-hold.it/300x200" />
                <CardBody>
                    <p>This is the body of the card. bla bla jijjjjjjjjjjjjjjjjdssssssssssssssssssssssss</p>
                </CardBody>
            </Card>
        </div>
    )
}

export default ViewArea;
