import React from 'react'
import { headers } from "next/headers";
import { redirect } from 'next/navigation';
  
const page = async ({ params }) => {
  const { blog } = await params;
  const headersList = headers();
      const host = headersList.get("host");
      const protocol = "http";
      const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/add/${blog}`, {
    cache: "no-store"
  });
  if (!res.ok) {
    if(res.status == 404){
      redirect("/notfound")
    }
    throw new Error(`Failed to fetch blog: ${res.statusText}`);
  }

  const data = await res.json();

  return (
    <div className='bg-amber-100 h-fit min-h-screen'>
      <div className="page w-[50vw] bg-white m-auto h-fit min-h-screen border border-solid rounded-xl shadow-2xl">
        <div className='flex justify-center m-2'><h1 className='text-2xl font-bold '>{data.title}</h1></div>
        <div className='w-[90%] m-auto p-4' dangerouslySetInnerHTML={{ __html: data.html }} />
      </div>
    </div>
  )
}

export default page
