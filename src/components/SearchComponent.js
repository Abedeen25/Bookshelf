import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import {
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    FormInput,
    Button,
    ButtonGroup
} from "shards-react";
import './SearchComponent.css'

export default function SearchComponent(props) {

    const [DrawerOpen, setDrawerOpen] = useState(false)

    const toggle = () => {
        setDrawerOpen(!DrawerOpen);
    }


    return (
        <div className="search-holder">
            <form action="" onSubmit={props.handleSubmit}>
                <InputGroup seamless>
                    <InputGroupAddon type="prepend">
                        <InputGroupText>
                            <FaSearch />
                        </InputGroupText>
                    </InputGroupAddon>

                    <FormInput placeholder="Search" type="text" onChange={props.handleChange} />

                </InputGroup>
            </form>

            <ButtonGroup>
                <Button outline disabled>Sort By</Button>
                <Button>Latest</Button>
                <Button>Oldest</Button>
                <Button>Relevance</Button>
            </ButtonGroup>

        </div>
    );
}