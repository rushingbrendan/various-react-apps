import React, { useState } from "react";
import styled from "styled-components";
import { ReactSortable } from "../../src/index";
import { Item, threes } from "../util";

export default function SharedList() {
    const [list1, setList1] = useState(threes);
    const [list2, setList2] = useState(threes);
    return (
        <Container>
            <ReactSortable
                list={list1}
                setList={setList1}
                animation={150}
                group="shared-group-name"
            >
                {list1.map(item => (
                    <Item key={item.id}>{item.name}</Item>
                ))}
            </ReactSortable>
            <ReactSortable
                list={list2}
                setList={setList2}
                animation={150}
                group="shared-group-name"
            >
                {list2.map(item => (
                    <Item key={item.id}>{item.name}</Item>
                ))}
            </ReactSortable>
        </Container>
    );
}

/** Wraps internal components for styling. */
const Container = styled.div`
  display: flex;
  width: inherit;
  & > * {
    width: 100%;
    margin-left: 0.3rem;
    :first-child() {
      margin-left: 0rem;
    }
  }
`;