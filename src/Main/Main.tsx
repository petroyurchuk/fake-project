import './Main.css'
import articles from '../data/articles.json'
function Main() {
    return (
        <div className="main">
            {articles.map((item) => (
                <section className="main__article">
                    <h2 className="main__title">{item.title}</h2>
                    <div className="main__body">{item.body}</div>
                </section>
            ))}
        </div>
    )
}
export default Main
