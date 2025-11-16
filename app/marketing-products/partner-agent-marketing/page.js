import MarketingProductPage from '../../../components/MarketingProductPage'
import {marketingProducts} from '../../../data/marketingProducts'
import { generateMarketingMetadata } from '../../../utils/generateMarketingMetadata'

const productIndex = 7 // Marketing Training

export async function generateMetadata() {
  return generateMarketingMetadata(marketingProducts[productIndex])
}

function page() {
    console.log(marketingProducts[6])
  return (
    <div>
      <MarketingProductPage product={marketingProducts[7]}/>
    </div>
  )
}

export default page