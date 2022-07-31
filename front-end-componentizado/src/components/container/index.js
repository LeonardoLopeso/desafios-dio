import React, { useEffect, useState } from "react"
import Card from "../card"
import api from '../../services/api'
import * as S from './styled'
import Digivice from "../digivice"

const Container = () => {

  const [digimon, setDigimon] = useState([])

  useEffect(() => {
    api.get().then(({ data }) => {
      setDigimon(data)
    })

    // eslint-disable-next-line
  }, [])

  return (
    <S.WrapperContainer>
      <S.SectionCards>
        <Digivice />
        {digimon?.map((data, index) =>  (
          <Card 
            key={index}
            name={data.name} 
            img={data.img} 
            level={data.level} 
          />
        ))}
      </S.SectionCards>
    </S.WrapperContainer>
  )
}

export default Container