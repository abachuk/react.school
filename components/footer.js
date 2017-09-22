import Link from 'next/link'
import styled from 'styled-components'

const FootNote = styled.div`
  line-height: 110px;
  background-color: #212a3d;
  color: #506179;
  text-align: center;
`

const FooterContent = styled.div`
height: 728px;
  position: relative;
  background: #212a3d;
  background: url(/static/ny-skyline.svg),-moz-linear-gradient(-30deg,#212a3d 0,#212a3d 40%,#1c89ff 100%);
  background: url(/static/ny-skyline.svg),-webkit-linear-gradient(-30deg,#212a3d 0,#212a3d 40%,#1c89ff 100%);
  background: url(/static/ny-skyline.svg),linear-gradient(120deg,#212a3d 0,#212a3d 40%,#1c89ff 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#212a3d', endColorstr='#1c89ff', GradientType=1 );
  text-align: center;
  padding: 130px 0;
  background-repeat: no-repeat;
  background-position: bottom;
`

export default props =>
  <footer>
    <FooterContent>

    </FooterContent>
    <FootNote>&copy; ECMAStack, 2017. All rights reserved</FootNote>
  </footer>
