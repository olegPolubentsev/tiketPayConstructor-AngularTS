export interface ButtonHouse{
  type: string
  numObj: string,
  name: string,
  occupied: boolean,
  comfort: string,
  numberPlaces: string,
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


export interface SelectField {
  value: string;
  viewValue: string;
}

export interface FbAddResponse{
  name: string
}
