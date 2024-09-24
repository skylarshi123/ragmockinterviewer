import { SignIn } from '@clerk/nextjs'
//the reason we need ...index because we want catch all, if we do stuff and it becomes /signin/something, we want to catch all that stuff
export default function Page() {
  return <SignIn />
}