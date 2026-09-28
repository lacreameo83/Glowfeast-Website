// import image from '../../assets/cakesimage/cakeslicejuice.jpg'


function SpecialtiesCards({heading, description,image}: {heading?: string, description?: string, image?: string}) {
  return (

    <div className="w-full h-full shadow-lg flex items-center justify-center bg-white rounded-[19px]">
          
          <div className="w-[90%] h-[90%]   rounded-[19px] -light-green" >
               <div  className="h-[70%] w-full bg-cover bg-center rounded-[19px]  " style={{ backgroundImage: image ? `url('${image}')` : undefined }}></div>
               <div className="  flex flex-col  justify-end h-[30%]">
                <p className="text-dark-green font-bold text-[12px] md:text-[16px]">{heading}</p>
                <p className="text-dark-green leading-tight font-medium break-words text-[7px] md:text-[10px]">{description}</p>
               </div>
          </div>




    </div>
    
  );
}


export default SpecialtiesCards;