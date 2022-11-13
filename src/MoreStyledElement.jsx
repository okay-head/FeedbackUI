function MoreStyledElement(props) {
   return (
      // conditional class
      <div className={`more ${props.light && 'light'}`}>
         <div className="text">{props.children}</div>
      </div>
   )
}

export default MoreStyledElement