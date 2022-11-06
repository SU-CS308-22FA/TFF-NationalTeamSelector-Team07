import React from 'react';
import {useSelector} from 'react-redux'
import ProfileCard from '../components/ProfileCard'

export default function Profile() {
    const {user} = useSelector( (state) => state.auth)
    return (
        <ProfileCard/>
    );
}
