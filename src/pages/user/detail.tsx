/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
import Layout from '@/components/Layout'
import useUser from '@/hooks/use-users';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

type Props = {}

const Detail = (props: Props) => {
  const [user, setUser] = useState<any>()
  const router = useRouter()
  const { data, error, readUser } = useUser();
  const userLs = JSON.parse(localStorage.getItem('user') as string)
  useEffect(() => {
    readUser(userLs.user._id).then((res: any) => setUser(res));
  },[])
  
  
  
  
  
  return (
    <div className="bg-gray-100 max-w-screen-xl  mx-auto">
      <div className="w-full text-white bg-main-color">
          <div x-data="{ open: false }"
              className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="p-4 flex flex-row items-center justify-between">
                  <a href="#"
                      className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none text-black focus:shadow-outline">example
                      profile</a>
                  <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" >
                      <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                          <path x-show="!open" fill-rule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                              clip-rule="evenodd"></path>
                          <path x-show="open" fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                      </svg>
                  </button>
              </div>
              <nav 
                  className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                  <div  className="relative" x-data="{ open: false }">
                      
                      
                  </div>
              </nav>
          </div>
      </div>

      <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
              <div className="w-full md:w-3/12 md:mx-2">
                  <div className="bg-white p-3 border-t-4 border-green-400">
                      <div className="image overflow-hidden">
                         <img src="https://res.cloudinary.com/tancd/image/upload/v1649233057/vwomeluggkpiw3jk7rrn.jpg" alt="" />
                      </div>
                      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user?.name}</h1>
                      <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                      <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                          consectetur adipisicing elit.
                          Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                      
                  </div>
                  <div className="my-4"></div>
                  
              </div>
              <div className="w-full md:w-9/12 mx-2 h-64">
                  <div className="bg-white p-3 shadow-sm rounded-sm">
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                          <span className="text-green-500">
                              <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                          </span>
                          <span className="tracking-wide">About</span>
                      </div>
                      <div className="text-gray-700">
                          <div className="grid md:grid-cols-1 text-sm">
                              <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">Name</div>
                                  <div className="px-4 py-2">{user?.name}</div>
                              </div>
                              
                              
                              <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">Address</div>
                                  <div className="px-4 py-2">{user?.address}</div>
                              </div>
                              
                              <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">Email.</div>
                                  <div className="px-4 py-2">
                                      <a className="text-blue-800" href="mailto:jane@example.com">{user?.email}</a>
                                  </div>
                              </div>
                              <div className="grid grid-cols-2">
                                  <div className="px-4 py-2 font-semibold">Phone</div>
                                  <div className="px-4 py-2">{user?.phone}</div>
                              </div>
                          </div>
                      </div>
                      
                  </div>

                  <div className="my-4"></div>

                  
              </div>
          </div>
      </div>
    </div>
  )
}
Detail.Layout = Layout
export default Detail