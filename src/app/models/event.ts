export class Event {

    constructor(
      public name: string,
      public org_name: string,
      public date: string,
      public location: string,
      public location_enforce: boolean,
      public location_radius: boolean,
      public location_lat: String,
      public location_lng: String,
      public location_address: String,
      public attendance_toggle: boolean,
      public point_categories?: any,
      public additional_fields?: any
    ) {  }
  
  }
