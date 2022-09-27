import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Private(props) {
    const navigate = useNavigate();
    const loaction = window.location;

    const { Components } = props;
    var login = localStorage.getItem('login');
    useEffect(() => {
        if (!login) {
            navigate('/Log')
        }
    });
    useEffect(() => {


        console.log(Components);
        console.log(login);
        console.log(loaction.pathname);

        if (login != null && loaction.pathname == `/${Components}`) {
            navigate(`/${Components}`)
        }
    }, [loaction])

    return (
        <>
            {/* {console.log("112")} */}
            <div>
                <Components />
            </div>
        </>
    )
}
