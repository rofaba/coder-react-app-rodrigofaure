import  logo  from "../../assets/img/logo.png";

const Footer = () => {

    const handleClick = ()=>{
        window.open('https://github.com/rofaba/coder-react-app-rodrigofaure', '_blank')
        }

    return ( 
    <div className="bg-slate-600 flex justify-center gap-12 items-center h-16 mt-4">
        <img
              className="w-10 h-10 "
              alt="imagen de logo"
              src={logo}
            ></img>
       <h3 className="text-slate-100 text-base font-semibold" > React Store by rofaba </h3>
       <button className="text-lg font-semibold text-orange-400  hover:underline hover:brightness-200"   onClick={handleClick} > Ir a repositorio del proyecto en Github</button>
     </div>
    );
}
 
export default Footer;