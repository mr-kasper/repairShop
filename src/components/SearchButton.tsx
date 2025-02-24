'use client';

import { useFormStatus } from 'react-dom';
import { LoaderCircle } from 'lucide-react';
import { Button } from './ui/button';

export default function SearchButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-20">
      {pending ? <LoaderCircle className="animate-spin" /> : 'Search'}
    </Button>
  );
}
