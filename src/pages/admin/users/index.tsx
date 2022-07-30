import AdminLayout from '@/components/Layout/admin'
import useUser from '@/hooks/use-users'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

type Props = {}

const ListUser = (props: Props) => {
    const {data,error,updateRoleUser,updateStatusUser} = useUser()
    if(!data) return <div>Loading ....</div>
    if(error) return <div>Fail</div>
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <h2 className="text-4xl font-bold text-center text-indigo-500">
              Danh Sách User
            </h2>
            <Link href="/admin/users/add">
              <button className="flex items-center bg-yellow-500 p-2 rounded-full float-right mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  viewBox="0 0 448 512"
                >
                  <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                </svg>
                <h1 className="ml-3">Thêm User</h1>
              </button>
            </Link>
            <div className="bg-white shadow-md rounded my-6 float-left">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">STT</th>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-center">Email</th>
                    <th className="py-3 px-6 text-center">Address</th>
                    <th className="py-3 px-6 text-center">Phone</th>
                    <th className="py-3 px-6 text-center">Role</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {data.map((item: any, index: any) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{index + 1}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{item.email}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{item.address}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{item.phone}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <button
                        
                        onClick={()=> updateRoleUser(item._id,item.role == "0"? item.role = 1: item.role = 0).then(()=>{
                            toast.success("Cập nhật thành công")
                        })
                        .catch((error)=>{
                            toast.error(error.response.data.message)
                        })
                        }
                          className={`text-white font-bold py-1 px-3 rounded-full text-xs ${
                            item.role == "0" ? "bg-red-500" : "bg-green-500"
                          }`}
                        >
                          {item.role == "0" ? "Khách Hàng" : "Admin"}
                        </button>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <button
                        onClick={()=> updateStatusUser(item._id,item.status == "0"? item.status = 1: item.status = 0).then(()=>{
                            toast.success("Cập nhật thành công")
                        })
                        .catch((error)=>{
                            toast.error(error.response.data.message)
                        })
                        }
                          className={`text-white font-bold py-1 px-3 rounded-full text-xs ${
                            item.status == "0" ? "bg-green-500" : "bg-red-500"
                          }`}
                        >
                          {item.status == "0" ? "Kích Hoạt" : "Chưa kích Hoạt"}
                        </button>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <Link href={`/admin/user/edit/${item._id}`}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
ListUser.Layout = AdminLayout
export default ListUser