import React from 'react'
import ReactLoading from 'react-loading';
const Loading = () => {
  return (
    <div className='container' style={{ position:"absolute", top:"37vh", left:"45vw"}}>
                <ReactLoading type={"spin"} color={"green"} height={'10%'} width={'10%'} />
    </div>
  )
}
export default Loading