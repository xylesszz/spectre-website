"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log estruturado no console do servidor/navegador, sem expor ao usuário
    console.error("[SPECTRE SECURITY ERROR]", error.message);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text-primary px-4">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-white">Erro Inesperado</h2>
        <p className="text-text-secondary mb-8">
          Ocorreu um problema ao carregar este recurso. Nossa equipe foi notificada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" onClick={reset}>
            Tentar Novamente
          </Button>
          <Link href="/">
            <Button variant="secondary" icon={<Home size={16} />}>
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}