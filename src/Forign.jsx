import { forignData, shortTitle } from "./data";

const ForignNews = () => {
    return (
        <div className='cards'>
            {forignData.map((item) => (
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
    );
};
export default ForignNews;
