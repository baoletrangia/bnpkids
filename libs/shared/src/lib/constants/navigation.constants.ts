import { ionPricetagOutline, ionSpeedometerOutline } from "@ng-icons/ionicons";
import { NavigationItem } from "../models/navigation.interface";

export const NAV_ITEMS: NavigationItem[] = [
  {
    title: 'Dashboard',
    link: '/admin',
    icon: ionSpeedometerOutline
  },
  {
    title: 'Products',
    link: '/admin/products',
    icon: ionPricetagOutline
  }
]