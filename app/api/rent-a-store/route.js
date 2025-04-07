import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const formData = await request.json();
    console.log(formData);
    
    const {
      shopName,
      categories,
      plan,
      shopLink,
      whatsapp,
      email,
    } = formData;

    // Validate required fields
    // Log the values for debugging
    console.log('Validating fields:', {
      shopName, categories, shopLink, whatsapp, email, plan
    });

    // Convert itemCount to number if it's a string

    if (!shopName?.trim() || !categories?.trim() ||
        !shopLink?.trim() || !whatsapp?.trim() || !email?.trim() || !plan?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required and must not be empty' },
        { status: 400 }
      );
    }

    // console.log({email})
    // //Check for application using thesame email
    // const reserved = await prisma.ReserveSeat.findUnique({
    //   where: { email }
    // })

    // console.log('Reserved Seat', reserved)

    // if(reserved) {
    //   return NextResponse.json(
    //     { message: 'Reservation request already received' },
    //     { status: 201 }
    //   )
    // }

    // Create new reserve seat
    const reserveSeat = await prisma.ReserveSeat.create({
      data: {
        shopName: shopName.trim(),
        categories: categories.trim(),
        shopLink: shopLink.trim(),
        plan: plan?.trim(),
        whatsapp: whatsapp.trim(),
        email: email.trim(),
      }
    });

    return NextResponse.json(
      { message: 'Reserve seat created successfully', data: reserveSeat },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating reserve seat:', error);
    return NextResponse.json(
      { error: 'Failed to create reserve seat' },
      { status: 500 }
    );
  }finally {
    await prisma.$disconnect();
  }
}