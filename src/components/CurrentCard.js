export default function CurrentCard(props) {
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-full md:w-11/12 md:m-auto p-4 text-center justify-center bg-dark-200 rounded-md flex flex-col h-104 md:h-80 lg:h-96 tracking-wide md:tracking-normal">
            <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img>
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <h4 className="font-medium md:text-base">{props.subtitle}</h4>
                <p className="font-light md:text-lg">{props.content}</p>
            </div>
        </div>
    )
}
