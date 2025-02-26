import Form from 'next/form';
import { Input } from '@/components/ui/input';
import SearchButton from '@/components/SearchButton';

export default function CustomerSearch() {
  return (
    <Form action="/customers" className="flex items-center gap-2">
      <Input
        type="text"
        name="searchText"
        placeholder="Search Customers..."
        className="w-full"
        autoFocus
      />
      <SearchButton />
    </Form>
  );
}
