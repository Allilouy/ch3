import React from 'react';
import ListItem from './listitem.js';
import Logo from './logo.svg'
function List() {
    return(
    <div>
    <ol>
<li>
    number one
</li>
<ListItem />
<li>
    number Two
</li>
<ListItem />
<li>
    number three
</li>
<ListItem />
    </ol>
    </div>
)};

export default List