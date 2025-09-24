import Shop from '../../components/Shop'

export const metadata = { // Cannot export metadata from client component
  title: 'Shop - Marketing & Branding Services | Hurricane Teck',
  description: 'Browse our marketing and branding products including banners, business cards, flyers, packaging, and merchandising.',
};

export default function ShopPage() {

  return (
    <>
      <Shop/>
    </>
  );
}
