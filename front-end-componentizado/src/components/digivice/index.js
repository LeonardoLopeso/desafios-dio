import React from "react"
import * as S from './styled'


const Digivice = (props) => {
  const { name, img, level } = props

  return (
    <S.WrapperBgDigivice>
      <div>
        Nome: <h1>Metalgarurumon</h1>
        Level: <h2>Super Champion</h2>
      </div>
      <S.DigiviceBg>
        
      </S.DigiviceBg>
    </S.WrapperBgDigivice>
  )
}

export default Digivice