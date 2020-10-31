import './Location.css';


export function Location({ city, country, children}) {
    return <div className="location">
                <div className="location__container">
                    <div className="location__city">
                        {city}
                    </div>
                    <div>,</div>
                    <div className="location__country">
                        {country}
                    </div>
                </div>
                {children}
            </div>
}