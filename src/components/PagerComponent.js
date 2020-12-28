import React, { useState } from 'react'

import { Button, ButtonGroup } from "shards-react";
import './PagerComponent.css'

export default function PagerComponent(props) {

    return (
        <div className="pager-bar">
            <form action="" onSubmit={props.handleSubmit}>
                <ButtonGroup>

                    {(props.firstItem <= 0) ? <Button
                        theme="light"
                        style={{ width: '150px' }}
                        type='submit'
                        disabled
                    >{'< Previous'}</Button> : <Button
                        theme="light"
                        style={{ width: '150px' }}
                        type='submit'
                        onClick={() => {
                            props.firstItemSetter(props.firstItem - 30)
                        }}
                    >{'< Previous'}</Button>
                    }


                    {props.pages.map((page, i) => {
                        if (props.firstItem == page) {
                            return (<Button key={i}>{i + 1}</Button>)
                        } else {
                            return (<Button
                                theme="light"
                                type='submit'
                                key={i}
                                onClick={() => {
                                    props.firstItemSetter(page)
                                }}
                            >{i + 1}</Button>)
                        }

                    })}


                    {(props.firstItem >= (props.resultsCount - 30)) ? <Button
                        theme="light"
                        style={{ width: '150px' }}
                        type='submit'
                        disabled
                    >{'Next >'}</Button> : <Button
                        theme="light"
                        style={{ width: '150px' }}
                        type='submit'
                        onClick={() => {
                            props.firstItemSetter(props.firstItem + 30)
                        }}
                    >{'Next >'}</Button>
                    }

                </ButtonGroup>
            </form>
        </div>
    );
}