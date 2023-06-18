import { useEffect, useState } from "react";
import {collection, getDocs, limit, orderBy, query} from "firebase/firestore"
import {db} from '../firebase/config'

export default function RankingsPage(){
    const [playersList, setPlayersList] = useState([])
    useEffect(() => {
        async function loadRanking(){
            const playersQuerry = query(collection(db, "Players"), orderBy("time", "asc"), limit(10))
            const playersSnapshot = await getDocs(playersQuerry)
            const playersQuerryResult = playersSnapshot.docs.map(doc => doc.data());
            console.log(playersQuerryResult)
            setPlayersList(playersQuerryResult)
        }
        loadRanking()
    }, [])
    return(
        <div>
            {playersList.map((player, index) => {
                return(
                    <p>{index+1} - {player.name}: {player.time}s</p>
                )
            })}
        </div>
    )
}