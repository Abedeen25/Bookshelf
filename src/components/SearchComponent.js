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

    const [ButtonNo, setButtonNo] = useState(false)

    const toggle = () => {
        setButtonNo(!ButtonNo);
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
                        <Button
                            type='submit'
                            onClick={() => {
                                props.start(0)
                            }}
                        >Search</Button>
                    </InputGroupAddon>

                </InputGroup>
                <ButtonGroup className="Sorting-row">
                    <Button outline disabled>Sort By</Button>
                    <Button
                        disabled={ButtonNo}
                        type='submit'
                        onClick={() => {
                            props.start(0)
                            props.sorter('newest')
                            toggle()
                        }}
                    >Latest</Button>
                    <Button
                        disabled={!ButtonNo}
                        type='submit'
                        onClick={() => {
                            props.start(0)
                            props.sorter('relevance')
                            toggle()
                        }}
                    >Most Relevant</Button>
                </ButtonGroup>
            </form>



        </div>
    );
}