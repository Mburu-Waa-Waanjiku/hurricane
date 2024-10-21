import ClientContainer from '../components/ClientContainer';

export const metadata = {
  title: 'Professional Web Designers, Mobile App Developers, Online Marketing Experts & SaaS Providers in Nairobi, Kenya',
  description: 'At Hurricane Teck, we specialize in creating custom websites, developing native mobile apps, and providing innovative SaaS products. As a leading web design and online marketing agency in Nairobi, Kenya, we help businesses grow with responsive web solutions, effective digital marketing strategies, and powerful software tools designed to enhance performance and drive success. Partner with us to elevate your online presence and achieve your business goals.',
  icons: {
    icon: '/h.png',
  },
  googleSiteVerification: 'ehyifMyuzZjrrJmMdqaTCAsoDerpHiSeejh92XkAQPI',
};

export default function Home() {
  return (
    <div className="h-screen flex flex-col p-0">
      <ClientContainer/>
    </div>
  );
}