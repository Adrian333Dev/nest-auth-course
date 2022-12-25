export interface ActiveUserData {
  /**
   * the "subject" of the token. The value of this property is the user ID
   * that granted this user.
   */
  sub: number;

  /**
   * The subject's (user) email address
   */
  email: string;
}
