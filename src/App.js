import React from 'react';
import {
  Alert,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import Navibar from './components/NavbarComponent';
import SearchComponent from './components/SearchComponent';

const App = () => {
  return (
    <div>
      <Navibar />
      <SearchComponent />

      {/* <Alert className="mb-3" open={true} theme="success">Success!</Alert> */}

      {/* <Card>
        <CardImg styles={{ width: 200 }} top src="https://place-hold.it/300x200" />
        <CardBody>
          <p>This is the body of the card.</p>
        </CardBody>
      </Card>

      <Card>
        <CardImg top src="https://place-hold.it/300x200" />
        <CardBody>
          <p>This is the body of the card.</p>
        </CardBody>
      </Card> */}
    </div>

  )
}

export default App;