import React from 'react';
import {Popover} from 'react-bootstrap';

const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Options</Popover.Title>
        <Popover.Content>
            Here would be options to edit, settings, infomration, etc.
        </Popover.Content>
    </Popover>
);

export default popover;