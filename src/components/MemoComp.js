import React from 'react'

function MemoComp({name}) {
  console.log("==================redering Memo Component =========================")
    return (
    <div>{name}</div>
  )
}

export default React.memo( MemoComp)