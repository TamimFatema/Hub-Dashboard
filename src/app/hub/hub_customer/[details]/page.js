import React from 'react';

import CustomerDetails from '@/components/Customers/CustomerDetails';

const Page = ({ params }) => {
  const details = parseInt(params.details);
  
  return <CustomerDetails details={details} />;
};

export default Page;
