import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(){
    await prisma.estrelas.create({
        data: {
            nome: "Sirius",
            distancia_ly: 8.6,
            magnitude: -1.46,
        }
    });


return NextResponse.json({ message: "Estrela criada!" });
}

