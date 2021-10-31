const link = 'https://unsplash.com/photos/fIoQ-aRycys/download?force=true&w=640'

import Image from 'next/image'
import { ListItem } from './ListItem'

export function HomeScreen(){
const data = [... new Array(20)]
    return <div>
{data.map((key)=><ListItem key={key}/>)}
    </div>
}