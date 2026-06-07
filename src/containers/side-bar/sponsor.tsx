import { FaHeart } from 'react-icons/fa'
//
import SideBarExternalLink from '@/components/side-bar-external-link'

const SPONSOR_URL = 'https://github.com/sponsors/Wiazeph'

const SponsorComponent = () => {
  return (
    <div className="Sponsor">
      <div className="Side-Bar-Title">Support</div>

      <SideBarExternalLink
        href={SPONSOR_URL}
        icon={<FaHeart />}
        iconClassName="text-base"
        label="Sponsor"
        meta="GitHub"
        className="text-[#5fd37f]"
      />
    </div>
  )
}

export default SponsorComponent
