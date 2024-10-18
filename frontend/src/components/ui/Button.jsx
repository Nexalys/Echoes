export function Button(props) {
    const { type, children, className } = props;

    let style = '';

    switch(type) {
        case 'primary':
            style = 'bg-primary text-background hover:bg-accent shadow-sub hover:text-white';
            break;
        case 'ghost':
            style = 'hover:bg-accent hover:shadow-sub hover:text-white';
            break;
        case 'error':
            style = 'text-red-500 border-[0.5px] border-red-500 hover:bg-red-500 hover:text-white';
            break;
        case 'outline':
            style = 'text-accent border-[0.5px] border-accent bg-background hover:bg-accent hover:text-white';
            break;
        default:
            style = `text-accent bg-background hover:bg-accent shadow-sub hover:text-white`;
            break;
    }

    console.log(style + className);

    return (
        <button {...props} className={style + ' px-5 py-3 rounded-full reg-transition ' + className}>
            {children}
        </button>
    );
}