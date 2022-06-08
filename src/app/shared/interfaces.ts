export interface Block{
  title: string
  info: string
  id?: number
  link: string
}

export interface Message{
  firstName?: string,
  lastName?: string,
  email?: string,
  tell?: string,
  message?: string,
  flNoTelMe?: boolean,
  flTelegram?: boolean,
  flViber?: boolean,
  flEmail?: boolean
}

export interface User{
  email: string,
  password: string
  returnSecureToken: boolean
}

export interface FbAuthResponse{
  idToken: string
}
