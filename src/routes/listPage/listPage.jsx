import './listPage.scss'
import {listData} from "../../lib/dummyData.js";
import Filter from "../../components/filter/filter.jsx";
import Card from "../../components/card/card.jsx";

const ListPage = () => {

    const data = listData

    return (
        <div className={'listPage'}>
            <div className={'listContainer'}>
                <div className={'wrapper'}>
                    <Filter />
                    {
                        data.map(item => (<Card key={item.id} item={item} />))
                    }
                </div>
            </div>
            <div className={'mapContainer'}>map</div>
        </div>
    )
}

export default ListPage