export interface ButtonHouse{
  type: string
  numObj: number,
  name: string,
  occupied: boolean,
  comfort: number,
  numberPlaces: number,
  size: {
    width: string;
    height: string;
  }
  position: {
    top: string,
    left: string,
    rotation: string
  }
  style: {
    background: string
    display: boolean
    change: boolean
  },

  //text
  text: string,
  color: string,
  fontSize: string

  //object
  img: string
}
export interface ButtonHouseTemplate{

  id: number,
  occupied: boolean,
  comfort: number,
  numberPlaces: number,
  position: {
    top: string,
    left: string,
    rotation: string
  }
  style: {
    background: string
    display: boolean
    change: boolean
  }
}

export interface SelectField {
  value: string;
  viewValue: string;
}

export interface FbAddResponse{
  name: string
}
