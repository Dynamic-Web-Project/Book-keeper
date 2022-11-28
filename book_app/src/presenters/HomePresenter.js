import React, { useEffect, useState } from 'react';
import { db } from "../firebase";
import { HomePanel } from '../views/HomePanelView';
import { HomeForm } from '../views/HomeFormView';
import { HomeList } from '../views/HomeListView';
import { collection, addDoc } from "firebase/firestore";

export default function HomePresenter() {
    const [date, setDate] = useState();
    const [type, setType] = useState('income');
    const [desc, setDesc] = useState('');
    const [number, setNumber] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (type === '') { return; }

        const docRef = await addDoc(collection(db, "records"), {
            date: date,
            type: type,
            desc: desc,
            number: number
        });
    }

    return (
        <div>
            <HomePanel

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

            />
        </div>
    )
}