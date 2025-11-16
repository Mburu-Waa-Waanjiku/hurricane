import MarketingProductPage from '../../../components/MarketingProductPage'
import {marketingProducts} from '../../../data/marketingProducts'
import { generateMarketingMetadata } from '../../../utils/generateMarketingMetadata'

const productIndex = 4 // Marketing Training

export async function generateMetadata() {
  return generateMarketingMetadata(marketingProducts[productIndex])
}
function page() {
  return (
    <div>
      <MarketingProductPage product={marketingProducts[4]}/>
    </div>
  )
}

export default page