import * as S from './styles'

const Main = ({
  title = 'IceBev Next Boilerplate',
  description = 'Typescript, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/reactjs-icon.svg" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/programming.svg"
      alt="Porgramador de frente para algumas telas progamando"
    />
  </S.Wrapper>
)

export default Main
