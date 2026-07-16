import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Wrapper de Rate Limiting (Modo Híbrido)
// Si no están configuradas las variables de entorno de Upstash, permite todas las peticiones.

let rateLimiter: Ratelimit | null = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  rateLimiter = new Ratelimit({
    redis: Redis.fromEnv(),
    // Límite estricto: 5 peticiones por cada ventana de 10 segundos
    limiter: Ratelimit.slidingWindow(5, "10 s"),
    analytics: true,
  });
}

/**
 * Función para verificar el límite de tasa (Rate Limit).
 * @param identifier Identificador único (ej. userId o IP)
 * @returns { success: boolean, message?: string }
 */
export async function checkRateLimit(identifier: string): Promise<{ success: boolean; message?: string }> {
  // Si no hay configuración de Redis (Modo Dummy), dejar pasar
  if (!rateLimiter) {
    console.warn("⚠️ Rate Limiting está deshabilitado. Configura UPSTASH_REDIS_REST_URL para habilitarlo.");
    return { success: true };
  }

  try {
    const { success } = await rateLimiter.limit(identifier);
    if (!success) {
      console.warn(`🛑 Rate limit excedido para: ${identifier}`);
      return {
        success: false,
        message: "Has realizado demasiadas peticiones en poco tiempo. Por favor, espera unos segundos."
      };
    }
    return { success: true };
  } catch (error) {
    // Si Upstash falla por red o configuración, permitimos la petición para no bloquear el negocio
    console.error("Error al conectar con Upstash Redis:", error);
    return { success: true };
  }
}
