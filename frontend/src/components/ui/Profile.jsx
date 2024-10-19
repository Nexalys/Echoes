export function Banner(props) {
    const { src } = props;

    return (
        <div>
            <img src={src} />
        </div>
    );
}

export function SampleAvatar( props ) {
    const src = '/public/Pin page image.jpg';

    return (
        <Avatar {...props} src={src}/>
    );
}

export function Avatar( props ) {
    return (
        <div className={`${props.className} overflow-hidden shadow-main min-w-0 aspect-square`}>
            <img alt={props.alt || 'pfp'} src={props.src} className='h-full w-full object-cover'/>
        </div>
    );
}