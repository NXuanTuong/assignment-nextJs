import AdminLayout from '@/components/Layout/admin'
import React from 'react'

type Props = {}

const Admin = (props: Props) => {
  return (
    <div>
        <h1 className="text-indigo-500 font-bold text-5xl text-center">
        Xin chào admin !
      </h1>
    </div>
  )
}
Admin.Layout = AdminLayout;

export default Admin