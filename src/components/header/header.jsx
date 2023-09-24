import { Section, Nav, Logo, Img, HeaderItems, HeaderItem1, HeaderItem2, Catalog } from "./header"
import { Container } from "../../Container"
import { useState,useEffect } from "react"

import header1 from "../../assets/svg/logo-header.svg"
import header2 from "../../assets/svg/phone-header.svg"
import header3 from "../../assets/svg/phone-vector-header.svg"
import header4 from "../../assets/svg/heart-header.svg"
import header5 from "../../assets/svg/bin-header.svg"
import header6 from "../../assets/svg/phone-vector2-header.svg"

function Header() {

      const[logo,setLogo]= useState(header3)

    return (
        <Section>
            <Container>
                <Nav>
                    <Logo src={header1} hrf="error" />
                    <HeaderItems>
                        <HeaderItem1 onClick={()=>{
                            setLogo(header6)
                        }}>
                            <Logo src={header2} hrf="error" />
                            <Catalog > Выбрать модель телефона <Img src={logo} hrf="error" /> </Catalog>
                        </HeaderItem1> 
                        <HeaderItem2>
                            <Logo src={header4} hrf="error" />
                            <Logo src={header5} hrf="error" />
                        </HeaderItem2>
                    </HeaderItems>
                </Nav>
            </Container>


        </Section>
    )
}

export default Header