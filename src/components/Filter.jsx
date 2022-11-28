

export const  Filter = ({onChange, value }) => {
  return(
    <label > Search
        <input type="text" value={value} onChange={onChange}/>
    </label>
  )
    
} 