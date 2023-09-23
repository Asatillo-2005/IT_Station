import { Section , Header1 , Logo , HeaderItems } from "./header"

import header1 from "../../assets/svg/logo-header.svg"

function Header(){
    return(
      <Section>
        <div className="contaier">
            <Header1>
                <Logo src={header1} hrf="error" />
                <HeaderItems>
                    {/* <HeaderItem1></HeaderItem1> 
                    <HeaderItem2></HeaderItem2> */}
                </HeaderItems>
            </Header1>
        </div>
      </Section>
    )
}

export default Header