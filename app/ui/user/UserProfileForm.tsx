'use client';

import { useActionState } from 'react';
import { updateUserAction, State } from '@/app/lib/actions';

export function UserProfileForm({ user }: { user: any }) {
  const initialState: State = { success: undefined, error: null };
  const [state, formAction, isPending] = useActionState(updateUserAction, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="client_id" value={user.client_id} />
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
        <input 
          name="name"
          type="text" 
          defaultValue={user.name} 
          aria-describedby="name-error"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-rose-500 focus:ring-rose-500 focus:outline-none" 
        />
        {state?.errors?.name && (
          <div id="name-error" aria-live="polite" className="mt-2 text-sm text-red-500">
            {state.errors.name.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          name="email"
          defaultValue={user.email} 
          readOnly
          className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-500 cursor-not-allowed" 
          title="El email se gestiona a través de la cuenta principal"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Teléfono</label>
        <input 
          name="phone"
          type="tel" 
          defaultValue={user.phone || ''} 
          aria-describedby="phone-error"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-rose-500 focus:ring-rose-500 focus:outline-none" 
        />
        {state?.errors?.phone && (
          <div id="phone-error" aria-live="polite" className="mt-2 text-sm text-red-500">
            {state.errors.phone.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
            <p className="text-xs text-gray-500 mt-1">Ejemplo válido: +54 9 11 1234 5678</p>
          </div>
        )}
      </div>
      
      {state?.message && <p className="text-red-500 text-sm font-medium">{state.message}</p>}
      {state?.error && !state?.message && <p className="text-red-500 text-sm font-medium">{state.error}</p>}
      {state?.success && <p className="text-green-600 text-sm font-medium">Cambios guardados correctamente.</p>}
      
      <div className="pt-4 border-t border-gray-100">
        <button 
          type="submit" 
          disabled={isPending} 
          className="w-full bg-rose-600 text-white rounded-lg py-2.5 text-sm font-medium hover:bg-rose-700 transition-colors disabled:opacity-50"
        >
          {isPending ? 'Guardando...' : 'Guardar Cambios'}
        </button>
      </div>
    </form>
  );
}