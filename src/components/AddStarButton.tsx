"use client";

import { Button } from "@/components/ui/button";

export default function AddStarButton() {
  return (
      <Button
      onClick={async () => {
        await fetch("/api/estrelas", {
          method: "POST",
        });

        alert("Estrela adicionada!");
      }}
    >
      Adicionar Sirius
    </Button>
  );
}