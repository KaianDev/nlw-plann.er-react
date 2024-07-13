export interface Activities {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export interface Trip {
  id: string
  destination: string
  starts_at: Date
  ends_at: Date
  emails_to_invite: string[]
  owner_name: string
  owner_email: string
}
