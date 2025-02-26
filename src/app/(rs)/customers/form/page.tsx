import { getCustomer } from '@/lib/queries/getCustomer';
import BackButton from '@/components/BackButton';
import * as Sentry from '@sentry/nextjs';
import CustomerForm from './CustomerForm';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { customerId } = await searchParams;

  if (!customerId) {
    return {
      title: 'New Customer',
    };
  }

  return {
    title: `Edit Customer #${customerId}`,
  };
}

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { getPermission } = getKindeServerSession();
    const managerPermission = await getPermission('manager');
    const isManager = managerPermission?.isGranted;

    const { customerId } = await searchParams;

    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      // put customer in form
      return <CustomerForm key={customerId} isManager={isManager} customer={customer} />;
    } else {
      // new customer in form
      return <CustomerForm key="new" isManager={isManager} />;
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
}
