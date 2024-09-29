import ButtonThing from './chatbot'
import {auth} from '@clerk/nextjs/server'
export default async function ChatBot(){
    const {userId} = auth()
    return (
        <div>
            <h1>{userId}</h1>
          <ButtonThing />  
        </div>
    )
}