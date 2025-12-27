import { connectDB } from '../../../../lib/db'
import Order from '../../../../models/order'
import { NextResponse } from "next/server"

export async function PUT(req) {
  try {
    const { orderId, status, deliveryPartner } = await req.json()
    await connectDB()

    const update = { status }
    if (deliveryPartner) update.deliveryPartner = deliveryPartner

    const order = await Order.findByIdAndUpdate(orderId, update, { new: true })
    if (!order) return NextResponse.json({ success: false }, { status: 404 })

    return NextResponse.json({ success: true, order })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}