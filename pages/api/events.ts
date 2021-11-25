import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../lib/prisma';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const event = await prisma.event.findMany();

    res.status(200).json(event);
}