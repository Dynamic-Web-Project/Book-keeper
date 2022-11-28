import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { HomePanel } from '../views/HomePanelView';
import { HomeForm } from '../views/HomeFormView';
import { HomeList } from '../views/HomeListView';

export default function HomePresenter() {
    const [user, setUser] = useState({});
    const [date, setDate] = useState();
    const [type, setType] = useState('income');
    const [desc, setDesc] = useState('');
    const [number, setNumber] = useState();

    async function logout() {
        await signOut(auth);
    }
    onAuthStateChanged(auth, (user) => {
        setUser(user);
    })

    return (
        <div>
            <HomePanel
                user={user}
                logout={logout}
            />
            <hr />
            <HomeForm
                date={date}
                setDate={setDate}

                type={type}
                setType={setType}

                desc={desc}
                setDesc={setDesc}

                number={number}
                setNumber={setNumber}
            />
            <HomeList
                user={user}
                logout={logout}
            />
        </div>
    )
}