export function SampleAvatar( props ) {
    const src = '/public/Pin page image.jpg';

    return (
        <Avatar {...props} src={src}/>
    );
}

export function Avatar( props ) {
    return (
        <div className={`${props.className} overflow-hidden shadow-main`}>
            <img alt={props.alt || 'pfp'} src={props.src} className='h-full w-full object-cover'/>
        </div>
    );
}