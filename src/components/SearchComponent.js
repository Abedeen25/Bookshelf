import React from 'react';
import { FaSearch } from "react-icons/fa";
import {
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    FormInput,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu
} from "shards-react";
import './SearchComponent.css'

export default function SearchComponent() {
    return (
        <div className="search-holder">
            <form action="" onSubmit="">
                <InputGroup seamless>
                    <InputGroupAddon type="prepend">
                        <InputGroupText>
                            <FaSearch />
                        </InputGroupText>
                    </InputGroupAddon>

                    <FormInput placeholder="Search " type="text" onChange="" />

                    <Dropdown
                        addonType="append"
                        open={false}
                        toggle={true}
                    >
                        <DropdownToggle caret>Sort By </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Release Date</DropdownItem>
                            <DropdownItem>Most Relevant</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>


                </InputGroup>
            </form>

        </div>
    );
}