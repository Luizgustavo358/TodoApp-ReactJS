import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

export default props => (
    <div className="container">
        <Todo />
        <About />
    </div>
)