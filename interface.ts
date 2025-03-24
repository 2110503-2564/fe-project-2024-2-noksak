interface VenueItem {
  _id: string,
  name: string,
  address: string,
  district: string,
  province: string,
  postalcode: string,
  tel: string,
  picture: string,
  dailyrate: number,
  __v: number,
  id: string
}

interface VenueJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: VenueItem[]
}

interface BookingItem {
  nameLastname: string;
  tel: string;
  venue: string;
  bookDate: string;
}

export interface RestaurantItem{
  _id:string,
  name:string,
  address:string,
  tel:string,
  office_hours:{
      open:string,
      close:string,
      tz:string
  }
}

export interface RestaurantJson{
  success:boolean,
  count:number,
  data:RestaurantItem[]
}

export interface ReservationsJson{
  success:boolean,
  count:number,
  data:ReservationItem[]
}

export interface ReservationJson{
  success:boolean,
  data:ReservationItem[]
}

export interface ReservationItem{
  _id:string,
  apptDate:string,
  user:string,
  restaurant:RestaurantItem
}