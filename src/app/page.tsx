import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "./lib/prisma";
import { Button } from "@/components/ui/button";
import AddStarButton from "@/components/AddStarButton";

export default async function Home() {
  const estrelas = await prisma.estrelas.findMany();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        Catálogo Estelar
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {estrelas.map((estrela) => (
          <Card key={estrela.id}>
            <CardHeader>
              <CardTitle>
                {estrela.nome}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p>
                Distância:
                {" "}
                {estrela.distancia_ly}
                {" "}
                anos-luz
              </p>

              <p>
                Magnitude:
                {" "}
                {estrela.magnitude}
              </p>
              <div className="mt-4">
               
               
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-muted-foreground">
          Adicionar estrelas ao catálogo usando o Prisma Client no backend.
        </p>
        <AddStarButton />
      </div>
    </main>
  );
}