import { useEffect, useState } from "react";
import {collection, getDocs, limit, orderBy, query} from "firebase/firestore"
import {db} from '../firebase/config'
import "./RankingsPage.css"
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
        <table className="rankings-container">
            <tr>
                <th scope="col">Position</th>
                <th scope="col">Name</th>
                <th scope="col">Time(s)</th>
            </tr>
            {playersList.map((player, index) => {
                return(
                    <tr className="rankings-container__players-info" key={index}>
                        <td>{index+1}</td>
                        <td>{player.name}</td>
                        <td>{player.time}</td>
                    </tr>
                )
            })}
        </table>
    )
}