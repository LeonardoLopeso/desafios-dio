import React, { useState } from 'react'
import * as S from './styled'
import { BiSearchAlt } from 'react-icons/bi'

const Header = () => {
    const [nameDigimon, setNameDigimon] = useState();


    return (
        <header>
            <S.Wrapper>
                <h1>Catálogo de Digimons</h1>
                <input 
                    type="text"
                    placeholder='Digite o nome do Digimon...'
                    onChange={(event) => setNameDigimon(event.target.value)}
                />
                <button>
                    <BiSearchAlt className='bisearch' />
                </button>
            </S.Wrapper>
        </header>
    )   
}

export default Header