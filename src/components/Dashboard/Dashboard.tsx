import { IMAGE } from '@/assets'
import useMobile from '@/hooks/useMobile'

const Dashboard = () => {
  const isMobile = useMobile()
  const dashboard = isMobile ? IMAGE.dashboardMobile : IMAGE.dashboard
  return (
    <div className='dashboard'>
      <div className='image'>
        <img src={dashboard} alt='dashboard' />
      </div>
    </div>
  )
}

export default Dashboard
