import {getCitiesOfUkraine} from "../../data/CitiesOfUkraine.js";
import {useEffect, useState} from "react";
import {SelectPicker} from "rsuite";
import PropTypes from "prop-types";

const SearchUkraineCities = ({onClick}) => {
    const [data, setData] = useState([]);
    const [city, setCity] = useState('')

    useEffect(() => {
        const getData = async () => {
            const dataResp = await getCitiesOfUkraine;
            const data = dataResp.map((item) => (

                {
                    label: item.city,
                    value: item.city,
                }
            ))
            setData(data);
        }
        getData();
    }, [])

    const handleChange = (value) => {
        setCity(value);
        onClick(value);
    }

    return (
        <SelectPicker
            data={data}
            value={city}
            onChange={handleChange}
            block
        />
    )

}

SearchUkraineCities.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default SearchUkraineCities;