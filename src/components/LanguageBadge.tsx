interface LanguageBadgeProps {
    iconSrc: string;
    name: string;
    proficiency: string;
    rate: number;
}

function LanguageBadge(props: LanguageBadgeProps) {
    return (
        <div className="flex flex-row justify-between items-center gap-x-2 mb-2">
          <div className="flex-none"><img src={props.iconSrc} className="w-6 h-6 rounded-full object-cover" alt="Flag" /></div>
          <div className="grow">
            <p className="text-medium font-bold">{props.name}</p>
            <p className="text-xs tracking-tight">{props.proficiency}</p>
          </div>
          <div className="flex-none justify-self-start">
            <ul className="flex flex-row">
              {
                  Array.from(Array(props.rate).keys()).map(_ => (
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="mr-1 w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                        </svg>
                    </li>
                  ))
              }
              {
                  Array.from(Array(5 - props.rate).keys()).map(_ => (
                    <li>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="mr-1 w-4 text-sky-900" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                        </svg>
                    </li>
                  ))
              }
            </ul>
          </div>
        </div>
    );
}

export default LanguageBadge;
