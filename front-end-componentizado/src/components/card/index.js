import React from 'react'
import * as S from './styled'

const Card = (props) => {

  const { name, img, level } = props

  const showDigimonInfo = () => {
    return name
  }

  return (
    <S.WrapperCard>
      <img src={img} alt={name}/>
      <S.WrapperDigimonInfo>
        <S.LabelInfo>Nome:</S.LabelInfo>
        <S.NameDigimon>{name}</S.NameDigimon>
        <S.LabelInfo>Level:</S.LabelInfo>
        <S.LevelDigimon>{level}</S.LevelDigimon>
        <br />
      </S.WrapperDigimonInfo>
    </S.WrapperCard>
  )
}

export default Card