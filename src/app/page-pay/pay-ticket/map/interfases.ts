export interface ButtonHouse{
  type?: string
  id: number,
  name: string,
  occupied: boolean,
  comfort: number,
  numberPlaces: number,
  size?: {
    width?: string;
    height?: string;
  }
  position: {
    top: string,
    left: string,
    rotation: string
  }
  style: {
    background?: string
    display?: boolean
    change?: boolean
  },

  //text
  text?: string,
  color?: string,
  fontSize?: string

  //object
  img?: void


}
export interface SelectField {
  value: string;
  viewValue: string;
}

export interface FbAddResponse{
  name: string
}
