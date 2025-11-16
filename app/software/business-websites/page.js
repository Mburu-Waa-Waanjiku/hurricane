import WebDesign from '../../../components/WebDesign';
import { softwareMetadata } from '../../../data/softwareMetadata'

export const metadata = softwareMetadata.businessWebsites

export default function Home() {
  return (
    <div className="flex flex-col p-0 relative">
      <WebDesign/>
    </div>
  );
}