import './input.css';

export function FieldsetInput({ fieldname='', placeholder='' }) {
    return (
        <div className='input-container'>
            {fieldname && <span className='fieldname'>{fieldname}</span>}
            <input className='input' placeholder={placeholder}/>
        </div>
    )
}

export function Input ({ placeholder='' }) {
    return (
        <div className='bare-input-container'>
            <input className='bare input' placeholder={placeholder}/>
        </div>
    )
}