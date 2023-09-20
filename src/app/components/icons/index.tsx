import Check from './check'
import ChevronLeft from './chevron-left'
import ChevronRight from './chevron-right'
import Heart from './heart'
import Sync from './sync'
import Truck from './truck'

type IconType = React.FC

const icons: Record<string, IconType> = {
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  Sync,
  Truck
}

export default icons
