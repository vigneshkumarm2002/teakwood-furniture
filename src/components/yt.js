import React from 'react'

const YT = () => {

    const links=["https://youtube.com/embed/FiNEb5ZrLOU?si=_omOgZs7O5bNDnia","https://youtube.com/embed/x-2LsMUg-lM?si=Co3YGAjLojLojYuA","https://youtube.com/embed/QA6Oz5JiLN8?si=VOGJiyJm-VxWhX20","https://www.youtube.com/embed/t_Y-19h82r0?si=D231LmhbCdS-rAde","https://youtube.com/embed/XQnk_S0EnAw?si=N_WpM8fudkjkossk","https://youtube.com/embed/QzBZkJG3kJE?si=Phpqa_WZid3M9o4H","https://youtube.com/embed/K0bmZgaKK0Y?si=TweDVwu8aemoRsj_"]
  return (
    <div className="bg-gray-200">
      <div className="mx-auto   max-w-7xl py-20 lg:px-8 px-6 mt-8  ">
        <h1 className='text-2xl text-[#0E6B66] font-semibold text-left pb-8'>Watch our videos</h1>
<div className='flex flex-row overflow-x-auto gap-4 no-scroll'>
    {links?.map((item, index)=>{
        return  <iframe width="400"  height="250" src={item} title="youtubebe video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    })}
 </div>


 </div>
 </div>
  )
}

export default YT