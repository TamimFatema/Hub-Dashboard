import SellerDetails from "@/components/SellerCenters/SellerDetails";

const Page = ({ params }) => {
  const details = parseInt(params.details);
  
  return <SellerDetails details={details} />;
};

export default Page;
