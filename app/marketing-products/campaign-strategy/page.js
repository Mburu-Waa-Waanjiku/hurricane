import MarketingProductPage from '../../../components/MarketingProductPage'
import {marketingProducts} from '../../../data/marketingProducts'
import { generateMarketingMetadata } from '../../../utils/generateMarketingMetadata'

const productIndex = 1 // Marketing Training

export async function generateMetadata() {
  return generateMarketingMetadata(marketingProducts[productIndex])
}
function page() {
  return (
    <div>
      <MarketingProductPage product={marketingProducts[1]}/>
    </div>
  )
}

export default page