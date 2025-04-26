import Image from 'next/image'
import React from 'react'
import starFill from "@/public/Star_fill.svg"
import star from "@/public/Star.svg"
import {motion} from "motion/react";
export default function Product({product}) {
  return (
    <motion.div initial={{x:"-50px",opacity:0}} animate={{x:0,opacity:1}}>
        <div className='relative w-full aspect-video rounded-xl'>
            <Image src={product.image} alt="Product-Image" fill className={`object-cover rounded-xl object-center ${!product.available && 'grayscale'}`}/>
            {product.popular && <span className='absolute left-5 top-5 text-[#302522] font-bold py-1 px-3 rounded-full bg-[#F6C768] '>Popular</span>}
        </div>
        <div className='mt-5'>
            <div className='flex justify-between items-center mb-3'>
            <b className='text-white'>{product.name}</b>
            <span className='bg-[#BEE3CC] text-[#111315] font-bold py-1 px-2 text-xs rounded-md'>{product.price}</span>
            </div>
            <div className='flex justify-between'>
                {product.rating>0?<div className='flex'><Image src={starFill} alt="star icon filled"/><p className='text-white'>{product.rating} <span className='text-[#6F757C]'>({product.votes} Vote)</span></p></div> : <p className='flex text-[#6F757C]'><Image src={star} alt="star icon"/> No rating</p>}
                {!product.available && <span className='text-[#ED735D]'>Sold Out</span>}
            </div>
                
        </div>
    </motion.div>
  )
}
