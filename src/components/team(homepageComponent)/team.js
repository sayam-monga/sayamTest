import stl from './styles/team.module.css'
import img from './styles/img_5893(1)1.png'

const Team = () =>
{
    return (
    <div className={stl.parent}>
        <span className={stl.sectionHeading}>TEAM</span>
        <img src={img} className={stl.image}></img>
    </div>
    )
}

export default Team