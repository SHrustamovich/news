import { data, shortTitle } from "./data";

const LocalNews = ({data1}) => {
    return (
        <div>
            <div className='cards'>
                {data.map((item) => (
                    <div key={item.id} className='card'>
                        <div className='img'>
                            <img
                                src={item.img}
                                alt={item.title}
                                width={376}
                                height={376}
                            />
                        </div>
                        <h1>{item.title}</h1>
                        <p>{shortTitle(item.body)}</p>
                    </div>
                ))}
            </div>
            <div>
                <h1>{data1.username}</h1>
            </div>
        </div>
    );
};
export default LocalNews;
