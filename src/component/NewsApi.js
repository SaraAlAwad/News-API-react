import React, { useState, useEffect } from "react"

const NewsApi = () => {

    console.log('Effect did render')

    const [newType, setNewType] = useState('articles')

    const [jsonArr, setJsonArr] = useState([])

    // const[lang, setNewLang] = useState('de')


    useEffect(() => {

        fetch(`https://newsapi.org/v2/everything?q=${newType}&language=en&apiKey=33957bdcbea740f8ab8092438e8b380e`)
            .then(response => response.json())
            .then(json => {
                {
                    console.log(json.articles)
                    setJsonArr(json.articles)
                }
            })
    }, [newType])



    return (
        <>
            <section>
                <button onClick={() => setNewType('ukraine')}>Ukraine</button>
                <button onClick={() => setNewType('business')}>Business</button>
                <button onClick={() => setNewType('lifestyle')}>Lifestyle</button>
                <button onClick={() => setNewType('bitcoin')}>Bitcoin</button>
                <button onClick={() => setNewType('economy')}>Economy</button>
                <button onClick={() => setNewType('health')}>Health</button>
                <button onClick={() => setNewType('coronavirus')}>coronavirus</button>
            </section>


            {jsonArr.map((items) => {
                return (
                    <article>
                        <div className="image">
                            <img src={items.urlToImage} alt="url" />
                        </div>
                        <div className="content">
                            <p className="title">{items.title}</p>
                            <p className="text">{items.content}</p>
                            <p className="date">{items.publishedAt}</p>
                            <a href={items.url}>Read more</a></div>
                    </article>
                )
            })}

        </>
    )
}

export default NewsApi
