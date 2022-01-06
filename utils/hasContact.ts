export function hasContact(user:User) {
  return !!(user.whatsappNumber && user.instagramUsername);
}
