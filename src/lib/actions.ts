'use server';

export interface FormState {
  message: string;
  length: number | null;
  name?: string;
}

export async function calculateLength(prevState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string;
  if (!name) {
    return { message: '', length: null, name: '' };
  }

  const length = name.trim().length;
  return { 
    message: `Your name has ${length} characters`, 
    length,
    name 
  };
} 