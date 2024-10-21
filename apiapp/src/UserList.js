// importation des modules necessaires
import React, { useEffect, useState } from 'react';
import axios  from 'axios'

const UserList = () => {
    // creation d'un etat pour  stocker les donnees recuperer
    const [listOfUser, setListOfUser] = useState([]);

    // utilisation du hooks react pour mettre a jour les donner
    useEffect( () => {

        const axiosData = () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then( res => setListOfUser(res.data) )
            .catch( error => console.log( error) )
                
            }
            axiosData();
        }, [])

    return(
            <div>
            
                    <ul>
                        {/* recuperation des donner par la methode map */}
                        {listOfUser.map((data) => (
                            
                            <li key={data.id}>{data.name}</li>

                        ))}
                        
                    </ul>

            
            </div>
    )

}

// exportation de du composant userlist
export default UserList;