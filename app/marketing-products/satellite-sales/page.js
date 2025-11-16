import MarketingProductPage from '../../../components/MarketingProductPage'
import {marketingProducts} from '../../../data/marketingProducts'
import { generateMarketingMetadata } from '../../../utils/generateMarketingMetadata'

const productIndex = 5 // Marketing Training

export async function generateMetadata() {
  return generateMarketingMetadata(marketingProducts[productIndex])
}

function page() {
  return (
    <div>
      <MarketingProductPage product={marketingProducts[5]}/>
    </div>
  )
}

export default page