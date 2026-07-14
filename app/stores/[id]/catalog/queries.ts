import { auth } from '@clerk/nextjs/server';
import { Product, CatalogResponse } from '@/app/lib/definitions';

async function realFetchCatalog(storeId: string, token: string | null) {
  return await fetch(`${process.env.SELLER_APP_URL}/api/stores/${storeId}/catalog`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json',
      },
    });
}

export async function fetchCatalog(storeId: string): Promise<CatalogResponse> {
  const { getToken } = await auth();
  const token = await getToken();

  if (!token) throw new Error('No estás autenticado');

  try {
    const response = await realFetchCatalog(storeId, token);

    if (!response.ok) throw new Error(`Error al obtener catálogo: ${response.status}`);
    
    const data: CatalogResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching catalog:', error);
    return { store_name: '', store_image_url: '', products: [] } as CatalogResponse;
  }
}
