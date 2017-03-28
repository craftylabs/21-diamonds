import React from 'react';
import {Link} from 'react-router-dom';
import Header from './header';

function Instructions() {
	return (
		<div>
		<Header />
		<ul>
		<li> do this and win </li>
		<li> do that and lose </li>
		</ul>

            <button>
                <Link to={'/app'}>
                Back
                </Link>
            </button>	

		</div>
		)
}

export default Instructions;