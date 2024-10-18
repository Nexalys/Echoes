import './button.css'; 

export function NewButton() {
    return (
        <button className='new-button'>
            <span>+</span>
        </button>
    )
}

export  function BigButton2({text = "Button"}){
    return (
      <div className='big-button-container'>
        <button>{text}</button>
      </div>
    )
  }
  
  
  export  function SmallButton2({text = "Button"}){
    return (
      <div className='small-button-container'>
        <button>{text}</button>
      </div>
    )
  }
  
  