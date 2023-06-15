import React from 'react'
import { Children } from 'react'

const BlogLayout = ({children}) => {
  return (
    <div>
        <h1>This is blog</h1>
        {children}
    </div>
  )
}

export default BlogLayout