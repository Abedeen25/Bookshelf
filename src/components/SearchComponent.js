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
            <form className="form-body" action="" onSubmit={props.handleSubmit}>
                <InputGroup seamless className="input-bar">
                    <InputGroupAddon type="prepend">
                        <InputGroupText>
                            <FaSearch />
                        </InputGroupText>
                    </InputGroupAddon>

                    <FormInput placeholder="Search" type="text" onChange={props.handleChange} />
                    <InputGroupAddon type="append">
                        <Button type='submit'>Search</Button>
                    </InputGroupAddon>

                </InputGroup>
                <ButtonGroup className="Sorting-row">
                    <Button outline disabled>Sort By</Button>
                    <Button
                        type='submit'
                        onClick={() => {
                            props.sorter('newest')
                        }}
                    >Latest</Button>
                    <Button
                        type='submit'
                        onClick={() => {
                            props.sorter('relevance')
                        }}
                    >Most Relevant</Button>
                </ButtonGroup>
            </form>



        </div>
    );
}