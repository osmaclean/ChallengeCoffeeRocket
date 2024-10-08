'use client'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartContext } from '@/context/CartContext'
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const { cartItems } = useContext(CartContext)
  const totalPrice = cartItems.reduce((total, item) => total + item.qty, 0)

  return (
    <header className="bg-base-50 w-full items-center flex justify-between px-20 py-8">
      <Link href={'/'}>
        <Image
          alt="Logo Coffee Icon"
          src={'/logo.png'}
          height={340}
          width={160}
          className="w-20"
        />
      </Link>
      <div className="flex items-center justify-center gap-3">
        <span className="flex items-center justify-center gap-3 text-secondary-100 p-2 bg-secondary-300 border-2 border-secondary-300 rounded-md">
          <MapPin weight="fill" size={20} className="text-secondary-200" />
          15 - ZS
        </span>

        <Link
          href={'/checkout'}
          className="p-2 relative flex items-center justify-center text-primary-100 bg-primary-300 border-2 border-primary-300 rounded-md"
        >
          {totalPrice ? (
            <span className="absolute -top-3 -right-3 flex items-center justify-center h-6 w-6 bg-primary-200 rounded-full text-md text-white font-bold">
              {totalPrice}
            </span>
          ) : null}
          <ShoppingCart size={24} weight="fill" />
        </Link>
      </div>
    </header>
  )
}
