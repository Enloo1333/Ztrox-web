import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'kankim! çikmaz yol.',
        'dostum! bu sayfa yok.',
        'canım! yanlış yerdesin'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

