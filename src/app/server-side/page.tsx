'use client';

import React, { useActionState } from 'react';
import Link from "next/link";
import { calculateLength } from '@/lib/actions';

function ServerForm() {
  const [state, formAction] = useActionState(calculateLength, {
    message: '',
    length: null,
    name: ''
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-center break-words max-w-[90%]">
        Hello {state.name?.trim() ? state.name : 'World'}
      </h1>
      <div className="mt-4 flex flex-col items-center gap-4">
        <form action={formAction} className="flex flex-col items-center gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="rounded px-4 py-2 text-black text-center"
          />
          <button
            type="submit"
            className="rounded bg-white px-4 py-2 text-black hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </form>
      </div>
      {state.message && (
        <div className="mt-8">
          <p className="text-4xl font-bold">{state.message}</p>
        </div>
      )}
    </div>
  );
}

export default function ServerSidePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="absolute top-8 text-3xl font-bold">Server Side Form</div>
      <ServerForm />
      <div className="fixed bottom-8">
        <Link 
          href="/" 
          className="text-white hover:text-gray-300 underline transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
} 