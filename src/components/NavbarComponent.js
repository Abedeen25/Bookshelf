import React from 'react';
import { FaSearch } from "react-icons/fa";
import {
    Navbar,
    NavbarBrand,
    Nav,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from "shards-react";

const Navibar = () => {
    return (
        <Navbar type="dark" theme="primary" expand="md">
            <NavbarBrand href="#">THE BOOKSHELF</NavbarBrand>

            {/* <Collapse open={false} navbar>
                <Nav navbar>

                </Nav>

                <Nav navbar className="ml-auto">
                    <InputGroup size="sm" seamless>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FaSearch />
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput className="border-0" placeholder="Search..." />
                    </InputGroup>
                </Nav>
            </Collapse> */}
        </Navbar>
    )
}

export default Navibar;