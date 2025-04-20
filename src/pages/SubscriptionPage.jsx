import FooterSection from "../components/FooterSection"
import Nav from "../components/NavBar/Nav"
import Plans from "../components/Plans"
import { PlansTable } from "../components/PlansTable"

const SubscriptionPage = () => {
  return (
    <div className='bg-[#1E1E1E] min-h-screen pt-40  flex flex-col'>
      <Plans />
      <PlansTable />
      <FooterSection />
    </div>
  )
}

export default SubscriptionPage