import React from 'react';
import {PagesType} from "../../data/data.state";
import {useLocation, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    pages: PagesType[]
}


export const Page: React.FC<PropsType> = ({pages}) => {

    const params = useParams()
    console.log(params.id)

    const location = useLocation()
    console.log(location)

    return (
        <div>
            {location.pathname === '/page/0'  && <div>SECRET TEXT</div>}
            {pages[Number(params.id)]
                ? <div>
                    {pages[Number(params.id)].heading},
                    {pages[Number(params.id)].about}

                </div>
                : <Error404/>
            }
        </div>
    );
};

