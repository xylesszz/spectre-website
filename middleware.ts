import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Bloqueia acesso a arquivos sensíveis do sistema e versionamento
const BLOCKED_PATHS = /^\/(\.env|\.git|\.next|node_modules|server\.ts|package\.json)/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Bloqueio de Path Traversal e Arquivos Sensíveis
  if (BLOCKED_PATHS.test(pathname)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // 2. Proteção contra Host Header Injection (Básico)
  const host = request.headers.get("host");
  const allowedHosts = ["spectre.app", "localhost:3000", ".vercel.app"];
  
  if (host && !allowedHosts.some(allowed => host.endsWith(allowed))) {
    return new NextResponse("Invalid Host", { status: 400 });
  }

  const response = NextResponse.next();

  // 3. Previne vazamento de informações em headers de resposta
  response.headers.delete("x-powered-by");
  
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};