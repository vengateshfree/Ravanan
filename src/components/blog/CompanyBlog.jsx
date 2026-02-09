import React from 'react';
import parcel10 from '../../assets/parcel10.jpg'
import parcel21 from '../../assets/parcel25.jpg'
import parcel11 from '../../assets/parcel11.png'


export default function CompanyBlog() {
  const blogPosts = [
    {
      id: 1,
      date: '24',
      month: 'SEP',
      image: parcel10,
      title: 'The advantages of a digital supply strategy',
      author: 'ADMIN',
      comments: 13
    },
    {
      id: 2,
      date: '21',
      month: 'SEP',
      image: parcel21,
      title: 'How will you know success when it show up?',
      author: 'ADMIN',
      comments: 8
    },
    {
      id: 3,
      date: '17',
      month: 'SEP',
      image: parcel11,
      title: 'We carefully handle the valueable goods',
      author: 'ADMIN',
      comments: 1
    }
  ];

  return (
    <div className="bg-black text-white mt-10 ">
         <div
                    className="relative bg-cover bg-center h-[450px] flex items-center"
                    style={{
                      backgroundImage: `url(${parcel10})`,
                    }}
                  >
                    {/* Overlay with diagonal split */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-yellow-200/20"></div>
                    
                     {/* Yellow accent bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-200"></div> 
            
                    {/* Content */}
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <div className="border-l-8 border-yellow-200 pl-6">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
                          BLOG  <span className="text-yellow-200">& POST</span>
                        </h1>
                        <p className="text-xl text-white/90 font-light">Ready to move? We're ready to help.</p>
                      </div>
                    </div>
                  </div>
            
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header */}

         
       <div className="text-center mb-16 mt-20">
      <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-semibold mb-4">
      Our Journey
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white mt-4">
       Our Journey, Moving Your <span className="text-yellow-400"> Dreams</span> 
      </h1>
    </div>
     
      
        {/* Blog Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
  {blogPosts.map((post) => (
    <div 
      key={post.id}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden rounded-2xl mb-4">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-white">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {post.date} {post.month}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            {post.comments}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Author */}
        <p className="text-sm font-medium text-white">By {post.author}</p>

        {/* Read More Link */}
        <div className="flex items-center text-yellow-500 font-semibold text-sm group-hover:gap-2 transition-all">
          Read More
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>

      {/* Floating Badge */}
      <div className="fixed bottom-8 right-8 bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors cursor-pointer">
        <span className="text-sm font-bold">12%</span>
      </div>

      <div className='h-2 bg-amber-200 w-screen mt-20' >

      </div>
    </div>
  );
}