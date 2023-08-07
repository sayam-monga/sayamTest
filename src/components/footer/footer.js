import stl from './styles/footer.module.css'
import logo from './styles/embeddedimage1.png'

const Footer = () =>
{
    return (
        <div className={stl.parent}>
        <div className={stl.strip}>
         <img src={logo} className={stl.logoimg}></img>
         <span className={stl.footerText}>INSTAGRAM · TWITTER · EMAIL · LINKEDIN</span>
        </div>
         <div className={stl.footerBuffer} />
        </div>
    )
}

export default Footer