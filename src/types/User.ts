export type User = {
  id: string
  email: string
}

export type UserLogin = {
  email: string
  password: string
}

export type UserPayload = {
  id: string
  firstName?: string
  lastName?: string
  email: string
}
