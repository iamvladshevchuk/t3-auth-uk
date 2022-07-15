/**
 * This is a hack from Github discussion.
 * 
 * @see https://github.com/nextauthjs/next-auth/issues/596#issuecomment-943453568
 */
export default function reloadSession() {
  const event = new Event('visibilitychange');
  document.dispatchEvent(event)
}