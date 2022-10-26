import React from 'react'

const Blog = () => {
  return (
    <div >
      
      <div className='grid md:grid-cols-2 gap-5 mt-10 px-10'>
        <div className='border-2 border-orange-600 p-4 rounded-md mb-3'>
          <h2 className='text-4xl mb-5'>What is cors?</h2>
          <p className=' leading-8'>Cors stands for 'Cross-Origin Resource'.It is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
        </div>
        <div className='border-2 border-orange-600 p-4 rounded-md mb-3'>
          <h2 className='text-4xl mb-5'>Why are you using firebase? What other options do you have to implement authentication?</h2>
          <p className=' leading-8'>We Are using firebase to implement user authentication. Using firebase we can easily build user authentication without creating our own backend. 
          <br />
          We some othe populer options to implement authentication like Auth0, Octa, MongoDB, KeyLock.
          </p>
        </div>
        <div className='border-2 border-orange-600 p-4 rounded-md mb-3'>
          <h2 className='text-4xl mb-5'>How does the private route work?</h2>
          <p className=' leading-8'>
            Private route is protective route.Not every user can visit private route. Developer implements this program that who can visit to private route and who is not alowed.
          </p>
        </div>
        <div className='border-2 border-orange-600 p-4 rounded-md mb-3'>
          <h2 className='text-4xl mb-5'>What is Node? How does Node work?</h2>
          <p className=' leading-8'>
            Node js is the runtime of javascript.It offers an environment to write javascript in the backEnd. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads.
          </p>
        </div>

        </div>
    </div>
  )
}

export default Blog